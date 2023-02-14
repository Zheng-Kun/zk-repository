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
Docker可以通过从`Dockerfile`读取指令来自动构建镜像。`Dockerfile`是一个组装镜像的文本文档，其中包含了用户可以在命令行上调用的所有命令。

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

#### `syntax`

此功能仅在使用BuildKit后端是可用，在使用经典构建器后端是会被忽略。更多详情请查看[自定义Docker语法](https://docs.docker.com/build/buildkit/dockerfile-frontend/)

#### escape
```dockerfile
# escape=\ (blackslash)
```
或者
```dockerfile
# escape=` (backteck)`
```
escape用与设定用于Docker中的转义字符。如果没有制定，则默认转义字符为`\`
转义字符既用于转义字符，也用于转义换行符，这允许Dokerfile指令跨行。换行符除了出现在行末, 不会在`RUN`命令中被执行。
将转义字符设置为`` ` ``再`Windows`中非常有用，在`Windows`中`\` 为路径分隔符。

以下示例在`Windows`上会以不明显的方式失败。第二行行末的第二个`\`将被解释为换行符的转义，而不是第一个`\`的转义目标，类似地，假设第三行末尾的`\`实际上是作为指令处理的，则会导致它被视为一个行的延续。这个dockerfile的结果是，将第二行和第三行视为以一条指令。`COPY testfile.txt c:\RUN dir c:`
```dockerfile
FROMLearn more about the "FROM" Dockerfile command. microsoft/nanoserver
COPY testfile.txt c:\\
RUN dir c:\
```
结果：
```
PS E:\myproject> docker build -t cmd .

Sending build context to Docker daemon 3.072 kB
Step 1/2 : FROM microsoft/nanoserver
 ---> 22738ff49c6d
Step 2/2 : COPY testfile.txt c:\RUN dir c:
GetFileAttributesEx c:RUN: The system cannot find the file specified.
PS E:\myproject>
```

通过`escap`解析器指令，下面的`Dockerfile`可以在`Windows`上成功按照预期的方式使用自然平台语义：
```dockfile
# escape=`

FROM microsoft/nanoserver
COPY testfile.txt c:\
RUN dir c:\
```

### 环境变量替换

环境变量（通过`ENV`语句声明）也可以在某些指令中用作`Dokcerfile`要解释的变量。

环境变量在`Dockerfile`中通过`$variable_name`或`${variable_name}`表示。这两种方式是等效的，大括号通常用于解决变量名没有空格的问题。`${variable_name}`语法还支持下面指定的一些标准 bash 修饰符.
- `${variable:-word}` 表示，如果`variable`如果设置了值，那它的值就是设置的值，如果没有设置值，它的值就是`word`。
- `${variable:+word}`表示，如果`variable`如果设置了值它的值就是`word`，如果没有设置，它的值就是空字符串。
在所有情况下，`word`可以是任何字符串，包括附加的环境变量。

可以在变量之前添加`\`来转义：例如`\$foo`或者`\${foo}`将会被转义成`$foo`与`${foo}`文本。

示例：（# 后表示解析之后的值）
```dockerfile
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}     # WORKDIR /bar
ADD . $FOO         # ADD . /bar
COPY \$FOO /quux   # COPY $FOO /quux
```

在`Dockerfile`中，以下指令支持环境变量
- `ADD`
- `COPY`
- `ENV`
- `EXPOSE`
- `FORM`
- `LABEL`
- `STOPSIGNAL`
- `USER`
- `VOLUME`
- `WORKDIR`
- `ONBUILD`(与上面的指令其中的一个结合使用时)

在整个指令中，环境变量替换对每个变量使用相同的值。例如：
```dockerfile
ENV abc=hello
ENV abc=bye def=$abc
ENV ghi=$abc
```
在上面的例子中，`def`的值为`hello`而不是`bye`,但是`ghi`的值为`bye`，因为它不是将`abc`设置为`bye`这条指令的一部分。


### `.dockerignore` 文件








