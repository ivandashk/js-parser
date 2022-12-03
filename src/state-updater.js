class StateUpdater {
    static updateError(prevState, error) {
        return {
            ...prevState,
            isError: true,
            result: undefined,
            error,
        }
    }

    static updateSuccess(prevState, index, result) {
        return {
            ...prevState,
            index,
            result
        }
    }
}

module.exports.StateUpdater = StateUpdater;
