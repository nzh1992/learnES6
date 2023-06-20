/*
* this
*
* 这是一个关键字，代表对象本身。
* this的值是在代码运行时计算出来的，它取决于代码上下文。
* */

let user = {
    name: 'nzh',
    age: 30,

    sayHi() {
        console.log(this.name);
    }
};


user.sayHi();

