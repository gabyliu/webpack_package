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

	module.exports = __webpack_require__(29);


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.Btn = undefined;
	
	__webpack_require__(30);
	
	var Btn = React.createClass({
	    displayName: 'Btn',
	
	    handleClick: function handleClick(e) {
	        e.stopPropagation();
	        this.props.data.handle({
	            id: this.props.data.setting.id
	        });
	    },
	    render: function render() {
	        var classNameBtn = typeof this.props.data.setting.classname != 'undefined' ? 'btn ' + this.props.data.setting.classname : 'btn',
	            hrefBtn = typeof this.props.data.href != 'undefined' ? this.props.data.href : 'javascript:;';
	        return React.createElement(
	            'a',
	            { onClick: this.handleClick, href: hrefBtn, className: classNameBtn },
	            this.props.data.setting.content
	        );
	    }
	});
	
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    getInitialState: function getInitialState() {
	        return {
	            isOpen: {
	                Btn: false
	            },
	            Btn: { //组件的配置
	                setting: {
	                    id: 'btn_id',
	                    classname: 'btn_primary',
	                    content: '我是按钮的内容'
	                },
	
	                handle: this.hadle
	            },
	            resultBtn: ''
	        };
	    },
	    hadle: function hadle(v) {
	        var stateBtn = this.state.Btn;
	        this.setState({
	            resultBtn: JSON.stringify(v)
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
	        var settingBtn = JSON.stringify(this.state.Btn, null, '\t');
	
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.Btn ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'Btn') },
	                'btn.Btn'
	            ),
	            this.state.isOpen.Btn ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingBtn
	            ) : null,
	            React.createElement(Btn, { data: this.state.Btn }),
	            React.createElement(
	                'div',
	                null,
	                this.state.resultBtn
	            ),
	            React.createElement('br', null),
	            React.createElement('br', null)
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.Btn = Btn;
	exports.Inner = Inner;

/***/ },

/***/ 30:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map