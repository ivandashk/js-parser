const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');
const { BaseError } = require('../errors/BaseError.js');

module.exports.many1 = parser => new Parser(parserState => {
    const results = [];
    let nextState = parser.stateTransformerFn(parserState);
    
    while (nextState.result) {
        results.push(nextState.result);

        nextState = parser.stateTransformerFn(nextState);
    }

    if (!results.length) {
        return StateUpdater.updateError(
            parserState,
            BaseError.createParseError('Expecting to match at least one value', nextState.index, 'many1')
        )
    }

    return StateUpdater.updateSuccess(parserState, nextState.index, results);
})