/*
* 1.alert函数
* 弹出带有信息的小窗口被称为"模态窗"(modal)。
* modal意味着用户不能与页面的其他部分进行交互，直到他们处理完窗口（直到用户点击的确定按钮）。
* */


/*
* 2.prompt函数
* 浏览器会显示一个带有文本消息的模态窗，还有input、确定/取消按钮。
* 当按取消 或者 按ESC键 是，result为null。
* */
let result = prompt("I'm title.", "default value.");
console.log(typeof(result), result);


/*
* 3. confirm函数
* 显示一个带有question以及确定/取消两个按钮的模态窗口。
* 点击确定，result2为true
* 点击取消，result2为false
* */
let result2 = confirm("what's up?");
console.log(typeof(result2), result2);