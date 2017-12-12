'use strict';

//avac测试模块
const test = require('ava');
const chalk = require('chalk');

const modifiers = require('../styles').modifiers;
const normalColors = require('../styles').normalColors;
const chalkPipe = require('..');


//test()：执行一个测试，第一个参数为标题，第二参数为测试用例函数，
//接收一个包含内置断言 API 的参数 t，也是唯一一个参数；
//按照惯例这个参数名字叫做 t，没必要重新取名字。
//执行测试 t.is()；第一个参数为实际值，第二个参数为期望值
test('Modifiers', t => {
	const scheme = chalkPipe(modifiers.join('.'));
	const text = scheme('foo');
	//预期值
	const should = chalk
		.reset
		.bold
		.dim
		.italic
		.underline
		.inverse
		.hidden
		.strikethrough('foo');

	t.is(text, should);
});

test('Normal Colors', t => {
	const scheme = chalkPipe(normalColors.join('.'));
	const text = scheme('bar');
	const should = chalk
		.black
		.red
		.green
		.yellow
		.blue
		.magenta
		.cyan
		.white
		.gray
		.redBright
		.greenBright
		.yellowBright
		.blueBright
		.magentaBright
		.cyanBright
		.whiteBright('bar');

	t.is(text, should);
});

test('Background styles', t => {
	const scheme = chalkPipe('bgRed.bg#ff99cc.bgPink.bgBlackBright');
	const text = scheme('unicorn');
	const should = chalk
		.bgRed
		.bgHex('#ff99cc')
		.bgKeyword('pink')
		.bgBlackBright('unicorn');

	t.is(text, should);
});
