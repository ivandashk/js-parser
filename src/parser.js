const { AST } = require('./ast.js');

class Parser {
    stateTransformerFn;
    constructor(fn) {
        this.stateTransformerFn = fn;
    }

    exec = (ast) => {
        this.stateTransformerFn(ast);
    }

    // Collects all the parsers with their first argumants before
    // Runs last and triggers their transform functions (ast) => { do smth with ast }
    run = (source) => {
        const ast = new AST(source);
        this.stateTransformerFn(ast);
        return ast.get();
    }

    map = (fn) => new Parser(ast => {
        // You need to call this.stateTransformerFn(ast), because it calls upon a root parser
        // Example: In str('hello').map(fn) it allows to call str() and perform
        // the ast transformation needed before the map
        this.stateTransformerFn(ast);
        const mappedValue = fn(ast.getResult());

        if (ast.isASTError()) return;

        ast.updateResult({ result: mappedValue, offset: 0 });
    })

    errorMap = (fn) => new Parser(ast => {
        this.stateTransformerFn(ast);
        if (!ast.isASTError()) return;

        const newText = fn({ error: ast.getError(), index: ast.getIndex()})
        ast.setError(newText);
    })
}

module.exports.Parser = Parser;