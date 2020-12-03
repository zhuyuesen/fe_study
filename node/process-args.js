
// process.argv:

process.argv.forEach((val,idx) => {
    console.log(`${idx}:${val}`)
})

// 使用 node process-args.js a b c 启动当前文件

// 输出

// 0:/usr/local/bin/node
// 1:/Users/yuesenzhu/fe_study/node/process-args.js
// 2:a
// 3:b
// 4:c

// process.argv:
// process.argv 属性会返回一个数组，其中包含当 Node.js 进程被启动时传入的命令行参数。
// 第一个元素是 process.execPath。 如果需要访问 argv[0] 的原始值，则参见 process.argv0。 
// 第二个元素是正被执行的 JavaScript 文件的路径。 
// 其余的元素是任何额外的命令行参数。