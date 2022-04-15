## shell 脚本(bash)
> shell:
>一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。Ken Thompson的sh是第一种Unix Shell，Windows Explorer是一个典型的图形界面Shell

> shell脚本: 
> shell脚本（shell script），是一种为shell编写的脚本程序。业界所说的shell通常都是指shell脚本，但是shell和shell script是两个不同的概念。

[TOC]
##### 解释器
`#! /bin/bash`
` #!` 一般在第一行用来标记执行脚本的解释器
##### 运行脚本
1. 作为可执行程序运行
```bash
chomd +x ./shell.sh # 使脚本具有执行权限
./shell.sh # 执行脚本
```
2. 作为解释器参数执行(第一行解释器信息无效)
```bash
/bin/sh shell.sh
/bin/php test.php
```
##### shell 变量
1. 命名只能使用`a-z\A-Z\0-9\_`, 首字符不能以数字开头
2. 命名不能使用bash中的关键字（可以用help命令查看保留关键字）
3. 使用变量在变量前加美元符`$`即可
4. `readyonly` 可以将变量定义为只读变量
5. `unset` 可以删除变量
6. 变量类型
    a. 局部变量：
    局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
    b. 环境变量：
    局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
    c. shell变量：
    shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行
```sh
say="Hello Word !" # 字符串可以用单/双引号，双引号里可以有变量，双引号里面可以出现转义字符
echo ${say} # 用花括号表示边界
echo $say
say="Hell Shell !" # 可以重新赋值，但是不加美元符,等号左右不能有空格
readonly say # 将say变量置为只读变量
unset say # 删除变量，但是unset不能删除只读变量
```
##### shell 字符串
1. `echo` 用来向窗口输出文字
```bash
echo "Hello Word !"
```
2. 获取字符串长度
```bash
string="hello"
echo ${#string} # 输出5
```
3. 提取字符串
```bash
string="hello word"
echo ${string:0:5} #输出 hello ,从0开始截取5个字符
```
4.  查找字符串
```bash
string="hello word"
echo `expr index "$string" el` # 查找字符e或l的位置输出2
```
##### shell 数组
1. bash支持一维数组，不支持多多维数组，没用限定数组大小
```bash
 array_name=(value0 value1 value2 value 3)
 array_name=(
 value0
 value1
 value2
 value3
 )
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen
```
2. 读取数组
```bash
${array_name[n]} #  获取数组中下标为n的值
${array_name[@]} # @ 符号可以获取数组总所有的元素
```
3. 获取数组的长度
```bash
# 取得数组元素的个数
length=${#array_name[@]}
length=${#array_name[*]}

 # 取得数组单个元素的长度
lengthn=${#array_name[n]}
```
##### shell 注释
1. 单行注释
```bash
# 这是单行注释
```
2. 多行注释(sh 没有多行注释)
```bash
:<<EOF
这里
是
多行注释
EOF
```

EOF可以使用其他符号
```bash
:<<'
这里是多行
注释
'
:<<!
这里也是多行
注释
!
```
##### Shell 传递参数
> 脚本获取参数格式为： `$n` n为数字，1表示执行脚本的第一个参数， 2表示执行脚本的第二个参数

```bash
$ ./shell.sh 1 2
echo $0 # ./shell.sh
echo $1 # 1
echo $2 # 2
```
| 参数处理 | 说明 |
| --- | --- |
|$#| 传递到脚本的参数个数 |
|$\* | 以一个单字符串显示所有向脚本传递的参数。如"$\*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数 |
| $$ | 脚本运行的当前进程ID号 |
| $! | 后台运行的最后一个进程的ID号 |
| $@ | 与$\*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数 |
| $- | 显示Shell使用的当前选项，与set命令功能相同 |
| $? | 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误 |
##### shell 运算符
> 原生的bash不支持简单的数学运算，但是可以通过其他命令实现，`awk`, `expr`
> expr 是一款表达式计算工具
> 表达式和运算符之间必须**要有空格**
> MAC中shell的expr语法是： `$((表达式))`， 其中的乘号不需要转义

###### 算数运算符
1. 加法
```bash
`expr $a + $b`
```
2. 减法
```bash
`expr $a - $b`
```
3. 乘法
```bash
`expr $a \* $b` # 乘号前要加转义
```
4. 除法
```bash
`expr $a / $b`
```
5. 取余
```bash
`expr $a % $b`
```
6. 赋值
```bash
a=$b
```
7. 比较相等
```bash
[ $a ==$b ] #返回true或false 下同
```
8. 比较，不相等
```bash
[ $a != $b ] # 方括号之间必须要有空格
```
###### 关系运算符
> 关系运算符只支持数字，不支持字符串，除非字符串的值是数字
1. `-eq` 左右是否相等，相等返回`true`
2. `-ne`左右是否不相等，不相等返回`true`
3. `-gt` 左边大于右边， 返回`true`
4. `-lt` 左边小于右边， 返回 `true`
5. `-ge` 左边大于等于右边，返回 `true`
6. `-le`左边小于等于右边， 返回 `true`
```bash
[ $a -eq $b]
```

