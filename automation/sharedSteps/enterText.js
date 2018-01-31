var formFiller = require('../../util/formFiller')();

module.exports = function enterText(inputs) {
    return new Promise(function(res, rej) {
        inputs.map(input => {
            formFiller.id(input[0], input[1]);        
        })
        res();
    })
}