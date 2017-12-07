# chalk-pipe

[![](https://img.shields.io/travis/LitoMore/chalk-pipe/master.svg)](https://travis-ci.org/LitoMore/chalk-pipe)
[![](https://img.shields.io/npm/v/chalk-pipe.svg)](https://www.npmjs.com/package/chalk-pipe)
[![](https://img.shields.io/npm/l/chalk-pipe.svg)](https://github.com/LitoMore/chalk-pipe/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Create chalk style schemes with simpler style strings  
使用更简单的样式字符串创建粉笔样式

![](https://raw.githubusercontent.com/LitoMore/chalk-pipe/master/screenshot.png)

## Install（安装）

```bash
$ npm install chalk-pipe
```

## Usage（用法）

```javascript
const chalkPipe = require('chalk-pipe');  
引入chalk-pipe模块

console.log(chalkPipe('blue.bold')('Hello world!'));
输出查看代码效果
```

Use dot `.` to separeate multiple styles:  
使用点.分隔多个样式：

```javascript
const link = chalkPipe('blue.underline');
const error = chalkPipe('bgRed.#cccccc');
const warning = chalkPipe('orange.bold');

console.log(link('Link!'));
console.log(error('Error!'));
console.log(warning('Warning!'));
```

`chalkPipe` is also `chalk`:  
chalkPipe也是chalk：

```javascript
const blue = chalkPipe('blue');
const link = blue.underline;

console.log(link('Link!'));
```

### Use custom chalk（使用自定义粉笔）

```javascript
const chalk = require('chalk');
const chalkPipe = require('chalk-pipe');

const text =  chalkPipe('underline', chalk.blue)('Link!');

console.log(text);
```

## API

### chalkPipe(styles)(text)

Example:

 ```javascript
 chalkPipe('blue.underline')('Link!');
 ```

### chalkPipe(styles, chalk)(text)

Example:

```javascript
const chalk = require('chalk');

chalk.enable = true;  
颜色支持自动检测，如果您想启用/禁用粉笔，则可以通过该.enabled属性进行操作。
如果需要在可重用模块中更改此值，需创建一个新实例
const ctx = new chalk.constructor({enabled: false});

chalkPipe('underline', chalk.blue)('Link!');
```

## Valid styles（有效的样式）

- [Modifiers](https://github.com/chalk/chalk#modifiers)（修饰符）
- [Colors](https://github.com/chalk/chalk#colors)（颜色）
- [Background colors](https://github.com/chalk/chalk#background-colors)（背景颜色）
- [Hex triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet)（六角三元组）
- [CSS keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords)（CSS关键字）

## Related（有关）

- [chalk-pipe-cli](https://github.com/LitoMore/chalk-pipe-cli) - CLI for this module
- [inquirer-chalk-pipe](https://github.com/LitoMore/inquirer-chalk-pipe) - A inquirer plugin for input chalk-pipe style strings
- [chalk](https://github.com/chalk/chalk) - Output colored text to terminal

## License

MIT © [LitoMore](https://github.com/LitoMore)
