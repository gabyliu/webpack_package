import './index.less';

//按钮
var Btn = React.createClass({
    handleClick: function(e){
        e.stopPropagation();
        this.props.data.handle({
            id: this.props.data.id
        });
    },
    render: function(){
        var classNameBtn = typeof this.props.data.classname != 'undefined' ? 'btn ' + this.props.data.classname : 'btn',
            hrefBtn = typeof this.props.data.href != 'undefined' ? this.props.data.href : 'javascript:;';
        return (
            <a onClick={this.handleClick} href={hrefBtn} className={classNameBtn}>{this.props.data.text}</a>
        )
    }
});
var Popover = React.createClass({
    getInitialState: function(){
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

        }
    },
    //popover 关闭
    handleClickCancel: function(){
        this.setState({
            isShow: false
        })
    },
    //popover 确定
    handleClickSure: function(){
        this.props.data.handle({
            id: this.props.data.id,
            value: this.props.data.value
        });
    },
    componentWillReceiveProps: function(nextProps) {
        var isShow;
        nextProps.data.isShow != this.state.isShow? isShow = nextProps.data.isShow : isShow = this.state.isShow;
        this.setState({
            isShow: isShow
        });
    },
    render: function(){

        var isShow = this.state.isShow,
            popoverContent = null,
            popoverAreaClass = typeof this.props.data.classname != 'undefined' ? "popover_area " + this.props.data.classname : 'popover_area',
            popoverContentClass = typeof this.props.data.placementent != 'undefined' ? 'popover_content ' + this.props.data.placementent : 'popover_content center';
        isShow == true ? popoverContent = <div className={popoverContentClass}>
            <span className="popover_arrow"></span>
            {this.props.data.content}
            <div className="popover_content_opr_area">
                <Btn data={this.state.btnCancel} onClick={this.handleClickCancel} />
                <Btn data={this.state.btnSure} onClick={this.handleClickCancel} />
            </div>
        </div> : popoverContent = null;
        return (
            <div className={popoverAreaClass}>
                {popoverContent}
            </div>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            btn: {
                id: 'btn_popover_showHide',
                classname: 'btn_primary',
                text: '气泡弹框',
                handle: this.handleClick
            },
            Popover: {
                classname: 'popover_confirm',//选填，string，扩展class name
                placementent: 'right',//选填，string，popover箭头的位置，不写的话默认居中
                content: '我是popover的内容',//必填，dom或string，弹窗的内容
                isShow: false,//必填，boolen，用来控制popover出现还是隐藏
                handle: this.handlePopoverConfirm,//必填，object，
                id: 'popoverId',//必填，string，触发事件返回时会带回来
                value: 'popoverValue'//必填，string，input初始化值
            },
            isOpen: {
                Popover: false
            },
            resultPopover: ''
        }

    },
    componentWillMount: function(){

    },
    handleClickPage: function(e){
        /*e.stopPropagation();
        e.preventDefault();*/

        var statePopover = this.state.Popover;
        statePopover.isShow = false;
        this.setState({
            Popover: statePopover
        });
    },
    handleClick: function(event){
        var statePopover = this.state.Popover;
        statePopover.isShow = true;
        this.setState({
            Popover: statePopover
        });
    },
    handlePopoverConfirm: function(v){
        var statePopover = this.state.Popover;
        statePopover.isShow = false;
        this.setState({
            Popover: statePopover,
            resultPopover: JSON.stringify(v)
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
        var settingPopover = JSON.stringify(this.state.Popover, null, '\t');
        return (
            <div>
                <h3 className={this.state.isOpen.Popover ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'Popover')}>popover.Popover</h3>
                {this.state.isOpen.Popover ? <pre className="setting">{settingPopover}</pre> : null}
                <div className="container" onClick={this.handleClickPage}>
                    <Btn data={this.state.btn} />
                    <Popover data={this.state.Popover} />
                    <div>
                        {this.state.resultPopover}
                    </div>
                </div>
            </div>
        )
    }
});
React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Popover, Inner, Btn};

