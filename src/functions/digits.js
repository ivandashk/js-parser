const { BaseError } = require('../errors/BaseError.js');
const { StateUpdater } = require('../state-updater.js');
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
        return StateUpdater.updateError(parserState, BaseError.createParseError(`Expecting digits`, index))
    }

    return StateUpdater.updateSuccess(parserState, parserState.index + offset, res);
});