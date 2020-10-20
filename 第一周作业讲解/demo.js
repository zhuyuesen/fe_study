// 10. 请写出如下输出值，并说明为什么
var s = [];
var arr = s;
for(var i=0; i<3; i++){
    var pusher = {
        value: "item" + i
    },temp;
    if(i !== 2){
        temp = []
        pusher.children = temp
    }
    arr.push(pusher)
    arr = temp;
}
console.log(s[0])