###### 布尔运算符
1. `!` 非运算
2. `-o` 或运算
3. `-a` 与运算
```bash
[ ! false ]
[ $a -lt 20 -o $b -gt 100 ]
[ $a -lt 20 -a $b -gt 100 ]
```

###### 逻辑运算符
1. `&&` 逻辑AND
2. `\\` 逻辑OR
```bash
[[ $a -lt 100 && $b -gt 100 ]]
[[ $a -lt 100 || $b -gt 100 ]]
```

###### 字符串运算
1. `=`, 检测两个字符串是否相等
2. `!=`, 检测两个字符串是否不相等
3. `-z`, 检测字符串长度是否为0， 0 -> `true`
4. `-n`, 检测字符串长度是否为0， 0 -> `false`
5. `$`, 检测字符串是否为空
```bash
[ $a = $b ]
[ $a != $b ]
[ -z $a ]
[ -n $a ]
[ $a ]
```

###### 文件测试运算符
1. `-b file` 检测文件是否是块设备文件
2. `-c file` 检测文件是否是字符设备文件
3. `-d file` 检测文件是否是目录
4. `-f file` 检测文件是否是普通文件（不是目录，不是设备文件）
5. `-g file` 检测文件是否设置了SGID位
6. `-k file` 检测文件是否设置了粘着位（Sticky Bit）
7. `-p file` 检测文件是否是有名管道
8. `-u file` 检测我呢见是否设置了SUID位
9. `-r file` 检测文件是否可读
10. `-w file` 检测文件是否可写
11. `-x file` 检测文件是否可执行
12. `-s file` 检测文件是否为空（大小是否大于0）
13. `-e file` 检测文件/目录是否存在
14. `-S file` 检测文件是否socket
15. `-L file` 检测文件是否存在并且是一个符号链接
```bash
[ -b $file]
```

##### echo命令
1. 普通字符串
```bash
echo "Hello World !"
echo Hello World # 双引号可以省略
```
2. 显示转义字符
```bash
echo "\"Hello World\"" # 输出 "Hello World" # 这里双引号也可以省略
```
3. 显示变量
```bash
#!/bin/sh
read name # 从标准输入读取一行
echo "$name It is a test"
```
4. 显示换行
```bash
echo -e "OK! \n" # -e 开启转义
```
5. 显示不换行
```bash
echo -e "OK! \c" # -e 开启转义  \c 不换行
```
6. 显示结果定向至文件
```bash
echo "Hello World !" > myfile
```
7. 原样输出字符串，不进行转义或取变量 （单引号）
```bash
echo '$name\"' # 结果 ￥name\"
```
8. 显示命令执行的结果
```bash
echo `date` # Fir Oct 11 10:54:46 CST 2019
```

##### printf 命令
1. 语法：
`printf format-string [arguments...]`
format-string 为格式控制字符串
arguments 为参数列表
```bash
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543 
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876 
```
> 结果：
姓名     性别   体重kg
郭靖     男      66.12
杨过     男      48.65
郭芙     女      47.99

> %-10s 指宽度为10个字符 （- 表示左对齐，没有表示右对齐）
> %-4.2f 指格式化为小数， .2 指保留两位小数

```bash

# format-string为双引号
printf "%d %s\n" 1 "abc" # 1 abc

# 单引号与双引号效果一样 
printf '%d %s\n' 1 "abc"  # 1 abc

# 没有引号也可以输出
printf %s abcdef #  abcdef

# 格式只指定了一个参数，但多出的参数仍然会按照该格式输出，format-string 被重用
printf %s abc def # abcdef

printf "%s\n" abc def 
# abc
# def

printf "%s %s %s\n" a b c d e f g h i j
# a b c
# d e f
# g h i
# k

# 如果没有 arguments，那么 %s 用NULL代替，%d 用 0 代替
printf "%s and %d \n" #  and 0
```

##### test 命令
> shell 中的test 用来判断某个条件是否成立，可以进行 数值，字符，和文件三个方面的测试
###### 数值测试
| 参数 | 说明 |
| - | - |
| -eq | 等于返回true |
| -nq | 不等于返回true |
| -gt | 大于返回true |
| -ge | 大于等于返回true |
| -lt | 小于返回true |
| -le | 小于等于返回true |
eg:
```bash
a=1
b=2
if test $[a] -eq $[b]
then
    echo '相等'
else
    echo '不相等'
fi
```

