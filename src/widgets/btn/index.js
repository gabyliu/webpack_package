import './index.less';

var Btn = React.createClass({
    handleClick: function(e){
        e.stopPropagation();
        this.props.data.handle({
            id: this.props.data.setting.id
        });
    },
    render: function(){
        var classNameBtn = typeof this.props.data.setting.classname != 'undefined' ? 'btn ' + this.props.data.setting.classname : 'btn',
            hrefBtn = typeof this.props.data.href != 'undefined' ? this.props.data.href : 'javascript:;';
        return (
            <a onClick={this.handleClick} href={hrefBtn} className={classNameBtn}>{this.props.data.setting.content}</a>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            isOpen: {
                Btn: false
            },
            Btn: {//组件的配置
                setting: {
                    id: 'btn_id',
                    classname: 'btn_primary',
                    content: '我是按钮的内容',
                },
                
                handle: this.hadle
            },
            resultBtn: ''
        }

    },
    hadle: function(v){
        var stateBtn = this.state.Btn;
        this.setState({
            resultBtn: JSON.stringify(v)
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
        var settingBtn = JSON.stringify(this.state.Btn, null, '\t');

        return (<div>
            <h3 className={this.state.isOpen.Btn ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'Btn')}>btn.Btn</h3>
            {this.state.isOpen.Btn ? <pre className="setting">{settingBtn}</pre> : null}
            <Btn data={this.state.Btn} />
            <div>
                {this.state.resultBtn}
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

export {Btn, Inner};

