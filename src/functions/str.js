const { BaseError } = require('../errors/BaseError.js');
const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');

module.exports.str = targetString => new Parser(parserState => {
    const { source, index } = parserState;

    const nextIndex = index + targetString.length;

    if (source.length < nextIndex) {
        return StateUpdater.updateError(
            parserState,
            BaseError.createParseError(`Expecting string '${targetString}', but got end of input.`, index)
        );
    }

    const slice = source.slice(index, nextIndex);
    if (slice !== targetString) {
        return StateUpdater.updateError(
            parserState,
            BaseError.createParseError(`Expecting string '${targetString}', got '${slice}...'`, index)
        );
    }

    return StateUpdater.updateSuccess(parserState, parserState.index + targetString.length, targetString);
});