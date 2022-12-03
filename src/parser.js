const { StateUpdater } = require('./state-updater.js');

class Parser {
    constructor(fn) {
        this.stateTransformerFn = fn;
    }

    // Collects all the parsers with their first argumants before
    // Runs last and triggers their transform functions (parserState) => { do smth with the state }
    run = (source) => {
        const initialState = {
            source,
            isError: false,
            result: undefined,
            error: undefined,
            index: 0,
            data: null
        }

        const res = this.stateTransformerFn(initialState);

        delete res.source;
        if (res.result === undefined) delete res.result;
        if (res.error === undefined) delete res.error;

        return res;
    }

    map = (fn) => new Parser(parserState => {
        // You need to call this.stateTransformerFn(parserState), because it calls upon a root parser
        // Example: In str('hello').map(fn) it allows to call str() and perform
        // the state transformation needed before the map
        const newState = this.stateTransformerFn(parserState);
        
        if (newState.isError) return StateUpdater.updateError(parserState, newState.error);
        
        const mappedValue = fn(newState.result);
        return StateUpdater.updateSuccess(parserState, newState.index, mappedValue)
    })

    errorMap = (fn) => new Parser(parserState => {
        const newState = this.stateTransformerFn(parserState);

        if (!newState.isError) return newState;

        const newText = fn({ error: newState.error, index: newState.index });
        return StateUpdater.updateError(parserState, newText);
    })
}

module.exports.Parser = Parser;