enum Color {
  Blue = 2,
  Red,
  Green
}
let c: Color = Color.Red
let cName: String = Color[2]

console.log(c, cName) // 3 'Blue'


let uk: unknown = 1
uk = false
uk = 'str'
console.log(uk)
