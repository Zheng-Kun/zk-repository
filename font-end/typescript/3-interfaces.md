# Interfaces 接口

TypeScript的核心原则之一就是对值的类型结构进行检查。也被称为“鸭式辩型”或“结构性子类型化”，接口扮演的角色是给这些类型命名，是一种代码中或者与外部代码定义契约的强大方式（用来定义类的结构）

## 一个简单的interfaces

```ts
interface LabelValue{
  label: string;
}
function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label)
}
let myObj = { label: "string", size: 10 }
printLabel(myObj)
```

- 编译器仅仅检查所需的属性与其类型，实际上我们的对象有更多的属性。
- 类型检查不关心属性出现的顺序

## Optional Properties 可选属性

- 可选属性的语法 `<name>?: <type>;`
  
  ```ts
  interface SquareConfig { // color 和 width 均为可选属性
  color?: string;
  width?: number;
  }
  function createSquare(config: SquareConfig): {color: string; area: number} {
  
  config.height = '' // 这行代码编译时会报错，访问了接口定义之外的属性
  // ……
  return { color: '', area: 0 }
  }
  createSquare({width: 10})
  ```

## Readonly properties 只读属性

- 只读属性的语法 `readonly <name>: <type>;`
  
  ```ts
  interface Point {
  readonly x: number;
  readonly y: number;
  }
  ```

let p1: Point = {x: 1, y 1}
p1.x = 2 // 这行代码会报错 ，修改只读属性的值

