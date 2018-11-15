## 1.can't write access:
input:~$ npm install -g express-generator

Error: npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules

Solution:~$ sudo npm install -g express-generator

(npm 安装权限问题，在安装命令前加上，sudo，提示输入密码，输入密码即可获取权限安装)

## 2.install node.js in Ubuntu

input:sudo apt-get install nodejs
input:sudo apt-get install npm

## 3.uninstall Node.js in Ubuntu
input:sudo apt-get remove nodejs
input:sudo apt-get remove npm

## 4.test Node.js in Ubuntu
input:node -v
input:npm -v

## 5.run Node.js in Ubuntu
at first termianl move to target file's folder
input:node target.js