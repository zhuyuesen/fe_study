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