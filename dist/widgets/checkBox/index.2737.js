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

	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.CheckBox = undefined;
	
	__webpack_require__(11);
	
	Array.prototype.update = function (val) {
	    var index = this.indexOf(val);
	    if (index > -1) {
	        this.splice(index, 1);
	    } else {
	        this.push(val);
	    }
	};
	var CheckBox = React.createClass({
	    displayName: 'CheckBox',
	
	    handleClick: function handleClick(item, index) {
	        var valSelected = this.props.data.value;
	        valSelected.update(item);
	        this.props.data.handle({
	            value: valSelected, //array，选中的值
	            status: this.checkPattern(valSelected), //值的状态，成功：'suc'，超过可选个数：'overLimit'，小于可选个数：'lessLimit'
	            id: this.props.data.setting.id //
	        });
	    },
	    checkPattern: function checkPattern(vals) {
	        var reg = this.props.data.reg ? this.props.data.reg : {};
	        if (typeof reg.max != 'undefined') {
	            if (vals.length > reg.max) {
	                return 'overLimit';
	            }
	        }
	        if (typeof reg.min != 'undefined') {
	            if (vals.length < reg.min) {
	                return 'lessLimit';
	            }
	        }
	        return 'suc';
	    },
	    render: function render() {
	        var status = this.props.data.status ? this.props.data.status : {},
	            mainClass = this.props.data.setting.classname ? 'frm_checkbox_area ' + this.props.data.setting.classname + (status.failText ? ' fail' : '') : 'frm_checkbox_area' + (status.failText ? ' fail' : ''),
	            _this = this,
	            checkBoxes = this.props.data.init.map(function (list) {
	            var classLabel = 'frm_checkbox_label';
	            _this.props.data.value.indexOf(list) > -1 ? classLabel = classLabel + ' selected' : null;
	            return React.createElement(
	                'lable',
	                { onClick: _this.handleClick.bind(this, list), value: list, 'for': _this.props.data.setting.id, className: classLabel },
	                React.createElement('i', { className: 'icon_checkbox' }),
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
	                { className: 'frm_checkbox_control' },
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
	            checkbox: {
	                setting: {
	                    label: '我是checkbox的label',
	                    id: 'CharacterJson',
	                    classname: 'checkbox_character' //选填，string，扩展class
	                },
	                status: {
	                    ret: 0,
	                    failText: ''
	                },
	                init: ["男性人物", "女性人物", "纯文字", "食物", "植物", "猫", "狗", "熊", "猪", "熊猫", "兔子", "猴子", "其他"], //必填，array，有哪些选项
	                value: ["猪", "猴子"], //必填，array，有哪些被选了
	                reg: { //必填，object，限制
	                    max: 2, //选填，int，例如：最多只能选3个
	                    min: 1 //选填，int，例如：最少只能选1个
	                },
	                handle: this.handleCheckbox //必填，object，触发的事件
	            },
	            result: ''
	        };
	    },
	    handleCheckbox: function handleCheckbox(data) {
	        var stateData = this.state.checkbox;
	        switch (data.index) {
	            case 'CharacterJson':
	                stateData.value = data.value;
	                stateData.status = data.status;
	                break;
	        }
	        this.setState({
	            checkbox: stateData,
	            result: JSON.stringify(data)
	        });
	    },
	    handleClickOpenSetting: function handleClickOpenSetting() {
	        this.setState({
	            settingIsOpen: !this.state.settingIsOpen
	        });
	    },
	    render: function render() {
	        var setting = JSON.stringify(this.state.checkbox, null, '\t');
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.settingIsOpen ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting },
	                'checkbox.CheckBox'
	            ),
	            this.state.settingIsOpen ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                setting
	            ) : null,
	            React.createElement(CheckBox, { data: this.state.checkbox }),
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
	
	exports.CheckBox = CheckBox;
	exports.Inner = Inner;

/***/ },

/***/ 11:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map