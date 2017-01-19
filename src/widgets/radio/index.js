import './index.less';

var Radio = React.createClass({
    handleClick: function(item,index){
        this.props.data.handle({
            value: item,//被选中的选项值
            id: this.props.data.setting.id//事件id，也就是reponse.index
        });
    },
    render: function(){
        var status = this.props.data.status ? this.props.data.status : {},
            mainClass = 'frm_radio_area ' + this.props.data.extendClass + (status.failText ? ' fail' : ''),
            _this = this,
            checkBoxes = this.props.data.init.map(function(list){
                var classLabel = 'frm_radio_label';
                _this.props.data.value == list ? classLabel = classLabel + ' selected' : null;
                return (
                        <lable onClick={_this.handleClick.bind(this, list)} value={list} className={classLabel}>
                            <i className="icon_radiobox"></i>
                            <span className="lbl_content">{list}</span>
                        </lable>
                )
            });

        return (
            <div className={mainClass}>
                {this.props.data.setting.label ? <label className="frm_label">{this.props.data.setting.label}</label> : null}
                <div className="frm_radio_control">{checkBoxes}</div>
                {status.failText ? <p className="frm_tips fail">{status.failText}</p> : null}
            </div>
        );
    }
});
var Inner = React.createClass({
    getInitialState: function(){
        return {
            settingIsOpen: false,
            radio: {
                setting: {
                    id: 'Style',
                    label: '我是radio的label'
                },
                status: {
                    ret: 0,
                    failText: ''
                },
                extendClass: 'radio_style',//选填，string，扩展class
                //init: ["情侣", "家庭", "春节", "圣诞节", "中秋节", "端午节", "其他节日", "方言", "红包", "网络语", "其他"],//必填，array，有那些选项
                init: ["我要登录", "我不要登录"],
                value: '我要登录',//必填，string，上一次选过的选项值
                handle: this.handleRadio//必填，object，触发的事件
            },
            result: ''
        }

    },
    handleRadio: function(data){
        var stateData = this.state.radio;
        switch (data.id){
            case 'Style':
                stateData.value = data.value;
                break;
        }
        this.setState({
            data: stateData,
            result: JSON.stringify(data)
        });
    },
    handleClickOpenSetting: function(){
        this.setState({
            settingIsOpen: !this.state.settingIsOpen
        });
    },
    render: function(){
        var setting = JSON.stringify(this.state.radio, null, '\t');
        return (<div>

            <h3 className={this.state.settingIsOpen ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting}>radio.Radio</h3>
            {this.state.settingIsOpen ? <pre className="setting">{setting}</pre> : null}
            <Radio data={this.state.radio} />
            <p className="result">结果：{this.state.result}</p>
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Radio, Inner};

