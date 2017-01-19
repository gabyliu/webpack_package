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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	
	var _index = __webpack_require__(10);
	
	var checkBox = _interopRequireWildcard(_index);
	
	var _index2 = __webpack_require__(13);
	
	var radio = _interopRequireWildcard(_index2);
	
	var _index3 = __webpack_require__(16);
	
	var inputTextarea = _interopRequireWildcard(_index3);
	
	var _index4 = __webpack_require__(19);
	
	var popover = _interopRequireWildcard(_index4);
	
	var _index5 = __webpack_require__(22);
	
	var fileUploader = _interopRequireWildcard(_index5);
	
	var _index6 = __webpack_require__(25);
	
	var nav = _interopRequireWildcard(_index6);
	
	var _index7 = __webpack_require__(29);
	
	var btn = _interopRequireWildcard(_index7);
	
	var _index8 = __webpack_require__(32);
	
	var dialog = _interopRequireWildcard(_index8);
	
	var _index9 = __webpack_require__(35);
	
	var list = _interopRequireWildcard(_index9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(checkBox.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(radio.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(inputTextarea.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(popover.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(fileUploader.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(nav.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(nav.NavTop, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(btn.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(dialog.Inner, null)
	            ),
	            React.createElement(
	                'div',
	                { className: 'section' },
	                React.createElement(list.Inner, null)
	            )
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Btn = exports.Inner = exports.Popover = undefined;
	
	__webpack_require__(20);
	
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
	        var classNameBtn = typeof this.props.data.classname != 'undefined' ? 'btn ' + this.props.data.classname : 'btn',
	            hrefBtn = typeof this.props.data.href != 'undefined' ? this.props.data.href : 'javascript:;';
	        return React.createElement(
	            'a',
	            { onClick: this.handleClick, href: hrefBtn, className: classNameBtn },
	            this.props.data.text
	        );
	    }
	});
	var Popover = React.createClass({
	    displayName: 'Popover',
	
	    getInitialState: function getInitialState() {
	        return {
	            isShow: false,
	            btnCancel: {
	                id: 'btn_popover_concel',
	                classname: 'btn_default',
	                text: '取消',
	                handle: this.handleClickCancel
	            },
	            btnSure: {
	                id: 'btn_popover_sure',
	                classname: 'btn_primary',
	                text: '确定',
	                handle: this.handleClickSure
	            }
	
	        };
	    },
	    //popover 关闭
	    handleClickCancel: function handleClickCancel() {
	        this.setState({
	            isShow: false
	        });
	    },
	    //popover 确定
	    handleClickSure: function handleClickSure() {
	        this.props.data.handle({
	            id: this.props.data.id,
	            value: this.props.data.value
	        });
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var isShow;
	        nextProps.data.isShow != this.state.isShow ? isShow = nextProps.data.isShow : isShow = this.state.isShow;
	        this.setState({
	            isShow: isShow
	        });
	    },
	    render: function render() {
	
	        var isShow = this.state.isShow,
	            popoverContent = null,
	            popoverAreaClass = typeof this.props.data.classname != 'undefined' ? "popover_area " + this.props.data.classname : 'popover_area',
	            popoverContentClass = typeof this.props.data.placementent != 'undefined' ? 'popover_content ' + this.props.data.placementent : 'popover_content center';
	        isShow == true ? popoverContent = React.createElement(
	            'div',
	            { className: popoverContentClass },
	            React.createElement('span', { className: 'popover_arrow' }),
	            this.props.data.content,
	            React.createElement(
	                'div',
	                { className: 'popover_content_opr_area' },
	                React.createElement(Btn, { data: this.state.btnCancel, onClick: this.handleClickCancel }),
	                React.createElement(Btn, { data: this.state.btnSure, onClick: this.handleClickCancel })
	            )
	        ) : popoverContent = null;
	        return React.createElement(
	            'div',
	            { className: popoverAreaClass },
	            popoverContent
	        );
	    }
	});
	
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    getInitialState: function getInitialState() {
	        return {
	            btn: {
	                id: 'btn_popover_showHide',
	                classname: 'btn_primary',
	                text: '气泡弹框',
	                handle: this.handleClick
	            },
	            Popover: {
	                classname: 'popover_confirm', //选填，string，扩展class name
	                placementent: 'right', //选填，string，popover箭头的位置，不写的话默认居中
	                content: '我是popover的内容', //必填，dom或string，弹窗的内容
	                isShow: false, //必填，boolen，用来控制popover出现还是隐藏
	                handle: this.handlePopoverConfirm, //必填，object，
	                id: 'popoverId', //必填，string，触发事件返回时会带回来
	                value: 'popoverValue' //必填，string，input初始化值
	            },
	            isOpen: {
	                Popover: false
	            },
	            resultPopover: ''
	        };
	    },
	    componentWillMount: function componentWillMount() {},
	    handleClickPage: function handleClickPage(e) {
	        /*e.stopPropagation();
	        e.preventDefault();*/
	
	        var statePopover = this.state.Popover;
	        statePopover.isShow = false;
	        this.setState({
	            Popover: statePopover
	        });
	    },
	    handleClick: function handleClick(event) {
	        var statePopover = this.state.Popover;
	        statePopover.isShow = true;
	        this.setState({
	            Popover: statePopover
	        });
	    },
	    handlePopoverConfirm: function handlePopoverConfirm(v) {
	        var statePopover = this.state.Popover;
	        statePopover.isShow = false;
	        this.setState({
	            Popover: statePopover,
	            resultPopover: JSON.stringify(v)
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
	        var settingPopover = JSON.stringify(this.state.Popover, null, '\t');
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.Popover ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'Popover') },
	                'popover.Popover'
	            ),
	            this.state.isOpen.Popover ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingPopover
	            ) : null,
	            React.createElement(
	                'div',
	                { className: 'container', onClick: this.handleClickPage },
	                React.createElement(Btn, { data: this.state.btn }),
	                React.createElement(Popover, { data: this.state.Popover }),
	                React.createElement(
	                    'div',
	                    null,
	                    this.state.resultPopover
	                )
	            )
	        );
	    }
	});
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.Popover = Popover;
	exports.Inner = Inner;
	exports.Btn = Btn;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Inner = exports.SingleFilePick = exports.ImagePick = undefined;
	
	var _React$createClass;
	
	__webpack_require__(23);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ImagePick = React.createClass({
	    displayName: 'ImagePick',
	
	    getInitialState: function getInitialState() {
	        return {
	            img: this.props.data.img,
	            load: {
	                show: 0,
	                progress: 0
	            },
	
	            isDragover: 0,
	            isHover: 0
	        };
	    },
	    handleClick: function handleClick() {
	        this.refs.imagePickInput.getDOMNode().click();
	    },
	    //µã»÷ÉÏ´«
	    handleChange: function handleChange(e) {
	        var fileList = e.target.files;
	        this.showPreview(fileList[0]);
	
	        var fileStatus = this.checkPattern(fileList[0]);
	        if (fileStatus.isPass) {
	            //·ûºÏ¸ñÊ½
	            this.upload(fileList[0]);
	        } else {
	            //²»·ûºÏ¸ñÊ½
	            this.response(null, fileStatus.status);
	        }
	    },
	    //Õ¹Ê¾Ô¤ÀÀÍ¼
	    showPreview: function showPreview(file) {
	        var reader = new FileReader();
	        reader.readAsDataURL(file);
	        reader.onload = function (e) {
	            this.setState({
	                img: reader.result
	            });
	        }.bind(this);
	    },
	    //ÍÏµ½ÉÏÃæ
	    handleDragOver: function handleDragOver(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        this.setState({
	            isDragover: 1
	        });
	    },
	    //ÒÑ¾­¶ª½øÈ¥
	    handleDrop: function handleDrop(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        this.setState({
	            isDragover: 0
	        });
	        var dt = e.dataTransfer;
	        var files = dt.files;
	        console.log(JSON.stringify(dt));
	        this.showPreview(files[files.length - 1]);
	
	        var fileStatus = this.checkPattern(files[files.length - 1]);
	        if (fileStatus.isPass) {
	            //·ûºÏ¸ñÊ½
	
	            this.upload(files[files.length - 1]);
	            files[files.length - 1] = false;
	        } else {
	            //²»·ûºÏ¸ñÊ½
	            this.response(null, fileStatus.status);
	        }
	        return false;
	    },
	    //¼ì²éÎÄ¼þ¸ñÊ½
	    checkPattern: function checkPattern(file) {
	        var fileType = file.type,
	            response = {};
	        if (fileType.indexOf('image/') >= 0) {
	            //ÊÇÍ¼Æ¬
	            fileType = fileType.replace('image/', '');
	            if (this.props.data.reg.format.indexOf(fileType) >= 0) {
	                //·ûºÏÍ¼Æ¬¸ñÊ½
	                if (this.props.data.reg.size) {
	                    //ÓÐ´óÐ¡ÏÞÖÆ
	                    if (this.props.data.reg.size >= file.size) {
	                        response.isPass = true;
	                    } else {
	                        response.isPass = false;
	                        response.status = 'oversized';
	                    }
	                } else {
	                    //Ã»ÓÐ´óÐ¡ÏÞÖÆ
	                    response.isPass = true;
	                }
	            } else {
	                //²»·ûºÏÍ¼Æ¬¸ñÊ½
	                response.isPass = false;
	                response.status = 'format error';
	            }
	        } else {
	            //²»ÊÇÍ¼Æ¬ ¸ñÊ½´íÎó
	            response.isPass = false;
	            response.status = 'format error';
	        }
	        return response;
	    },
	    //ÍÏ×§Àë¿ª
	    handleDragLeave: function handleDragLeave(e) {
	        this.setState({
	            isDragover: 0
	        });
	    },
	    //ÉÏ´«ÖÐ
	    uploading: function uploading(loaded, total) {
	
	        this.setState({
	            load: {
	                show: 1,
	                progress: loaded / total
	            }
	        });
	    },
	    //²»¹Ü³É¹¦Ê§°Ü£¬ÕâÀïÅ×ÊÂ¼þ
	    response: function response(d, status) {
	        this.setState({
	            load: {
	                show: 0
	            }
	        });
	        var data = {
	            index: this.props.data.responseValue,
	            status: status,
	            value: d
	        };
	        this.props.data.handle(data);
	    },
	    //ÉÏ´«Í¼Æ¬µ½·þÎñÆ÷
	    upload: function upload(file) {
	        (function (file, _this) {
	            var xhr = new XMLHttpRequest(),
	                reader = new FileReader();
	            if (xhr.upload) {
	                // ÉÏ´«ÖÐ
	                xhr.upload.addEventListener("progress", function (e) {
	                    _this.uploading(e.loaded, e.total);
	                }, false);
	                // ¿ªÊ¼ÉÏ´«
	                var data = new FormData();
	                for (var item in _this.props.data.requestValue) {
	                    data.append(item, _this.props.data.requestValue[item]);
	                }
	                data.append('file', file);
	                data.append('name', file.name);
	                data.append('type', file.type);
	                data.append('lastModifiedDate', file.lastModifiedDate);
	                data.append('size', file.size);
	                xhr.open("POST", '/cgi-bin/mmemoticonmgr-bin/uploadmedia', true);
	                xhr.send(data);
	                // ÎÄ¼þÉÏ´«³É¹¦»òÊÇÊ§°Ü
	                xhr.onreadystatechange = function (e) {
	                    if (xhr.readyState == 4) {
	                        if (xhr.status == 200) {
	                            _this.response(JSON.parse(xhr.response), 'suc');
	                        }
	                    }
	                };
	            }
	        })(file, this);
	    },
	    //Êó±êÔÚ×é¼þÉÏ
	    handleMouseoverPick: function handleMouseoverPick(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        if (this.state.isHover != 1) {
	            this.setState({
	                isHover: 1
	            });
	        }
	    },
	    //Êó±êÀë¿ª
	    handleMouseleavePick: function handleMouseleavePick(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        this.setState({
	            isHover: 0
	        });
	    },
	    //É¾³ýÊÂ¼þ
	    handleClickDele: function handleClickDele(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        var data = {
	            index: this.props.data.responseValue,
	            status: 'dele',
	            value: null
	        };
	        this.props.data.handle(data);
	        this.setState({
	            preview: null
	        });
	    },
	    render: function render() {
	        var classArea = 'imagePickArea ' + this.props.data.extendClass,
	            contentPickBtn = '+',
	            loadStyle = {
	            width: this.state.load.progress * 100 + '%'
	        },
	            imagePickLoadArea = this.state.load.show == 1 ? React.createElement(
	            'div',
	            { className: 'imagePickLoadArea' },
	            React.createElement(
	                'div',
	                { className: 'loadBar' },
	                React.createElement('div', { className: 'loadContent', style: loadStyle })
	            )
	        ) : null,
	
	        //ÊÇ·ñÐèÒªÉ¾³ý
	        imagePickDeleArea = this.props.data.isNeedDele && this.state.img && this.state.isHover == 1 ? React.createElement(
	            'div',
	            { className: 'imagePickDeleArea' },
	            React.createElement(
	                'a',
	                { href: 'javascript:;', className: 'btn btn_warn', onClick: this.handleClickDele },
	                '\u5220\u9664'
	            )
	        ) : null;
	
	        this.state.isHover == 1 ? classArea += ' hover' : null;
	        if (this.state.isDragover == 1) {
	            classArea += ' dragover';
	            this.props.data.text.dragover ? contentPickBtn = this.props.data.text.dragover : null;
	        }
	        /*mouseover mouseleave·ÅÔÚ imagePick ÕâÒ»²ã»áÒ»Ö±´¥·¢*/
	        return React.createElement(
	            'div',
	            { className: classArea, onMouseOver: this.handleMouseoverPick, onMouseLeave: this.handleMouseleavePick, onDragLeave: this.handleDragLeave, onClick: this.handleClick, onDragOver: this.handleDragOver, onDrop: this.handleDrop },
	            React.createElement(
	                'div',
	                { className: 'imagePick' },
	                React.createElement('input', { ref: 'imagePickInput', onChange: this.handleChange, className: 'imagePickUploader_input', type: 'file' }),
	                React.createElement(
	                    'div',
	                    { className: 'imagePickUploader_btn' },
	                    contentPickBtn
	                ),
	                this.state.img ? React.createElement('img', { className: 'imagePickUploader_preview', ref: 'imagePickUploader_preview', src: this.state.img }) : null
	            ),
	            imagePickDeleArea,
	            imagePickLoadArea
	        );
	    }
	});
	
	//单文件上传
	var SingleFilePick = React.createClass((_React$createClass = {
	    displayName: 'SingleFilePick',
	
	    getInitialState: function getInitialState() {
	        console.log('SingleFilePick getInitialState');
	        return {
	            preview: this.props.data.preview,
	            load: {
	                show: 0,
	                progress: 0
	            },
	            status: '',
	            isDragover: 0,
	            isHover: 0
	        };
	    },
	    uploading: function uploading(loaded, total) {
	        console.log('uploading');
	        this.setState({
	            load: {
	                show: 1,
	                progress: loaded / total
	            }
	        });
	    },
	    upload: function upload(file) {
	        console.log('upload');
	        (function (file, _this) {
	            var xhr = new XMLHttpRequest(),
	                reader = new FileReader();
	            if (xhr.upload) {
	                // ÉÏ´«ÖÐ
	                xhr.upload.addEventListener("progress", function (e) {
	                    _this.uploading(e.loaded, e.total);
	                }, false);
	                // ¿ªÊ¼ÉÏ´«
	                var data = new FormData();
	                for (var item in _this.props.data.requestValue) {
	                    data.append(item, _this.props.data.requestValue[item]);
	                }
	                data.append('file', file);
	                data.append('name', file.name);
	                data.append('type', file.type);
	                data.append('lastModifiedDate', file.lastModifiedDate);
	                data.append('size', file.size);
	                xhr.open("POST", '/cgi-bin/mmemoticonmgr-bin/uploadmedia', true);
	                xhr.send(data);
	                // ÎÄ¼þÉÏ´«³É¹¦»òÊÇÊ§°Ü
	                xhr.onreadystatechange = function (e) {
	                    if (xhr.readyState == 4) {
	                        if (xhr.status == 200) {
	                            _this.response(JSON.parse(xhr.response), 'suc');
	                        }
	                    }
	                };
	            }
	        })(file, this);
	    },
	    //鼠标事件
	    handleMouseoverPick: function handleMouseoverPick() {
	
	        console.log('handleMouseoverPick');
	        this.setState({
	            isHover: 1
	        });
	    },
	    handleMouseleavePick: function handleMouseleavePick() {
	        console.log('handleMouseleavePick');
	        this.setState({
	            isHover: 0
	        });
	    },
	    //drap事件
	    handleDragOver: function handleDragOver(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        console.log('handleDragOver');
	        this.setState({
	            isDragover: 1
	        });
	    },
	
	    handleDrop: function handleDrop(e) {
	        e.stopPropagation();
	        e.preventDefault();
	        this.setState({
	            isDragover: 0
	        });
	        var dt = e.dataTransfer;
	        var files = dt.files;
	        console.log(JSON.stringify(dt));
	        this.showPreview(files[files.length - 1]);
	
	        var fileStatus = this.checkPattern(files[files.length - 1]);
	        if (fileStatus.isPass) {
	            //·ûºÏ¸ñÊ½
	
	            this.upload(files[files.length - 1]);
	            files[files.length - 1] = false;
	        } else {
	            //²»·ûºÏ¸ñÊ½
	            this.response(null, fileStatus.status);
	        }
	        return false;
	    },
	    checkPattern: function checkPattern(file) {
	        var fileType = file.type,
	            response = {};
	
	        if (file.name.substring(file.name.length - 3, file.name.length) == this.props.data.setting.reg.format) {
	            //符合格式
	            if (this.props.data.setting.reg.size) {
	                if (this.props.data.setting.reg.size > file.size) {
	                    //符合大小
	                    response.isPass = true;
	                } else {
	                    //不符合大小
	                    response.isPass = false;
	                    response.status = 'oversized';
	                    this.setState({
	                        status: response.status
	                    });
	                }
	            } else {
	                response.isPass = true;
	            }
	        } else {
	            response.isPass = false;
	            response.status = 'format error';
	            this.setState({
	                status: response.status
	            });
	        }
	        return response;
	    },
	    response: function response(d, status, name) {
	        this.setState({
	            load: {
	                show: 0
	            }
	        });
	        var data = {
	            name: name,
	            id: this.props.data.setting.id,
	            status: status,
	            value: d
	        };
	        this.props.data.handle(data);
	    },
	    showPreview: function showPreview(file) {
	        var reader = new FileReader();
	        reader.readAsDataURL(file);
	        reader.onload = function (e) {
	            this.setState({
	                preview: file.name
	            });
	        }.bind(this);
	    }
	}, _defineProperty(_React$createClass, 'upload', function upload(file) {
	    (function (file, _this) {
	        var xhr = new XMLHttpRequest(),
	            reader = new FileReader();
	        if (xhr.upload) {
	            // ÉÏ´«ÖÐ
	            xhr.upload.addEventListener("progress", function (e) {
	                _this.uploading(e.loaded, e.total);
	            }, false);
	            // ¿ªÊ¼ÉÏ´«
	            var data = new FormData();
	            for (var item in _this.props.data.setting.request.data) {
	                data.append(item, _this.props.data.setting.request.data[item]);
	            }
	            data.append('file', file);
	            data.append('name', file.name);
	            data.append('type', file.type);
	            data.append('lastModifiedDate', file.lastModifiedDate);
	            data.append('size', file.size);
	            xhr.open("POST", '/cgi-bin/mmemoticonmgr-bin/uploadmedia', true);
	            xhr.send(data);
	            // ÎÄ¼þÉÏ´«³É¹¦»òÊÇÊ§°Ü
	            xhr.onreadystatechange = function (e) {
	                if (xhr.readyState == 4) {
	                    if (xhr.status == 200) {
	                        switch (JSON.parse(xhr.response).base_resp.ret) {
	                            case 0:
	                                _this.setState({
	                                    status: 'suc'
	                                });
	                                _this.response(JSON.parse(xhr.response), 'suc', file.name);
	                                break;
	
	                            default:
	                                _this.setState({
	                                    status: 'system error'
	                                });
	                                _this.response(JSON.parse(xhr.response), 'system error', file.name);
	                                break;
	                        }
	                    }
	                } else {
	                    _this.response('', 'system error', file.name);
	                }
	            };
	        }
	    })(file, this);
	}), _defineProperty(_React$createClass, 'handleDragLeave', function handleDragLeave(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    console.log('handleDragLeave');
	    this.setState({
	        isDragover: 0
	    });
	}), _defineProperty(_React$createClass, 'handleClickDele', function handleClickDele(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    var data = {
	        id: this.props.data.setting.id,
	        status: 'dele',
	        value: null
	    };
	    this.props.data.handle(data);
	    this.setState({
	        preview: null
	    });
	}), _defineProperty(_React$createClass, 'componentWillMount', function componentWillMount() {
	    console.log('single componentWillMount');
	}), _defineProperty(_React$createClass, 'render', function render() {
	    var classArea = this.props.data.setting.classname ? 'filePickArea ' + this.props.data.setting.classname : 'filePickArea',
	        loadStyle = {
	        width: this.state.load.progress * 100 + '%'
	    },
	        uploaderBtnContent = React.createElement(
	        'div',
	        { className: 'filePickUploader_btn' },
	        React.createElement('div', { className: 'ic' }),
	        React.createElement(
	            'div',
	            { className: 'text' },
	            '\u70B9\u51FB\u6216\u62D6\u62FD\u4E0A\u4F20'
	        )
	    ),
	        errMsg = '';
	    /*filePickDeleArea = (this.props.data.isNeedDele && this.state.img && this.state.isHover == 1) ? <div className="filePickDeleArea">
	            <a href="javascript:;" className="btn btn_warn" onClick={this.handleClickDele}>删除</a>
	        </div> : null,
	    filePickLoadArea = this.state.load.show == 1 ? <div className="filePickLoadArea">
	            <div className="loadBar">
	                <div className="loadContent" style={loadStyle}></div>
	            </div>
	        </div> : null;*/
	
	    switch (this.state.status) {
	        case 'format error':
	            errMsg = '文件格式不正确';
	            break;
	
	        case 'oversized':
	            errMsg = '文件超过大小';
	            break;
	
	        case 'system error':
	            errMsg = '系统错误';
	            break;
	    }
	    classArea = this.state.isHover ? classArea + ' hover' : classArea;
	    uploaderBtnContent = this.state.load.show ? React.createElement(
	        'div',
	        { className: 'filePickLoadArea' },
	        React.createElement(
	            'div',
	            { className: 'loadBar' },
	            React.createElement('div', { className: 'loadContent', style: loadStyle })
	        )
	    ) : this.state.isDragover ? React.createElement(
	        'div',
	        { className: 'filePickUploader_btn dragOver' },
	        '\u91CA\u653E\u9F20\u6807'
	    ) : uploaderBtnContent;
	    return React.createElement(
	        'div',
	        { className: 'fileUploaderGroup' },
	        this.props.data.setting.label ? React.createElement(
	            'label',
	            { className: 'frm_label' },
	            this.props.data.setting.label
	        ) : null,
	        React.createElement(
	            'div',
	            { className: classArea, onMouseOver: this.handleMouseoverPick, onMouseLeave: this.handleMouseleavePick, onDragLeave: this.handleDragLeave, onClick: this.handleClick, onDragOver: this.handleDragOver, onDrop: this.handleDrop },
	            React.createElement(
	                'div',
	                { className: 'filePick' },
	                React.createElement('input', { ref: 'filePickInput', onChange: this.handleChange, className: 'filePickUploader_input', type: 'file' }),
	                uploaderBtnContent
	            ),
	            this.state.preview ? React.createElement(
	                'div',
	                { className: 'previewContainer' },
	                this.state.status != 'suc' || !this.state.status ? React.createElement('i', { className: 'ic_err' }) : null,
	                this.state.preview,
	                React.createElement(
	                    'span',
	                    { className: 'errMsg' },
	                    errMsg
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'link_dele', href: 'javascript:;', onClick: this.handleClickDele },
	                    '\u5220\u9664'
	                )
	            ) : null
	        )
	    );
	}), _React$createClass));
	
	var Inner = React.createClass({
	    displayName: 'Inner',
	
	    getInitialState: function getInitialState() {
	        var _setting;
	
	        return {
	            isOpen: {
	                ImagePick: false,
	                SingleFilePick: false
	            },
	            ImagePick1ImagePick: {
	                setting: {
	                    id: 'ImagePick',
	                    classname: 'imagepickerClassName',
	                    label: '我是ImagePicker的label',
	                    text: {
	                        normal: '点击上传',
	                        hover: '释放鼠标'
	                    },
	                    reg: {
	                        format: 'png',
	                        size: 1024 * 1024
	                    },
	                    request: { //请求
	                        url: '/cgi-bin/mmemoticonmgr-bin/uploadmedia',
	                        data: {
	                            mediaType: 123,
	                            mediaType2: 223,
	                            mediaType3: 323
	                        }
	                    }
	                },
	                value: null,
	                preview: '',
	                handle: this.handle
	            },
	            ImagePick: {
	                extendClass: 'imagePickExtendClass tc', //Ñ¡Ìî£¬string£¬À©Õ¹class
	                img: 'https://sticker.weixin.qq.com/htdocs/zh_CN/images/index/home_item127602b.png', //有需要预览的时候才加
	                reg: {
	                    format: 'png', //±ØÌî£¬string£¬ÏÞÖÆµÄÍ¼Æ¬¸ñÊ½
	                    size: 12 * 1024 //Ñ¡Ìî£¬int£¬ÏÞÖÆÍ¼Æ¬µÄ´óÐ¡
	                },
	                text: {
	                    dragover: '松开鼠标' //Ñ¡Ìî£¬string£¬Êó±êÍÏÍ¼Æ¬µ½×é¼þÊ±ºòµÄwording
	                },
	                isNeedDele: true, //Ñ¡Ìî£¬boolean£¬ÊÇ·ñÐèÒªÉ¾³ý²Ù×÷
	                request: '/cgi-bin/mmemoticonmgr-bin/uploadmedia', //±ØÌî£¬string£¬Í¼Æ¬ÉÏ´«cgi
	                requestValue: { //Ñ¡Ìî£¬object£¬postÒª´øµÄ×Ö¶Î
	                    mediaType: 123,
	                    mediaType2: 223,
	                    mediaType3: 323
	                },
	                responseValue: { //Ñ¡Ìî£¬object£¬Òª´ø»ØÀ´µÄÖµ
	                    id: 'ImagePick',
	                    v: '带回来啦'
	                },
	                handle: this.handleImageChange //±ØÌî£¬object£¬Í¼Æ¬ÉÏ´«·µ»Ø´¥·¢µÄÊÂ¼þ£¬·µ»Øid¡¢cgi·µ»ØÖµ
	            },
	            SingleFilePick: {
	                setting: (_setting = {
	                    label: '我是SingleFilePick的label',
	                    id: 'SingleFilePick',
	                    classname: 'singlePickerClassName'
	                }, _defineProperty(_setting, 'label', '我是单文件上传的label'), _defineProperty(_setting, 'reg', { //限制条件
	                    format: 'zip', //文件格式
	                    size: 1024 * 1024 * 1024 * 1024 //文件大小
	                }), _defineProperty(_setting, 'request', { //请求
	                    url: '/cgi-bin/mmemoticonmgr-bin/uploadmedia',
	                    data: {
	                        mediaType: 123,
	                        mediaType2: 223,
	                        mediaType3: 323
	                    }
	                }), _setting),
	                handle: this.handleFile,
	                value: null,
	                preview: '' //预览的内容
	            },
	            result: {
	                ImagePick: '',
	                SingleFilePick: ''
	            }
	        };
	    },
	    //文件上传handle
	    handleFile: function handleFile(v) {
	        var stateResult = this.state.result;
	        stateResult[v.id] = JSON.stringify(v);
	        this.setState({
	            result: stateResult
	        });
	    },
	    handleImageChange: function handleImageChange(v) {
	        var stateResult = this.state.result;
	        stateResult[v.index.id] = JSON.stringify(v);
	        this.setState({
	            result: stateResult
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
	        var settingImagePick = JSON.stringify(this.state.ImagePick, null, '\t'),
	            settingSingleFilePick = JSON.stringify(this.state.SingleFilePick, null, '\t');
	        return React.createElement(
	            'div',
	            { className: 'inner' },
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.ImagePick ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'ImagePick') },
	                'fileUploader.ImagePick'
	            ),
	            this.state.isOpen.ImagePick ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingImagePick
	            ) : null,
	            React.createElement(ImagePick, { data: this.state.ImagePick }),
	            React.createElement(
	                'p',
	                { className: 'result' },
	                '\u7ED3\u679C\u662F\uFF1A',
	                React.createElement('br', null),
	                this.state.result.ImagePick
	            ),
	            React.createElement('br', null),
	            React.createElement('br', null),
	            React.createElement('br', null),
	            React.createElement(
	                'h3',
	                { className: this.state.isOpen.SingleFilePick ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'SingleFilePick') },
	                'fileUploader.SingleFilePick'
	            ),
	            this.state.isOpen.SingleFilePick ? React.createElement(
	                'pre',
	                { className: 'setting' },
	                settingSingleFilePick
	            ) : null,
	            React.createElement(SingleFilePick, { data: this.state.SingleFilePick }),
	            React.createElement(
	                'p',
	                { className: 'result' },
	                '\u7ED3\u679C\u662F\uFF1A',
	                React.createElement('br', null),
	                this.state.result.SingleFilePick
	            ),
	            React.createElement('br', null),
	            React.createElement('br', null),
	            React.createElement('br', null)
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.ImagePick = ImagePick;
	exports.SingleFilePick = SingleFilePick;
	exports.Inner = Inner;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NavTop = exports.Inner = exports.NavPageInner = exports.NavPage = undefined;
	
	__webpack_require__(26);
	
	//页面顶部统一的nav
	var NavTop = React.createClass({
	    displayName: "NavTop",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "head" },
	            React.createElement(
	                "div",
	                { className: "inner" },
	                React.createElement(
	                    "a",
	                    { className: "logo", href: "/cgi-bin/mmemoticonmgr-bin/stikerchecklist?t=emotion/index&action=check&page=0" },
	                    React.createElement("span", { className: "logo_ic" }),
	                    React.createElement(
	                        "span",
	                        { className: "logo_text" },
	                        "\u5FAE\u4FE1 | \u8868\u60C5\u7BA1\u7406\u5E73\u53F0"
	                    ),
	                    React.createElement("span", { className: "logo_beta" })
	                )
	            )
	        );
	    }
	});
	//nav page
	var NavPage = React.createClass({
	    displayName: "NavPage",
	
	    initNavListEle: function initNavListEle(data) {
	        var navListEles = [];
	        for (var i in data) {
	            var ddClassName = data[i].disabled ? 'nav_ele ' + data[i].className + ' disabled' : 'nav_ele ' + data[i].className;
	            navListEles.push(React.createElement(
	                "dd",
	                { className: ddClassName },
	                data[i].link ? React.createElement(
	                    "a",
	                    { className: "nav_link", href: data[i].link, title: data[i].value },
	                    data[i].value
	                ) : React.createElement(
	                    "div",
	                    { className: "nav_link", title: data[i].value },
	                    data[i].value
	                )
	            ));
	        }
	        return navListEles;
	    },
	    initNavList: function initNavList(data) {
	        var navList = [];
	        for (var i in data) {
	            navList.push(React.createElement(
	                "dl",
	                { className: "nav_list" },
	                React.createElement(
	                    "dt",
	                    { className: data[i].disabled ? 'nav_ele nav_title disabled' : 'nav_ele nav_title' },
	                    data[i].link ? React.createElement(
	                        "a",
	                        { className: "nav_link", href: data[i].link, title: data[i].value },
	                        data[i].value
	                    ) : React.createElement(
	                        "div",
	                        { className: "nav_link", title: data[i].value },
	                        data[i].value
	                    ),
	                    this.initNavListEle(data[i].eles)
	                )
	            ));
	        }
	        return navList;
	    },
	    componentWillMount: function componentWillMount() {
	        this.initNavList(this.props.data);
	    },
	    render: function render() {
	        //var dlList = this.initNavList(this.props.data);
	        return React.createElement(
	            "div",
	            { className: "nav" },
	            this.initNavList(this.props.data)
	        );
	    }
	});
	
	//nav top
	var NavPageInner = React.createClass({
	    displayName: "NavPageInner",
	
	    initEles: function initEles(d) {
	        var eleList = [];
	
	        for (var i in d.eles) {
	            var eleClass = i == d.selected ? 'page_nav_ele selected' : 'page_nav_ele';
	
	            eleList.push(React.createElement(
	                "li",
	                { onClick: this.handleClick.bind(this, i), className: eleClass },
	                React.createElement(
	                    "a",
	                    { href: d.eles[i].link, className: "page_nav_link" },
	                    d.eles[i].value
	                )
	            ));
	        }
	        return eleList;
	    },
	    handleClick: function handleClick(i) {
	        var data = {
	            value: i
	        };
	        this.props.data.handle(data);
	    },
	    render: function render() {
	
	        return React.createElement(
	            "ul",
	            { className: "page_nav_list group" },
	            this.initEles(this.props.data)
	        );
	    }
	});
	
	var Inner = React.createClass({
	    displayName: "Inner",
	
	    getInitialState: function getInitialState() {
	        return {
	            isOpen: {
	                NavPage: false,
	                NavPageInner: false
	            },
	            NavTop: {},
	            NavPageInner: {
	                selected: 'dynamicDel',
	                handle: this.handleNavPageClick,
	                eles: {
	                    history: {
	                        value: '投放历史',
	                        link: 'javascript:;'
	
	                    },
	                    dynamicDel: {
	                        value: '动态投放',
	                        link: 'javascript:;'
	                    }
	                }
	
	            },
	            NavPage: {
	                check: {
	                    value: '审核',
	                    link: null, //空则不是a标签
	                    disabled: false,
	                    className: '',
	                    eles: {
	                        album: {
	                            value: '表情专辑',
	                            link: '/cgi-bin/mmemoticonmgr-bin/stikerchecklist?t=emotion/index&action=check&page=0',
	                            disabled: false,
	                            className: ''
	                        },
	                        single: {
	                            value: '表情单品',
	                            link: '/cgi-bin/mmemoticonmgr-bin/emojichecklist?t=single/index&action=check&page=0',
	                            disabled: false,
	                            className: ''
	                        },
	                        artist: {
	                            value: '艺术家信息',
	                            link: '/cgi-bin/mmemoticonmgr-bin/designerchecklist?t=user/index&page=0&action=pass',
	                            disabled: false,
	                            className: ''
	                        },
	                        regist: {
	                            value: '企业注册信息',
	                            link: '/cgi-bin/mmemoticonmgr-bin/regchecklist?t=enterp/index&action=check&page=0',
	                            disabled: false,
	                            className: ''
	                        }
	                    }
	                },
	                operate: {
	                    value: '运营',
	                    link: null,
	                    disabled: false,
	                    className: '',
	                    eles: {
	                        config: {
	                            value: '推荐表情&最近热门配置',
	                            link: '/cgi-bin/mmemoticonmgr-bin/celllist?t=banner/index_new&action=online',
	                            disabled: false,
	                            className: ''
	                        },
	                        bannerConfig: {
	                            value: 'banner配置',
	                            link: '/cgi-bin/mmemoticonmgr-bin/bannerlist?t=banner/banner&action=online&page=0',
	                            disabled: false,
	                            className: ''
	                        },
	                        tagsManage: {
	                            value: '标签管理',
	                            link: '/cgi-bin/mmemoticonmgr-bin/gettaglist?t=tag/index&action=official',
	                            disabled: false,
	                            className: ''
	                        },
	                        appAdjust: {
	                            value: '客户端策略调整',
	                            link: 'javascript:;',
	                            disabled: true,
	                            className: ''
	                        },
	                        areaRank: {
	                            value: '地区排行管理',
	                            link: 'javascript:;',
	                            disabled: true,
	                            className: ''
	                        },
	                        areaRankRule: {
	                            value: '地区排行规则配置',
	                            link: 'javascript:;',
	                            disabled: true,
	                            className: ''
	                        },
	                        clickList: {
	                            value: '点击流',
	                            link: '/cgi-bin/mmemoticonmgr-bin/getclicklist?t=clicklist/index',
	                            disabled: true,
	                            className: ''
	                        },
	                        cdn: {
	                            value: 'cdn',
	                            link: '/cgi-bin/mmemoticonmgr-bin/getclicklist?t=cdn/index',
	                            disabled: false,
	                            className: ''
	                        },
	                        pirate: {
	                            value: '防盗版',
	                            link: '/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=copyright/index',
	                            disabled: false,
	                            className: ''
	                        },
	                        game: {
	                            value: '金龙奖',
	                            link: '/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=game/index',
	                            disabled: false,
	                            className: ''
	                        },
	                        translate: {
	                            value: '翻译表情',
	                            link: '/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=global/index',
	                            disabled: false,
	                            className: ''
	                        }
	                    }
	                }
	            }
	        };
	    },
	    //
	    handleNavPageClick: function handleNavPageClick(v) {},
	    handleClickOpenSetting: function handleClickOpenSetting(index, e) {
	        var stateIsopen = this.state.isOpen;
	        stateIsopen[index] = !stateIsopen[index];
	
	        this.setState({
	            isOpen: stateIsopen
	        });
	    },
	    render: function render() {
	        var settingNavPage = JSON.stringify(this.state.NavPage, null, '\t'),
	            settingNavTop = JSON.stringify(this.state.NavTop, null, '\t'),
	            settingNavPageInner = JSON.stringify(this.state.NavPageInner, null, '\t');
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h3",
	                { className: this.state.isOpen.NavTop ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'NavTop') },
	                "nav.NavTop"
	            ),
	            this.state.isOpen.NavPage ? React.createElement(
	                "pre",
	                { className: "setting" },
	                settingNavTop
	            ) : null,
	            React.createElement(NavTop, { data: this.state.NavTop }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	                "h3",
	                { className: this.state.isOpen.NavPage ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'NavPage') },
	                "nav.NavPage"
	            ),
	            this.state.isOpen.NavPage ? React.createElement(
	                "pre",
	                { className: "setting" },
	                settingNavPage
	            ) : null,
	            React.createElement(NavPage, { data: this.state.NavPage }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	                "h3",
	                { className: this.state.isOpen.NavPageInner ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'NavPageInner') },
	                "nav.NavPageInner"
	            ),
	            this.state.isOpen.NavPageInner ? React.createElement(
	                "pre",
	                { className: "setting" },
	                settingNavPageInner
	            ) : null,
	            React.createElement(NavPageInner, { data: this.state.NavPageInner })
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.NavPage = NavPage;
	exports.NavPageInner = NavPageInner;
	exports.Inner = Inner;
	exports.NavTop = NavTop;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
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
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Table = exports.Inner = exports.List = undefined;
	
	__webpack_require__(36);
	
	/*
	YourWidget：你的组件名称，可以多个组件
	widget.YourWidget：中的widget为文件所在文件夹名称
	*/
	
	var METHOD = {
	    isEmptyJson: function isEmptyJson(d) {
	        for (var name in d) {
	            if (d.hasOwnProperty(name)) {
	                return false;
	            }
	        }
	        return true;
	    }
	};
	
	//list
	var List = React.createClass({
	    displayName: "List",
	
	
	    render: function render() {
	        var listEles = this.props.data.eles.map(function (list) {
	            return React.createElement(
	                "li",
	                { className: "msg_list_ele" },
	                React.createElement(
	                    "div",
	                    { className: "msg_list_ele_container" },
	                    React.createElement(
	                        "div",
	                        { className: "msg_list_title" },
	                        list.title
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "msg_list_content" },
	                        list.content
	                    )
	                )
	            );
	        });
	        return React.createElement(
	            "ul",
	            { className: "msg_list" },
	            listEles
	        );
	    }
	});
	//table
	var Table = React.createClass({
	    displayName: "Table",
	
	    render: function render() {
	        var containerClass = this.props.data.setting.classname ? 'table_wrp with_border ' + this.props.data.setting.classname : 'table_wrp with_border',
	            thead = this.props.data.thead.map(function (list) {
	            var setting = list.setting ? list.setting : {},
	                classNameTh = 'table_cell ' + setting.classname;
	            return React.createElement(
	                "th",
	                { className: classNameTh },
	                list.content
	            );
	        }),
	            tbody = [];
	
	        if (typeof this.props.data.tbody != 'undefined' && !METHOD.isEmptyJson(this.props.data.tbody)) {
	            console.log('有数据');
	            for (var i in this.props.data.tbody) {
	                var setting = this.props.data.tbody[i].setting ? this.props.data.tbody[i].setting : {},
	                    tbodyTdEle = this.props.data.tbody[i].content.map(function (ele) {
	                    var eleSetting = ele.setting ? ele.setting : {},
	                        classNameTd = 'table_cell ' + eleSetting.classname;
	                    return React.createElement(
	                        "td",
	                        { className: classNameTd },
	                        ele.content
	                    );
	                }),
	                    trClassName = setting.classname ? setting.classname : '';
	                tbody.push(React.createElement(
	                    "tr",
	                    { className: trClassName },
	                    tbodyTdEle
	                ));
	            }
	        } else {
	            console.log('暂无数据！');
	            tbody.push(React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                    "td",
	                    { className: "table_cell empty", colSpan: this.props.data.thead.length },
	                    "\u6682\u65E0\u6570\u636E\uFF01"
	                )
	            ));
	        }
	
	        return React.createElement(
	            "div",
	            { className: containerClass },
	            React.createElement(
	                "table",
	                { cellSpacing: "0", className: "table" },
	                React.createElement(
	                    "thead",
	                    { className: "thead" },
	                    React.createElement(
	                        "tr",
	                        null,
	                        thead
	                    )
	                ),
	                React.createElement(
	                    "tbody",
	                    { className: "tbody" },
	                    tbody
	                )
	            )
	        );
	    }
	});
	
	var Inner = React.createClass({
	    displayName: "Inner",
	
	    getInitialState: function getInitialState() {
	        return {
	            isOpen: {
	                List: false,
	                Table: false
	            },
	            List: { //组件的配置
	                eles: [{
	                    title: '我是list的title1',
	                    content: '我是list的content1'
	                }, {
	                    title: '我是list的title2',
	                    content: '我是list的content2'
	                }, {
	                    title: '我是list的title3',
	                    content: '我是list的content3'
	                }, {
	                    title: '我是list的title4',
	                    content: '我是list的content4'
	                }]
	            },
	            Table: {
	                setting: {
	                    classname: 'history'
	                },
	                thead: [{
	                    setting: {
	                        classname: 'theadClass1'
	                    },
	                    content: 'thead1'
	                }, {
	                    setting: {
	                        classname: 'theadClass2'
	                    },
	                    content: 'thead2'
	                }, {
	                    setting: {
	                        classname: 'theadClass3'
	                    },
	                    content: 'thead3'
	                }],
	                tbody: {
	                    tr1: {
	                        setting: {
	                            classname: 'tr1'
	                        },
	                        content: [{
	                            setting: {
	                                classname: 'tr1td1Class1'
	                            },
	                            content: 'tr1td1'
	                        }, {
	                            setting: {
	                                classname: 'tr1td2Class2'
	                            },
	                            content: 'tr1td2'
	                        }, {
	                            setting: {
	                                classname: 'tr1td3Class3'
	                            },
	                            content: 'tr1td3'
	                        }]
	                    },
	                    tr2: {
	                        setting: {
	                            classname: 'tr2'
	                        },
	                        content: [{
	                            setting: {
	                                classname: 'tr2td1Class1'
	                            },
	                            content: 'tr2td1'
	                        }, {
	                            setting: {
	                                classname: 'tr2td2Class2'
	                            },
	                            content: 'tr2td2'
	                        }, {
	                            setting: {
	                                classname: 'tr2td3Class3'
	                            },
	                            content: 'tr2td3'
	                        }]
	                    }
	                }
	            },
	            resultList: '' //操作后的返回结果
	        };
	    },
	    hadle: function hadle(v) {
	        this.setState({
	            resultList: JSON.stringify(v)
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
	        var settingList = JSON.stringify(this.state.List, null, '\t'),
	            settingTable = JSON.stringify(this.state.Table, null, '\t');
	
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h3",
	                { className: this.state.isOpen.List ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'List') },
	                "list.List"
	            ),
	            this.state.isOpen.List ? React.createElement(
	                "pre",
	                { className: "setting" },
	                settingList
	            ) : null,
	            React.createElement(List, { data: this.state.List }),
	            React.createElement(
	                "div",
	                null,
	                this.state.resultList
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	                "h3",
	                { className: this.state.isOpen.Table ? 'title_Widget open' : 'title_Widget close', onClick: this.handleClickOpenSetting.bind(this, 'Table') },
	                "list.Table"
	            ),
	            this.state.isOpen.Table ? React.createElement(
	                "pre",
	                { className: "setting" },
	                settingTable
	            ) : null,
	            React.createElement(Table, { data: this.state.Table }),
	            React.createElement("br", null),
	            React.createElement("br", null)
	        );
	    }
	});
	
	React.render(React.createElement(Inner, null), document.getElementById('inner'));
	
	exports.List = List;
	exports.Inner = Inner;
	exports.Table = Table;

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=index.2737.js.map