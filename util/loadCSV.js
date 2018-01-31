var fs = require('fs');
var parse = require('csv-parse');


module.exports = function(fileName) {
    return new Promise(function(res, rej) {
        fs.readFile('./data/' + fileName + '.csv', 'utf-8', function(err, fileData) {
            parse(fileData, { columns: true, trim: false }, function(err, rows) {

                res(rows)
            })
        })
    })
}