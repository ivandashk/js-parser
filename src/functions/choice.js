const { Parser } = require('../parser.js');

module.exports.choice = parsers => new Parser((ast) => {
    // TODO: Not implemented
    // const results = [];
    // for (let parser of parsers) {
    //     parser.exec(ast);

    //     if (ast.isASTError()) {
    //         return;
    //     }

    //     results.push(ast.getResult());
    // }

    // return ast.updateResult({
    //     result: results,
    //     offset: 0
    // });
});