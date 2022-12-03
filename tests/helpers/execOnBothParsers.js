const arc = require('arcsecond');
const myParser = require('../../src/js-parser.js');

function execOnBothParsers(fn) {
    const res = [];
    for (let parser of [arc, myParser]) {
        res.push(fn(parser));
    }
    return res;
}

module.exports.execOnBothParsers = execOnBothParsers;