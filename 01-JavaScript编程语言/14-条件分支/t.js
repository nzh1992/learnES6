/*
* 条件分支
* */


// if 条件分支
// 条件表达式的结果为假值都不会执行，有哪些假值呢？
// 0, "", null, undefined, NaN
if (true) {
    console.log("It is true.");
}


// if-else
if (false) {
    console.log("Never execute.");
} else {
    console.log("else will be executed.");
}


// 多个条件
// if - else if - else
let condition = "else";
if (condition === 1) {
    console.log(condition);
} else if (condition === 2) {
    console.log(condition);
} else {
    console.log(condition);
}


// 也可以没有else
let condition2 = 3;
if (condition2 === 1) {
    console.log(condition2);
} else if (condition2 === 2) {
    console.log(condition2);
} else if (condition2 === 3) {
    console.log(condition2);
}


// 三元运算符
// 一般用于通过条件给变量赋值
let age = 25;
// 格式：condition ? value1 : value2
// condition表达式计算结果为true，返回value1，否则返回value2
let description = age >= 18 ? "成人" : "未成年";
console.log(description);


// 更多的条件呢？
// 判断条件是从上至下依次执行的
let description2 = (age <= 18) ? "未成年" :
    (age <= 35) ? "青年" :
        ( age <= 60) ? "壮年" : "暮年";
console.log(description2);


// 还可以执行方法
function f1 () {
    console.log("func 1");
}

function f2 () {
    console.log("func 2")
}

let funcName = "f2";
(funcName == "f1") ? f1() : f2();