(this.webpackJsonpwokai=this.webpackJsonpwokai||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n(75),r=n.n(s),o=n(18),i=n(5),l=(n(92),n(93),n(3)),u=n(4),j="USER_LOGIN_REQUEST",m="USER_LOGIN_SUCCESS",b="USER_LOGIN_FAIL",d="USER_LOGOUT_REQUEST",O="USER_LOGOUT_SUCCESS",v="USER_LOGOUT_FAIL",f="USER_CHECK_LOGGED_REQUEST",h="USER_CHECK_LOGGED_SUCCESS",p="USER_CHECK_LOGGED_FAIL",x="USER_SIGNUP_REQUEST",g="USER_SIGNUP_SUCCESS",N="USER_SIGNUP_FAIL",S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case m:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case b:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});case d:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case O:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!1,userData:{}});case v:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});case f:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case h:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case p:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});case x:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case g:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case N:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});default:return e}},y=n(8),C=n.n(y),E=n(20),w=n(7),_=n.n(w),k=function(){var e=Object(E.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),e.next=4,_.a.get("/api/users/userInfo");case 4:return 0===(n=e.sent).data.code?t({type:h,value:n.data.data}):t({type:p}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:p}),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),U=n(160),D=n(1),R=function(){return Object(D.jsx)("div",{className:"loading",children:Object(D.jsx)(U.a,{size:"large"})})},I=a=Object(c.createContext)(),L=I.Provider,G=(I.Consumer,{userData:{},error:null,logged:!1,loading:!0}),P=function(e){var t=Object(c.useReducer)(S,G),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){k(s)}),[]),Object(D.jsxs)(L,{value:{state:a,dispatch:s},children:[a.loading&&Object(D.jsx)(R,{}),e.children]})},M=function(){for(var e=navigator.userAgent,t=!1,n=0,a=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];n<a.length;n++){var c=a[n];if(e.indexOf(c)>0){t=!0;break}}return t},T=function(){var e=Object(c.useContext)(a).state,t=M()?"":"nav-div";return Object(D.jsx)("div",{className:t,children:Object(D.jsxs)("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg shadow",children:[Object(D.jsx)(o.b,{to:"/",className:"navbar-brand",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068"}),Object(D.jsx)("div",{className:"navbar-collapse",children:Object(D.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"})}),Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/comment",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30b3\u30e1\u30f3\u30c8"})}),e.logged?Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/user/mypage",activeClassName:"active",className:"nav-link",children:"\u30de\u30a4\u30da\u30fc\u30b8"})}):Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/user/signup",activeClassName:"active",className:"nav-link",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"})}),e.logged?Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/user/logout",activeClassName:"active",className:"nav-link",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})}):Object(D.jsx)("li",{className:"navbar-item",children:Object(D.jsx)(o.c,{to:"/user/login",activeClassName:"active",className:"nav-link",children:"\u30ed\u30b0\u30a4\u30f3"})})]})})]})})},A=n(82),H=n(83),Y=n(87),F=n(85),K=function(e){Object(Y.a)(n,e);var t=Object(F.a)(n);function n(){var e;return Object(A.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(H.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){console.log("\u9500\u6bc1timer"),clearInterval(this.timer)}},{key:"render",value:function(){return Object(D.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"lightgray"},children:this.state.date.toLocaleTimeString("ja-JP",{hour12:!0})})}}]),n}(c.Component),Q=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(K,{})})},W=n(86),J=n(84),z=n.n(J),B=function(e){return Object(D.jsxs)("div",{className:"comment",children:[Object(D.jsxs)("div",{className:"comment-user",children:[Object(D.jsxs)("span",{className:"comment-username",children:[e.data.name,"\u3000"]}),Object(D.jsx)("span",{className:"comment-createdtime",children:e.data.time})]}),Object(D.jsx)("span",{children:e.data.msg})]})},q=n(21),V=n.n(q),X=n(36),Z=n.n(X);function $(){var e=z()("ws://localhost:3333"),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)([]),m=Object(l.a)(j,2),b=m[0],d=m[1];return e.on("recvmsg",(function(e){d([].concat(Object(W.a)(b),[e]))})),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:["\u30e6\u30fc\u30b6\u30fc\u540d\uff1a",Object(D.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}})]}),Object(D.jsxs)("div",{children:["\u30e1\u30c3\u30bb\u30fc\u30b8\uff1a",Object(D.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)}})]}),Object(D.jsx)("button",{onClick:function(t){t.preventDefault(),e.emit("sendmsg",{msg:i,name:a,time:V()().format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")}),u("")},children:"\u9001\u4fe1"}),null===b||void 0===b?void 0:b.map((function(e,t){return Object(D.jsx)(B,{data:e,index:t},t)}))]})}V.a.updateLocale("ja",Z.a);var ee=function(e){var t=Object(c.useContext)(a).state,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],o=s[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],m=u[1],b=Object(c.useRef)(null),d=Object(c.useRef)(null);Object(c.useEffect)((function(){_.a.get("/api/users/userInfo").then((function(e){0===e.data.code?(o(e.data.data.username),b.current.focus()):d.current.focus()}))}),[]);var O=function(n){if(n.preventDefault(),e.onSubmit){var a=t.userData.email;e.onSubmit({username:r,email:a,content:j})}m("")};return Object(D.jsxs)("div",{className:"comment-input",children:[Object(D.jsxs)("div",{className:"comment-field",children:[Object(D.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(D.jsx)("div",{className:"comment-field-input",children:Object(D.jsx)("input",{value:r,ref:d,onChange:function(e){return o(e.target.value)}})})]}),Object(D.jsxs)("div",{className:"comment-field",children:[Object(D.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(D.jsx)("div",{className:"comment-field-input",children:Object(D.jsx)("textarea",{ref:b,value:j,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){e.ctrlKey&&13===e.keyCode&&O(e)}})})]}),Object(D.jsx)("div",{className:"comment-field-button",children:Object(D.jsx)("button",{onClick:O,children:"\u6295\u7a3f"})})]})};V.a.updateLocale("ja",Z.a);var te=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(c.useRef)();Object(c.useEffect)((function(){return m(),j.current=setInterval(m,6e4),function(){clearInterval(j.current)}}));var m=function(){var t=V()(e.comment.createdAt);s(t.fromNow()),u(t.format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206"))};return Object(D.jsxs)("div",{className:"comment",children:[Object(D.jsxs)("div",{className:"comment-user",children:[Object(D.jsx)("span",{className:"comment-username",children:e.comment.username}),"\u30fb",Object(D.jsx)("span",{className:"comment-createdtime",title:i,children:a}),!!e.comment.email&&Object(D.jsx)("span",{onClick:function(){e.onDeleteComment&&e.onDeleteComment(e.comment._id)},className:"comment-delete",children:"\u524a\u9664"})]}),Object(D.jsx)("p",{dangerouslySetInnerHTML:{__html:e.comment.content}})]})},ne=function(e){return Object(D.jsx)("div",{className:"comment-list",children:e.comments.map((function(t,n){return Object(D.jsx)(te,{comment:t,index:n,onDeleteComment:function(t){return function(t){e.onDeleteComment&&e.onDeleteComment(t)}(t)}},n)}))})},ae=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){_.a.get("/api/comments/").then((function(e){a(e.data)})).catch((function(e){console.error(e)}))};return Object(D.jsxs)("div",{className:"wrapper",children:[Object(D.jsx)(ee,{onSubmit:function(e){if(e)return e.username?e.content?void _.a.post("/api/comments/add",e).then(s).catch((function(e){console.log(e)})):alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"):alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")}}),Object(D.jsx)(ne,{comments:n,onDeleteComment:function(e){_.a.delete("/api/comments/"+e).then((function(t){console.log(t.data),a(n.filter((function(t){return t._id!==e})))})).catch((function(e){console.log(e)}))}})]})},ce=function(e){var t=Object(c.useContext)(a),n=t.state,s=t.dispatch,r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),b=m[0],d=m[1],O=Object(c.useState)(""),v=Object(l.a)(O,2),f=v[0],h=v[1],p=Object(c.useRef)(null),S=Object(c.useState)(""),y=Object(l.a)(S,2),w=y[0],k=y[1];Object(c.useEffect)((function(){!0===n.logged&&e.history.push("/user/mypage")}),[n.logged,e.history]);return Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(D.jsxs)("form",{onSubmit:function(e){if(f!==p.current.value)k({message:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"});else{var t={username:i,email:b,password:f};k(""),function(e){return function(){var t=Object(E.a)(C.a.mark((function t(n){var a,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),t.next=4,_.a.post("/api/users/",e);case 4:a=t.sent,c=a.data,alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),n({type:g,value:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:N,value:t.t0.response?t.t0.response.data.message:"errorMessage"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t)(s)}},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(D.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(D.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:f,onChange:function(e){return h(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(D.jsx)("span",{style:{color:"red"},children:w}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",ref:p})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",className:"btn btn-info"})})]})]})},se=function(e){var t=Object(c.useContext)(a),n=t.state,s=t.dispatch,r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),b=m[0],d=m[1],O=Object(c.useState)(""),v=Object(l.a)(O,2),f=v[0],h=v[1],p=Object(c.useRef)(null),x=Object(c.useState)(""),g=Object(l.a)(x,2),N=g[0],S=g[1],y=Object(c.useState)(""),w=Object(l.a)(y,2),U=w[0],R=w[1];Object(c.useEffect)((function(){Object(E.a)(C.a.mark((function t(){var n,a,c,r,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(s);case 2:void 0!==(null===(c=t.sent)||void 0===c||null===(n=c.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.username)?u(null===c||void 0===c||null===(r=c.data)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.username):e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[e.history,s]);return Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(D.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),f!==p.current.value)R("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01");else{var a={username:i,email:n.userData.email,password:b,newPassword:f};R(""),_.a.post("/api/users/update",a).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),e.history.push("/comment")})).catch((function(e){console.table(e),S("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3044\u307e\u3057\u305f\uff01")}))}},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(D.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(D.jsx)("span",{children:n.email})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(D.jsx)("span",{style:{color:"red"},children:N}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:f,onChange:function(e){return h(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(D.jsx)("span",{style:{color:"red"},children:U}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",ref:p})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"submit",value:"\u5909\u66f4",className:"btn btn-info"})})]})]})},re=function(e){var t=Object(c.useContext)(a),n=t.state,s=t.dispatch,r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],u=o[1],d=Object(c.useState)(""),O=Object(l.a)(d,2),v=O[0],f=O[1];Object(c.useEffect)((function(){!0===n.logged&&e.history.push("/comment")}),[n.logged,e.history]);var h=function(e){e.preventDefault(),function(e,t){return function(){var n=Object(E.a)(C.a.mark((function n(a){var c,s,r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:j}),c={email:e,password:t},n.next=5,_.a.post("/api/users/login",c);case 5:s=n.sent,r=s.data,a({type:m,value:r}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a({type:b,value:n.t0.response?n.t0.response.data.message:"errorMessage"});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(i,v)(s)};return Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a4\u30f3"}),Object(D.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(D.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(D.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:v,onChange:function(e){return f(e.target.value)}})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a4\u30f3",className:"btn btn-info"})})]})]})},oe=function(e){var t=Object(c.useContext)(a),n=t.state,s=t.dispatch;Object(c.useEffect)((function(){Object(E.a)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(s);case 2:0!==(null===(a=t.sent)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.code)&&e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[n.logged,s,e.history]);return Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),Object(D.jsx)("span",{className:"form-group",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("button",{onClick:function(){e.history.push("/")},className:"btn btn-info",style:{backgroundColor:"lightgray",borderColor:"lightgray"},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(D.jsx)("button",{onClick:function(){return function(e){e({type:d}),_.a.get("/api/users/logout").then((function(){e({type:O})})).catch((function(t){e({type:v,value:t.response?t.response.data.message:"errorMessage"})}))}(s)},className:"btn btn-info",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})};var ie=function(){var e=M()?"":"content scrollbar";return Object(D.jsx)("div",{className:e,children:Object(D.jsx)(o.a,{children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(T,{}),Object(D.jsx)(i.a,{path:"/",exact:!0,component:Q}),Object(D.jsx)(i.a,{path:"/chat",exact:!0,component:$}),Object(D.jsx)(i.a,{path:"/comment",component:ae}),Object(D.jsx)(i.a,{path:"/user/signup",component:ce}),Object(D.jsx)(i.a,{path:"/user/mypage",component:se}),Object(D.jsx)(i.a,{path:"/user/login",component:re}),Object(D.jsx)(i.a,{path:"/user/logout",component:oe})]})})})};n(157);r.a.render(Object(D.jsx)(P,{children:Object(D.jsx)(ie,{})}),document.getElementById("root"))},93:function(e,t,n){}},[[158,1,2]]]);
//# sourceMappingURL=main.995d3c09.chunk.js.map