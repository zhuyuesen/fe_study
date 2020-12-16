2020-11-11
vue 源码学习：
vue 技术揭秘：https://ustbhuangyi.github.io/vue-analysis/


process.argv:
参考 ./node/process-args.js
// process.argv 属性会返回一个数组，其中包含当 Node.js 进程被启动时传入的命令行参数。
// 第一个元素是 process.execPath。 如果需要访问 argv[0] 的原始值，则参见 process.argv0。 
// 第二个元素是正被执行的 JavaScript 文件的路径。 
// 其余的元素是任何额外的命令行参数。

webpack中的别名
如vue webpack.base.config.js 中
```js
function resolve(dir){
    return path.join(__direname, '...', dir)
}

module.exports = {
    entry: '',
    resolve: {
        alias: {
            '@': resolve('src)
        }
    }
}
```
## 20-12-11 移动端适配方案
- media quires
- flex 布局
- rem + viewport
- vh vw
- 百分比

1. media quires：
早期的布局方式，通过查询设备的宽度来执行不同的css代码
```css
@media only screen and (max-width: 374){

}
@media only screen and (min-width: 375px){

}
@media only screen and (min-width: 414px){
    
}

```

2. flex布局：
它的viewport是固定的
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
宽度自适应，元素采用px做单位

3. rem + viewport 缩放：
原理：
根据rem将页面放大dpr倍，然后将viewport设置为1/dpr.
如 iPhone6 plus的dpr为3，则页面整体放大3倍，1px(css 单位)在plus下默认为3px(物理像素),
然后viewport设置为1/3,这样页面整体缩回原始大小，从而实现高清。
这样整个网页在设备内显示时的页面宽度就会等于设备逻辑像素大小，也就是device-width,整个device-width的计算公式为：
设备的物理分辨率/(devicePixelRatio * scale),
在scale为1的情况下，device-width = 设备的物理分辨率/devicePixelRatio.


