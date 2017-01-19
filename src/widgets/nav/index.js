import './index.less';

//页面顶部统一的nav
var NavTop = React.createClass({
    render: function(){
        return (
            <div className="head">
                <div className="inner">
                    <a className="logo" href="/cgi-bin/mmemoticonmgr-bin/stikerchecklist?t=emotion/index&action=check&page=0">
                        <span className="logo_ic"></span>
                        <span className="logo_text">微信 | 表情管理平台</span>
                        <span className="logo_beta"></span>
                    </a>
                </div>
            </div>
        )
    }
});
//nav page
var NavPage = React.createClass({
    initNavListEle: function(data){
        var navListEles = [];
        for(var i in data){
            var ddClassName = data[i].disabled ? 'nav_ele ' + data[i].className + ' disabled' : 'nav_ele ' + data[i].className;
            navListEles.push(
                <dd className={ddClassName}>
                    {data[i].link ? <a className="nav_link" href={data[i].link} title={data[i].value}>{data[i].value}</a> : <div className="nav_link" title={data[i].value}>{data[i].value}</div>}

                </dd>
            );
        }
        return navListEles;
    },
    initNavList: function(data){
        var navList = [];
        for(var i in data){
            navList.push(<dl className="nav_list">
                <dt className={data[i].disabled ? 'nav_ele nav_title disabled' : 'nav_ele nav_title'}>
                    {data[i].link ? <a className="nav_link" href={data[i].link} title={data[i].value}>{data[i].value}</a> : <div className="nav_link" title={data[i].value}>{data[i].value}</div>}
                    {this.initNavListEle(data[i].eles)}
                </dt>
            </dl>);
            
        }
        return navList;
    },
    componentWillMount: function(){
      this.initNavList(this.props.data);  
    },
    render: function(){
        //var dlList = this.initNavList(this.props.data);
        return (
            <div className="nav">
                {this.initNavList(this.props.data)}
            </div>
        )
    }
});

//nav top
var NavPageInner = React.createClass({
    initEles: function(d){
        var eleList = [];

        for(var i in d.eles){
            var eleClass = i == d.selected ? 'page_nav_ele selected' : 'page_nav_ele';

            eleList.push(
                <li onClick={this.handleClick.bind(this, i)} className={eleClass}>
                    <a href={d.eles[i].link} className="page_nav_link">{d.eles[i].value}</a>
                </li>
            );
        }
        return eleList;
    },
    handleClick: function(i){
        var data = {
            value: i
        };
        this.props.data.handle(data);
    }, 
    render: function(){
        
        return (
            <ul className="page_nav_list group">
                {this.initEles(this.props.data)}
            </ul>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            isOpen: {
                NavPage: false,
                NavPageInner: false
            },
            NavTop: {

            },
            NavPageInner:{
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
                },
                
            },
            NavPage: {
                check: {
                    value: '审核',
                    link: null,//空则不是a标签
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
        }
    },
    //
    handleNavPageClick: function(v){

    },
    handleClickOpenSetting: function(index, e){
        var stateIsopen = this.state.isOpen;
        stateIsopen[index] = !stateIsopen[index];
        
        this.setState({
            isOpen: stateIsopen
        });
    },
    render: function(){
        var settingNavPage = JSON.stringify(this.state.NavPage, null, '\t'),
            settingNavTop = JSON.stringify(this.state.NavTop, null, '\t'),
            settingNavPageInner = JSON.stringify(this.state.NavPageInner, null, '\t');
        return (<div>
            <h3 className={this.state.isOpen.NavTop ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'NavTop')}>nav.NavTop</h3>
            {this.state.isOpen.NavPage ? <pre className="setting">{settingNavTop}</pre> : null}
            <NavTop data={this.state.NavTop} />
            <br />
            <br />
            <h3 className={this.state.isOpen.NavPage ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'NavPage')}>nav.NavPage</h3>
            {this.state.isOpen.NavPage ? <pre className="setting">{settingNavPage}</pre> : null}
            <NavPage data={this.state.NavPage} />
            <br />
            <br />
            <h3 className={this.state.isOpen.NavPageInner ? 'title_Widget open' : 'title_Widget close'} onClick={this.handleClickOpenSetting.bind(this, 'NavPageInner')}>nav.NavPageInner</h3>
            {this.state.isOpen.NavPageInner ? <pre className="setting">{settingNavPageInner}</pre> : null}
            <NavPageInner data={this.state.NavPageInner} />
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {NavPage, NavPageInner, Inner, NavTop};

