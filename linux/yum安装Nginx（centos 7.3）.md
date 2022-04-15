# Linux 命令 - yum安装Nginx（centos 7.3）

[TOC]
## yum安装Nginx

 - 添加CentOS 7 Nginx yum 资源库
    ` sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm`
 - 安装Nginx(使用yum命令从Nginx源服务器中获取来安装Nginx)
    `sudo yum install -y nginx`
 - 启动Nginx
    `sudo systemctl start nginx` (安装成功后可在浏览器中通过域名或IP访问web页面，正常情况下可以看到Nginx的默认页面：Welcome to nginx)
    ~~sudo systemctl start nginx.service~~ (教程中是这样写的，但是会报错，尝试上面的命令安装成功)
 - 开机启动 Nginx
    `sudo systemctl enable nginx.sevice`(后面的.sevice可以)
 - 查看公网IP
    ~~ip addr show eth0 | grep inet | awk '{print $2;}' | sed 's/\/.*$//'~~(实际上这条命令拿到的是内网IP--手动dog.jpg)
    `curl ifconfig.me`
 - 查看版本
    `nginx -v`