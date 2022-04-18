var Color;
(function (Color) {
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
var c = Color.Red;
var cName = Color[2];
console.log(c, cName); // 3 'Blue'
var uk = 1;
uk = false;
uk = 'str';
console.log(uk);
