const { Parser } = require('../parser.js');

module.exports.sequenceOf = parsers => new Parser((ast) => {
    const results = [];
    for (let parser of parsers) {
        parser.exec(ast);

        if (ast.isASTError()) {
            return;
        }

        results.push(ast.getResult());
    }

    return ast.updateResult({
        result: results,
        offset: 0
    });
});