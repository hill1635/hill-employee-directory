(this["webpackJsonphill-employee-diretory"]=this["webpackJsonphill-employee-diretory"]||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(18),i=n.n(c),s=n(19),l=n(20),o=n(25),a=n(24),j=n(23),h=n(1);var u=function(e){return Object(h.jsx)("main",{className:"container",children:e.children})};var d=function(e){return Object(h.jsx)("div",{className:"row",children:e.children})};var m=function(e){return Object(h.jsx)("div",{className:"col",children:e.children})};var b=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Employee Directory"})})};var p=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Who are you looking for?"}),Object(h.jsx)("button",{children:"Search"})]})};var O=function(e){return Object(h.jsx)("div",{children:e.employees.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Name: ",e.name.first," ",e.name.last]}),Object(h.jsxs)("li",{children:["Email: ",e.email]}),Object(h.jsxs)("li",{children:["Phone: ",e.cell]})]})})}))})},f=n(21),x=n.n(f),y=function(){return x.a.get("https://randomuser.me/api/?results=25")},v=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={employees:e.employeeList},e.employeeList=[],e.renderEmployees=function(){y().then((function(t){t.data.results.forEach((function(t){e.employeeList.push(t)})),e.setState(e.employeeList)})).catch((function(e){return console.log(e)}))},e.filterEmployees=function(){var t=e.employeeList.filter((function(e){return e.name.first.includes("Mi")}));e.setState(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.renderEmployees()}},{key:"render",value:function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)(u,{children:[Object(h.jsx)(d,{children:Object(h.jsx)(m,{children:Object(h.jsx)(b,{})})}),Object(h.jsx)(d,{children:Object(h.jsx)(m,{children:Object(h.jsx)(p,{className:"search",onChange:this.filterEmployees})})}),Object(h.jsx)(d,{children:Object(h.jsx)(m,{children:Object(h.jsx)(O,{employees:this.employeeList})})})]})})}}]),n}(r.Component);n(54);i.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.82002373.chunk.js.map