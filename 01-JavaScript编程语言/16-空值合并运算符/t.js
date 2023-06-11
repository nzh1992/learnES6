/*
* 空值合并运算符， ??
*
* 对于null和undefined，称为未定义类型，其余为已定义类型，那么有
* a ?? b
* 如果a是已定义的，则结果为a
* 如果a不是已定义的，则结果是b
* */

let result = 1 ?? 2;
console.log(result);        // output: 1

let result2 = undefined ?? 3;
console.log(result2);       // output: 3

let result3 = null ?? "is null";
console.log(result3);       // output: "is null"


// 一般用于提供未定义变量的默认值
let user;
console.log(user ?? '匿名');

let user2 = "jack";
console.log(user2 ?? '匿名');


// 还可以在一系列的值中，找出第一个非null和undefined的值
let a = null;
let b = "haha";
let c = "789";
let firstTrueValue = (a ?? b ?? c);
console.log(firstTrueValue);        // output: "haha"


// 关于优先级
// ?? 和 || 相同，优先级为4
// 这意味着 ?? 和 || 都会在 = 和 ? 运算前计算