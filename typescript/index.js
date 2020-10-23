function test(){
    return 
    {
        a: 1
    }
}
var f = test() // f为undefined return换行了， 相当于 return undefined
console.log(f.a)

(function(){alert(1)})() // 1
(function(){alert(2)})() // 报错 因为第一行没有分号。。。