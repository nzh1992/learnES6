/*
* 类型转换
* */


// 显式类型转换
let value = true;
let value2 = Number(value);     // true 被转换为Number类型，值为1
console.log(typeof value2, value2);

let value3 = String(value);     // true 被转换为String类型，值为"true"
console.log(typeof value3, value3);


// 无法计算，结果为NaN
console.log(true / "errpr");

// 例如，文本框输入一个值，判断是否是数值
let inputValue = "not a number";
let inputValue2 = "333";
let isNumber = Number(inputValue2);
console.log(inputValue2);


// number类型转换的特殊情况
console.log("number translation:");
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(false));
console.log(Number("a string..."));


/*
* 布尔类型转换
* 表达式值为真，则true。否则false
* */
console.log("Boolean translation:");
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));