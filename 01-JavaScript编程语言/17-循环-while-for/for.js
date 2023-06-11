/*
* for
* */


// 语法
// for (begin; condition; step) {
//     // 循环体
//     console.log();
// }

// 循环输出 1-5
for (i=1; i<=5; i++) {
    console.log(i);
}

// 上面代码的执行逻辑？
// 1. 首先，首次进入循环时执行i=1进行赋值
// 2. 每次进入循环时都判断 i<=5 是否为true，为true才执行
// 3. 在执行了循环体后，执行 i++


// 需要注意，如果首次进入循环时条件不满足，循环体一次都不会执行
for (i=1; i>=3; i++) {
    // 由于首次进入循环时i等于1，不满足>=3的条件，所以循环体一次都不会执行
    console.log("no execute");
}


// 内联变量声明
// 上述代码中，变量i是在循环中声明的，被称为"内联变量"，仅在循环中有效(变量作用域)。


// 省略写法
// for循环中任何语句段都可以被省略
console.log("小心省略写法");
let i2 = 0;
for (; i2 < 3; i2++) {
    console.log(i2);
}

// 还可以写成
console.log("另一种坑爹的省略")
let i3 = 0;
for (; i3 < 3;) {
    console.log(i3);
    i3 ++;
}


// 全部省略，无线循环
// for (;;) {
//     console.log("一直输出这句话");
// }


/*
* break， 跳出循环
* */
let sum = 0;
while (true) {
    let value = +prompt("Enter a number.", "");
    if (!value) break;

    sum += value;
}


/*
* continue，继续循环
* */