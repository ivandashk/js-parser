const { BaseError } = require('../errors/BaseError.js');
const { updateParserError } = require('../helpers/updateParserError.js');
const { updateParserState } = require('../helpers/updateParserState.js');
const { Parser } = require('../parser.js');

module.exports.digits = new Parser((parserState) => {
    const { source, index } = parserState;

    let res = '';
    let offset = 0;
    while (source[index + offset] && /[0-9]/.test(source[index + offset])) {
        res += source[index + offset];
        offset++;
    }

    if (!res) {
        return updateParserError(parserState, BaseError.createParseError(`Expecting digits`, index))
    }

    return updateParserState(parserState, parserState.index + offset, res);
});