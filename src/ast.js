class AST {
    #source;
    #result;
    #error;
    #isError = false;
    #index = 0;
    #data = null;

    constructor(source) {
        this.#source = source;
    }

    get = () => {
        const res = {
            isError: this.#isError,
            result: this.#result,
            error: this.#error,
            index: this.#index,
            data: this.#data
        };

        if (this.#result === undefined) delete res.result;
        if (this.#error === undefined) delete res.error;

        return res;
    }

    getSource = () => {
        return this.#source;
    }

    setError = (text) => {
        this.#isError = true;
        this.#error = text;
        this.#result = undefined;
    }

    isASTError = () => {
        return this.#isError;
    }

    getError = () => {
        return this.#error;
    }

    getIndex = () => {
        return this.#index;
    }

    getResult = () => {
        return this.#result;
    }

    updateResult = ({ result, offset }) => {
        this.#index += offset;
        this.#result = result;
    }
}

module.exports.AST = AST;
