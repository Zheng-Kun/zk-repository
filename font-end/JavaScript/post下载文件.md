



# POST请求下载文件
## 通过`URL.createObjectURL()` 下载流文件

```js
//截取文件名
const fileName = decodeURIComponent(config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(0,-1).join('')); // 根据接口返回情况拿到文件名
const suffix = config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(-1)[0];
const blob = new Blob([config.data], {type: config.headers['content-type']});  // 通过返回的流数据 手动构建blob 流
const a = document.createElement("a");
a.download = fileName + '.' + suffix;
a.href = URL.createObjectURL(blob)
a.click()
URL.revokeObjectURL(a.href)
```
## 通过`FileReader` 下载
```js

const fileName = decodeURIComponent(config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(0,-1).join('')); // 根据接口返回情况拿到文件名
const suffix = config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(-1)[0];
const blob = new Blob([config.data], {type: config.headers['content-type']});  // 通过返回的流数据 手动构建blob 流
const reader = new FileReader();
reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签的href （转换base64还可用 window.atob ，未实验过）
reader.onload = (e:any) => { // 转换完成，创建一个a标签用于下载
  const a = document.createElement("a");
  a.download = fileName + '.' +suffix; // 构建 下载的文件名称以及下载的文件格式（可通过传值输入）
  if (typeof e.target.result === "string") {
    a.href = e.target.result;
  }
  a.click();
} 
```



##  请求头设置

以上面两种方式下载文件时，需要设置http请求头`responseType`为 `blob` 

以Axios举例：

```js
axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000,
}).post(URL, data, {
  'responseType': 'blob'
})
```

