# plugin-package-init
是一个初始化开发文件夹的工具

## 作用
例如，下面是一个项目的开发目录
```
//目录结构
|-src//开发目录
    |-pages
        |-page1
            |-index.ejs
            |-index.js
            |-index.less
        ...
    |-widgets
        |-widget1
            |-index.ejs
            |-index.js
            |-index.less
        ...
|-plugin-package
    |-samplePackage//自定义的文件夹例子，放在这个目录
        |-page
            |-index.ejs
            |-index.js
            |-index.less
        |-widget
            |-index.ejs
            |-index.js
            |-index.less
        ...
package-init.config.js
```
输入
```
node package-init.config.js
```
之后，回答下面的问答题

![命令行问答][1]

就会将samplePackage/page/文件夹复制到src/pages/目录中，并重命名为‘testPackage’。
同时src/pages/testPackage/index.ejs的html title重命名为‘testPackage title’，并且index.ejs中只引用了index.js这份js
![此处输入图片的描述][2]

## 怎么用
1.在项目根目录
```
npm intall plugin-package
```
2.将node_modules/plugin-package-init/目录里的，plugin-package/目录和package-init.config.js文件复制到项目根目录中。参考***作用***里开发目录里的plugin-package和package-init.config.js文件的位置

3.在plugin-package/samplePackage/目录中新建你的文件夹例子

![此处输入图片的描述][3]

这里的samplePackage/index.ejs内容是这样，红框框住的是可被重写
![此处输入图片的描述][4]

4.修改package-init.config.js文件中的
```
let pluginConfig = {
    page: {//samplePackage里你要复制的文件夹名字，这里指的是要复制samplePackage/page/这个文件夹
        distDir: './src/pages/'//目标目录，复制的文件夹将会到这个目录
    },
    widget: {//samplePackage里你要复制的文件夹名字，这里指的是要复制samplePackage/widget/这个文件夹
        distDir: './src/widgets/'//目标目录，复制的文件夹将会到这个目录
    }
};
```

5.运行
```
node package-init.config.js
```

6.在命令行工具中回答下面问题
![命令行问答][5]

①复制samplePackage中的那个page文件夹。

②复制后的文件重命名为testPackage，缺省值为①的回答

③index.ejs中的html title重命名为testPackage title，缺省值为samplePackage中的index.ejs的html title

④询问samplePackage/page/index.ejs中引用的js文件，不需要jquery.js、不需要react.js、需要index.js

## 需要注意的
1.package-init.config.js中的pluginConfig的属性值要对应samplePackage目录下的文件
例如这里，samplePackage有page、widget两个目录
```
|-samplePackage
    |-page
    |-widget
```
那么package-init.config.js中的pluginConfig属性值只能为这两个目录
```
let pluginConfig = {
    page: {},
    widget: {}
};
```

  [1]: http://mmbiz.qpic.cn/mmemoticon/duc2TvpEgSRzpYhmEs7XvR0eQTF9oF7ibTE7B8mNBpD1IfLmJpW9bQOCR1PjAJCkrfPzsLX7cxVMV3udib6ETfeQ/0
  [2]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM6Mc3PlejPjtxribRFBhAWhmNLQwWLCPSVeQVAPXia5mibVFYQI7w62JSL/0
  [3]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM4WjOpz7KyZ1ehFUj0ictPMc1vzAoXoJ9eicbK5JaNxkkyybocXFlaYLn/0
  [4]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM7L7AZphhrl9dh04tf5frNdbqX1vyKbUfhiakhNu04U7HBYmOnbdzSql/0
  [5]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM6iaN6hZzfHyG5jTfRCEff5alfBUKIGY113GxtYZph68Uj3LJkt3tM7H/0