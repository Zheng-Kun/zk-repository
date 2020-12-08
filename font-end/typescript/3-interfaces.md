# Interfaces 接口
TypeScript的核心原则之一就是对值的类型结构进行检查。也被称为“鸭式辩型”或“结构性子类型化”，接口扮演的角色是给这些类型命名，是一种代码中或者与外部代码定义契约的强大方式
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

## 可选属性
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

## 只读属性
- 只读属性的语法 `readonly <name>: <type>;`
```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

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

## 冗余属性检测
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

  3. 定义“任意属性”（？字符串索引签名）
  ```ts
  interface LabelValue{
    label: string;
    // [propName: string] 定义任意属性取 string 类型的值
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
      size: 10, // size 的type 是 number， 不是 任意属性类型string的子类型，编译是会报错
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
    


