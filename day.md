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

