/*
* while
* */

// 基本用法
// condition可以任意表达式，
let condition1 = 5;
while (condition1) {
    // 循环体
    console.log(condition1);
    condition1 -= 1;
}


// 还有一种，do...while循环
// 区别在于，上面的写法，先检查条件再执行
// do...while 会先执行do中的代码，然后再检查condition，再决定是否再继续循环
// 一般用于，"至少循环一次"场景中。
let condition2 = 5;
do {
    console.log(condition2);
    condition2 -= 1;
} while (condition2 === 5);


