# 初试 Docker

> 解决“It's works on my machine”问题，（开发环境/生产环境的配置问题）

## 解决方案

###  虚拟机

虚拟机占用资源过多

荣誉步骤多

启动慢

### Linux容器 （Linux Containers，缩写为 LXC）

LXC并不是模拟一个完整的系统，而是进程的隔离

## Docker

### Docker的理解

docker 是LXC的一种封装

Docker将程序与程序的依赖打包在一个文件里，运行这个文件就会创建一个容器，程序在容器中运行。

### Docker常见用途

1. 提供一次性的环境
2. 提供弹性的云服务
3. 组建为服务架构

## Dockerfile https://docs.docker.com/engine/reference/builder/
### 格式：
```dockerfile
# Comment
[指令] [参数]
```
指令大小写不敏感，但是为了便于与[参数]区分，一般指令全部大写。
Docker按顺序执行Dockerfile中的命令。**Dockerfile必须以指令`FROM`开始**。可以在解析器指令（Parser directives）、注释、全局环境参数之后。

FORM 指定构建镜像的基础镜像（Parent Image），from之前只能有一个或多个‘ARG’指令用来声明FROME中使用的参数。
### 注释
Docker将以`#`开头的行视为注释，除非改行是有效的解析器指令。而`#`出现在任何其他位置（非行开头）都会被视为参数。
```dockerfile
# comment
RUN echo 'we are running some # of cool things'

```
注释中不支持换行
>为了向后兼容，注释（`#`）和指令（如 `RUN`）之前的额空格将被忽略。但是不鼓励这样做。

### 解析器指令
解析器指令是可选的，并影响`Dockerfile`中后续行的处理方式。解析器指令不会在构建中添加层，也不会显示为构建步骤。解析器指令作为一种特殊类型的注释，以`# [指令]=[value]`的格式编写。每个指令只使用一次。

一旦处理了注释、空行或构建器指令，Docker将不再寻找解析器指令。因此**所有的解析器指令必须放在`Dockerfile`的最顶部**，否则不会验证它是否可能是解析器指令，会被解析为注释。

解析器指令大小写不敏感，然而惯例是小写。同时惯例页包括解析器指令后需要有空行，解析器指令也不支持续行符。

以下解析器指令都是无效的
- 续行符
```dockerfile
# direct \
tive=value
```
- 出现了两次
```dockerfile
# directive=value1
# directive=value2

FROM ImageNmae
```
- 出现在构建器指令之后
```dockerfile
FROM IamgeName
# directive=value
```
- 出现在注释之后
```dockerfile
# About my docker file
# directive=value
FROM ImageName
```
解析器指令允许非换行空格。因此以下指令是等价的
```dockerfile
#directive=value
# directive = value
#     directive= value
# directive =value
#        dIrectivE=value
```

支持以下解析器指令
- `syntax`
- `escape`

### `syntax`

此功能仅在使用BuildKit后端是可用，在使用经典构建器后端是会被忽略。更多详情请查看[自定义Docker语法](https://docs.docker.com/build/buildkit/dockerfile-frontend/)

### escape
```dockerfile
# escape=\ (blackslash)
```
或者
```dockerfile
# escape=` (backteck)`
```
escape用与设定用于Docker中的转义字符。如果没有制定，则默认转义字符为`\`










