
| 目录         | 含义                                                                                                |     |     |
| ------------ | --------------------------------------------------------------------------------------------------- | --- | --- |
| /bin         | binary 缩写，存放二进制可执行文件，存放ls，cat                                                      |     |     |
| /boot        | 存放启动LINUX使用的一些核心文件                                                                     |     |     |
| /dev         | device 缩写。存放linux的外部设备                                                                    |     |     |
| /etc         | etcetera(等等，附加物) 缩写。存放系统管理所需要的配置文件和子目录（如docker的配置文件存放在/etc/docker/daemon.json）                                   |     |     |
| /etc/profile | 环境变量配置文件，`echo $varxx`ch查看                                                               |     |     |
| /etc/bashrc  | 别名，全局生效                                                                                      |     |     |
| /home        | 用户的主目录                                                                                        |     |     |
| /lib         | library 的缩写，存放系统最基本的动态链接共享库。                                                    |     |     |
| /lost-found  | 一般为空。当系统不正常关机时存放“无家可归的文件”                                                    |     |     |
| /media       | 存放可移除的设备                                                                                    |     |     |
| /opt         | 存放服务器额外安装的软件，默认为空                                                                  |     |     |
| /proc        | processes的缩写，这是一个虚拟目录，它是系统内存的映射，可以访问这个目录获取系统信息                 |     |     |
| /root        | 系统管理员，超级权限者的用户主目录                                                                  |     |     |
| /sbin        | s表示Super User或system，存放系统管理员使用的二进制系统管理程序                                     |     |     |
| /selinux     | Redhat/CentOS 的特有目录，selinux是一个安全机制，类似与windows的防火墙，这个目录存放selinux相关文件 |     |     |
| /srv         | 新标准才有，service 的缩写，存放服务启动之后需要提取的数据和对外的服务，如Apache放置 /srv/www       |     |     |
| /sys         | Linux2.6 内核中新出现的一个文件系统sysfs                                                            |     |     |
| /tmp         | 存放临时文件，重启时自动清空                                                                                     |     |     |
| /usr         | unix system resource 的缩写。存放系统级别的资源/应用，比如MySQL                                     |     |     |
| /usr/local   | 相当于windows中的program files                                                                      |     |     |
| /usr/opt     | 存放第三方程序，一般不和别的程序打交道（应用程序，非系统程序）                                      |     |     |
| /usr/bin     | 存放应用程序                                                                                        |     |     |
| /usr/sbin    | 给超级用户使用的一些管理程序                                                                        |     |     |
| /usr/doc     | 存放linux文档                                                                                       |     |     |
| /usr/includ  | 存放开发和编译应用程序需要的头文件                                                                  |     |     |
| /usr/lib     | 存放常用的动态链接共享库和静态档案库                                                                |     |     |
| /usr/man     | 帮助手册                                                                                            |     |     |
| /usr/src     | 存放linux开放的源代码                                                                               |     |     |
| /var         | 存放经常被修改的目录，如系统日志/var/log                                                            |     |     |
|              |                                                                                                     |     |     |
|              |                                                                                                     |     |     |
|              |                                                                                                     |     |     |


rc，run command的缩写，运行命令脚本文件的后缀。这些脚本通常在程序的启动阶段被调用。许多程序在启动时，都需要rc后缀的初始文件或配置文件。

more命令类似cat，以页的形式显示，空格键翻页，b前一页。

ce Community Edition 社区版 如 docker-ce gitlab-ce
