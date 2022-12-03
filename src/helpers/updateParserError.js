module.exports.updateParserError = (prevState, error) => {
    return {
        ...prevState,
        isError: true,
        result: undefined,
        error,
    }
}