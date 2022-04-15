# npm (node package manager)
[TOC]

## [淘宝镜像配置`cnpm`](http://npm.taobao.org/)
1. 临时使用
`npm --registry https://registry.npm.taobao.org install express`

2. 持久使用
`npm config set registry https://registry.npm.taobao.org`
- 验证是否成功
`npm config get registry`
- 或
`npm info express`

3. 通过`cnpm`使用
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
## 常用命令

1. 初始化（生成`package.json` 文件）

```bash
mkdir [dirName] && cd [dirName]
npm init -y # -y 表示没有任何提问
```
2. 安装最新的npm， install可以简写为i, -g 表示全局安装 global
`npm install npm@latest -g` 
`npm i npm@latest -g`
**-D -S 安装并保存**
3. 安装一个包：
`npm install <package_name>[@<verson>]`
4. 卸载包
`npm uninstall <package_name>`
5. 查看包的信息
`npm info <package_name>`

## npx
> npx是npm中的的安装，可以单独下载使用（安装npm会自动安装npx）

> npx 运行时回到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在
（bash 命令不再$PATH中，不能使用npx cd）

> 如果npx后面的模块没有在本地发现，就会下载同名模块

- `--no-install` 可以强制使用本地模块，如果本地没有则报错
-  `--ignore-existing` 强制使用远程模块，即使本地存在

> npx 可以执行Github上的模块代码 **远程代码必须是一个模块（包含package.json和入口文件）**

## [npm-scripts](https://docs.npmjs.com/misc/scripts)

## 版本
 1. `npm version ?` 查看可以使用的命令
 2. `npm version [ <newversion> |major | minor | patch | premajor | prepatch | prerelease]`
    | keyword | - |
    | - | - |
    | major | 主版本号 |
    | minor | 次版本号 |
    | patch | 补丁号 |
    | premajor | 预备主版本 | 
    | prepatch | 预备次版本 |
    | prerelsase | 预发布版本 |
    **项目的git status 必须是clear 才可以使用上述命令**
    项目中如果包含git会自动提交到git (git commit -m "X.Y.Z")
    也可以使用以下命令 s%将会被替换为版本号
    `npm version patch -m "Upgrade to s% for reason"`
    
    newversion 参数是一个有效的[semver](https://semver.org/lang/zh-CN/)字符串
  3. `npm view <pkg> version` 查看package的版本 
  3.  自动更新版本号：

    在项目的目录的 。git/hook/ 目录中新建文件 post-commit 无扩展名
    写入
        ```bash
        #!/bin/sh
        COMMIT_MSG="$(git log --pretty=format:"%s" -1 head)"
        echo "$COMMIT_MSG" | grep -q "^[0-9]"
        if [ $? -ne 0];then
            echo $(npm version patch)
        fi
        ```

将会在每次git commit 执行后被运行，他检查commit的message是不是版本号，如果不是，执行npm version poatch 更新版本号

## 问题记录
### 一、`npm install [module]` 或者 `npm i`的时候报错，但是使用cnpm可正常安装
#### 错误：
     ```bash
     error -4058
     ```

#### 解决方法
from: [npm install fails on Windows 10: ENOENT 4058 operation not permitted, rename](https://blog.josequinto.com/2017/06/23/npm-install-fails-on-windows-10-enoent-4058-operation-not-permitted-rename/#Environment)

1. 删除package-lock.json, node_modules and cache
    ```shell 
      #win
     del package-lock.json
     rd /s /q node_modules
     npm cache clear --force
    ```
    ```shell
    #macOS
    rm package-lock,json
    rem -rf node_modules/
    npm cache clear --force
    ```

2. 重启VS Code

