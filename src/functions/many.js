const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');

module.exports.many = parser => new Parser(parserState => {
    const results = [];
    let nextState = parser.stateTransformerFn(parserState);
    
    while (nextState.result) {
        results.push(nextState.result);

        nextState = parser.stateTransformerFn(nextState);
    }

    return StateUpdater.updateSuccess(parserState, nextState.index, results);
})