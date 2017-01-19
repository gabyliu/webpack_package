var webpack = require('webpack');
var path = require('path');
var fs = require("fs");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PluginTrave = require('./plugins/traveFile');//我的插件
//PackagePlugin.main();



var entryJson = {},
    configPlugins = [
      new ExtractTextPlugin('[name].[hash:4].css')
    ],
    htmlPlugin;

//整个文件加的index.js
//widget不能作为入口文件，作为入口文件，会使page找不到widgets
var init = {
  entries: function(){
    var fileList = PluginTrave.getFileList(['src/']);
    for(var i = 0; i < fileList.length; i++){
        if(path.basename(fileList[i]) == 'index.js'){
          if(path.dirname(fileList[i]).indexOf('widgets') >= 0){
            entryJson[path.dirname(fileList[i].replace('src\\', '')) + '\\index'] = [__dirname + '/' + path.normalize(fileList[i])];
          }else{
            entryJson[path.dirname(fileList[i].replace('src\\', '')) + '\\index'] = __dirname + '/' + path.normalize(fileList[i]);
          }
          configPlugins.push(new HtmlWebpackPlugin({
            filename: path.dirname(fileList[i]).replace('src\\', '') + '/index.html',
            chunks: [path.normalize(path.dirname(fileList[i]).replace('src\\', '') + '/index')],
          
            template : path.dirname(fileList[i]) + '/index.ejs',
          }));
        }
    }
  }
};


init.entries();

var babelPresets = {presets: ['react', 'es2015']},
    packagePresets = {widgets: __dirname + '/src/widgets/'};//组件们所在的目录
module.exports = {
  //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  devtool: 'source-map',
  entry: entryJson,
  output: {
      path: path.join(__dirname, "dist/"),//
      filename: "[name].[hash:4].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?'+JSON.stringify(babelPresets), 'package-loader?' + JSON.stringify(packagePresets)]//在webpack的module部分的loaders里进行配置即可
      },
      
      { 
        test : /\.(less|css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      },
      {
        // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url?limit=1&name=../../../../../htdocs/zh_CN/base/images/[name].[ext]',
      }
    ]
  },
  plugins: configPlugins,
};