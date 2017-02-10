基于组件化开发的webpack脚手架。

##安装步骤
```npm install webpack_package```

```npm install```

##快速开始
**1.** 开发中构建

```$npm run w```

**2.** 初始化开发目录

```$npm run init```

![回答下面问题][1]

**3.** 引入组件

```PACKAGE * as 你的组件名 from 你的组件名```

比如，这里要引入widgets中的checkBox组件

![此处输入图片的描述][2]

**4.** 上线前打包

```$npm run p```

##注意点
**1.** 目录形式

![目录形式][3]

**2.** widgetsList页面是项目所有组件预览的页面

##使用到的插件
**1.** 初始化开发目录，[plugin-package-init][4]

**2.** 组件加载，[widgets-loader][5]


  [1]: http://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLCF5N2esKGDeBR8upYQ7NtE2ialY6S2FN4GeumTU48as9TK6YbicG2iczsqZFQxK9Xibno/0
  [2]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM6FlTK5C4kT0wNxMicekluWicxd5Vq83A7jRic1SV4oSqibJmDoGHdXwLJ9YdFsGdwSicd8/0
  [3]: http://mmbiz.qpic.cn/mmemoticon/duc2TvpEgSRzpYhmEs7XvS9PC54zqf4smtiaGZA13AkMGVQstyxWKPicalAhR9DIRoghb6eg9Z81A0Xoqb1zDeTg/0
  [4]: https://www.npmjs.com/package/plugin-package-init
  [5]: https://www.npmjs.com/package/widgets-loader