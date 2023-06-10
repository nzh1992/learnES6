/*
* 1.现代的标记（markup）
* 有一些目前很少用到的特性(attribute)，但是在老代码中依然可以看到它们的身影。
* - type：在HTML4中，要求script标签有type属性，一般值为"text/javascript"。目前不再需要
* - language：这个特性为了显示脚本使用的语言，默认语言就是JavaScript。目前不再需要
* */


/*
* 2.外部脚本
* 在html中加入，例如:
* <script src="/path/to/script.js"></script>
*
* 其中js文件路径可以是相对路径，也可以是绝对路径。
* 还可以是一个URL。
* */


/*
* 3.将JS代码放入一个脚本有什么好处？为什么要这么做，而不是写入HTML中？
* 1. 首先是便于管理，将交互和页面结构区分开来。
* 2. 独立文件会被浏览器缓存，实际上只会加载一次，使页面加载速度更快。
* */


/*
* 4.script标签同时设置了src特性和内部包裹代码会怎么样？
* 内部包裹的代码不会执行，而通过src特性引用的代码会执行。
* */
// console.log("just output.")
alert("window alert msg...")