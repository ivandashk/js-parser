const { str } = require('./functions/str.js'); 
const { sequenceOf } = require('./functions/sequenceOf.js');
const { choice } = require('./functions/choice.js');
const { letters } = require('./functions/letters.js');
const { digits } = require('./functions/digits.js');
const { many } = require('./functions/many.js');

module.exports = {
    str,
    sequenceOf,
    choice,
    many,
    letters,
    digits
}
