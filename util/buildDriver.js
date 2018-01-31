global.webdriver = require('selenium-webdriver');

module.exports = function buildDriver() {
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
        'args': ['--start-maximized'],
        'binary': 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    global.driver = driver;
}