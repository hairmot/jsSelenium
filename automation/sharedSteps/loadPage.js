module.exports = function loadPage(address, checkForElement) {
    return new Promise(function(res, rej) {
        driver.get(address)
        driver.wait(function() {
            return driver.findElement(webdriver.By.css(checkForElement));
        }, 4000).then(a => res(), rej)
    })
}