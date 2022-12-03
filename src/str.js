const { BaseError } = require('./errors/BaseError.js');
const { Parser } = require('./parser.js');

module.exports.str = targetString => new Parser((ast) => {
    const source = ast.getSource();
    const index = ast.getIndex();

    const nextIndex = index + targetString.length;

    if (source.length < nextIndex) {
        ast.setError(BaseError.createParseError(`Expecting string '${targetString}', but got end of input.`, index));
        return;
    }

    const slice = source.slice(index, nextIndex);
    if (slice !== targetString) {
        ast.setError(BaseError.createParseError(`Expecting string '${targetString}', got '${slice}...'`, index));
        return;
    }

    ast.updateResult({
        result: targetString,
        offset: targetString.length
    });
});