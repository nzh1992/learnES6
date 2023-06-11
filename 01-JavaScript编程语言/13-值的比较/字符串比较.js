/*
* 字符串比较
* */


// 字符串比较
// 在比较字符串时，JS使用字典顺序进行判断
// 严格意义上讲，不是字典顺序，而是Unicode编码顺序。
let s1 = "a";
let s2 = "b";
console.log(s1 > s2);

// 如果字符串有多位，那么会逐个位比较, s1[n] 和 s2[n]比较
// 如果多出来的位数将忽略不计。
let s3 = "abc";
let s4 = "abde";
console.log(s4 > s3);

