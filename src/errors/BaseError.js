class BaseError {
    static createParseError(text, index, name) {
        const nameInclusion = name ? `'${name}' ` : '';
        return `ParseError ${nameInclusion}(position ${index}): ${text}`;
    }
}

module.exports.BaseError = BaseError;