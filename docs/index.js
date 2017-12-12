'use strict';

//引入chalk第三方模块
const chalk = require('chalk');

//引入cssColorNames第三方模块
const cssColorNames = require('css-color-names');

//引入modifiers修饰符模块（在styles.js中定义）
const modifiers = require('./styles').modifiers;

//引入常用颜色修饰符模块（在styles.js中定义）
const normalColors = require('./styles').normalColors;


//判断样式是否是背景颜色
//以bg开头的+出现1次或多次除\n之外的任何单字符
function isBackground(style) {
	return Boolean(style.match(/^bg.+$/));
}

//判断样式是否是normalcolor值
function isNormalColor(style) {
	return Boolean(style.match(`^(${normalColors.join('|')})$`));   ？？
}

//判断样式是否是修饰符
function isModifier(style) {
	return Boolean(style.match(`^(${modifiers.join('|')})$`));
}

//判断样式是否是十六进制颜色
function isHexColor(style) {
	return Boolean(style.match(/^#[0-9A-Fa-f]{6}$/));
}

//判断样式是否是颜色关键字
function isKeyword(style) {
	return Boolean(cssColorNames[style]);
}

//暴露粉笔样式的函数
//第一个参数：stylePipe代表 粉笔管样式
//第二个参数: customChalk 不传参默认为chalk 也可以为chalkpipe
module.exports = function (stylePipe, customChalk) {

	//创建变量paint用来输出文本样式 
	let paint = customChalk || chalk;   ？？

	//如果传入的样式不存在或没有写样式，则直接返回paint
	if (!stylePipe || stylePipe.length === 0) {
		return paint;
	}

	//以.作为分隔符遍历所有样式
	const styles = stylePipe.split('.');

	for (let i = 0; i < styles.length; i++) {
		let style = styles[i];
		//设置背景变量为false为后面区分是背景颜色还是字体颜色作铺垫
		let isBg = false;

		// 如果样式代表修饰符
		if (isModifier(style)) {
			paint = paint[style];
			continue;
		}

		// 如果样式代表背景颜色
		if (isBackground(style)) {
			//从2下标开始截取BlackBright替换为Gray(此时style中的'bg'已被截取掉)
			style = style.substr(2).replace('BlackBright', 'Gray');
			
			//将style第一位字母小写，拼接index=1后的字符串 
			//即Gray变为gray
			style = style[0].toLowerCase() + style.slice(1);
			//背景颜色设为true,表示颜色渲染的是背景而非字体
			isBg = true;
		}

		// 如果颜色样式为十六进制表示
		if (isHexColor(style)) {
			//如果isBg=true;渲染为背景颜色
			if (isBg) {
				paint = paint.bgHex(style);
			} 
			//如果isBg=false;渲染为字体颜色
			else {
				paint = paint.hex(style);
			}
			continue;
		}
		// 如果颜色样式为normalColor
		if(isNormalColor(style)) {
			//如果isBg=true;此时参数style已在isBackgound()函数中去掉'bg';gray
			if (isBg) {
				//将gray变为bgBlackBright
				style = ('bg' + style[0].toUpperCase() + style.slice(1)).replace('Gray', 'BlackBright');
				paint = paint[style];
			} else {
				paint = paint[style];
			}
			continue;
		}

		// 如果颜色样式为keyWord
		else if (isKeyword(style)) {  ？？
			if (isBg) {
				paint = paint.bgKeyword(style);
			} else {
				paint = paint.keyword(style);
			}
			continue;
		}
	}

	return paint;
};