```
### 数组只读
- 通过`ReadonlyArray<type>`来定义只读数组
```ts
let a: Array<number> = [1,2,3,4,5]
let b: ReadonlyArray<number> = a
b.push(1) // 只读数组的push等所有操作数组的方法都会报错
a = b // 这行也会报错
```

- `Array` 和 `ReadonlyArray` 可以认为是两个不同的类型，因此不能将只读数组赋值给普通数组, 但是我们可以通过类型断言赋值
  
  ```ts
  a = b as Array<number>
  a = b as number[]
  a = <number[]>b
  ```
  
  ### readonly 与 const
- 若是一个变量，则使用`const`
- 若是一个属性，则使用`readonly`

## Excess Property Checks 冗余属性检测

直接上代码看：

```ts
interface LabelValue{
  label: string;
}
function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label)
}
let myObj = { label: "string", size: 10 }
printLabel(myObj)
// 当我们将代码写为如下时，ts编译会报错
printLabel({ label: "string", size: 10 })
```

- TypeScript编译器会对对象字面量特殊处理，进过“冗余属性检测”，当对象字面量中存在任何不包含在目标`interface`属性类型中时就会报错

- 我们可以使用以下写法绕开冗余属性检测
  
  1. 类型断言
     
     ```ts
     printLabel({ label: "string", size: 10 } as labelValue)
     ```
  
  2. 先赋值给变量(因为冗余属性检测只会再使用对象字面量时触发)
     
     ```ts
     let myObj = { label: "string", size: 10 }
     printLabel(myObj)
     ```
     
     - 这种方式仅仅在传入的对象与定义的interface之间有公共属性时才生效，如果没有公共属性，ts编译器依然会报错
       
      ```ts
      interface LabelValue {
        label?: string;
        size?: number;
      }
      let myObj = {color: 'white'}
      printLabel(myObj)
      // Type '{ colour: string; }' has no properties in common with type 'SquareConfig'
      ```
  
  3. 定义“任意属性”（？字符串索引签名）
     
     ```ts
     interface LabelValue{
     label: string;
     // [propName: string] 定义任意属性取 string 类型的值
     ```
  
    [propName: string]: any;
  }
  
  ```
    - **一旦定义了任意属性，确定属性和可选属性的类型都必须是任意属性类型的子集**
    ```ts
    interface LabelValue {
      label: string;
      size?: number;
      [propName: string]: string;
    }
    let obj: LabelValue = {
      label: 'str',
      size: 10, // size 的type 是 number， 不是 任意属性类型string的子类型，编译时会报错
      other: 'str',
    }
  ```
  
  - 可以使用联合属性解决上述问题
    
    ```ts
    interface LabelValue {
    label: string;
    size?: number;
    [propName: string]: string | number;
    }
    let obj: LabelValue = {
    label: 'str',
    size: 10,
    other: 'str',
    }
    ```

- 一般情况下，我们并不需要绕开冗余属性的检测，当需要传入额外的属性时我们应当考虑该属性是否因该定义在interface中

## Function Types 函数类型

- `interface`除了可以描述JavaScript对象可以采用的形状。除了使用属性描述对象，interface也可以描述函数类型
- 描述函数时，我们需要给函数定义一个调用签名，包括函数的参数类型以及返回的类型
  
  ```ts
  interface GetSquare{
  (color: string, width: number): number;
  }
  ```

let getSquare: GetSquare;
getSquare = function(color: string, width: number) {
  return width * width
}

```
- 定义的函数参数名不必与interface中的参数名相同，ts会按照位置检查函数的参数
```ts
getSquare = function(colorName: string, squareWidth: number) {
  return squareWidth * squareWidth
}
```

- 或者我们定义函数时可以不写参数的类型，应为我们已经在interface中定义过，而且函数赋值给了该类型的变量
  
  ```ts
  getSquare = function(colorName, squareWidth) {
  return squareWidth * squareWidth
  }
  ```
- 如果函数的返回值和定义的函数类型中不同，ts编译时也会报错

## Indexable Types 可索引类型

- 使用interface描述可索引类型如`stu[10]`,`label["name"]`,  可索引类型具有“索引签名”，该签名描述了可用于索引对象的类型以及建立索引时对应的返回类型
  
  ```ts
  interface StringArray{
  ```

  [index: number]: string

}
let myArr: StringArray = ['haha', 'heihie']
let myStr = myArr[1]

```
- 索引签名支持两种类型：数字和字符串。 也可以同时使用两种类型索引签名，但是**同时使用数字和字符串的索引签名时，数字索引返回的类型必须是字符串索引类型返回类型的子类型**，应为当使用数字索引时，JavaScript实际上会将其转换为字符串，因此索引`100`（Number）和索引`‘100’`（String）实际上是等效的
```ts
interface fObj: {
  name: string
}
interface cObj extends fObj {
  age: 10
}
interface myObj { // 将会报错，number索引返回的类型必须是string返回类型的子类型
  [x: number]: fObj,
  [x: string]: cObj
}
```

- 字符串索引签名能够很好的描述`dictionary`模式，也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了`obj.property`和`obj["property"]`两种形式都可以
  
  ```ts
  interface mObj {
  ```

  [index: string]: number,

  length: number,
  name: string, // 返回值与字符串索引类型返回不一致 
}

```
- 索引签名也可以设置只读，防止给其赋值操作
```ts
interface mObj {
  readonly [index: number]: string;
}
let myArr: mObj = ['haha', 'heihei']
myArr[1] = 'hehe' // 修改只读属性编译时会报错
```

## Class Types 类类型

### Implementing an interface 实现接口

- 可以显示地强制类满足特定契约地方法
  
  ```ts
  interface ClockInterface {
  currentTime: Date;
  }
  ```

class Clock implements ClockInterface {
  currentTime: Date = new Date()
  constructor(h: number, m: number) {}
}

```
- 也可以描述类需要实现地方法
```ts
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date()
  setTime(d: Data) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}
```

### Difference between the static and instance sides of classes  类的静态部分与实例部分的区别

- 类有两个类型：静态部分的类型与实例部分的类型。用构造器签名定义一个接口，并尝试创建一个类去实现接口时会得到一个错误：
  
  ```ts
  interface ClockConstructor {
  new (hour: number, minute: number);
  }
  ```

class Clock implements ClockConstructor {
  // Class 'Clock' incorrectly implements interface 'ClockConstructor'.
  //类“Clock”错误实现接口“ClockConstructor
  // Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
  // 类型“Clock”提供的内容与签名“new (hour: number, minute: number): any”不匹配。
  currentTime: Date;
  constructor(h: number, m: number) {}
}

```
- 当类实现接口时，只检查类的实例部分的类型，而`constructor`位与类的静态部分，所以不会被检查
- 当我们需要处理类的静态部分，如下 ?????????????????
```ts
interface ClockConstructor {
  new (h: number, m: number) : ClockInterface;
}

interface ClockInterface {
  trick(): void;
}

function createClock(
  ctor: ClockConstructor, // ？？？？？？？？？？？？？
  hour: number, 
  minute: number
): ClockInterface {
  return new ctor（hour， minute）
}

class DigitalClock implements ClockInterface{
  constructor(h: number, m: number) {}
  tick() { console.log('deep deep')}
}

let digital = createClock(DigitalClock, 12, 17);
```

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
```

## Extending interface 继承接口

- 和类相同，接口也可以继承：
  
  ```ts
  interface Shape {
  color: string;
  }
  ```

interface Square extends Shape {
  sideLength: number;
}

```
- 甚至可以同时继承多个接口
```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}
```

## Hybrid Types 混合类型

- TypeScript 可以使一个对象具有多种类型，如jQuery中的`$`,当我们如`$("#id")使用时它是一个函数，而我们如`$.ajax()`这样使用是它是对象
  
  ```ts
  interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
  }
  function getCount(): Counter {
  let counter = <Counter> function (start: number) {};
  // let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.rest = function() {};
  return counter;
  }
  ```

let c = getCount()
c(10)
c.interval = 10
c.rest()

```
## Interfaces Extending Classes 接口继承类
- 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。
```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
// SelectableControl 有 state

class Button extends Control implements SelectableControl {
    select() { }
}


class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```
