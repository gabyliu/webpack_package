'use strict';
const readline = require('readline');
const fs = require('fs');
var fse = require('node-fs-extra');
var colors = require('colors');
let path = require('path'); 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var methodAsk = {
	package: function(wording){
		rl.question(wording, (answer) => {
		
		});
	}
};
var methodArray = {
	hasEle: function(list, index){
		for(var i in list){
			if(list[i] == index){
				return true;
			}
		}
		return false;
	}
}
//config值操作
function MethodAObjectConfig(){
	this.config = {};
	this.wordingOut = {
		warning1: 'The answer is not legal!',
		warning2: 'The answer can\'t be empty',
		warning3: 'Cannot find directory of ',
		step1: ', make your choose: ',//page, widget
		step2: {
			before: 'packageName use ',
			after: ' for default, or use: '
		},
		step3: {
			before: 'html title use ',
			after: ' for default, or use: '
		},
		step4: {
			before: 'you need ',
			after: '?(Y or N)'
		}
	};
	this.dataInit = {
		choices: [],
		sampleDir: '',
		distDir: '',
		packageName: '',//包的名称，必填
		htmlTitle: '',//非必填
		source: {}
	};
}
MethodAObjectConfig.prototype.init = function(config){
	this.config = config;
	for(var x in config){
		this.dataInit.choices.push(x);
		this.wordingOut.step1 = x + ' ' + this.wordingOut.step1;
	}
}
MethodAObjectConfig.prototype.askPackage = function(){//询问，并初始化各种dataInit参数
	//methodAsk.package(this.wordingOut.step1);
	var _this = this;
	rl.question(this.wordingOut.step1, (answer) => {
		if(methodArray.hasEle(this.dataInit.choices, answer)){
			this.dataInit.sampleDir = './plugin-package/samplePackage/' + answer;
			this.dataInit.distDir = this.config[answer].distDir;
			this.dataInit.packageName = answer;
			this.initArg();
			
			
			
		}else if(!answer){//输入为空
			this.askPackage();
		}else{//不存在这个文件夹
			console.error((this.wordingOut.warning3 + '"plugin-package/sampleDir/' + answer + '/"').red);
			this.askPackage();
		}
	});
}

MethodAObjectConfig.prototype.initArg = function(){
	var _this = this;

	fs.readFile(this.dataInit.sampleDir + '/index.ejs', {
		encoding: 'utf8'
	}, function(err, data){

		data.replace(/<title>(.*)<\/title>/gi, function(matchs, m1, m2){
			_this.dataInit.htmlTitle = m1;
		});
		data.replace(/<script src="(.*)"><\/script>/gi, function(matchs, m1, m2){
			_this.dataInit.source[path.basename(m1)] = true;
			
		});
		_this.reSetName();
	});

	
};


MethodAObjectConfig.prototype.reSetName = function(){//拿到数据开始reset package
	var _this = this;
	rl.question(this.wordingOut.step2.before + '"' + this.dataInit.packageName + '"' + this.wordingOut.step2.after, (answer) => {
		if(answer){
			

			fs.exists(this.dataInit.distDir + answer + '/',function(exists){//判断目录是否已经存在
				if(exists){
					console.error(('package of ' + _this.dataInit.distDir + answer + '/' + ' has been in existence').red);
					_this.reSetName();
				}
				if(!exists){//不存在才合法
					_this.dataInit.packageName = answer;
					rl.question(_this.wordingOut.step3.before + '"' + _this.dataInit.htmlTitle + '"' + _this.wordingOut.step3.after, (answer) => {
						if(answer){
							_this.dataInit.htmlTitle = answer;
						}

						var l = new Object();
						for(var i in _this.dataInit.source){
							l[i] = _this.dataInit.source[i];
						}
						_this.reSetSourceRefer(l, _this.wordingOut.step4.before,  _this.wordingOut.step4.after);
					});

				}
			})

		}
		
	});
}

MethodAObjectConfig.prototype.reSetSourceRefer = function(l, w1, w2){
	var _this = this;
	if(isEmptyObj(l)){//对象为空
		this.initPackage();

	}else{//对象不为空
		for(let i in l){
			let index = i;
			rl.question(w1 + '"' + i + '"' + w2, (answer) => {
				
				if(!answer || answer.toUpperCase() == 'Y' || answer.toUpperCase() == 'N'){//合法输入
					
					if(answer.toUpperCase() == 'N'){//false
						_this.dataInit.source[index] = false;
					}else{//true
						_this.dataInit.source[index] = true;
					}
					delete l[index];//！！！
					_this.reSetSourceRefer(l, w1, w2);
				}else{//不合法输入
					console.error((_this.wordingOut.warning1).red);
					var list = new Object();
					for(var i in _this.dataInit.source){
						list[i] = _this.dataInit.source[i];
					}
					_this.reSetSourceRefer(list, _this.wordingOut.step4.before,  _this.wordingOut.step4.after);
				}
				
			});
			
		}
	}
}

MethodAObjectConfig.prototype.initPackage = function(){
	//新建文件夹
		let _this = this;
	  fs.mkdir(this.dataInit.distDir + this.dataInit.packageName, function(err){
	     if(err){
	      console.error((err).red);
	     }else{
	      //拷贝文件到文件夹中

	      fse.copy(_this.dataInit.sampleDir + '/', _this.dataInit.distDir + _this.dataInit.packageName + '/', function (err) {
	        if(err){
	          console.error((err).red);
	        }else{//成功
	          fs.readFile(_this.dataInit.distDir + _this.dataInit.packageName + '/index.ejs', {
	            encoding: 'utf8'
	          }, function(err, data){
	              
	              //修改index.ejs内容
	              var dataReplace = data.replace(/<title>(.*)<\/title>/gi, function(matchs, m1, m2){
	                  return '<title>' + _this.dataInit.htmlTitle + '</title>';
	                  
	              });

	              for(var i in _this.dataInit.source){

	              		if(!_this.dataInit.source[i]){//为false
	              			var re = new RegExp('<script src="(.*)' + i + '"><\/script>', 'gi');
	              			dataReplace = dataReplace.replace(re, function(matchs, m1, m2){
			                  	return '';
			                  
			              	})
	              		}
	              }
	              //写入
	              fs.writeFile(_this.dataInit.distDir + _this.dataInit.packageName + '/index.ejs', dataReplace, {
	                  encoding: 'utf8'
	              }, function(err) {
	                  if (err) throw err;
	                  console.log(('package of ' + _this.dataInit.distDir + _this.dataInit.packageName + '/' + ' generate success').green);
	                  rl.close();
	              });
	          });
	        }

	      })
	     }
	  });
}

function isEmptyObj(obj)
{
	for (var name in obj){
		return false;
	}
	return true
}; 


let configDataMethod = new MethodAObjectConfig();

function setConfig(v){
	configDataMethod.init(v);
  	configDataMethod.askPackage();
}

module.exports = setConfig;