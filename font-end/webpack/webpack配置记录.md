## webpack 
> 模块打包工具 module bundler
[toc]
### 安装：
安装node.js （新版本可以提高打包速度）
`npm install webpack webpack-cli -g` // 最好避免全局安装，在项目中安装

### Loader

### Plugin

### Chunk


### Lazy Loading

### Code Splitting 代码分割
#### JS代码分割
```js
// 同步代码代码分割需要如下配置
optimization: {
    splitChunks: {
        chunks: 'all'
    }
}
// 异步代码 无需任何配置，webpack会自动做代码分割
```
 - webpack 的代码分割底层使用的是 splitChunksPlugin
#### CSS代码分割
mini css extract plugin（只能运行在线上）
optimize css assets plugin

### Tree Shaking
删除文件中未使用的部分

### 环境 development production

### 打包分析(coverage)

### Preload Prefetch
魔法注释，
PreFetch 核心代码加载完之后

### 遇到的问题
#### 端口问题
配置好devserver, 服务起了，但是页面无法访问
![4c8ee54458204fcaa748a187283064c5.png](evernotecid://E294B055-AA0D-4836-AD44-6CCC11BEC7E3/appyinxiangcom/20598669/ENResource/p402)

> Firefox
此网址已被限制
此网址使用了一个通常用于网络浏览以外目的的端口。出于安全原因，Firefox 取消了该请求。
Chrome
无法访问此网站网址为 https://xxxxxx:6666 的网页可能暂时无法连接，或者它已永久性地移动到了新网址。
ERR_UNSAFE_PORT
配置：
 ```js
devServer: {
    contentBase: path.join(__dirname, 'public/dev'),
    // hot: true,
    port: 6000,
    open: 'chrome', // 'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.
    // openPage: 'html/home.html', // 这里可以写数组
  },
  
output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'public/dev')
  }, 


 ```
解决方案： 更换端口（吐血）

Chrome，Firfox以下端口的web站点无法访问，所以在配置自己站点时需避开以下端口：
 1,    // tcpmux
  7,    // echo
  9,    // discard
  11,   // systat
  13,   // daytime
  15,   // netstat
  17,   // qotd
  19,   // chargen
  20,   // ftp data
  21,   // ftp access
  22,   // ssh
  23,   // telnet
  25,   // smtp
  37,   // time
  42,   // name
  43,   // nicname
  53,   // domain
  77,   // priv-rjs
  79,   // finger
  87,   // ttylink
  95,   // supdup
  101,  // hostriame
  102,  // iso-tsap
  103,  // gppitnp
  104,  // acr-nema
  109,  // pop2
  110,  // pop3
  111,  // sunrpc
  113,  // auth
  115,  // sftp
  117,  // uucp-path
  119,  // nntp
  123,  // NTP
  135,  // loc-srv /epmap
  139,  // netbios
  143,  // imap2
  179,  // BGP
  389,  // ldap
  465,  // smtp+ssl
  512,  // print / exec
  513,  // login
  514,  // shell
  515,  // printer
  526,  // tempo
  530,  // courier
  531,  // chat
  532,  // netnews
  540,  // uucp
  556,  // remotefs
  563,  // nntp+ssl
  587,  // stmp?
  601,  // ??
  636,  // ldap+ssl
  993,  // ldap+ssl
  995,  // pop3+ssl
  2049, // nfs
  3659, // apple-sasl / PasswordServer
  4045, // lockd
  6000, // X11
  6665, // Alternate IRC [Apple addition]
  6666, // Alternate IRC [Apple addition]
  6667, // Standard IRC [Apple addition]
  6668, // Alternate IRC [Apple addition]
  6669, // Alternate IRC [Apple addition]

#### happypack 报错问题
配置：

 ```js

rules: [
    {
        test: /\.(less|css)$/,
        include: [/antd-mobile/, /antd/, /src/, /swiper/, /normalize.css/, /video.js/],
        use: 'happypack/loader?id=style',
    }, 
    /*
    * ......
    */
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // loader: 'babel-loader'
        use: 'happypack/loader?id=js'
    }
]



new HappyPack({
    id: 'js',
    threads: 4,
    loaders: ['babel-loader'],
    threadPool: happyThreadPool
}),
new HappyPack({
    id: 'style',
    threads: 4,
    loaders: [ {
        loader: MiniCssExtractPlugin.loader,
        options: { publicPath: '../' }
        }, {
        loader: 'css-loader',
        options: { importLoaders: 2 }
        }, {
        loader: 'postcss-loader',
        },  {
        loader: 'less-loader',
        options: {  javascriptEnabled: true,  ident: 'postcss' }
    }],
    threadPool: happyThreadPool
})

// 报错：

ERROR in ./node_modules/antd/lib/button/style/index.less
Module build failed (from ./node_modules/happypack/loader.js):
TypeError: Cannot read property 'createChildCompiler' of undefined
    at Object.pitch (E:\my-project\firefly\node_modules\mini-css-extract-plugin\dist\loader.js:89:43)
    at applySyncOrAsync (E:\my-project\firefly\node_modules\happypack\lib\applyLoaders.js:350:21)
    at applyPitchLoader (E:\my-project\firefly\node_modules\happypack\lib\applyLoaders.js:205:7)
    at applyPitchLoaders (E:\my-project\firefly\node_modules\happypack\lib\applyLoaders.js:226:4)
    at applyLoaders (E:\my-project\firefly\node_modules\happypack\lib\applyLoaders.js:120:3)
    at HappyWorker.compile (E:\my-project\firefly\node_modules\happypack\lib\HappyWorker.js:27:3)
    at COMPILE (E:\my-project\firefly\node_modules\happypack\lib\HappyWorkerChannel.js:46:10)
    at process.accept (E:\my-project\firefly\node_modules\happypack\lib\HappyWorkerChannel.js:75:7)
    at process.emit (events.js:182:13)
    at emit (internal/child_process.js:812:12)
 @ ./node_modules/antd/lib/button/style/index.js 5:0-23
 @ ./src/page/hqqback/config-form/config-form.jsx
 @ ./src/page/hqqback/back-app.jsx
 @ ./src/page/hqqback/hqqback.js
 @ multi ./src/page/hqqback/hqqback.js webpack-hot-middleware/client?name=hqqback&reload=true
 ```

[原因(from git issue)](https://github.com/amireh/happypack/issues/223)：
happypacker 不支持  MiniCssExtractPlugin
修改： 将MiniCssExtractPlugin放在主线程中打包
```js

{
    test: /\.(less|css)$/,
    include: [ /antdmobile/,  /antd/,  /src/,  /swiper/,  /normalize.css/,  /video.js/],
    loaders: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
        },
        'happypack/loader?id=style' 
    ]
},


new HappyPack({
    id: 'style',
    threads: 4,
    loaders: [{
            loader: 'css-loader',
            options: {importLoaders: 2 }
        }, {
            loader: 'postcss-loader',
        }, {
            loader: 'less-loader',
            options: {javascriptEnabled: true,  ident: 'postcss'}
    } ],
    threadPool: happyThreadPool
})
```

