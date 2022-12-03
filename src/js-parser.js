const { str } = require('./functions/str.js'); 
const { sequenceOf } = require('./functions/sequenceOf.js');
const { choice } = require('./functions/choice.js');
const { letters } = require('./functions/letters.js');
const { digits } = require('./functions/digits.js');
const { many } = require('./functions/many.js');
const { many1 } = require('./functions/many1.js');

module.exports = {
    str,
    sequenceOf,
    choice,
    many,
    many1,
    letters,
    digits
}
