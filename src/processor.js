import fs from 'node:fs'
import path, { basename } from 'node:path'
import Minifier from './minifier.js';

export default class Processor {
  static generateMinifiedFilePath(filename) {
    return filename.replace('.js', '.min.js');
  }

  static #generateMinifiedCode({ originalCode, minifiedFilePath, minifiedLocalFilePath }) {
    const minifier = new Minifier();
    minifier.minifyCodeAndReturnMapNames(originalCode);
  }
  static run(filename) {
    const originalCode = fs.readFileSync(filename, 'utf8');
    const minifiedFilePath = this.generateMinifiedFilePath(filename);
    const minifiedLocalFilePath = basename(minifiedFilePath);
    this.#generateMinifiedCode({
      originalCode,
      minifiedFilePath,
      minifiedLocalFilePath
    });
    console.log(`Minified code and source map generated with success! ${filename}`);
  }
}
