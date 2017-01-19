import './index.less';

var YourWidget = React.createClass({
    render: function(){
        return (
            <div className="">Hello world!</div>
        )
    }
});

var Inner = React.createClass({
    
    render: function(){
        return (<div>
            <YourWidget />
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {YourWidget};

