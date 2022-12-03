module.exports.updateParserState = (prevState, index, result) => {
    return {
        ...prevState,
        index,
        result
    }
}