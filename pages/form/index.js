(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{0:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},351:function(e,t,n){n(7),e.exports=n(352)},352:function(e,t,n){"use strict";var l=n(3),a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(15)),u=a(n(18)),f=a(n(19)),o=a(n(27)),c=a(n(28)),i=a(n(29)),d=l(n(0)),m=a(n(10)),s=a(n(14)),p=a(n(8)),v=a(n(11)),_=a(n(9)),b=n(24),h=n(4),E=a(n(353)),g=n(2);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}function x(e){var t=e.children;return d.default.createElement(h.View,{className:E.default.formItem},t)}var w=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).bindChange=function(e,t){return l.setState((0,r.default)({},e,t)),t},l.handleSubmit=function(e){var t;null===(t=e.preventDefault)||void 0===t||t.call(e);var n=e.target.value;if(console.log(n,e.target),!(null==n?void 0:n.gender))return(0,b.showToast)({title:"请选择性别",icon:"none"});(0,b.showToast)({title:JSON.stringify(n),icon:"none"})},l.state={username:"",gender:""},l}return(0,f.default)(n,[{key:"render",value:function(){return d.default.createElement(d.Fragment,null,d.default.createElement(_.default,null,"Form"),d.default.createElement(p.default,null,"表单"),d.default.createElement(v.default,{props:[["onSubmit","func(evnet)","提交"],["onReset","func(evnet)","重置"]]}),d.default.createElement(m.default,{title:"基本用法"},"<Form onSubmit />"),d.default.createElement(s.default,null,d.default.createElement(h.Form,{onSubmit:this.handleSubmit},d.default.createElement(x,null,d.default.createElement(h.Label,{className:E.default.formItem_label},"姓名:"),d.default.createElement(h.Input,{name:"username"})),d.default.createElement(x,null,d.default.createElement(h.Label,{className:E.default.formItem_label},"性别:"),d.default.createElement(h.Radio.Group,{name:"gender",options:[{value:"male",label:"男"},{value:"female",label:"女"}]})),d.default.createElement(x,null,d.default.createElement(h.Label,{className:E.default.formItem_label}),d.default.createElement(h.View,null,d.default.createElement(h.Button,{htmlType:"submit"},"提交"),d.default.createElement(h.Button,{htmlType:"reset"},"重置"))))))}}]),n}(d.default.Component),I=w;t.default=I;var R=document.createElement("div");R.id="root_page",document.body.appendChild(R),(0,g.render)(d.default.createElement(w,null),R)},353:function(e,t,n){var l=n(5),a=n(354);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};l(a,r);e.exports=a.locals||{}},354:function(e,t,n){(t=n(6)(!1)).push([e.i,".index_formItem__3e9J {\n  display: flex;\n  align-items: center;\n  margin: 0.1rem 0;\n}\n.index_formItem_label__1rNf {\n  width: 1.2rem;\n  text-align: right;\n}\n",""]),t.locals={formItem:"index_formItem__3e9J",formItem_label:"index_formItem_label__1rNf"},e.exports=t}},[[351,1,2,0]]]);