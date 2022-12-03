const { BaseError } = require('../errors/BaseError.js');
const { Parser } = require('../parser.js');

module.exports.letters = new Parser((ast) => {
    const source = ast.getSource();
    const index = ast.getIndex();

    let res = '';
    let offset = 0;
    while (source[index + offset] && /[a-zA-Z]/.test(source[index + offset])) {
        res += source[index + offset];
        offset++;
    }

    if (!res) {
        ast.setError(BaseError.createParseError(`Expecting letters`, index));
        return;
    }

    ast.updateResult({
        result: res,
        offset
    })
});