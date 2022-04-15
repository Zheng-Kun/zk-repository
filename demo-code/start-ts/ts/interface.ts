/* interface SquareConfig {
  color?: string;
  width?: number;
  readonly name?: string;
  // [propName: string]: any
}
function getSquare(config: SquareConfig) : number{
  if(!config.color) { config.color = 'blue'}
  if(!config.width) { config.width = 10}
  return config.width * config.width
}
getSquare({width: 10, name: 'square'})
getSquare({width: 10, name: 'sd', other: 'square'} as SquareConfig)
getSquare({haha: true})
let obj = {
  haha: true,
  // color: 'green'
}
getSquare(obj) */

// 可索引类型
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
interface NotOkayB {
  [x: number]: Dog;
  [x: string]: Animal;
}

interface A {
  [index: number]: string;
}
let a: A = ['1', '2']

interface B {
  [index: number]: number;
  length: number;
  name: string;
}

interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}
