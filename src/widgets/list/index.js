import './index.less';

/*
YourWidget：你的组件名称，可以多个组件
widget.YourWidget：中的widget为文件所在文件夹名称
*/

var METHOD = {
    isEmptyJson: function(d){
        for(var name in d){
            if(d.hasOwnProperty(name)){
                return false;
            }
        }
        return true;
    }
};

//list
var List = React.createClass({

    render: function(){
        var listEles = this.props.data.eles.map(function(list){
            return (<li className="msg_list_ele">
                <div className="msg_list_ele_container">
                    <div className="msg_list_title">{list.title}</div>
                    <div className="msg_list_content">{list.content}</div>
                </div>
            </li>)
        });
        return (
            <ul className="msg_list">
                {listEles}
            </ul>
        )
    }
});
//table
var Table = React.createClass({
    render: function(){
        var containerClass = this.props.data.setting.classname ? 'table_wrp with_border ' + this.props.data.setting.classname : 'table_wrp with_border',
            thead = this.props.data.thead.map(function(list){
                var setting = list.setting ? list.setting : {},
                    classNameTh = 'table_cell ' + setting.classname;
                return (
                    <th className={classNameTh}>{list.content}</th>
                )
            }),
            tbody = [];

        if(typeof this.props.data.tbody != 'undefined' && !METHOD.isEmptyJson(this.props.data.tbody)){
            console.log('有数据');
            for(var i in this.props.data.tbody){
                var setting = this.props.data.tbody[i].setting ? this.props.data.tbody[i].setting : {},
                    tbodyTdEle = this.props.data.tbody[i].content.map(function(ele){
                        var eleSetting = ele.setting ? ele.setting : {},
                            classNameTd = 'table_cell ' + eleSetting.classname;
                        return (
                            <td className={classNameTd}>{ele.content}</td>
                        )
                    }),
                    trClassName = setting.classname ? setting.classname : '';
                tbody.push(<tr className={trClassName}>{tbodyTdEle}</tr>);
            }
        }else{
            console.log('暂无数据！');
            tbody.push(
                <tr>
                    <td className="table_cell empty" colSpan={this.props.data.thead.length}>暂无数据！</td>
                </tr>
            );
        }
        
        return (
            <div className={containerClass}>
                <table cellSpacing="0" className="table">
                    <thead className="thead">
                        <tr>{thead}</tr>
                    </thead>
                    <tbody className="tbody">
                        {tbody}
                    </tbody>
                </table>
            </div>
        )
    }
})

var Inner = React.createClass({
    getInitialState: function(){
        return {
            isOpen: {
                List: false,
                Table: false
            },
            List: {//组件的配置
                eles: [
                    {
                        title: '我是list的title1',
                        content: '我是list的content1'
                    },
                    {
                        title: '我是list的title2',
                        content: '我是list的content2'
                    },
                    {
                        title: '我是list的title3',
                        content: '我是list的content3'
                    },
                    {
                        title: '我是list的title4',
                        content: '我是list的content4'
                    }
                ]
            },
            Table: {
                setting: {
                    classname: 'history'
                },
                thead: [
                    {
                        setting: {
                            classname: 'theadClass1'
                        },
                        content: 'thead1'
                    },
                    {
                        setting: {
                            classname: 'theadClass2'
                        },
                        content: 'thead2'
                    },
                    {
                        setting: {
                            classname: 'theadClass3'
                        },
                        content: 'thead3'
                    }
                ],
                tbody: {
                    tr1: {
                        setting: {
                            classname: 'tr1'
                        },
                        content: [
                            {
                                setting: {
                                    classname: 'tr1td1Class1'
                                },
                                content: 'tr1td1'
                            },
                            {
                                setting: {
                                    classname: 'tr1td2Class2'
                                },
                                content: 'tr1td2'
                            },
                            {
                                setting: {
                                    classname: 'tr1td3Class3'
                                },
                                content: 'tr1td3'
                            }
                        ]
                    },
                    tr2: {
                        setting: {
                            classname: 'tr2'
                        },
                        content: [
                            {
                                setting: {
                                    classname: 'tr2td1Class1'
                                },
                                content: 'tr2td1'
                            },
                            {
                                setting: {
                                    classname: 'tr2td2Class2'
                                },
                                content: 'tr2td2'
                            },
                            {
                                setting: {
                                    classname: 'tr2td3Class3'
                                },
                                content: 'tr2td3'
                            }
                        ]
                    } 
                }
            },
            resultList: ''//操作后的返回结果
        }

    },
    hadle: function(v){
        this.setState({
            resultList: JSON.stringify(v)
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
        var settingList = JSON.stringify(this.state.List, null, '\t'),
            settingTable = JSON.stringify(this.state.Table, null, '\t');

        return (<div>
            <h3 className={this.state.isOpen.List ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'List')}>list.List</h3>
            {this.state.isOpen.List ? <pre className="setting">{settingList}</pre> : null}
            <List data={this.state.List} />
            <div>
                {this.state.resultList}
            </div>
            <br />
            <br />

            <h3 className={this.state.isOpen.Table ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'Table')}>list.Table</h3>
            {this.state.isOpen.Table ? <pre className="setting">{settingTable}</pre> : null}
            <Table data={this.state.Table} />
            <br />
            <br />
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {List, Inner, Table};

