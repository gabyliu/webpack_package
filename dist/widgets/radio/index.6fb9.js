!function(e){function t(s){if(a[s])return a[s].exports;var i=a[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Inner=t.Radio=void 0,a(18);var s=React.createClass({displayName:"Radio",handleClick:function(e,t){this.props.data.handle({value:e,id:this.props.data.setting.id})},render:function(){var e=this.props.data.status?this.props.data.status:{},t="frm_radio_area "+this.props.data.extendClass+(e.failText?" fail":""),a=this,s=this.props.data.init.map(function(e){var t="frm_radio_label";return a.props.data.value==e?t+=" selected":null,React.createElement("lable",{onClick:a.handleClick.bind(this,e),value:e,className:t},React.createElement("i",{className:"icon_radiobox"}),React.createElement("span",{className:"lbl_content"},e))});return React.createElement("div",{className:t},this.props.data.setting.label?React.createElement("label",{className:"frm_label"},this.props.data.setting.label):null,React.createElement("div",{className:"frm_radio_control"},s),e.failText?React.createElement("p",{className:"frm_tips fail"},e.failText):null)}}),i=React.createClass({displayName:"Inner",getInitialState:function(){return{settingIsOpen:!1,radio:{setting:{id:"Style",label:"我是radio的label"},status:{ret:0,failText:""},extendClass:"radio_style",init:["我要登录","我不要登录"],value:"我要登录",handle:this.handleRadio},result:""}},handleRadio:function(e){var t=this.state.radio;switch(e.id){case"Style":t.value=e.value}this.setState({data:t,result:JSON.stringify(e)})},handleClickOpenSetting:function(){this.setState({settingIsOpen:!this.state.settingIsOpen})},render:function(){var e=JSON.stringify(this.state.radio,null,"\t");return React.createElement("div",null,React.createElement("h3",{className:this.state.settingIsOpen?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting},"radio.Radio"),this.state.settingIsOpen?React.createElement("pre",{className:"setting"},e):null,React.createElement(s,{data:this.state.radio}),React.createElement("p",{className:"result"},"结果：",this.state.result))}});React.render(React.createElement(i,null),document.getElementById("inner")),t.Radio=s,t.Inner=i},18:function(e,t){}});
//# sourceMappingURL=index.6fb9.js.map