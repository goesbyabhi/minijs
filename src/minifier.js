// generate AST (Abstract Syntax Tree)
import * as acorn from 'acorn';
// validates js code and remove comments and line breaks
import escodegen from 'escodegen';

export default class Minifier {
  minifyCodeAndReturnMapNames(originalCode) {
    const originalAST = acorn.parse(originalCode, {ecmaVersion: 2022, locations: true});
    console.log(JSON.stringify(originalAST, null, 2));
  }
}
