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

	module.exports = __webpack_require__(16);


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.TextareaHint = exports.InputHint = undefined;
	
	__webpack_require__(17);
	
	//带输入提示的输入框
	var InputHint = React.createClass({
	    displayName: 'InputHint',
	
	    handleChange: function handleChange(e) {
	        this.props.data.handle({
	            value: e.target.value,
	            id: this.props.data.id
	        });
	    },
	    render: function render() {
	        var classNameContainer = typeof this.props.data.classname != 'undefined' ? 'frm_input_group with_hint ' + this.props.data.classname : 'frm_input_group with_hint',
	            domHint = typeof this.props.data.max != 'undefined' ? React.createElement(
	            'span',
	            { className: 'frm_hint' },
	            React.createElement(
	                'i',
	                null,
	                this.props.data.num
	            ),
	            React.createElement(
	                'span',
	                null,
	                ' / '
	            ),
	            React.createElement(
	                'b',
	                null,
	                this.props.data.max
	            )
	        ) : null;
	        this.props.data.status.failText ? classNameContainer += ' fail' : classNameContainer;
	
	        return React.createElement(
	            'div',
	            { className: classNameContainer },
	            this.props.data.label ? React.createElement(
	                'label',
	                { className: 'frm_label' },
	                this.props.data.label
	            ) : null,
	            React.createElement(
	                'span',
	                { className: 'frm_input_box' },
	                React.createElement('input', { onChange: this.handleChange, type: 'text', placeholder: this.props.data.placeholder, className: 'frm_input', value: this.props.data.value }),
	                domHint
	            ),
	            this.props.data.status.failText ? React.createElement(
	                'p',
	                { className: 'frm_tips fail' },
	                this.props.data.status.failText
	            ) : null
	        );
	    }
	});
	
	//带输入提示的textarea
	var TextareaHint = React.createClass({
	    displayName: 'TextareaHint',
	
	    handleChange: function handleChange(e) {
	        this.props.data.handle({
	            value: e.target.value,
	            id: this.props.data.setting.id
	        });
	    },
	    render: function render() {
	        var status = this.props.data.status ? this.props.data.status : {},
	            classNameContainer = typeof this.props.data.classname != 'undefined' ? 'frm_textarea_group with_hint ' + this.props.data.classname + (status.failText ? ' fail' : '') : 'frm_textarea_group with_hint' + (status.failText ? ' fail' : ''),
	            domHint = typeof this.props.data.max != 'undefined' ? React.createElement(
	            'span',
	            { className: 'frm_hint' },
	            React.createElement(
	                'i',
	                null,
	                this.props.data.num
	            ),
	            React.createElement(
	                'span',
	                null,
	                ' / '
	            ),
	            React.createElement(
	                'b',
	                null,
	                this.props.data.max
	            )
	        ) : null;
	        return React.createElement(
	            'div',
	            { className: classNameContainer },
	            this.props.data.setting.label ? React.createElement(
	                'label',
	                { className: 'frm_label' },
	                this.props.data.setting.label
	            ) : null,
	            React.createElement(
	                'div',
	                { className: 'frm_textarea_box' },
	                React.createElement(
	                    'textarea',
	                    { type: 'text', placeholder: this.props.data.placeholder, onChange: this.handleChange, className: 'frm_textarea' },
	                    this.props.data.value
	                ),
	                domHint
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
	            isOpen: {
	                input: false,
	                textarea: false
	            },
	            input: {
	                label: '我是input的label',
	                id: 'inputId', //必填，string，触发事件返回时会带回来
	                max: 8, //选填，int，有就会显示字数
	                num: 0, //选填，当前输入的字数
	                classname: 'inputExtendClassName', //选填，string
	                handle: this.handleChangeInput, //必填，object
	                value: '', //必填，string，input初始化值
	                placeholder: '我是input的placeholder', //选填，string，input的placeholder
	                status: {
	                    ret: 0,
	                    failText: ''
	                }
	            },
	            textarea: {
	                setting: {
	                    label: '我是textarea的label',
	                    id: 'textareaId' //必填，string，触发事件返回时会带回来
	                },
	                status: {
	                    ret: 0,
	                    failText: ''
	                },
	                max: 13, //选填，int，有就会显示字数
	                num: 0, //选填，当前输入的字数
	                classname: 'textareaExtendClassName', //选填，string
	                handle: this.handleChangeTextarea, //必填，object
	                value: '', //必填，string，textarea初始化值
	                placeholder: '我是textarea的placeholder' //选填，string，textarea的placeholder
	            },
	            resultInput: '',
	            resultTextarea: ''
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var initInputValue = 'input初始值',
	            initTextareaValue = 'textarea初始值',
	            stateInput = this.state.input,
	            stateTextarea = this.state.textarea;
	
	        stateInput.value = initInputValue;
	        stateInput.num = initInputValue.length;
	        stateTextarea.value = initTextareaValue;
	        stateTextarea.num = initTextareaValue.length;
	
	        this.setState({
	            input: stateInput,
	            textarea: stateTextarea
	        });
	    },
	    handleChangeInput: function handleChangeInput(v) {
	        var stateInput = this.state.input;
	        stateInput.value = v.value;
	        stateInput.num = v.value.length;
	        this.setState({
	            input: stateInput,
	            resultInput: JSON.stringify(v)
	        });
	    },
	    handleChangeTextarea: function handleChangeTextarea(v) {
	        var stateTextarea = this.state.textarea;
	        stateTextarea.value = v.value;
	        stateTextarea.num = v.value.length;
	        this.setState({
	            textarea: stateTextarea,
	            resultTextarea: JSON.stringify(v)
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
	        var settingInput = JSON.stringify(this.state.input, null, '\t'),
	            settingTextarea = JSON.stringify(this.state.textarea, null, '\t');
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.input ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'input') },
	                'InputTextarea.InputHint'
	            ),
	            this.state.isOpen.input ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingInput
	            ) : null,
	            React.createElement(InputHint, { data: this.state.input }),
	            React.createElement(
	                'div',
	                null,
	                this.state.resultInput
	            ),
	            React.createElement('br', null),
	            React.createElement('br', null),
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.textarea ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'textarea') },
	                'InputTextarea.TextareaHint'
	            ),
	            this.state.isOpen.textarea ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingTextarea
	            ) : null,
	            React.createElement(TextareaHint, { data: this.state.textarea }),
	            React.createElement(
	                'div',
	                null,
	                this.state.resultTextarea
	            )
	        );
	    }
	});
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.InputHint = InputHint;
	exports.TextareaHint = TextareaHint;
	exports.Inner = Inner;

/***/ },

/***/ 17:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map