import './index.less';

/*
YourWidget：你的组件名称，可以多个组件
widget.YourWidget：中的widget为文件所在文件夹名称
*/

//组件的实现
var YourWidget = React.createClass({

    render: function(){
        return (
            <div>YourWidget</div>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            isOpen: {
                YourWidget: false
            },
            YourWidget: {//组件的配置
                setting: {//固定的配置
                    id: 'YourWidget_id'
                },
                value: '',
                handle: this.hadle
            },
            resultYourWidget: ''//操作后的返回结果
        }

    },
    hadle: function(v){
        this.setState({
            resultYourWidget: JSON.stringify(v)
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
        var settingYourWidget = JSON.stringify(this.state.YourWidget, null, '\t');

        return (<div>
            <h3 className={this.state.isOpen.YourWidget ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'YourWidget')}>widget.YourWidget</h3>
            {this.state.isOpen.YourWidget ? <pre className="setting">{settingYourWidget}</pre> : null}
            <YourWidget data={this.state.YourWidget} />
            <div>
                {this.state.resultYourWidget}
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

export {YourWidget, Inner};

