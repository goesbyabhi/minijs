# MiniJS - A minimal JS minimizer

## Introduction
As progress is being made in the fields of web frameworks, styling, performance, effects, etc, it is becoming a growing concern of how to *Optimize* websites.
Some studies show that reducing the amount of JavaScript in a code contributes a lot to the boost of loading performance of sites.
But reducing JavaScript will result to decrease in functionality which is not what we want. Thus people started compressing or *minimizing* the code.

## Getting Started and Installation
### Requirements
- NVM
- NPM
- Git

1) Clone the repo using the following command:
```sh
git clone https://github.com/goesbyabhi/minijs
```
2) Once cloned, open the folder and switch to the Node version mentioned in `.nvmrc` using:
```sh
nvm use
```
3) Install the required packages using:
```sh
npm i
```

4) Open the command prompt and run to minify the code:
```sh
npm run minify
```

### Understanding Folder structure:
- `src` contains the actual source code of mini.js
- `public` contains the targetted files that gets compressed

#### We get a `.min.js` file whose size will be compressed if compared with the original file and we will get a source map that will help the browser de-structure the code back to how it was originally thus maintaining the functionality.
