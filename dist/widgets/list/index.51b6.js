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

	module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
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

/***/ 36:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.51b6.js.map