import './index.less';


React.render(
    <Inner />,
    document.getElementById('innerA')
);
/*import './index.less';
//import $ from 'jquery';
//import React,  {Component} from 'react';
//import {render} from 'react-dom';
import Title from '../../widgets/frm/index.js';

class Inner extends Component{
    getInitialState() {
        title: null
    }
    componentWillMount(){
        this.setState({
            title: {
                msg: {
                    title: 'title',
                    subTitle: 'subTitle',
                    onlineMsg: 'onlineMsg'
                },
                state: 2
            }
        });
    }
    render() {
        var test = 'test test test';
        return (
            
          <div>
            <Title data={this.state.title} />
          </div>
        );
    }
}

render(<Inner />, document.getElementById('innerA'));*/