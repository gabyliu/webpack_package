import './index.less';

Array.prototype.update = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }else{
        this.push(val);
    }
};
var CheckBox = React.createClass({
    handleClick: function(item,index){
        var valSelected = this.props.data.value;
        valSelected.update(item);
        this.props.data.handle({
            value: valSelected,//array，选中的值
            status: this.checkPattern(valSelected),//值的状态，成功：'suc'，超过可选个数：'overLimit'，小于可选个数：'lessLimit'
            id: this.props.data.setting.id//
        });
    },
    checkPattern: function(vals){
        var reg = this.props.data.reg ? this.props.data.reg : {};
        if(typeof reg.max != 'undefined'){
            if(vals.length > reg.max){
                return 'overLimit';
            }
        }
        if(typeof reg.min != 'undefined'){
            if(vals.length < reg.min){
                return 'lessLimit';
            }

        }
        return 'suc';
    },
    render: function(){
        var status = this.props.data.status ? this.props.data.status : {},
            mainClass = this.props.data.setting.classname ? 'frm_checkbox_area ' + this.props.data.setting.classname + (status.failText ? ' fail' : '') : 'frm_checkbox_area' + (status.failText ? ' fail' : ''),
            _this = this,
            checkBoxes = this.props.data.init.map(function(list){
                var classLabel = 'frm_checkbox_label';
                _this.props.data.value.indexOf(list) > -1 ? classLabel = classLabel + ' selected' : null;
                return (
                        <lable onClick={_this.handleClick.bind(this, list)} value={list} for={_this.props.data.setting.id} className={classLabel}>
                            <i className="icon_checkbox"></i>
                            <span className="lbl_content">{list}</span>
                        </lable>
                )
            });

        return (
                <div className={mainClass}>
                    {this.props.data.setting.label ? <label className="frm_label">{this.props.data.setting.label}</label> : null}
                    <div className="frm_checkbox_control">
                        {checkBoxes}
                    </div>
                    {status.failText ? <p className="frm_tips fail">{status.failText}</p> : null}
                </div>
        );
    }
});
var Inner = React.createClass({
    getInitialState: function(){
        return {
            settingIsOpen: false,
            checkbox: {
                setting: {
                    label: '我是checkbox的label',
                    id: 'CharacterJson',
                    classname: 'checkbox_character'//选填，string，扩展class
                },
                status: {
                    ret: 0,
                    failText: ''
                },
                init: ["男性人物", "女性人物", "纯文字", "食物", "植物", "猫", "狗", "熊", "猪", "熊猫", "兔子", "猴子", "其他"],//必填，array，有哪些选项
                value: ["猪", "猴子"],//必填，array，有哪些被选了
                reg: {//必填，object，限制
                    max: 2,//选填，int，例如：最多只能选3个
                    min: 1//选填，int，例如：最少只能选1个
                },
                handle: this.handleCheckbox//必填，object，触发的事件
            },
            result: ''
        }

    },
    handleCheckbox: function(data){
        var stateData = this.state.checkbox;
        switch (data.index){
            case 'CharacterJson':
                stateData.value = data.value;
                stateData.status = data.status;
                break
        }
        this.setState({
            checkbox: stateData,
            result: JSON.stringify(data)
        });
    },
    handleClickOpenSetting: function(){
        this.setState({
            settingIsOpen: !this.state.settingIsOpen
        });
    },
    render: function(){
        var setting = JSON.stringify(this.state.checkbox, null, '\t');
        return (<div>
            <h3 className={this.state.settingIsOpen ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting}>checkbox.CheckBox</h3>
            {this.state.settingIsOpen ? <pre className="setting">{setting}</pre> : null}
            <CheckBox data={this.state.checkbox} />
            <p className="result">结果：{this.state.result}</p>
        </div>)
    }
});
React.render(
    <Inner />,
    document.getElementById('inner')
);

export {CheckBox, Inner};

