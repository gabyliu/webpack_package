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

	module.exports = __webpack_require__(22);


/***/ },

/***/ 22:
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

/***/ 23:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=index.51b6.js.map