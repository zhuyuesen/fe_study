/**
 * 2.JavaScript语言精髓2
 */

if(!('username' in window)){
    var username = 'test'
}
console.log(username) // undefined

var obj = {
    user: 'tt',
    getNmae: function(){
        return this.user;
    }
}

var getNmaeFn = obj.getNmae

console.log(getNmaeFn()) // undefined
console.log(obj.getNmae()) // tt

var test = 'aaa'
function dosm(){
    console.log(test) // undefined
    var test = 'bbb'
    console.log(test) // 'bbb'
}

dosm()
console.log(test) // aaa



Object.constructor === Function




function fun(n,o){
    console.log(o)
    return {
        fun: function(m){
            return fun(m,n)
        }
    }
}

var a = fun(0);
a.fun(1); a.fun(2);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2); c.fun(3);


function jieCheng(n){
    if(n === 1) return 1
    return n * jieCheng(n-1)
}