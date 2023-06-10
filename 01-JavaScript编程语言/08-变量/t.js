// 创建变量
// 同一个变量名不可被重复定义。
// let a;

let a = 'a';
console.log(a);

// 一行中声明多个变量，但为了更好的可读性，建议写成3行。
let b = 10, c = 15, d = 20;
console.log(b, c, d);


/*
* var 和 let 的区别？
* */


/*
* JS变量命名规则
* 1. 变量名称必须包含字母、数字、符号$和_
* 2. 首字母不能是数字
* 3. 如果命名包含多个单词，采用驼峰命名(camelCase)
* 4. 美元符号和下划线也可以用于变量名，跟字母一样，没有特殊含义
* 5. 区分大小写。例如apple和APPLE是两个变量。
* 6. 不能使用关键字，例如let、class、return、function
* */


// 声明一个常量
// 常量无法被修改，尝试修改就会报错。
const aa = 20;

// 一般而言，常量使用大写字母和下划线来表示，用于硬编码(hard-coded)
// 好处：容易记忆、可读性好
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";

let color = COLOR_RED;
console.log(color);


