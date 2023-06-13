// 创建一个函数
function showMsg(msg) {
    console.log("show: " + msg);
}


showMsg("haha");


// 在函数内部修改参数的值，函数外部无效
let msg = "ccc";
function f2(msg) {
    console.log(msg);
    msg = "dddd";
}

f2(msg);
console.log(msg);


// 参数默认值
function f3() {
    return "bbb";
}

let name = "aaa";
function f4(name, f=f3) {
    let newName = name + f3();
    console.log(newName);
}

f4(name);


// 返回值
// return 或 没有return的函数返回值为undefined
// 不要在return和返回值之间新增一行，因为JS会把换行符解析成分号


// 函数命名
// 函数就是行为(action)。所以他们的名字通常是动词，应该尽量简短且准确描述函数的作用
// 普遍做法是，用动词前缀，后跟描述性名词，来表达行为。

// 例如
// showMsg()
// getXX(), 返回一个值
// calcXX(), 计算某些内容
// createXX(), 创建
// checkXX()，检查
