import './index.less';

/*
YourWidget：你的组件名称，可以多个组件
widget.YourWidget：中的widget为文件所在文件夹名称
*/

//组件的实现
//按钮
var Btn = React.createClass({
    handleClick: function(e){
        e.stopPropagation();
        this.props.data.handle({
            id: this.props.data.id
        });
    },
    render: function(){
        var classNameBtn = typeof this.props.data.setting.classname != 'undefined' ? 'btn ' + this.props.data.setting.classname : 'btn';
        return (
            <a onClick={this.handleClick} className={classNameBtn}>{this.props.data.setting.text}</a>
        )
    }
});

var Dialog = React.createClass({
    getInitialState: function(){
        return {}
    },
    handleClick: function(v){
        this.props.data.handle({
            id: v
        });
    },
    render: function(){
        var className = this.props.data.setting.classname ? 'dialog ' + this.props.data.setting.classname : 'dialog',
            _this = this,
            propsBtnList = this.props.data.setting.btnList ? this.props.data.setting.btnList : [],
            btnList = propsBtnList.map(function(list){
                let btnData = list;
                btnData.handle = _this.handleClick.bind(_this, (_this.props.data.setting.id + '_' +  btnData.setting.id));
                return <Btn data={btnData} />;
            });
            
        return (
            <div className="dialog_mask">
                <div className={className}>
                    {this.props.data.setting.title ? <div className="dialog_head">{this.props.data.setting.title}</div> : null}
                    <span className="dialog_close" onClick={this.handleClick.bind(this, this.props.data.setting.id + '_close')}></span>
                    <div className="dialog_content">
                        {this.props.data.setting.content}
                    </div>
                    {btnList.length != 0 ? <div className="dialog_ft">
                        {btnList}
                    </div> : null}
                    
                </div>
            </div>
        )
    }
});


var Inner = React.createClass({
    getInitialState: function(){
        return {
            isOpen: {
                Dialog: false
            },
            Dialog: {//组件的配置
                setting: {
                    classname: 'myDialogClassname',
                    title: '我的弹窗标题',//string，弹框标题
                    content: '我的弹窗内容',//string, 弹框内容，也可以是另一个组件
                    id: 'DialogId',
                    btnList: [//没有btnList则没有dialog ft
                        {
                            setting: {
                                id: 'dialog_btn_cancel', //必填，string，触发事件时会返回
                                classname: 'btn_default',//选填，string，扩展的className
                                text: '取消',//必填，string，按钮文案
                            }
                            
                        },
                        {
                            setting: {
                                id: 'dialog_btn_sure', //必填，string，触发事件时会返回
                                classname: 'btn_primary',//选填，string，扩展的className
                                text: '确定',//必填，string，按钮文案
                            }
                            
                        }
                        
                    ]
                },
                handle: this.handle//object, 接收弹框点击事件

            },
            Btn: {
                setting: {
                    id: 'dialog_btn_cancel', //必填，string，触发事件时会返回
                    classname: 'btn_primary',//选填，string，扩展的className
                    text: '打开dialog',//必填，string，按钮文案
                },
                handle: this.handleDialogShow
            },
            resultDialog: '',//操作后的返回结果
            isShow: {
                Dialog: false
            }
        }

    },
    handleDialogShow: function(){
        var stateIsShow = this.state.isShow;
        stateIsShow.Dialog = !stateIsShow.Dialog;
        this.setState({
            isShow: stateIsShow
        });
    },
    handle: function(v){
        if(v.id == 'DialogId_close'){
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
    handleClickOpenSetting: function(index, e){
        var stateIsopen = this.state.isOpen;
        stateIsopen[index] = !stateIsopen[index];
        
        this.setState({
            isOpen: stateIsopen
        });
    },
    render: function(){
        var settingDialog = JSON.stringify(this.state.Dialog, null, '\t');

        return (<div>
            <h3 className={this.state.isOpen.Dialog ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'Dialog')}>dialog.Dialog</h3>
            {this.state.isOpen.Dialog ? <pre className="setting">{settingDialog}</pre> : null}
            {this.state.isShow.Dialog ? <Dialog data={this.state.Dialog} /> : null}
            <Btn data={this.state.Btn} />
            <div>
                {this.state.resultDialog}
            </div>

            <br />
            <br />
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Dialog, Inner};

