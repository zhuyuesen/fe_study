# js与qa工程师 20-10-08

## 1. karma
js 测试工具包
http://karma-runner.github.io/latest/index.html

```shell
npm install karma --save-dev

# jasmine 断言 
npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

# 全局 karma-cli 安装
npm install -g karma-cli
```

## 2. 步骤
1. 全局安装karma
npm i -g karma-cli

2. 在项目中初始化karma配置文件
karma init
注意配置项：
要测试的文件 files
       浏览器  browsers
打开浏览器得到结果并关闭 singleRun

3. 对于不同条件的函数 需要多个测试
expect(add(1)).toBe(1)
expect(add(2)).toBe(23) //不加下面这行也能通过 因为1确实结果为1，测试需要代码覆盖率检查 karma-coverage

## 3. 代码覆盖率检查
npm i karma-coverage --save-dev
安装后在karma.config.js 中配置
```js
// coverage reporter generates the coverage
reporters: ['progress', 'coverage'],

preprocessors: {
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
    'src/**/*.js': ['coverage']
},

// 文档输出位置
// optionally, configure the reporter
coverageReporter: {
    type : 'html',
    dir : 'coverage/'
}
```

## 4. e2e测试
e2e: 端对端， 就不用手点了

npm install selenium-webdriver

2. 以测试百度为例
在tests/e2e下新建baidu.spec.js
```js
const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.baidu.com/');
    await driver.findElement(By.name('wd')).sendKeys('javascript', Key.RETURN);
    await driver.wait(until.titleIs('javascript_百度搜索'), 2000);
  } finally {
    await driver.quit();
  }
})();
```
在 https://www.npmjs.com/package/selenium-webdriver 下载对应操作系统对应的驱动，解压后.exe放在项目根目录下
运行 node ./tests/e2e/baidu.spec.js 注意需要安装对应浏览器

## neightwatch 更专业的e2e单元测试

e2e 必须得用

## rize
photomjs 不维护之后的好产品 rize， 无头的
参考文档和案例 https://rize.js.org/zh-CN/#%E7%89%B9%E6%80%A7

## jest React测试库 也可以测试其他js

## f2e-test
阿里的测试框架
不用一个一个写单元测试

## ui测试

### phantomCss

### backstopjs
比 phantomCss 强大