// 需要输入问题（question），由用户的回答调用yes()或no()
// 参数中的yes和no，被称为回调函数
// 总结一下，回调函数就是在一个函数中把函数作为参数传递，在函数体中调用的一种方式
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);


/*
* 函数声明和函数表达式的区别？
* 1.语法不同
* 2.函数表达式在代码执行到达时被创建，并且仅从那一刻起可用。而函数声明被定义前就可以被调用。
*   例如，一个全局函数声明对整个脚本都是可见的，无论它被写在脚本的哪个地方。
* */