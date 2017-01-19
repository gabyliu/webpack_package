基于组件化开发的webpack脚手架。

##安装步骤
```npm install webpack_package```

```cd webpack_package```

```npm install```

dist/pages/widgetsList/index.html是项目的所有组件列表

![此处输入图片的描述][1]


对它们进行操作，会在页面中显示返回数据

![此处输入图片的描述][2]

![此处输入图片的描述][3]


##怎么用
- 目录形式

![此处输入图片的描述][4]

页面对于项目之于组件对于页面。

对于项目，它是由各个页面组成。由pages里的文件夹组成，每个文件夹就是这个页面的所有资源。

对于页面，它是由组件组成。由widgets里的所有文件夹组成，每个文件夹就是这个组件的所有资源。

![此处输入图片的描述][5]

pages和widgets里的文件夹都是由js、ejs、less组成这个文件的所有资源，其中js是必须的。

![此处输入图片的描述][6]


- 前端组件的引用

```PACKAGE * as 组件名 from 'widgets文件夹中你要引用的组件文件夹名'```

组件引用和es6的模块引用import语法一致。不同点在将“import”改为“PACKAGE”，以及不需要写组件的详细路径，只需要写widgets目录下要引用的文件夹名即可。用的是[widgets-loader][7]这个插件。

例如：pages/widgetsList/index.js要引用checkBox组件

![此处输入图片的描述][8]

那么只需要在pages/widgetsList/index.js这么写

![此处输入图片的描述][9]


- 初始化开发文件夹
```npm run init```
用的是[plugin-package-init][10]这个插件

大概的使用只这样：

回答下面问题

![此处输入图片的描述][11]

生成对应开发文件夹

![此处输入图片的描述][12]


- 监听页面更新
```npm run w```

- 上线前压缩混淆打包
```npm run p```


  [1]: http://mmbiz.qpic.cn/mmemoticon/PiajxSqBRaELW5PcMUonINIuibjbOA6GTzsvicFCkm3hFCrQNJGn3BLQdojuXmLb1cqHCWXib0kLyzk/0
  [2]: http://mmbiz.qpic.cn/mmemoticon/duc2TvpEgSTzdp7MY9Cf03UJrv08pWQEB0koVibKFayTeeWCpzaNPTp1DupanibfJV/0
  [3]: http://mmbiz.qpic.cn/mmemoticon/duc2TvpEgSSuJ42VMy5ia7v2yCESzcFdDErrZfXLWzBR9Yt8DicYZkIiaA4vMgMpZvRIlEpbfxwLtQ/0
  [4]: http://mmbiz.qpic.cn/mmemoticon/dx4Y70y9XcuicmyVD6blInxRuct7D2K8gGbbJ7tLa5hRS8L07niaV0L6RMjthbqLKE/0
  [5]: http://mmbiz.qpic.cn/mmemoticon/PiajxSqBRaELiaDJicUzQeygtrFkmXRfu9OpzRB1wdhcp96ibXoZ6QMSDmk82DQHpbUG/0
  [6]: http://mmbiz.qpic.cn/mmemoticon/dx4Y70y9XcuDHh8CZHXrgFCiacMibDXmJSmzib9LmsE5iaqlib5jkfEFkicqBO7rsbdBlF/0
  [7]: https://www.npmjs.com/package/widgets-loader
  [8]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM6FlTK5C4kT0xYsk8EAezx5rzC3NiaK6qWz0jcuEPKPlCK00B4unHUz62iaayeibpEY0U/0
  [9]: http://mmbiz.qpic.cn/mmemoticon/m0RUwghI3Lyoica0WuhxEvYhSZ6sxBcfDEN4ceib6T3PpN9ZTXoCJDhgjF0VXdqvxu/0
  [10]: https://www.npmjs.com/package/plugin-package-init
  [11]: http://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLCF5N2esKGDeBR8upYQ7NtE2ialY6S2FN4GeumTU48as9TK6YbicG2iczsqZFQxK9Xibno/0
  [12]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM5ib8KIjTiaRAy0XHBk6B7KV9IibwQLFQ39P0G8ltLsTZ49vu3KesamzKnC6uOy3Pqn8M5BaYq3r1KNA/0