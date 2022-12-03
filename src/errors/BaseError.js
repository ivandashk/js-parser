class BaseError {
    static createParseError(text, index) {
        return `ParseError (position ${index}): ${text}`;
    }
}

module.exports.BaseError = BaseError;