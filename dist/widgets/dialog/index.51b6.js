/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);


/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.Dialog = undefined;
	
	__webpack_require__(33);
	
	/*
	YourWidget：你的组件名称，可以多个组件
	widget.YourWidget：中的widget为文件所在文件夹名称
	*/
	
	//组件的实现
	//按钮
	var Btn = React.createClass({
	    displayName: 'Btn',
	
	    handleClick: function handleClick(e) {
	        e.stopPropagation();
	        this.props.data.handle({
	            id: this.props.data.id
	        });
	    },
	    render: function render() {
	        var classNameBtn = typeof this.props.data.setting.classname != 'undefined' ? 'btn ' + this.props.data.setting.classname : 'btn';
	        return React.createElement(
	            'a',
	            { onClick: this.handleClick, className: classNameBtn },
	            this.props.data.setting.text
	        );
	    }
	});
	
	var Dialog = React.createClass({
	    displayName: 'Dialog',
	
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    handleClick: function handleClick(v) {
	        this.props.data.handle({
	            id: v
	        });
	    },
	    render: function render() {
	        var className = this.props.data.setting.classname ? 'dialog ' + this.props.data.setting.classname : 'dialog',
	            _this = this,
	            propsBtnList = this.props.data.setting.btnList ? this.props.data.setting.btnList : [],
	            btnList = propsBtnList.map(function (list) {
	            var btnData = list;
	            btnData.handle = _this.handleClick.bind(_this, _this.props.data.setting.id + '_' + btnData.setting.id);
	            return React.createElement(Btn, { data: btnData });
	        });
	
	        return React.createElement(
	            'div',
	            { className: 'dialog_mask' },
	            React.createElement(
	                'div',
	                { className: className },
	                this.props.data.setting.title ? React.createElement(
	                    'div',
	                    { className: 'dialog_head' },
	                    this.props.data.setting.title
	                ) : null,
	                React.createElement('span', { className: 'dialog_close', onClick: this.handleClick.bind(this, this.props.data.setting.id + '_close') }),
	                React.createElement(
	                    'div',
	                    { className: 'dialog_content' },
	                    this.props.data.setting.content
	                ),
	                btnList.length != 0 ? React.createElement(
	                    'div',
	                    { className: 'dialog_ft' },
	                    btnList
	                ) : null
	            )
	        );
	    }
	});
	
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    getInitialState: function getInitialState() {
	        return {
	            isOpen: {
	                Dialog: false
	            },
	            Dialog: { //组件的配置
	                setting: {
	                    classname: 'myDialogClassname',
	                    title: '我的弹窗标题', //string，弹框标题
	                    content: '我的弹窗内容', //string, 弹框内容，也可以是另一个组件
	                    id: 'DialogId',
	                    btnList: [//没有btnList则没有dialog ft
	                    {
	                        setting: {
	                            id: 'dialog_btn_cancel', //必填，string，触发事件时会返回
	                            classname: 'btn_default', //选填，string，扩展的className
	                            text: '取消' }
	
	                    }, {
	                        setting: {
	                            id: 'dialog_btn_sure', //必填，string，触发事件时会返回
	                            classname: 'btn_primary', //选填，string，扩展的className
	                            text: '确定' }
	
	                    }]
	                },
	                handle: this.handle //object, 接收弹框点击事件
	
	            },
	            Btn: {
	                setting: {
	                    id: 'dialog_btn_cancel', //必填，string，触发事件时会返回
	                    classname: 'btn_primary', //选填，string，扩展的className
	                    text: '打开dialog' },
	                handle: this.handleDialogShow
	            },
	            resultDialog: '', //操作后的返回结果
	            isShow: {
	                Dialog: false
	            }
	        };
	    },
	    handleDialogShow: function handleDialogShow() {
	        var stateIsShow = this.state.isShow;
	        stateIsShow.Dialog = !stateIsShow.Dialog;
	        this.setState({
	            isShow: stateIsShow
	        });
	    },
	    handle: function handle(v) {
	        if (v.id == 'DialogId_close') {
	            var dataIsShow = this.state.isShow;
	            dataIsShow.Dialog = false;
	            this.setState({
	                isShow: dataIsShow,
	                resultDialog: JSON.stringify(v)
	            });
	        }
	        this.setState({
	            resultDialog: JSON.stringify(v)
	        });
	    },
	    handleClickOpenSetting: function handleClickOpenSetting(index, e) {
	        var stateIsopen = this.state.isOpen;
	        stateIsopen[index] = !stateIsopen[index];
	
	        this.setState({
	            isOpen: stateIsopen
	        });
	    },
	    render: function render() {
	        var settingDialog = JSON.stringify(this.state.Dialog, null, '\t');
	
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.Dialog ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'Dialog') },
	                'dialog.Dialog'
	            ),
	            this.state.isOpen.Dialog ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingDialog
	            ) : null,
	            this.state.isShow.Dialog ? React.createElement(Dialog, { data: this.state.Dialog }) : null,
	            React.createElement(Btn, { data: this.state.Btn }),
	            React.createElement(
	                'div',
	                null,
	                this.state.resultDialog
	            ),
	            React.createElement('br', null),
	            React.createElement('br', null)
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.Dialog = Dialog;
	exports.Inner = Inner;

/***/ },

/***/ 33:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.51b6.js.map