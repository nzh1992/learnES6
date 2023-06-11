/*
* 逻辑运算符
* */


// || 或
// 任一为true，结果为true
// 如果运算元不是Boolean类型，则会先转换为Boolean类型
// 一般场景，用于检测是有任何条件为true的情况

// 运算逻辑？
// 1. 从左到右依次运算
// 2. 每处理一个运算元时，将其转换为布尔类型，如果结果是true，停止计算
// 3. 直到最后一个运算元的结算结果都是false，返回最后一个操作数。
let hour = 12;
if (hour < 10 || hour > 18) {
    console.log("非工作时间");
} else {
    console.log("工作时间");
}


// && 与
// 所有操作数的计算结果都是true时，运算返回true，否则返回false。

// 运算逻辑？
// 1. 从左到右
// 2. 每个操作数被转为布尔类型，如果结果为false，停止计算
// 3. 全部为true，返回最后一个操作数
console.log(1 && 2);    // output: 2

if ( 1 && true) {
    console.log("exactly true.");
}

// 一般用于，在多个条件寻找第一个假值
let firstFalseValue = (1 && 2 && 0 && 3);
console.log(firstFalseValue);


// ! 非

// 运算逻辑？
// 1. 将操作数转为布尔类型
// 2. 返回相反的值
