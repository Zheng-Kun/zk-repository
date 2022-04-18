# JS代码规范（from: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)）

## 文件

### 文件名
文件名只能使用小写字母，可以包含`_` 或者 `-` ，但不能包含其他字符

### 文件编码
必须使用 UTF-8 编码

### 特殊字符

#### 1.空白符
除了行终止符（换行符）之外， ASCII 水平空格字符(0x02)是唯一出现在源文件的空白符。因此：
 - 字符传种所有其他空格字符均需要被转义
 - 缩进不应该使用制表符
 #### 2.特殊的转义序列
 对于需要转义的字符使用（\' \\  \'  \" \n \r \t \v \b \f）而不是使用八进制的转义如（\x0a \u000a \u{a}）

 #### 3. 非ASCII字符（Non-ASCII）
 对于 non-ASCII 字符，可以使用实际的Unicode字符（∞）， 也可以使用等效的十六进制或Unicode转义（\u221e）

> 在使用Unicode转义甚至使用实际的Unicode字符时，加上解释性的注释是非常有用的

```javascript
/* 最好(Best)： 没有注释也很清晰 */
const units = 'μs';

/* 允许(Allowed)： 但是没有必要，因为μ 是可打印的字符 */
const units = '\u03bcs'; // 'μs'

/* 好(Good)：对于无法打印（non-printable）的字符，请使用转义符，并加上注释以保持清晰。 */
return '\ufeff' + content;  // 在前面加上一个序号标记（字符）

/* 差(Poor): 读者不知道这个字符是什么 */
const units  = '\u03bcs'

```



> 不要担心某些程序可能无法正确处理非ASCII字符而使代码的可读性降低。如果发生这种情况，那就是这个程序的锅，因该由程序处理





#### 4.