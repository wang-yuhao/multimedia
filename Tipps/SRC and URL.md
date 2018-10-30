## img标签--src属性：相对路径和绝对路径

HTML相对路径与绝对路径 
在网页制作的过程中，少不了跟路径打交道，比如，包含一个文件，插入一个图片等，与路径都有关系，如果使用了错误的文件路径，就会导致引用失效(无法浏览链接文件，或无法显示插入的图片等)。初学者可能会感到困惑，下面我就详细的介绍一下相对路径与绝对路径。 
HTML有2种路径的写法：相对路径和绝对路径。 
HTML相对路径(Relative Path)的几种情况 
1.同一个目录的相对文件引用—直接写引用文件名即可 
如果源文件和引用文件在同一个目录里，直接写引用文件名即可，这时引用文件的方式就是使用相对路径。 
例如： 
我们现在建一个源文件info.html，在info.html里要引用index.html文件作为超链接。 
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/sites/blabla/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "index.html">这是超连接</a>
1
Notice: 
如何表示上级目录，引用其他目录 
../表示源文件所在目录的上一级目录，../../表示源文件所在目录的上上级目录，以此类推。 
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/sites/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "../index.html">这是超连接</a>
1
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "../../index.html">index.html</a>
1
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/sites/wowstory/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "../wowstory/index.html">index.html</a>
1
Notice： 
引用下级目录 
引用下级目录的文件，直接写下级目录文件的路径即可。 
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/sites/blabla/html/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "html/index.html">这是超连接</a>
1
假设info.html路径是：c:/Inetpub/wwwroot/sites/blabla/info.html 
假设index.html路径是：c:/Inetpub/wwwroot/sites/blabla/html/tutorials/index.html 
在info.html加入index.html超链接的代码应该这样写：

<a href = "html/tutorials/index.html">这是超连接</a>
1
HTML绝对路径(Absolute Path) 
大家都知道，在我们平时使用计算机时要找到需要的文件就必须知道文件的位置，而表示文件的位置的方式就是路径，例如只要看到这个路径：c:/website /img/photo.jpg我们就知道photo.jpg文件是在c盘的website目录下的img子目录中。类似于这样完整的描述文件位置的路径就是绝对路径。我们不需要知道其他任何信息就可以根据绝对路径判断出文件的位置。而在网站中类似以http://www.ajaxstu.com/img/photo.jpg来确定文件位置的方式也是绝对路径。

HTML绝对路径(absolute path)在网页制作中指带域名的文件的完整路径。 
假设你注册了域名http://www.ajaxstu.com，并申请了虚拟主机，你的虚拟主机提供商会给你一个目录，比如www，这个www就是你网站的根目录。 
假设你在www根目录下放了一个文件default.asp，这个文件的绝对路径就是： font color=”#0058db”>http://www.ajaxstu.com/default.asp。 
假设你在www根目录下建了一个目录叫archives，然后在该目录下放了一个文件2886.html，这个文件的绝对路径就是http://www.ajaxstu.com/archives/2886.html。
--------------------- 
作者：JQ_AK47 
来源：CSDN 
原文：https://blog.csdn.net/JQ_AK47/article/details/54565783 
版权声明：本文为博主原创文章，转载请附上博文链接！