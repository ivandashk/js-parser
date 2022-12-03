const { updateError } = require('arcsecond');
const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');

module.exports.choice = parsers => new Parser(parserState => {
    let firstError;
    for (let parser of parsers) {
        const newState = parser.stateTransformerFn(parserState);

        if (newState.result) return StateUpdater.updateSuccess(parserState, newState.index, newState.result);
        if (!firstError) firstError = newState.error
    }

    return updateError(parserState, firstError);
});