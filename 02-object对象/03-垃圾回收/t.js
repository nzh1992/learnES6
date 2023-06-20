/*
* JS垃圾回收
*
* JS的内存管理时自动的、无形的。
* */


/*
* 可达性（Reachability）
* 简言之，"可达"值是那些以某种方式可以访问或可用的值，他们一定是存储在内存中的。
*
* 1.下列固有的可达值的基本集合，不能被释放。
* - 当前执行的函数，它的局部变量和参数
* - 当前嵌套调用链上的其他函数、它们的局部变量和参数
* - 全局变量
* 上述这些值被称作 根（roots）
*
* 2.如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。
* 例如，全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则该对象被认为是可达的。
* 而且它引用的内容也是可达的。
* */


/*
* 垃圾回收器
* JS引擎中，有一个被称作垃圾回收器的守护线程在后台执行，它监控着所有对象的状态，并删掉哪些已经不可达的。
*
* 算法：
* 垃圾回收的基本算法被称为"mark-and-sweep"。
* 定期执行以下"垃圾回收"步骤：
* - 1.垃圾收集器找到所有的根，并"标记"（记住）它们
* - 2.然后遍历并"标记"来自它们的所有引用。
* - 3.然后它遍历标记的对象，并标记对象们的引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。
* - 4.如此操作，知道所有可达的引用都被访问到。
* - 5.没有被标记到的对象会被删除。
* */


/*
* 优化建议：
* - 分代收集（Generational Collection）：
*   对象被分为两组："新的"和"旧的"。在典型的代码中，许多对象的声明周期很短：他们出现、完成他们的工作并很快死去，
*   因此在这种情况下，跟踪新对象并将其从内存中清除是有意义的。那些长期存活的对象会变得"老旧"，并且被检查的频次也会降低。
*
* - 增量收集（Incremental Collection）：
*   如果有许多对象，并且我们视图一次遍历并标记整个对象集，则可能需要一些时间，并在执行过程中带来明显的延迟。
*   因此，引擎将现有的整个对象集拆分为多个部分，然后将这些部分逐一清除。这样就会有很多小型的垃圾收集，而不是一个大型的。
*   这需要它们之间有额外的标记来追踪变化，但是这样会带来很多微小的延迟。
*
* - 闲时收集（Idle-time Collection）：
*   垃圾收集器只会在CPU空闲时尝试运行，以减少可能对代码执行的影响。
* */