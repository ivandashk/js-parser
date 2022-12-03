const { BaseError } = require('../errors/BaseError.js');
const { Parser } = require('../parser.js');

module.exports.digits = new Parser((ast) => {
    const source = ast.getSource();
    const index = ast.getIndex();

    let res = '';
    let offset = 0;
    while (source[index + offset] && /[0-9]/.test(source[index + offset])) {
        res += source[index + offset];
        offset++;
    }

    if (!res) {
        ast.setError(BaseError.createParseError(`Expecting digits`, index));
        return;
    }

    ast.updateResult({
        result: res,
        offset
    })
});