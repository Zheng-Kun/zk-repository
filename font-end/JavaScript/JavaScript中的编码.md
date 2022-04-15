## JavaScript 中的编解码

### 一、`escape()` 与 `unescape()`

> `escape()` 用于对字符串编码, 不会对 ASCII 字母和数字进行编码，也**不会**对下面这些 ASCII 标点符号进行编码： `*` `@`  `-` `_`  `+`  `.` `/`  `。`其他所有的字符都会被转义序列替换。
> `unescape()` 用于对`escape()` 编码的字符串解码。

- **该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。应该使用`encodeURI()`或者`encodeURIComponent()`代替**

### 二、`encodeURI()` 与 `decodeURI()`
> `encodeURI()` 用于对整个URL的编码 `decodeURI()`为对应的解码函数
- `encodeURI()`会替换以下字符外的所有字符

| 类型 | 包含 |
| --- | --- | 
| 保留字符 | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$` |
| 非转义的字符 | `字母` `数字` `-` `_` `.` `!` `~` `*`  `'` `(` `)` |
| 数字符号 | `$`  |

### 三、`encodeURIComponent()`  与 `decodeURIComponent()`
> `encodeURIComponent()` 用户对`URL`中的参数进行编码
- 它对除上表中非转义字符以外的所有的字符进行编码
> `decodeURIComponent()`为对应的解码函数

### 四、 `btoa()`  与 `atob()`
> `btoa()` 用于从`String`对象中创建一个`base-64` 编码的`ASCII` 字符串，
- 在多数浏览器中，使用`btoa()` 对`Unicode`字符串进行编码都会触发`InvalidCharacterError`异常。
（由于这个函数将每个字符视为二进制数据的字节，而不管实际组成字符的字节数是多少，所以如果任何字符的码位超出 `0x00 ~ 0xFF` 范围，则会引发 `InvalidCharacterError` 异常）
> `atob()` 为对应的解码函数

