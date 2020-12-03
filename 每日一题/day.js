
/**
 * 20-11-10
 * versions 是一个项目的版本号列表，因多人维护，不规则，动手实现版本号处理函数
 */
var versions = ['1.45.0', '1.5', '6', '3.3.3.3']
// 实现排序函数 => ["1.5", "1.45.0", "3.3.3.3", "6"]

function sortVersions(versions){
    return versions.sort((a, b) => {
        let aa = a.split('.')
        let bb = b.split('.')
        let length = aa.length > bb.length ? aa.length : bb.length
        for(var i=0;i<length;i++){
            let x = aa[i] || 0
            let y = bb[i] || 0
            if(x-y !== 0) return x -y
        }
    })
}


function test(){
    for(var i = 0; i< 10;i++){
        console.log(i);
        if(i == 5) return false
    }
}

// 20-11-11
// 1. 输出什么
const config = {
    languages: [],
    set language(lang){
        return this.languages.push(lang)
    }
}

console.log(config.language) // undefined

// ans: 方法 language 是一个setter， setters并不保存一个实际值，而是修改属性，当调用方法setter，返回undefined

// 2. 输出什么
let name = 'zys'

function getName(){
    console.log(name) // ReferenceError
    let name = 'wlz'
}

getName()

// ans: let 变量提升，但不会被初始化：暂时性死区，当在变量声明前访问，会报错
// Uncaught ReferenceError: Cannot access 'name' before initialization

// 位运算符：
// 参考w3c教程 https://www.w3school.com.cn/js/js_bitwise.asp
// 操作	    结果	等同于	    结果
// 5 & 1	1	0101 & 0001	  0001
// 5 | 1	5	0101 | 0001	  0101
// 5 ^ 1	4	0101 ^ 0001	  0100
// ~ 5	    10	 ~0101	      1010
// 5 << 1	10	 0101 << 1	  1010
// 5 >> 1	2	 0101 >> 1	  0010
// 5 >>> 1	2	 0101 >>> 1	  0010

// 十进制转换为二进制
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

// 二进制转换为十进制
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
}

注意 <<n==*(2^n)