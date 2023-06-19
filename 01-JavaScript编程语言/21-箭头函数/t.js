/*
* 箭头函数
* */


// 一个简单的箭头函数
let func = (arg1, arg2) => arg1 + arg2;

console.log(func(1, 2));


// 一个多行的箭头函数
let func2 = (arg1, arg2) => {
    let result = arg1 + arg2;
    console.log(result);
    return result;
}

func2(3, 5);