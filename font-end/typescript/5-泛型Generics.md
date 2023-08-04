# TypeScript 泛型
> 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，在使用时再制定类型。

### 单个类型参数
```ts
function createArray<T>(length: number, value: T): Array<T> {
   let result: T[] = [];
   for(let i = 0; i < length; i++) {
      result[i] = value
   }
   return result
}

```
上例在函数名后添加了`<T>`，`T` 用来代指任意输入的类型

### 多个类型参数

```ts
function swap<T, U>(tuple[T, U]): [U, T] {
   reutrn [ tuple[1], tuplep[0]]
}

```

### 泛型约束

```ts
interface Lengthwise {
   length: number;
}

function loggingIdentify<T extend Lengthwise>(arg: T): T {
   console.log(arg.length)
   return arg
}

```
上例中使用了`extend `约束了泛型`T`必须符合`Lengthwise`的形状，所以我们可以在函数中使用 `.length` 而不报错

### 泛型接口
也可以使用含有泛型的接口来定义函数

```ts
interface CreateArrayFunc {
   <T>(length: number, value: T): Array<T>
}
   
let createArray: CreateArrayFunc
createArray = function <T>(length: number, value: T): Array<t> {
   let result: T[] = []
   for(let i = 0; i < length; i++) {
      result[i] = value
   }
   return result
}
```
也可以讲泛型参数提前到接口名：

```ts
interface <T>CreateArrayFunc {
   (length: number, value: T): Array<T>
}
let createArray: CreateArrayFunc
createArray = function <T>(length: number, value: T): Array<t> {
   let result: T[] = []
   for(let i = 0; i < length; i++) {
      result[i] = value
   }
   return result
}

```
###  泛型类
泛型也可用于类型的定义中

```ts
class GenericNumber<T> {
   constructor(public zeroValue: T, public add: (x: T, y: T) => T) {
      this.zeroValue = zeroValue
      this.add = add
   }
}
new GerericNumber(0, function (x, y) => x + y)

```
### 泛型参数的默认类型
TS 2.3 之后，可以使用泛型中的参数类型制定默认类型，如果使用时泛型是没有在代码中直接指定类型参数，也无法推测类型时，默认类型将会生效

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
   let result: T[] = [];
   for (let i = 0; i < length; i++) {
     result[i] = value;
   }
   return result;
}

```






