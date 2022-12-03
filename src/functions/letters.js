const { BaseError } = require('../errors/BaseError.js');
const { Parser } = require('../parser.js');
const { updateParserError } = require('../helpers/updateParserError.js');
const { updateParserState } = require('../helpers/updateParserState.js');

module.exports.letters = new Parser(parserState => {
    const { source, index } = parserState;

    let res = '';
    let offset = 0;
    while (source[index + offset] && /[a-zA-Z]/.test(source[index + offset])) {
        res += source[index + offset];
        offset++;
    }

    if (!res) {
        return updateParserError(parserState, BaseError.createParseError(`Expecting letters`, index))
    }

    return updateParserState(parserState, parserState.index + offset, res);
});