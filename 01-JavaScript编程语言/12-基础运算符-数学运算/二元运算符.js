/*
* 1. 二元运算符有哪些？
* +，-，*，/，%(取余), **(求幂)
* */


// 如果二元运算符的运算元不是Number类型呢？
// 看看以下几种情况
// 1. 运算元是字符串
// 只有+可以运算，表示连接两个字符串，其他结果都是NaN
let s = "my" + " test";
let s2 = "my" - " test";
let s3 = "my" * " test";
let s4 = "my" / " test";
console.log(s);
console.log(s2);
console.log(s3);
console.log(s4);


// 2. 其中一个运算元是字符串
// 只要有任意一个运算元是字符串，那么另一个运算元也将会被隐式的转为字符串
let a = "1" + 2;
let a1 = 1 + "2";
console.log(typeof a, a);
console.log(typeof a1, a1);

// 等式右侧，从左到右运算，先算 2+2，因为两个都是number类型，所以结果是数值4，然后再和字符串1连接
let a2 = 2 + 2 + '1';
console.log(typeof a2, a2);

// 第一个运算元就是字符串，所以得到的结果是'22'，然后'22'再和1连接，结果是'221'
let a3 = '2' + 2 + 1;
console.log(typeof a3, a3);


// 3. 表单中获取的数值一般都是String类型，如果对他们求和呢？
let aa='1', bb='2', cc='3';
// 第一种
let total = +aa + +bb + +cc;
console.log(total);
// 第二种（常规做法）
let total2 = Number(aa) + Number(bb) + Number(cc);
console.log(total2);


// 缩写
let d = 5;
d += 2;
console.log(d);

let e = 2;
e *= 3 + 5;
console.log(e);