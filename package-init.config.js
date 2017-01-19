'use strict';

let PackageCustom = require('./plugin-package/package-custom');//我的插件

let pluginConfig = {
	page: {//sample的名字，sample package固定地方
	    distDir: './src/pages/'//目标目录不存在，要兼容，新建目录
	},
	widget: {//sample package固定地方
	    distDir: './src/widgets/'
  	}
};

PackageCustom(pluginConfig);