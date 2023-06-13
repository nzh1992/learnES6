// 局部变量
// 函数内声明的变量只能在函数内使用，在外部访问会报错。
function showMsg() {
    let aa = 34;
    console.log(aa);
}

showMsg();
// console.log(aa);   // 会报错


// 外部变量
// 但是函数内部可以访问外部变量，还可以修改外部变量
// 如果函数内部和外部有同名变量，那么会使用函数内部变量，而且外部变量也不会被更改。
let userName = 'john';
function showName() {
    console.log(userName);
    userName = "nzh";
}

showName();
showName();