const { BaseError } = require('../errors/BaseError.js');
const { Parser } = require('../parser.js');
const { StateUpdater } = require('../state-updater.js');

module.exports.letters = new Parser(parserState => {
    const { source, index } = parserState;

    let res = '';
    let offset = 0;
    while (source[index + offset] && /[a-zA-Z]/.test(source[index + offset])) {
        res += source[index + offset];
        offset++;
    }

    if (!res) {
        return StateUpdater.updateError(parserState, BaseError.createParseError(`Expecting letters`, index))
    }

    return StateUpdater.updateSuccess(parserState, parserState.index + offset, res);
});