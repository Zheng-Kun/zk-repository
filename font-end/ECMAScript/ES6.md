# ES6

## 尾调用优化

> 尾调用优化是ES6新增的引擎优化

> 目前绝大多数浏览器与JS引擎都不支持尾调用优化
>
> https://github.com/tc39/proposal-ptc-syntax
>
> https://v8.dev/blog/modern-javascript#proper-tail-calls
>
> https://2ality.com/2015/06/tail-call-optimization.html#checking-whether-a-function-call-is-in-a-tail-position
>
> 我们可以在 [ECMAScritp 6 compatibility table](https://kangax.github.io/compat-table/es6/) 查看浏览器对ES各版本特性的支持情况

尾调用(Tail Call)：

百度百科解释：计算机科学里，尾调用是指一个函数里的最后一个动作是一个函数调用的情形：即这个调用的返回值直接被当前函数返回的情形。

```js
// 正确的尾调用
function fun1() {
  return fun2()
}

// 错误的尾调用
function fun1() {
  return fun2() + 1 // 调用之后多了计算操作
}

// 错误的尾调用
function fun1() {
  const x = fun2() // 调用之后多了赋值操作
  return x
}

// 错误的尾调用
function fun1() {
  fun2() // 没有返回调用函数的返回值
}

//? 错误的尾调用(不确定)
function fun1() {
  const a = 1 
  return fun2(a) // 尾调用不访问当前栈帧的变量
}
```

