/*
* 对象
* 对象用来存储键值对和更复杂的实体。
* */

// 创建一个对象
// 方式1：字面量语法。使用{}创建
let obj1 = {
    'a': 1,
    'b': 2
};
// console.log(typeof obj1);
// console.log(obj1);

// 方式2：构造函数语法。使用Object()创建
let obj2 = Object();

// 创建属性
// 方式1：通过.
obj1.c = 20;
obj2.c = 20;
// console.log(obj1.c);
// console.log(obj2.c);

// 方式2：通过方括号[]
obj1["d"] = 30;
obj2["d"] = 30;
// console.log(obj1.d);
// console.log(obj2.d);


// 删除属性
delete obj1.d;
delete obj2.d;
console.log(obj1);
console.log(obj2);


// 计算属性
// key是从变量中获得的
let varKey = "apple";

let bag = {
    [varKey]: 5,
    // 还能拼接
    ["fruit" + varKey]: 6
}

console.log(bag);


// 判断一个属性是否存在
// 访问不存在的属性，得到undefined
if ("a" in obj1) {
    console.log("a in obj1");
}


// 遍历对象的每个属性
for (key in obj1) {
    console.log(key, obj1[key]);
}

// 对象的排序属性
// 有特定顺序，整数属性会被进行排序，其他属性则按照创建的顺序显示。
let codes = {
    "49": "Ger",
    "41": "Swi",
    "1": "USA"
};

for (code in codes) {
    console.log(code);
}