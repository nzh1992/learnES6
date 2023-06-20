/*
* 可选链，?.
* 如果?.前面的值为undefined或null，它会停止运算并返回undefined
* */

let user = {
    address: {
        street: "baker street."
    }
};
console.log(user?.address?.street);


// 调用可能不存在的函数
// ?.()
// 如果方法不存在，返回值为undefined
let userAdmin = {
    admin() {
        console.log("admin function.");
        return 30
    }
}

result = userAdmin.admin2?.();
console.log(result);


// 获取可能不存在的属性
let d = {
    aa: 10
}

console.log(d?.["bb"]);