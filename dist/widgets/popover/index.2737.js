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

	module.exports = __webpack_require__(19);


/***/ },

/***/ 19:
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

/***/ 20:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map