var steps = require('require-dir')('./sharedSteps');
require('../util/buildDriver')();

function main() {
    steps.loadPage('https://en.wikipedia.org/wiki/Test_automation', '#pt-login')
        .then(() => steps.enterText([['searchInput', 'hello']]))
        .then(() => steps.clickElement('#pt-login a', '#wpLoginAttempt'))
        .then(() => steps.cleanUp())
        .catch(() => failStep())
}

main();

var failStep = (e) => {
    console.log(e.message);
    steps.cleanUp()
};