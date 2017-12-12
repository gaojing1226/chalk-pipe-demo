'use strict';

const chalk = require('chalk');
const chalkPipe = require('.');

//颜色支持自动检测，如果您想启用/禁用粉笔，则可以通过该.enabled属性进行操作。
//如果需要在可重用模块中更改此值，需创建一个新实例
const fakeChalk = new chalk.constructor({enabled: false});

console.log();
console.log(chalkPipe('dim.#ffffff')('dim.#ffffff'));
console.log(chalkPipe('cyan.underline')('cyan.underline'));
console.log(chalkPipe('orange.bold')('orange.bold'));
console.log(chalkPipe('bgCyan.black')('bgCyan.black'));
//fakeChalk enable的值为false;粉笔关闭，所以直接输出文本，无任何样式
console.log(chalkPipe('bgCyan.black', fakeChalk)('bgCyan.black'));
