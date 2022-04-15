# TypeScript基本类型

[TOC]

## Boolean 布尔值

(true/false)

```ts
let isDone: boolean = true
```

## Number 浮点数

```ts
let decimal: number = 13 // 浮点数
let hex: number = 0xff03 // 十六进制
let binary: number = 0b1010 // 二进制
let octal: number = 0o744 // 八进制
let big: bigint = 1000n // bigint
```

## String 字符串

```ts
let str: string = 'hello' // ts 与 js 一样，字符串可是使用单/双引号包裹
let age: number = 10
let say: string = `i'm ${age} years old` // 与js一样，也可以使用反引号包裹模板字符串
```

## Array 数组

以下两种方式等效

```ts
let numberList: number[] = [1, 2, 3]
let stringList: Array<string> = ['1', '2', '3']
```

## Tuple 元组

元组类型可以表示一个已知元素数量和类型的数组

```ts
let list: [string, number] = ['1', 2]

list[3] = 0 // 访问已知下标之外的元素会报错
```

## Enum 枚举

对js标准数据类型的补充

```ts
enum Color {
  Red,
  Blue,
  Green
}
let c: Color = Color.Blue // 1
```

- 默认情况下，枚举值的下标编号从 0 开始
- 但是我们可以手动更改
  
  ```ts
  enum Color {
  Red = 2,
  Blue,
  Green
  }
  let c: Color = Color.Blue // 3
  ```
- 甚至可以手动更改所有值的下标
  
  ```ts
  enum Color {
  Red = 1,
  Blue = 4,
  Green = 0
  }
  ```
- 可以从枚举中通过数字得到值的名称
  
  ```ts
  enum Color {
  Red,
  Blue,
  Green
  }
  let cName: String = Color[1] // 'Blue'
  ```

## Unknown 未知

- 当不确定变量类型，我们期望变量可以是任何值，使用`unknown`类型
  
```ts
let uk: unknown = 1
uk = false
uk = 'str'

let a: number = uk // 将会报错： "Type 'unknown' is not assignable to type 'number'."
```

- 如果一个变量的类型为`unknown`，可以通过`typeof`对其进行类型检查
```ts
declare let maybe: unknown
if(maybe === true) {
  // 此时ts知道maybe为一个boolean
  let a: boolean = maybe // It's Ok
}
if(typeof maybe === 'string') {
  let b: string = maybe // It's Ok
}
```

## Any 任何

- 允许赋值为任意值
  
  ```ts
  let a: any = 7
  any = "str" // It's Ok
  ```
- 如果在声明变量时没有指定类型，它会被识别为任意值`any`
  
  ```ts
  let a
  a = 1
  a = '1'
  // 等价于
  let a: any
  a = 1
  a = '1'
  ```
- 任意类型值的任意属性和方法都允许访问,ts不会检查它的类型或者存在（使用`any`相当于退出`TypeScript`的类型检测）// ts编译时不会报错
  
  ```ts
  let a: any = 7
  a.b = 4
  a.b.c = 5 
  a.getB()
  ```
  
  **应当尽量避免使用`any`类型**

## Void 空

- void表示没有任何类型，可以将其视为没回返回值函数的返回类型
  
  ```ts
  function helloWord(): void {
  console.log('hello word')
  }
  ```
- 声明`void`类型的变量，只能给其分配`undefined`或`null`(在`--strictNullChecks`未指定的情况下)

## Null 空

```ts
let n: null = null
```

## Undefined 未定义

```ts
let u: undefined = undefined
```

- 默认情况下， `null`和`undefined`是其他所有类型的子类型，但是，当使用`--strictNullChecks`标志时，`null`和`undefined`只能分配给`unknown`，`any`以及它们各自的类型（一个例外`undefined`是也可以分配给`void`）

## Never 绝不

- `never`表示永远不可能出现值的类型，总是抛出异常的函数的返回类型，永远不会返回的函数表达式/剪头函数表达式的返回类型
- `never` 是所有类型的子类型，可以赋值给所有类型，
- 没有类型是`never`的子类型，没有类型（`never`本身除外）可以赋值给`never`
  以下的函数皆返回`never`类型
  
```ts
function error(message: string): never {
  throw new Error(message)
}

function fail(){
  return error('failed')
}

function infiniteLoop(): never {
  while (true) {}
}
```
## Object 对象
- `Object` 表示非原始类型，除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型
- 使用`object`类型，可以很好地表示`Object.create`类似的API
```ts
declare function create(o: object | null): void;
// OK
create({ prop: 0 });
create(null);

create(42);
//Argument of type '42' is not assignable to parameter of type 'object | null'.
create("string");
//Argument of type '"string"' is not assignable to parameter of type 'object | null'.
create(false);
//Argument of type 'false' is not assignable to parameter of type 'object | null'.
create(undefined);
//Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
```

> 通常情况下，我们使用不到`object`类型

```ts
let a: { name: string, age: number} // 限制a对象有且只有这俩属性
a = {
  name: 'haha',
  age: 18
}
let b: { name: string, age?: number} // age 属性可选
let c: { name: string, [propName: string]: any} // 必须包含name属性

let d: (a: string, b: number) => number // d 限制函数的参数和返回值
let e: Array<string>
let f: string[]
```

## 类型断言

当我们知道变量的类型比当前类型更加具体时，可以是使用类型断言，告诉编译器具体的类型，当于js中的类型转换（仅仅在ts编译器使用，它不执行数据的特殊检查或重构，对运行时没有影响）

类型断言有两种写法：

1. `as`语法
   
   ```ts
   let unknownVal: unknown = 'hello'
   let len: number = (unknownVal as string).length
   ```
2. 尖括号写法
   
   ```ts
   let unknownVal: unknown = 'hello'
   let len: number = (<string>unknownVal).length
   ```
   
   **`tsx`中必须使用`as`语法**,尖括号语法会被识别为`ReactNode`
