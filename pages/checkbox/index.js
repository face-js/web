(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{0:function(e,l){e.exports=React},2:function(e,l){e.exports=ReactDOM},349:function(e,l,t){t(7),e.exports=t(350)},350:function(e,l,t){"use strict";var a=t(1),n=t(3);Object.defineProperty(l,"__esModule",{value:!0}),l.default=s;var o=n(t(0)),u=a(t(10)),c=a(t(14)),d=a(t(8)),r=a(t(11)),f=a(t(9)),b=t(4),i=t(2);function s(){return o.default.createElement(o.Fragment,null,o.default.createElement(f.default,null,"Checkbox"),o.default.createElement(d.default,null,"Checkbox 多选框, 需配合 Checkbox.Group 使用"),o.default.createElement(r.default,{title:"Checkbox",props:[["disabled","[boolean]","false","是否禁用"],["checked","[boolean]","false","是否选中"],["color","[string]","#A02731","选中颜色"]]}),o.default.createElement(u.default,{title:"基本用法"},"<Checkbox checked />\n<Checkbox />"),o.default.createElement(c.default,null,o.default.createElement(b.Checkbox,{checked:!0}),o.default.createElement(b.Checkbox,null)),o.default.createElement(u.default,{title:"禁用"},"<Checkbox disabled />"),o.default.createElement(c.default,null,o.default.createElement(b.Checkbox,{disabled:!0})),o.default.createElement(r.default,{title:"Checkbox.Group",props:[["name","string","表单字段"],["disabled","boolean","false","是否禁用"],["options","options[]","Checkbox 数据内容"],["onChange","func(string[])","切换选中后触发"]]}),o.default.createElement(r.default,{title:"options",props:[["value","string","选中时 Checkbox.Group onChange 事件触发返回值"],["disabled","boolean","false","是否禁用"],["chekced","boolean","false","是否选中"]]}),o.default.createElement(u.default,{title:"分组基本用法"},"<CheckboxGroup disabled></CheckboxGroup>"),o.default.createElement(c.default,null,o.default.createElement(b.Checkbox.Group,{name:"country",options:[{value:"USA",label:"美国"},{value:"CHN",label:"中国",checked:!0},{value:"BRA",label:"巴西",disabled:!0},{value:"JPN",label:"日本"},{value:"ENG",label:"英国"},{value:"TUR",label:"法国"}],onChange:console.log})))}var p=document.createElement("div");p.id="root_page",document.body.appendChild(p),(0,i.render)(o.default.createElement(s,null),p)}},[[349,1,2,0]]]);