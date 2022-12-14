## 方法一：通过blob流下载
```javascript
import { AxiosResponse } from 'axios'
function downFile(config: AxiosResponse) {
  // 获取文件名 
  const fileName = decodeURIComponent(config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(0,-1).join('')); // 根据接口返回情况拿到文件名
  // 获取文件扩展名
  const suffix = config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(-1)[0];
  // 手动构建blob流
  const blob = new Blob([config.data], {type: config.headers['content-type']}); 
  const a = document.createElement("a");
  
  a.download = fileName + '.' + suffix;
  a.href = URL.createObjectURL(blob)
  a.click()
  URL.revokeObjectURL(a.href)
}

  
```

## 方法二：通过FileReader下载

```javascript
import { AxiosResponse } from 'axios'
function downFile(config: AxiosResponse) {
  // 获取文件名 
  const fileName = decodeURIComponent(config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(0,-1).join('')); // 根据接口返回情况拿到文件名
  // 获取文件扩展名
  const suffix = config.headers["content-disposition"].split(";")[1].split("=")[1].split('.').slice(-1)[0];
  // 手动构建blob流
  const blob = new Blob([config.data], {type: config.headers['content-type']}); 
  const reader = new FileReader();
  // 转换为base64，可以直接放入a标签的href （转换base64还可用 window.atob ，未实验过）
  reader.readAsDataURL(blob); 
  // 转换完成，创建一个a标签用于下载
  reader.onload = (e:any) => { 

    const a = document.createElement("a");
     // 构建 下载的文件名称以及下载的文件格式（可通过传值输入）
    a.download = fileName + '.' +suffix;
    if (typeof e.target.result === "string") {
      a.href = e.target.result;
    }
  
    a.click();
  }
}
```

## 出现乱码
- 需要再请求头设置返回的数据类型
```javascript
post("url", data, {
  // 'responseType': 'blob'  设置为 bold 或者 arraybuffer均可
  'responseType': 'arraybuffer'
})
```

`XMLHttpRequest.responseType` 的值是枚举字符串