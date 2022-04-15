### Cookie
[TOC]

### 特性对比

|  | `cookie` |`sessionStorage`  | `localStorage` |
| --- | --- | --- | --- |
| 存储大小 | 4k左右 20条 | 5m 或更大 | 5m 或更大 |
| 有效期 | 设置的时间或浏览器关闭前 | 浏览器关闭前 | 不过期 |
| 作用域  | 所有同源的窗口 | 单标签页内限制（单标签页内所有同源页面） | 所有同源窗口 |
| 同源策略 | 主机名，忽略端口号与协议 | 主机名，端口，协议 | 主机名，端口，协议 |
| 存储类型 | string | key-value（value为string） | key-value （value为string） |
| 与服务端交互 | 会附带在每次http请求头中发送 | 本地数据，与服务端无交互 | 本地数据，与服务端无交互 |
| 变化监听 | 无法监听| 无法监听| 可监听 |
| 使用场景 | 需要再每次请求都要携带的信息（身份认证信息，会话状态管理） | 需要存储在每次会话中的数据（例如存储用户编辑框的内容） | 需要持久化存储的数据（用户的个性化设置） |


### 属性选项

#### Expire 与 Max-age
`Expires`用来设置`cookie`过期的日期， 它必须是“GMT”格式的时间
`Max-age` 用来设置`cookie`的存活时间， 
`Max-age`取值, 以秒为单位（默认值为 -1）:
1. `负数` : 会话`cookie`
2. `0`： 删除`cookie`
3. `正数`： cookie的有效时间

#### Domian
用来设置`Cookie`的域
- 不能设置为顶级域名
- 可以设置为本域或者本域的父域
- 默认值为网页所在的域名（本域）
如: 当页面的地址为`test.com` 
可以设置为 `test.com` 或者 ` .test.com`
不能设置为 `www.test.com` 或者 `.com`  或者 `com`
页面地址为 `www.test.com` 可以设置为 `test.com` 或者 `.test.com`

#### Path
用来设置`cookie` 的路径
- 可以设置为当前路径或者当前路径的上级路径
- 默认值为页面当前路径

##### Domain 和 Path 共同限定了cookie的作用域
**当前页面的`Path`与`cookie`的`Path`相同或者为`cookie`中`Path` 的子路径**
并且
**当前页面的域与`cookie`中的`Domain`一致或者为其子域的时候**
可以使用这条cookie

#### Secure
用来设置 `cookie` 是否只能在安全的请求中携带。（请求是否为`https`协议）
- 默认不会带`secure`属性（为空） 因此一般情况下不论是`https` 还是 `http` 协议的请求，`cookie` 都会被发往服务端
- 当`cookie`中包含 `secure`的时候只能在`https` 协议的情况下才会发送到服务端
如 `document.cookie = "key=value; secure";`
- **只有当前页面协议为`https`是才能设置`secure` 类型的`Cookie`**

#### httpOnly
用来设置`cookie` 是否可以通过`js`去访问（读取，修改，删除）
- 默认不会带`httpOnly` 属性
- 当`cookie`中带 `httpOnly` 时客户端不能通过`js`读取到这条`cookie`
- **`httpOnly` 只能通过服务端去设置**
比较敏感的`cookie`例如用来验证用户身份的`cookie`需要这个`httpOnly`属性以保证安全

#### hostOnly
设置cookie的域
当带有hostOnly属性的cookie只能在网站的域与domain 域完全相同的情况下才会发送
否则cookie 允许在domain 的子域使用
如果不设置domian 是 hostOnly为true
如果设置cookie时有domain则 hostOnly 为 true
```js
document.cookie="key=value; domain=allhistory.com"
```

#### SameSite
定义跨域cookie如何发送。
可以取的值：
1. `Strict` （如果不设置默认为`Strict`） 所有的跨域请求都阻止发送`cookie`
2. `Lax` 只有在危险HTTP方法（`POST`）发送跨域请求时才会阻止发送`cookie`
设置格式：
```js
document.cookie="key=value; SameSite=Lax"
```
**注意：**
> chrome80 以及之后的版本会将SameSite的默认值设置为`Lax`, 如果不想限制cookie 要手动设置为`None`,并且只有同时存在`Secure`属性时`None`的设置才会生效，否则会被浏览器忽略。
#### 操作cookie
##### 客户端设置cookie
```js
document.cookie="name=junchen; expires=Thu, 26 Feb 2019 11:50:25 GMT; domain=test.com; path=/";
```
**一次只能设置一条`cookie`**，如果需要设置多条`cookie`需要多次执行`document.cookie` 语句
##### 修改cookie
```js
document.cookie="name=zhengkun; expires=Thu, 26 Feb 2019 11:50:25 GMT; domain=test.com; path=/";
```
**修改`cookie`时要注意`path`和`domain`的值相同，否则会重新生成一条`cookie`**
##### 删除cookie
与修改的原理相同，将`expire`设置为过去的时间，或者设置`max-age`为`0`
**注意`path`和`domain`的值要相同**

##### 服务端设置cookie
通过响应头中的`set-cookie`给客户端设置`cookie`
修改和删除也是和`js`操作原理一致，重新设置覆盖即可
```http
Set-Cookie: bearer=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrdW4xODk4NyIsImNyZWF0ZWQiOjE1NTMxMzQ5OTQ1NzYsImV4cCI6MTU1MzczOTc5NCwidXNlcmlkIjoxODk4fQ.vrymZci3PKrY7eQNr2iLv7T894QeqRzdYqnnOBjSqoD7hvBC8zIquMreHYX_BAqaPJUOVUlZgi4V14Wri4J78A; Max-Age=604800; Expires=Thu, 28-Mar-2019 02:23:14 GMT; Path=/; HttpOnly
```

**设置cookie时如果键值中可能出现"`,`"，"`;`"，"`  `"(空格)时需要对键值进行编码，可以使用
encodeURI()/decodeURI()等编解码方式**


### cookie的跨域
- 默认情况，当请求发生跨域时`cookie`不会被传到服务端
- 跨二级域， `a.text.com` 在设置`cookie` 的`domain`中设置  `.text.com` 这样就可以在 `b.text.com`中使用这条`cookie`
- 跨域资源共享CORS携带`cookie`，设置`withCredentials`为`true`即可让该跨域请求携带 `Cookie`
```js
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```
``` js
// jquery
$.ajax({
   url: url,
   xhrFields: {
      withCredentials: true
   }
 });
```
需要服务端设置

`Access-Control-Allow-Origin:` `origin`的值 或者 `*` 
`Access-Control-Allow-Credentials：true` 表示允许携带`cookie` （如果不允许则不设置此字段）

**Cookie在CORS中也遵守同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传**
- 通过代理服务器跨域



