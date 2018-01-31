module.exports = function clickElement(css, checkForCss) {
    return new Promise(function(res, rej) {
        driver.findElement(webdriver.By.css(css)).click();
        driver.wait(function() {
            return driver.findElement(webdriver.By.css(checkForCss));
        }, 4000).then(a => res(), rej)
    })
}