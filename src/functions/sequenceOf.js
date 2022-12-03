const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');

module.exports.sequenceOf = parsers => new Parser(parserState => {
    const results = [];
    let newState = parserState;
    for (let parser of parsers) {
        newState = parser.stateTransformerFn(newState);

        if (newState.isError) {
            return StateUpdater.updateError(parserState, newState.error);
        }

        results.push(newState.result);
    }

    return StateUpdater.updateSuccess(parserState, newState.index, results);
});