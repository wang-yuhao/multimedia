## 1.The method to make page on center 网页居中的方法
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>无标题文档</title>
<style>  
body,html{margin:auto;height:100%;}
#outer{width:100%; height:100%;position:relative;}
#outer[id]{display:table;}
#middle{position:absolute;top:50%;}
#middle[id]{display:table-cell; position:static;vertical-align:middle}
#inner{position:relative;top:-50%;}
#content{width:400px; height:200px; margin:0 auto;padding:20px; background:#000;border:1px solid #666;font-family:"黑体";font-size:40px;color:#fff;}
</style> 
</head> 
<body>  
<div id="outer">  
<div id="middle">  
<div id="inner">  
<div id="content">
怎样让HTML文档在网页中上下左右完全居中？使用这个方法，就可达到你想要的效果。
</div>  
</div>  
</div>  
</div>  
</body>
</html>


## 2.make image on center
attribute: text-align,position,left etc.
eg：../tutorial1/assignment01/task01.html.