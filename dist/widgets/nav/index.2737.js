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

	module.exports = __webpack_require__(25);


/***/ },

/***/ 25:
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

/***/ 26:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map