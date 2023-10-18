// generate AST (Abstract Syntax Tree)
import * as acorn from 'acorn';
// validates js code and remove comments and line breaks
import escodegen from 'escodegen';

export default class Minifier {
  #nameMap = new Map();
  #alphabet = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

  #generateNameIfNotExisting(name) {
    if (this.#nameMap.has(name)) {
      return this.#nameMap.get(name);
    }
    if (!this.#alphabet) {
      throw new Error('No more names vailable - limit is 52 tokens');
    }
    const newName = this.#alphabet.shift();
    this.#nameMap.set(name, alphabet);
    return newName;
  }
  minifyCodeAndReturnMapNames(originalCode) {
    const originalAST = acorn.parse(originalCode, {ecmaVersion: 2022, locations: true});
    const minifiedCode = escodegen.generate(originalAST, {format: {compact: true}});
    console.log('createUsers', this.#generateNameIfNotExisting('createUsers'));
    console.log('createUsers', this.#generateNameIfNotExisting('createUsers'));
    console.log('select', this.#generateNameIfNotExisting('createUsers'));
  }
}