###### 字符串测试
| 参数 | 说明 |
| - | - |
| = | 等于返回ture |
| != | 不等于返回ture |
| -z 字符串 | 字符串长度为0返回true |
| -n 字符串 | 字符长长度不等于0返回true |

###### 文件测试
| 参数 | 说明 |
| - | - |
| -e 文件名 | 文件存在返回true |
| -r 文件名 | 文件可读返回true |
| -w 文件名 | 文件可写返回true |
| -x 文件名 | 文件可执行返回true |
| -s 文件名 | 文件存在，且至少又一个字符返回true |
| -d 文件名 | 文件存在，且为目录返回true |
| -f 文件名 | 文件存在，且为普通文件返回true |
| -c 文件名 | 文件存在，且为字符型特殊文件返回true |
| -b 文件名 | 文件存在，且为块特殊文件返回true |

###### 逻辑操作
与(`-a` )，或(`-o` )，非(`!` ) 可以将测试条件连接起来
优先级 `!` > `-a` > `-o`
eg：
` test -e ./notFile -o -e ./bash `

##### 流程控制
###### if else
```bash
if condition
then
    command1 
    command2
    ...
    commandN
else
    command
fi
```
```bash
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```
###### for
```bash
for var in item1 item2 ... itemN #in列表是可选的，如果不用它，for循环使用命令行的位置参数。
do
    command1
    command2
    ...
    commandN
done
```
```bash
for var in item1 item2 ... itemN; do command1; command2… done;
```
```bash
for((i=1;i<=5;i++)) # for 的 (()) 中不需要用$表示变量
do
    echo "这是第 $i 次调用"
done
```
###### while
```bash
while condition
do
    command
done
```
eg:
```bash

#!/bin/bashint=1
while(( $int<=5 ))do
    echo $int 
    let "int++" # let 命令用于执行一个或多个表达式,变量计算中不需要加上 $ 来表示变量
done
```

###### until 
> until 循环与while循环逻辑相反，循环到条件为true推出循环
```bash
until condition # false 执行， true 推出
do
    command
done
```

###### case
```bash

case 值 in
模式1)
    command1
    ;;
模式2）
    command1
    ;;
esac
```

###### 跳出循环
1. `break` 跳出所有循环
2. `continue` 跳出当前循环
eg
```bash
#!/bin/bash
while : # 死循环
do
    echo -n "输入 1 到 5 之间的数字: "
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的!"
            continue
            echo "游戏结束" #echo "游戏结束" 永远不会被执行
        ;;
    esacdone
```

##### shell函数
###### 函数的定义
```bash
functon fun1(){
    echo 'Hello Function'
    return 2 # 不加return,返回最后一个命令返回值，所有的命令的返回值仅表示其是否出错
}
fun2(){
    echo 'Hello Function'
}
fun1 # 调用函数使用函数名即可
fun2
```
 - **函数返回值在调用函数后通过`$?`获取**
 - **`$?` 仅对其上一条指令负责，一旦函数返回后其返回值没有立即保存入参数，那么其返回值将不再能通过 `$?` 获得**
 - **所有函数须在使用前定义**
###### 函数参数
> 在函数体中，通过`$n`的形式获取第n个参数
>  **当`n>=10`时，需要使用`${n}`获取参数**
>  特殊参数同脚本参数

eg: 
```bash
funWithParam(){
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73
```

##### 输入/输出重定向
1. 文件描述符

| 文件描述符 | 说明 |
| --- | --- |
| 0 | STDIN 标准输入 |
| 1 | STDOUT 标准输出 |
| 2 | STDERR 标准错误输出 |

2. 重定向命令

| 命令 | 说明 |
| --- | --- |
| command > file | 将输出重定向到 file |
| command < file | 将输入重定向到 file |
| command >> file | 将输出以追加的方式重定向到 file |
| n > file| 将文件描述符为n的文件重定向到file |
| n >> file | 将文件描述符为n的文件以追加的方式重定向到file |
| n >& m | 将输出文件 m 和 n 合并 |
| n <& m | 将输入文件 m 和 n 合并|
| << tag | 将开始标记tag和结束标记tag之间的内容作为输入 |

```bash

command 2 > file # 将stderr 重定向到 file
command > file 2>&1 # 将 stdout 和 stderr 合并后重定向到 file
command < file1 >file2 # 将 stdin 重定向到 file1，将 stdout 重定向到 file2
```

##### shell 文件包含
> shell 可以包含外部脚本

eg:
```bash
. ./test1.sh # 被包含的文件不需要单独添加可执行权限
# 以下方法等价
source ./test1.sh
```

