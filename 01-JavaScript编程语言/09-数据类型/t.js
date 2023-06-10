/*
* JS中的数据类型
*
* 共有8中基本的数据类型（7种原始类型，1种引用类型）
* */

// 注意：
// 由于JS是动态类型(dynamically typed)语言，所以同一个变量可以存放不同类型的值。


/*
* 1. Number类型
* 代表整数和浮点数。
* */
let n1 = 123;
let n2 = 12.345;

// 特殊数值（special numeric values）
// Infinity(无穷大)
console.log(1 / 0);

// -Infinity(负无穷大)

// NaN，代表一个计算错误
// 例如，数值 除以 字符串
console.log(2 / "cc");

// NaN是粘性的，任何对NaN进行的运算都会返回NaN
console.log(NaN - 1);


/*
* 2. BigInt 类型
* 表示任意长度的整数。
* number类型无法安全的表示大于2^53-1 或 小于 -2^53-1的整数。
* 所谓安全就是，超过了上述边界就会丢失精度。
* */
let myBigIntValue = 1000n;
console.log(myBigIntValue);


/*
* 3. String 类型
* 代表字符串类型。字符串必须使用单引号、双引号、反引号括起来。
* */
let s1 = 'aaa';
let s2 = "aaa";
let s3 = `aaa`;

// 反引号是功能扩展引号
// 我们可以将变量和表达式包装在${...}中，使其嵌入字符串
let s4 = `hello, ${s1}`;
console.log(s4);


/*
* 4. Boolean 类型
* 只有两个值true， false
* */
let isOpen = true;
console.log(isOpen);

// 可以作为比较结果
let isGreater = 4 > 1;
console.log(isGreater);


/*
* 5. null 值
* 只有一个值null。
* 强调对一个不存在的object的引用，也称为"null指针"。
* */


/*
* 6. undefined 值
* 表示未被赋值。例如定义了一个对象，但是没有赋值。
* */
let sss;
console.log(sss);


/*
* 7. Object类型
* - Object：用于存储数据集合和更复杂的实体。
* */


/*
* 8. Symbol类型
* - Symbol：用于创建对象的唯一标识符。
* */


/*
* typeof 运算符
* 返回参数的类型。
* */
// 这是官方承认的错误，但为了兼容性而保留了下来。
console.log(typeof null);

// typeof obj，也可以写成typeof(obj)
console.log(typeof(123n));


// 课后练习
let name = "Ilya";
console.log(`hello ${1}`);   // output: "hello 1"
console.log(`hello ${"name"}`);      // output: "hello name"
console.log(`hello ${name}`)         // output: "hello Ilya"
