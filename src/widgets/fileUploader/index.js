import './index.less';

var ImagePick = React.createClass({
    getInitialState: function(){
        return ({
            img: this.props.data.img,
            load: {
                show: 0,
                progress: 0
            },

            isDragover: 0,
            isHover: 0
        })
    },
    handleClick: function(){
        this.refs.imagePickInput.getDOMNode().click();
    },
    //µã»÷ÉÏ´«
    handleChange: function(e){
        var fileList = e.target.files;
        this.showPreview(fileList[0]);

        var fileStatus = this.checkPattern(fileList[0]);
        if(fileStatus.isPass){//·ûºÏ¸ñÊ½
            this.upload(fileList[0]);
        }else{//²»·ûºÏ¸ñÊ½
            this.response(null, fileStatus.status);
        }

    },
    //Õ¹Ê¾Ô¤ÀÀÍ¼
    showPreview: function(file){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            this.setState({
                img: reader.result
            });
        }.bind(this)
    },
    //ÍÏµ½ÉÏÃæ
    handleDragOver: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isDragover: 1
        });
    },
    //ÒÑ¾­¶ª½øÈ¥
    handleDrop: function(e){
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
        if(fileStatus.isPass){//·ûºÏ¸ñÊ½

            this.upload(files[files.length - 1]);
            files[files.length - 1] = false;
        }else{//²»·ûºÏ¸ñÊ½
            this.response(null, fileStatus.status);
        }
        return false;
    },
    //¼ì²éÎÄ¼þ¸ñÊ½
    checkPattern: function(file){
        var fileType = file.type,
                response = {};
        if(fileType.indexOf('image/') >= 0){//ÊÇÍ¼Æ¬
            fileType = fileType.replace('image/', '');
            if(this.props.data.reg.format.indexOf(fileType) >= 0){//·ûºÏÍ¼Æ¬¸ñÊ½
                if(this.props.data.reg.size){//ÓÐ´óÐ¡ÏÞÖÆ
                    if(this.props.data.reg.size >= file.size){
                        response.isPass = true;
                    }else{
                        response.isPass = false;
                        response.status = 'oversized';
                    }
                }else{//Ã»ÓÐ´óÐ¡ÏÞÖÆ
                    response.isPass = true;
                }
            }else{//²»·ûºÏÍ¼Æ¬¸ñÊ½
                response.isPass = false;
                response.status = 'format error';
            }
        }else{//²»ÊÇÍ¼Æ¬ ¸ñÊ½´íÎó
            response.isPass = false;
            response.status = 'format error';
        }
        return response;
    },
    //ÍÏ×§Àë¿ª
    handleDragLeave: function(e){
        this.setState({
            isDragover: 0
        });
    },
    //ÉÏ´«ÖÐ
    uploading: function(loaded, total){

        this.setState({
            load: {
                show: 1,
                progress: loaded / total
            }
        })
    },
    //²»¹Ü³É¹¦Ê§°Ü£¬ÕâÀïÅ×ÊÂ¼þ
    response: function(d, status){
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
    upload: function(file){
        (function(file, _this){
            var xhr = new XMLHttpRequest(),
                    reader = new FileReader();
            if (xhr.upload) {
                // ÉÏ´«ÖÐ
                xhr.upload.addEventListener("progress", function(e) {
                    _this.uploading(e.loaded, e.total);
                }, false);
                // ¿ªÊ¼ÉÏ´«
                var data = new FormData();
                for(var item in _this.props.data.requestValue){
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
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            _this.response(JSON.parse(xhr.response), 'suc');
                        }
                    }
                };
            }
        }(file, this))
    },
    //Êó±êÔÚ×é¼þÉÏ
    handleMouseoverPick: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.state.isHover != 1){
            this.setState({
                isHover: 1
            });
        }

    },
    //Êó±êÀë¿ª
    handleMouseleavePick: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isHover: 0
        });
    },
    //É¾³ýÊÂ¼þ
    handleClickDele: function(e){
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
    render: function(){
        var classArea = 'imagePickArea ' + this.props.data.extendClass,
                contentPickBtn = '+',
                loadStyle = {
                    width: this.state.load.progress * 100 + '%'
                },
                imagePickLoadArea = this.state.load.show == 1 ? <div className="imagePickLoadArea">
                    <div className="loadBar">
                        <div className="loadContent" style={loadStyle}></div>
                    </div>
                </div> : null,
        //ÊÇ·ñÐèÒªÉ¾³ý
                imagePickDeleArea = (this.props.data.isNeedDele && this.state.img && this.state.isHover == 1) ? <div className="imagePickDeleArea">
                    <a href="javascript:;" className="btn btn_warn" onClick={this.handleClickDele}>删除</a>
                </div> : null;

        this.state.isHover==1? classArea += ' hover':null;
        if(this.state.isDragover==1){
            classArea += ' dragover';
            this.props.data.text.dragover ? contentPickBtn = this.props.data.text.dragover : null;
        }
        /*mouseover mouseleave·ÅÔÚ imagePick ÕâÒ»²ã»áÒ»Ö±´¥·¢*/
        return (
                <div className={classArea} onMouseOver={this.handleMouseoverPick} onMouseLeave={this.handleMouseleavePick} onDragLeave={this.handleDragLeave} onClick={this.handleClick} onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    <div className='imagePick'>
                        <input ref="imagePickInput" onChange={this.handleChange} className="imagePickUploader_input" type="file" />
                        <div className="imagePickUploader_btn">{contentPickBtn}</div>
                        {this.state.img? <img className="imagePickUploader_preview" ref="imagePickUploader_preview" src={this.state.img} /> : null}
                    </div>
                    {imagePickDeleArea}
                    {imagePickLoadArea}
                </div>
        )

    }
});

