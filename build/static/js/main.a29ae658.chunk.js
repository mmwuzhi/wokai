(this.webpackJsonpwokai=this.webpackJsonpwokai||[]).push([[0],{59:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var s,n=a(0),c=a(46),r=a.n(c),i=a(12),o=a(3),l=(a(58),a(59),a(11)),u=a(4),m="USER_LOGIN_REQUEST",j="USER_LOGIN_SUCCESS",d="USER_LOGIN_FAIL",h="USER_LOGOUT_REQUEST",b="USER_LOGOUT_SUCCESS",p="USER_LOGOUT_FAIL",O="USER_CHECK_LOGGED_REQUEST",v="USER_CHECK_LOGGED_SUCCESS",g="USER_CHECK_LOGGED_FAIL",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case d:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});case h:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case b:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!1,userData:{}});case p:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});case O:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case v:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case g:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.value});default:return e}},x=a(28),N=a.n(x),C=a(47),S=a(5),w=a.n(S),y=a(97),k=a(1),E=function(){return Object(k.jsx)("div",{className:"loading",children:Object(k.jsx)(y.a,{size:"large"})})},_=s=Object(n.createContext)(),D=_.Provider,P=(_.Consumer,{userData:{},error:null,logged:!1,loading:!0}),U=function(e){var t=Object(n.useReducer)(f,P),a=Object(l.a)(t,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){!function(e){e({type:O}),w.a.get("/api/users/userInfo").then((function(t){0===t.data.code?e({type:v,value:t.data.data}):e({type:g})})).catch((function(t){console.log(t),e({type:g})}))}(c)}),[]),Object(k.jsxs)(D,{value:{state:s,dispatch:c},children:[s.loading&&Object(k.jsx)(E,{}),e.children]})},M=function(){var e=Object(n.useContext)(s).state;return Object(k.jsxs)("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg shadow",children:[Object(k.jsxs)(i.b,{to:"/",className:"navbar-brand",children:["\u306a\u3093\u3067\u3082\u3055\u3044\u3068"," "]}),Object(k.jsx)("div",{className:"collpase navbar-collapse",children:Object(k.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"})}),Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/comment",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30b3\u30e1\u30f3\u30c8"})}),e.logged?Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/user/mypage",activeClassName:"active",className:"nav-link",children:"\u30de\u30a4\u30da\u30fc\u30b8"})}):Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/user/signup",activeClassName:"active",className:"nav-link",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"})}),e.logged?Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/user/logout",activeClassName:"active",className:"nav-link",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})}):Object(k.jsx)("li",{className:"navbar-item",children:Object(k.jsx)(i.c,{to:"/user/login",activeClassName:"active",className:"nav-link",children:"\u30ed\u30b0\u30a4\u30f3"})})]})})]})};function I(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){document.title="You clicked ".concat(a," times")})),Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{children:["You clicked ",a," times"]}),Object(k.jsx)("button",{onClick:function(){return s(a+1)},children:"Click me"})]})}var L=a(14),R=a(15),T=a(17),G=a(16),F=function(e){var t=Object(n.useContext)(s).state,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(""),u=Object(l.a)(o,2),m=u[0],j=u[1];Object(n.useEffect)((function(){w.a.get("/api/users/userInfo").then((function(e){0===e.data.code&&i(e.data.data.username)}))}),[]);return Object(k.jsxs)("div",{className:"comment-input",children:[Object(k.jsxs)("div",{className:"comment-field",children:[Object(k.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(k.jsx)("div",{className:"comment-field-input",children:Object(k.jsx)("input",{value:r,onChange:function(e){return i(e.target.value)}})})]}),Object(k.jsxs)("div",{className:"comment-field",children:[Object(k.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(k.jsx)("div",{className:"comment-field-input",children:Object(k.jsx)("textarea",{value:m,onChange:function(e){return j(e.target.value)}})})]}),Object(k.jsx)("div",{className:"comment-field-button",children:Object(k.jsx)("button",{onClick:function(a){return function(a){if(a.preventDefault(),e.onSubmit){var s=t.user.email;e.onSubmit({username:r,email:s,content:m,createdTime:+new Date})}j("")}(a)},children:"\u6295\u7a3f"})})]})},H=function(e){Object(T.a)(a,e);var t=Object(G.a)(a);function a(e){var s;return Object(L.a)(this,a),(s=t.call(this,e)).state={timeString:""},s}return Object(R.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this._updateTimeString(),this._timer=setInterval(this._updateTimeString.bind(this),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this._timer)}},{key:"getDate",value:function(e){var t=new Date(e);return"".concat(t.getFullYear(),"\u5e74").concat(t.getMonth()+1,"\u6708").concat(t.getDate(),"\u65e5 ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}},{key:"_updateTimeString",value:function(){var e=this.props.comment,t=(+Date.now()-e.createdTime)/1e3;this.setState({timeString:t>60?t>3600?t>86400?this.getDate(e.createdTime):"".concat(Math.round(t/3600)," \u6642\u9593\u524d"):"".concat(Math.round(t/60)," \u5206\u524d"):"".concat(Math.round(Math.max(t,1))," \u79d2\u524d")})}},{key:"_getProcessedContent",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`([\S\s]+?)`/g,"<code>$1</code>")}},{key:"handleDeleteComment",value:function(){this.props.onDeleteComment&&this.props.onDeleteComment(this.props.comment._id)}},{key:"render",value:function(){var e=this.props.comment;return Object(k.jsxs)("div",{className:"comment",children:[Object(k.jsxs)("div",{className:"comment-user",children:[Object(k.jsx)("span",{children:e.username}),"\uff1a"]}),Object(k.jsx)("span",{className:"comment-createdtime",children:this.state.timeString}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:this._getProcessedContent(e.content)}}),""!==e.email&&Object(k.jsx)("span",{onClick:this.handleDeleteComment.bind(this),className:"comment-delete",children:"\u524a\u9664"})]})}}]),a}(n.Component),A=function(e){var t=Object(n.useContext)(s).state;return Object(k.jsx)("div",{children:e.comments.map((function(a,s){return(a.email===t.userData.email||""===a.email)&&Object(k.jsx)(H,{comment:a,index:s,onDeleteComment:function(t){return function(t){e.onDeleteComment&&e.onDeleteComment(t)}(t)}},s)}))})},K=function(e){Object(T.a)(a,e);var t=Object(G.a)(a);function a(e){var s;return Object(L.a)(this,a),(s=t.call(this,e)).state={comments:[],username:""},s}return Object(R.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("/api/comments/").then((function(t){e.setState({comments:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleSubmitComment",value:function(e){if(e)return e.username?e.content?void w.a.post("/api/comments/add",e).then(this.componentDidMount.bind(this)).catch((function(e){console.log(e)})):alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"):alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")}},{key:"handleDeleteComment",value:function(e){w.a.delete("/api/comments/"+e).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),this.setState({comments:this.state.comments.filter((function(t){return t._id!==e}))})}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"wrapper",children:[Object(k.jsx)(F,{onSubmit:this.handleSubmitComment.bind(this)}),Object(k.jsx)(A,{comments:this.state.comments,onDeleteComment:this.handleDeleteComment.bind(this)})]})}}]),a}(n.Component),Q=a(19),Y=function(e){Object(T.a)(a,e);var t=Object(G.a)(a);function a(e){var s;return Object(L.a)(this,a),(s=t.call(this,e)).onSubmit=s.onSubmit.bind(Object(Q.a)(s)),s.state={username:"",email:"",password:"",confirmPassword:"",message:"",loading:!0},w.a.get("/api/users/userInfo").then((function(e){0===e.data.code?s.props.history.push("/user/mypage"):s.setState({loading:!1})})),s}return Object(R.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeConfirmPassword",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.password!==this.state.confirmPassword)this.setState({message:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"});else{var a={username:this.state.username,email:this.state.email,password:this.state.password};this.setState({message:""}),w.a.post("/api/users/",a).then((function(){alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),t.props.history.push("/comment")})).catch((function(e){console.log(e),alert(e)}))}}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[this.state.loading&&Object(k.jsx)(E,{}),Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(k.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(k.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:this.state.username,onChange:this.onChangeUsername.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(k.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:this.state.email,onChange:this.onChangeEmail.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.password,onChange:this.onChangePassword.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(k.jsx)("span",{style:{color:"red"},children:this.state.message}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.confirmPassword,onChange:this.onChangeConfirmPassword.bind(this)})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",className:"btn btn-info"})})]})]})}}]),a}(n.Component),J=function(e){Object(T.a)(a,e);var t=Object(G.a)(a);function a(e){var s;return Object(L.a)(this,a),(s=t.call(this,e)).onSubmit=s.onSubmit.bind(Object(Q.a)(s)),s.state={username:"",email:"",password:"",newPassword:"",confirmNewPassword:"",errorMessage:"",message:""},w.a.get("/api/users/userInfo").then((function(e){0===e.data.code?s.setState({username:e.data.data.username,email:e.data.data.email}):s.props.history.push("/user/login")})),s}return Object(R.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeNewPassword",value:function(e){this.setState({newPassword:e.target.value})}},{key:"onChangeNewConfirmPassword",value:function(e){this.setState({confirmNewPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.newPassword!==this.state.confirmNewPassword)this.setState({message:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"});else{var a={username:this.state.username,email:this.state.email,password:this.state.password,newPassword:this.state.newPassword};this.setState({message:""}),w.a.post("/api/users/update",a).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),t.props.history.push("/comment")})).catch((function(e){t.setState({errorMessage:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3044\u307e\u3057\u305f\uff01"}),alert(e)}))}}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(k.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(k.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:this.state.username,onChange:this.onChangeUsername.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(k.jsx)("span",{children:this.state.email})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(k.jsx)("span",{style:{color:"red"},children:this.state.errorMessage}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.password,onChange:this.onChangePassword.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.newPassword,onChange:this.onChangeNewPassword.bind(this)})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(k.jsx)("span",{style:{color:"red"},children:this.state.message}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.confirmNewPassword,onChange:this.onChangeNewConfirmPassword.bind(this)})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"submit",value:"\u5909\u66f4",className:"btn btn-info"})})]})]})}}]),a}(n.Component),W=function(e){var t=Object(n.useContext)(s),a=t.state,c=t.dispatch,r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),p=b[0],O=b[1];Object(n.useEffect)((function(){!0===a.logged&&e.history.push("/comment")}),[a.logged,e.history]);var v=function(e){e.preventDefault(),function(e,t){return function(){var a=Object(C.a)(N.a.mark((function a(s){var n,c,r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:m}),n={email:e,password:t},a.next=5,w.a.post("/api/users/login",n);case 5:c=a.sent,r=c.data,s({type:j,value:r}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),s({type:d,value:a.t0.response?a.t0.response.data.message:"errorMessage"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(o,p)(c)};return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a4\u30f3"}),Object(k.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(k.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(k.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a4\u30f3",className:"btn btn-info"})})]})]})},q=function(e){var t=Object(n.useContext)(s),a=t.state,c=t.dispatch;Object(n.useEffect)((function(){!1===a.logged&&e.history.push("/user/login")}),[a.logged,e.history]);return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),Object(k.jsx)("span",{className:"form-group",children:"\u306a\u3093\u3067\u3082\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("button",{onClick:function(){e.history.push("/")},className:"btn btn-info",style:{backgroundColor:"lightgray",borderColor:"lightgray"},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(k.jsx)("button",{onClick:function(){return function(e){e({type:h}),w.a.get("/api/users/logout").then((function(t){e({type:b})})).catch((function(t){e({type:p,value:t.response?t.response.data.message:"errorMessage"})}))}(c)},className:"btn btn-info",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})};var z=function(){return Object(k.jsx)(i.a,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(M,{}),Object(k.jsx)("br",{}),Object(k.jsx)(o.a,{path:"/",exact:!0,component:I}),Object(k.jsx)(o.a,{path:"/comment",component:K}),Object(k.jsx)(o.a,{path:"/user/signup",component:Y}),Object(k.jsx)(o.a,{path:"/user/mypage",component:J}),Object(k.jsx)(o.a,{path:"/user/login",component:W}),Object(k.jsx)(o.a,{path:"/user/logout",component:q})]})})};a(94);r.a.render(Object(k.jsx)(U,{children:Object(k.jsx)(z,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.a29ae658.chunk.js.map