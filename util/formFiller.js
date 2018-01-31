module.exports = function formFiller() {
    return {
        id: function(id, value) {
            driver.findElement(webdriver.By.id(id)).sendKeys(value);
        },
        css: function(css, value) {
            driver.findElement(webdriver.By.css(css)).sendKeys(value);
        }
    }
}