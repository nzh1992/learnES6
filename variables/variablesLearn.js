// ES6变量的解构赋值

// 什么是解构(Destructuring)？
// 从数组和对象中提取值，对变量进行赋值，这样被称为解构。

// 使用解构给变量赋值
// 其实就是根据对应的位置赋值。和python同理。
// 这样的操作必须有一个前提，等号左右两侧的数据结构必须一致。
// let [a, b, c] = [1, 2, 3];

// 还有一些其他解构写法
// let [, , third] = [4, 5, 6];
// console.log(third);

// let [first, , last] = ["first", "second", "last"];
// console.log(first, last);

// 还有更另类的
// let [head, ...other] = [0, 1, 2, 3, 4, 5];
// console.log(head, other);

// 注意：如果等号右侧为不可遍历对象，则会引发异常。
// set解构赋值
// let [x, y, z] = new Set(["a", "b", "c"]);
// console.log(x, y, z);


function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
var [one, two, three, four, five] = fibs();
console.log(one, three, five);

