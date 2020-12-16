
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
// 注意 <<n==*(2^n)

// 20-12-07 日期时间格式化
/**
 * formate： yyyy-MM-dd hh:mm:ss
 * @param {*} date
 * @param {*} formate
 */
function formateDateTime(date = new Date(), formate = 'yyyy-MM-dd hh:mm:ss'){
    if(typeof date === "string") data = new Date(date)
    if(Object.prototype.toString.call(date) !== "[object Date]" || date.toString() === 'Invalid Date'){
        throw Error('请传入日期或日期字符串')
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    let dateStr =
        formate.replace('yyyy',year)
        .replace('MM',formateNumber(month))
        .replace('dd',formateNumber(day))
        .replace('hh',formateNumber(hour))
        .replace('mm',formateNumber(minute))
        .replace('ss',formateNumber(second))
    return dateStr
}

const formateNumber = n => {
    n = n.toString()
    return n[1] ? n : '0'+n
}

// 20-12-11 w完善下面函数，实现图片的加载
/*
function createImg(url){}
createImg(url).then(value => {
    document.body.appendChild(value)
})
*/

// error
function createImg(url){
    return new Promise((resolve,reject) => {
        return fetch(url)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

// ans 1
function createImg(url){
   return new Promise((resolve,reject) => {
       if(ur){
           let ImgEle = document.createElement('img')
           ImgEle.src = url
           resolve(ImgEle)
       }else{
           reject('url is not right')
       }
   }) 
}

// ans 2
function createImg(url){
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.src = url;
        setTimeout(()=> {
            resolve(img)
        }, 1000)
    })
}

createImg('1.jpg')
.then(value => {
    document.body.appendChild(value)
    return createImg('2.png')
})
.then(value => {
    document.body.appendChild(value)
})