(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),s=n(21),i=n.n(s),o=(n(30),n(23)),u=(n(31),n(12)),j=n(1),l=n(16),h=n(17),b=n(20),d=n(19),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={username:""},e.onSubmit=function(t){t.preventDefault(),e.props.setUsername(e.state.username),e.props.history.push("/chatroom")},e.onChange=function(t){return e.setState({username:t.target.value})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"ChatRoom"}),Object(r.jsx)("form",{onSubmit:this.onSubmit,children:Object(r.jsx)("input",{type:"text",placeholder:"Please Enter Your Username ...",value:this.state.username,onChange:this.onChange})})]})})}}]),n}(c.Component),O=Object(j.e)(p),f=a.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,102))}));var m=function(){var e=Object(c.useState)("Anon"),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)("p",{children:"Loading..."}),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(O,{setUsername:s})}}),Object(r.jsx)(j.a,{exact:!0,path:"/chatroom",render:function(e){return Object(r.jsx)(f,{username:n})}})]})})},x=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,101)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),x()}},[[36,1,3]]]);
//# sourceMappingURL=main.b02ae4a1.chunk.js.map