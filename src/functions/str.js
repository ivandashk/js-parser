const { BaseError } = require('../errors/BaseError.js');
const { updateParserError } = require('../helpers/updateParserError.js');
const { updateParserState } = require('../helpers/updateParserState.js');
const { Parser } = require('../parser.js');

module.exports.str = targetString => new Parser((parserState) => {
    const { source, index } = parserState;

    const nextIndex = index + targetString.length;

    if (source.length < nextIndex) {
        return updateParserError(parserState, BaseError.createParseError(`Expecting string '${targetString}', but got end of input.`, index));
    }

    const slice = source.slice(index, nextIndex);
    if (slice !== targetString) {
        return updateParserError(parserState, BaseError.createParseError(`Expecting string '${targetString}', got '${slice}...'`, index))
    }

    return updateParserState(parserState, parserState.index + targetString.length, targetString);
});