//单文件上传
var SingleFilePick = React.createClass({
    getInitialState: function(){
        console.log('SingleFilePick getInitialState');
        return ({
            preview: this.props.data.preview,
            load: {
                show: 0,
                progress: 0
            },
            status: '',
            isDragover: 0,
            isHover: 0
        })
    },
    uploading: function(loaded, total){
        console.log('uploading');
        this.setState({
            load: {
                show: 1,
                progress: loaded / total
            }
        })
    },
     upload: function(file){
        console.log('upload');
        (function(file, _this){
            var xhr = new XMLHttpRequest(),
                    reader = new FileReader();
            if (xhr.upload) {
                // ÉÏ´«ÖÐ
                xhr.upload.addEventListener("progress", function(e) {
                    _this.uploading(e.loaded, e.total);
                }, false);
                // ¿ªÊ¼ÉÏ´«
                var data = new FormData();
                for(var item in _this.props.data.requestValue){
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
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            _this.response(JSON.parse(xhr.response), 'suc');
                        }
                    }
                };
            }
        }(file, this))
    },
    //鼠标事件
    handleMouseoverPick: function(){

        console.log('handleMouseoverPick');
        this.setState({
            isHover: 1
        });
    },
    handleMouseleavePick: function(){
        console.log('handleMouseleavePick');
        this.setState({
            isHover: 0
        });
    },
    //drap事件
    handleDragOver: function(e){
        e.stopPropagation();
        e.preventDefault();
        console.log('handleDragOver');
        this.setState({
            isDragover: 1
        });
    },

    handleDrop: function(e){
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
        if(fileStatus.isPass){//·ûºÏ¸ñÊ½

            this.upload(files[files.length - 1]);
            files[files.length - 1] = false;
        }else{//²»·ûºÏ¸ñÊ½
            this.response(null, fileStatus.status);
        }
        return false;
    },
    checkPattern: function(file){
        var fileType = file.type,
                response = {};
        
        if(file.name.substring(file.name.length-3, file.name.length) == this.props.data.setting.reg.format){//符合格式
            if(this.props.data.setting.reg.size){
                if(this.props.data.setting.reg.size > file.size){//符合大小
                    response.isPass = true;
                }else{//不符合大小
                    response.isPass = false;
                    response.status = 'oversized';
                    this.setState({
                        status: response.status
                    });
                }   
            }else{
                response.isPass = true;
            }
        }else{
            response.isPass = false;
            response.status = 'format error';
            this.setState({
                status: response.status
            });
        }
        return response;

    },
    response: function(d, status, name){
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
    showPreview: function(file){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            this.setState({
                preview: file.name
            });
        }.bind(this)
    },
    upload: function(file){
        (function(file, _this){
            var xhr = new XMLHttpRequest(),
                    reader = new FileReader();
            if (xhr.upload) {
                // ÉÏ´«ÖÐ
                xhr.upload.addEventListener("progress", function(e) {
                    _this.uploading(e.loaded, e.total);
                }, false);
                // ¿ªÊ¼ÉÏ´«
                var data = new FormData();
                for(var item in _this.props.data.setting.request.data){
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
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            switch(JSON.parse(xhr.response).base_resp.ret){
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
                    }else {
                        _this.response('', 'system error', file.name);
                    }
                };
            }
        }(file, this))
    },
    handleDragLeave: function(e){
        e.stopPropagation();
        e.preventDefault();
        console.log('handleDragLeave');
        this.setState({
            isDragover: 0
        });
    },
    //删除
    handleClickDele: function(e){
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
    },
    componentWillMount: function(){
        console.log('single componentWillMount');
    },
    render: function(){
        var classArea = this.props.data.setting.classname ? 'filePickArea ' + this.props.data.setting.classname : 'filePickArea',
            loadStyle = {
                width: this.state.load.progress * 100 + '%'
            },
            uploaderBtnContent = <div className="filePickUploader_btn">
                <div className="ic"></div>
                <div className="text">点击或拖拽上传</div>
            </div>,
            errMsg = '';
            /*filePickDeleArea = (this.props.data.isNeedDele && this.state.img && this.state.isHover == 1) ? <div className="filePickDeleArea">
                    <a href="javascript:;" className="btn btn_warn" onClick={this.handleClickDele}>删除</a>
                </div> : null,
            filePickLoadArea = this.state.load.show == 1 ? <div className="filePickLoadArea">
                    <div className="loadBar">
                        <div className="loadContent" style={loadStyle}></div>
                    </div>
                </div> : null;*/

        switch(this.state.status){
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
        uploaderBtnContent = this.state.load.show ? <div className="filePickLoadArea">
                    <div className="loadBar">
                        <div className="loadContent" style={loadStyle}></div>
                    </div>
                </div> : this.state.isDragover ? <div className="filePickUploader_btn dragOver">
                    释放鼠标
                </div> : uploaderBtnContent;
        return (
            <div className="fileUploaderGroup">
                {this.props.data.setting.label ? <label className="frm_label">{this.props.data.setting.label}</label>:null}
                <div className={classArea} onMouseOver={this.handleMouseoverPick} onMouseLeave={this.handleMouseleavePick} onDragLeave={this.handleDragLeave} onClick={this.handleClick} onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    <div className='filePick'>
                        <input ref="filePickInput" onChange={this.handleChange} className="filePickUploader_input" type="file" />
                        {uploaderBtnContent}

                    </div>
                    {this.state.preview ? <div className="previewContainer">
                            {this.state.status != 'suc' || !this.state.status ? <i className="ic_err"></i> : null}
                            {this.state.preview}
                            <span className="errMsg">{errMsg}</span>
                            <a className="link_dele" href="javascript:;" onClick={this.handleClickDele}>删除</a>
                        </div> : null}
                </div>
            </div>
            
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return ({
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
                        size: 1024 * 1024,
                    },
                    request: {//请求
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
                extendClass: 'imagePickExtendClass tc',//Ñ¡Ìî£¬string£¬À©Õ¹class
                img: 'https://sticker.weixin.qq.com/htdocs/zh_CN/images/index/home_item127602b.png',//有需要预览的时候才加
                reg: {
                    format: 'png',//±ØÌî£¬string£¬ÏÞÖÆµÄÍ¼Æ¬¸ñÊ½
                    size: 12 * 1024//Ñ¡Ìî£¬int£¬ÏÞÖÆÍ¼Æ¬µÄ´óÐ¡
                },
                text: {
                    dragover: '松开鼠标'//Ñ¡Ìî£¬string£¬Êó±êÍÏÍ¼Æ¬µ½×é¼þÊ±ºòµÄwording
                },
                isNeedDele: true,//Ñ¡Ìî£¬boolean£¬ÊÇ·ñÐèÒªÉ¾³ý²Ù×÷
                request: '/cgi-bin/mmemoticonmgr-bin/uploadmedia',//±ØÌî£¬string£¬Í¼Æ¬ÉÏ´«cgi
                requestValue: {//Ñ¡Ìî£¬object£¬postÒª´øµÄ×Ö¶Î
                    mediaType: 123,
                    mediaType2: 223,
                    mediaType3: 323
                },
                responseValue: {//Ñ¡Ìî£¬object£¬Òª´ø»ØÀ´µÄÖµ
                    id: 'ImagePick',
                    v: '带回来啦'
                },
                handle: this.handleImageChange//±ØÌî£¬object£¬Í¼Æ¬ÉÏ´«·µ»Ø´¥·¢µÄÊÂ¼þ£¬·µ»Øid¡¢cgi·µ»ØÖµ
            },
            SingleFilePick: {
                setting: {
                    label: '我是SingleFilePick的label',
                    id: 'SingleFilePick',
                    classname: 'singlePickerClassName',
                    label: '我是单文件上传的label',
                    reg: {//限制条件
                        format: 'zip', //文件格式
                        size: 1024 * 1024 * 1024 * 1024//文件大小
                    },
                    request: {//请求
                        url: '/cgi-bin/mmemoticonmgr-bin/uploadmedia',
                        data: {
                            mediaType: 123,
                            mediaType2: 223,
                            mediaType3: 323
                        }
                    }
                },
                handle: this.handleFile,
                value: null,
                preview: ''//预览的内容
            },
            result: {
                ImagePick: '',
                SingleFilePick: ''
            }
        })
    },
    //文件上传handle
    handleFile: function(v){
        var stateResult = this.state.result;
        stateResult[v.id] = JSON.stringify(v);
        this.setState({
            result: stateResult
        });
    },  
    handleImageChange: function(v){
        var stateResult = this.state.result;
        stateResult[v.index.id] = JSON.stringify(v);
        this.setState({
            result: stateResult
        });
    },
    handleClickOpenSetting: function(index, e){
        var stateIsopen = this.state.isOpen;
        stateIsopen[index] = !stateIsopen[index];
        
        this.setState({
            isOpen: stateIsopen
        });
    },
    render: function(){
        var settingImagePick = JSON.stringify(this.state.ImagePick, null, '\t'),
            settingSingleFilePick = JSON.stringify(this.state.SingleFilePick, null, '\t');
        return (
            <div className="inner">
                <h3 className={this.state.isOpen.ImagePick ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'ImagePick')}>fileUploader.ImagePick</h3>
                {this.state.isOpen.ImagePick ? <pre className="setting">{settingImagePick}</pre> : null}
                <ImagePick data={this.state.ImagePick} />
                <p className="result">
                    结果是：
                    <br />
                    {this.state.result.ImagePick}
                </p>
                <br />
                <br />
                <br />

                <h3 className={this.state.isOpen.SingleFilePick ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'SingleFilePick')}>fileUploader.SingleFilePick</h3>
                {this.state.isOpen.SingleFilePick ? <pre className="setting">{settingSingleFilePick}</pre> : null}
                <SingleFilePick data={this.state.SingleFilePick} />
                <p className="result">
                    结果是：
                    <br />
                    {this.state.result.SingleFilePick}
                </p>
                <br />
                <br />
                <br />
            </div>
        )
    }
});

React.render(
        <Inner />,
        document.getElementById('inner')
);

export {ImagePick, SingleFilePick, Inner};

