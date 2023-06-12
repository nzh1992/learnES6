/*
* switch语句
*
* switch语句可以替代多个if判断，为多分支选择的情况提供了更具描述性的方式。
* */


// 语法
// switch语句有至少一个case代码块，和一个可选的default代码块。
// 注意每个case后的表达式都是严格相等判断
let x = "v3";
switch (x) {
    case 'v1':
        console.log(x);
        break;
    case 'v2':
        console.log(x);
        break;
    default:
        console.log("default");
        break;
}


// 多个case分支可以被分为一组
let y = "v2";
switch (y) {
    case 'v1':
    case 'v2':
        console.log(y);
        break;
    case 'v3':
        console.log("v3");
        break;
}