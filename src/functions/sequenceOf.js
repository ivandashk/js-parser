const { updateParserError } = require('../helpers/updateParserError.js');
const { updateParserState } = require('../helpers/updateParserState.js');
const { Parser } = require('../parser.js');

module.exports.sequenceOf = parsers => new Parser(parserState => {
    const results = [];
    let newState = parserState;
    for (let parser of parsers) {
        newState = parser.stateTransformerFn(newState);

        if (newState.isError) {
            return updateParserError(parserState, newState.error);
        }

        results.push(newState.result);
    }

    return updateParserState(parserState, newState.index, results);
});