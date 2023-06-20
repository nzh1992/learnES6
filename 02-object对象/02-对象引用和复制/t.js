/*
* 对象引用和复制
* */
let _ = require('lodash');

// 对象和原始类型的区别
// 对象是通过引用存储和复制的。
// 原始类型作为一个整体复制。


// 看个例子
let user = {name: "nzh"};
let admin = user;
// 实际上，引用的都是同一个内存地址
console.log(user.name);
console.log(admin.name);
// 判断是否引用了同一对象
console.log(user == admin);
console.log(user === admin);


// 复制（拷贝，或者叫克隆）一个对象
// 新建一个对象，通过遍历已有对象的属性，并在原始类型值的层面复制它们，以实现对现有对象的复制
let userCopy = {};
for (let key in user) {
    userCopy[key] = user[key];
}

console.log(userCopy);
console.log(userCopy === user);
console.log(userCopy == user);


// 合并多个对象
// 如果属性值已经存在，则会被合并进来的属性覆盖
let permission1 = {canView: true};
let permission2 = {canEdit: true};

Object.assign(user, permission1, permission2);
console.log(user);


// 深拷贝
// 当一个对象的属性也是对象时，应该遍历每个属性，如果是对象，则调用assign方法。

user2 = _.cloneDeep(user);
console.log(user2);