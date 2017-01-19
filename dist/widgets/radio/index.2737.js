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

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.Radio = undefined;
	
	__webpack_require__(14);
	
	var Radio = React.createClass({
	    displayName: 'Radio',
	
	    handleClick: function handleClick(item, index) {
	        this.props.data.handle({
	            value: item, //被选中的选项值
	            id: this.props.data.setting.id //事件id，也就是reponse.index
	        });
	    },
	    render: function render() {
	        var status = this.props.data.status ? this.props.data.status : {},
	            mainClass = 'frm_radio_area ' + this.props.data.extendClass + (status.failText ? ' fail' : ''),
	            _this = this,
	            checkBoxes = this.props.data.init.map(function (list) {
	            var classLabel = 'frm_radio_label';
	            _this.props.data.value == list ? classLabel = classLabel + ' selected' : null;
	            return React.createElement(
	                'lable',
	                { onClick: _this.handleClick.bind(this, list), value: list, className: classLabel },
	                React.createElement('i', { className: 'icon_radiobox' }),
	                React.createElement(
	                    'span',
	                    { className: 'lbl_content' },
	                    list
	                )
	            );
	        });
	
	        return React.createElement(
	            'div',
	            { className: mainClass },
	            this.props.data.setting.label ? React.createElement(
	                'label',
	                { className: 'frm_label' },
	                this.props.data.setting.label
	            ) : null,
	            React.createElement(
	                'div',
	                { className: 'frm_radio_control' },
	                checkBoxes
	            ),
	            status.failText ? React.createElement(
	                'p',
	                { className: 'frm_tips fail' },
	                status.failText
	            ) : null
	        );
	    }
	});
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    getInitialState: function getInitialState() {
	        return {
	            settingIsOpen: false,
	            radio: {
	                setting: {
	                    id: 'Style',
	                    label: '我是radio的label'
	                },
	                status: {
	                    ret: 0,
	                    failText: '我是radio的错误提示'
	                },
	                extendClass: 'radio_style', //选填，string，扩展class
	                //init: ["情侣", "家庭", "春节", "圣诞节", "中秋节", "端午节", "其他节日", "方言", "红包", "网络语", "其他"],//必填，array，有那些选项
	                init: ["我要登录", "我不要登录"],
	                value: '我要登录', //必填，string，上一次选过的选项值
	                handle: this.handleRadio //必填，object，触发的事件
	            },
	            result: ''
	        };
	    },
	    handleRadio: function handleRadio(data) {
	        var stateData = this.state.radio;
	        switch (data.id) {
	            case 'Style':
	                stateData.value = data.value;
	                break;
	        }
	        this.setState({
	            data: stateData,
	            result: JSON.stringify(data)
	        });
	    },
	    handleClickOpenSetting: function handleClickOpenSetting() {
	        this.setState({
	            settingIsOpen: !this.state.settingIsOpen
	        });
	    },
	    render: function render() {
	        var setting = JSON.stringify(this.state.radio, null, '\t');
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.settingIsOpen ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting },
	                'radio.Radio'
	            ),
	            this.state.settingIsOpen ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                setting
	            ) : null,
	            React.createElement(Radio, { data: this.state.radio }),
	            React.createElement(
	                'p',
	                { className: 'result' },
	                '\u7ED3\u679C\uFF1A',
	                this.state.result
	            )
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.Radio = Radio;
	exports.Inner = Inner;

/***/ },

/***/ 14:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map