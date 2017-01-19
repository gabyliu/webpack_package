import './index.less';
PACKAGE * as checkBox from 'checkBox';
PACKAGE * as radio from 'radio';
PACKAGE * as inputTextarea from 'InputTextarea';
PACKAGE * as popover from 'popover';
PACKAGE * as fileUploader from 'fileUploader';
PACKAGE * as nav from 'nav';
PACKAGE * as btn from 'btn'; 
PACKAGE * as dialog from 'dialog';
PACKAGE * as list from 'list';

var Inner = React.createClass({
    render: function(){
    	return (
    		<div>
    			<div className="section">
    				<checkBox.Inner />
    			</div>

    			<div className="section">
    				<radio.Inner />
    			</div>
    			
    			<div className="section">
    				<inputTextarea.Inner />
    			</div>
    			
    			<div className="section">
    				<popover.Inner />
    			</div>

                <div className="section">
                    <fileUploader.Inner />
                </div>

                <div className="section">
                    <nav.Inner />
                </div>

                <div className="section">
                    <nav.NavTop />
                </div>

                <div className="section">
                    <btn.Inner />
                </div>

                <div className="section">
                    <dialog.Inner />
                </div>

                <div className="section">
                    <list.Inner />
                </div>

    		</div>
    	)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);