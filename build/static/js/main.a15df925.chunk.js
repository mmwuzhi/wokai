(this.webpackJsonpwokai=this.webpackJsonpwokai||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(62),s=n.n(r),o=(n(69),n(2)),l=n(13),i=n(23),u=n(0),d=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),j=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),b=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),f=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),m=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),O=n(3),h="USER_LOGIN_REQUEST",x="USER_LOGIN_SUCCESS",p="USER_LOGIN_FAIL",v="USER_LOGOUT_REQUEST",g="USER_LOGOUT_SUCCESS",y="USER_LOGOUT_FAIL",w="USER_CHECK_LOGGED_REQUEST",N="USER_CHECK_LOGGED_SUCCESS",S="USER_CHECK_LOGGED_FAIL",C="USER_SIGNUP_REQUEST",k="USER_SIGNUP_SUCCESS",D="USER_SIGNUP_FAIL",E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case x:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case p:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.value});case v:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,logged:!1,userData:{}});case y:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.value});case w:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case N:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case S:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.value});case C:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case D:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.value});default:return e}},I=n(9),R=n.n(I),L=n(19),_=n(8),U=n.n(_),M=function(){var e=Object(L.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:w}),e.next=4,U.a.get("/api/users/userInfo");case 4:return 0===(n=e.sent).data.code?t({type:N,value:n.data.data}):t({type:S}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:S}),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),G=c=Object(a.createContext)(),T=G.Provider,F=(G.Consumer,{userData:{},error:null,logged:!1,loading:!0}),H=function(e){var t=Object(a.useReducer)(E,F),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){M(r)}),[]),Object(u.jsx)(T,{value:{state:c,dispatch:r},children:e.children})},z=function(e){var t=Object(a.useContext)(c).state,n=Object(a.useState)(!1),r=Object(o.a)(n,2),s=r[0],d=r[1],j=Object(i.classnames)("transition-all","duration-300","transform","origin-top-right","absolute","right-0","top-14","z-50","w-56","mt-2","origin-top-right","bg-white","border","border-gray-200","divide-y","divide-gray-100","rounded-md","shadow-lg","outline-none",{"scale-95":!s,"-translate-y-2":!s,"opacity-0":!s,invisible:!s,"scale-100":s,"translate-y-0":s,"opacity-1":s,visible:s}),b=Object(i.classnames)("top-0","fixed","w-full","h-full",{hidden:!s,"z-40":s}),O=Object(i.classnames)("px-4","py-3",{hidden:!t.logged});return Object(u.jsxs)("header",{className:"z-40 flex fixed w-full visible top-0 h-14 border border-blue-100 bg-white justify-between items-center",children:[Object(u.jsx)("span",{onClick:e.handleSidebar,"aria-hidden":"true",className:"p-4 text-blue-300 cursor-pointer",children:m}),Object(u.jsx)(l.b,{to:"/",className:"text-xl text-blue-300",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068"}),Object(u.jsx)("div",{className:"relative inline-block text-left",children:Object(u.jsx)("span",{onClick:function(){d(!s)},"aria-hidden":"true",className:"p-4 text-blue-300 cursor-pointer",children:Object(u.jsx)("button",{className:"transition ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue",children:f})})}),Object(u.jsx)("div",{onClick:function(){return d(!1)},className:b}),Object(u.jsxs)("div",{className:j,children:[Object(u.jsxs)("div",{className:O,children:[Object(u.jsx)("p",{className:"text-sm leading-5",children:"Signed in as"}),Object(u.jsx)("p",{className:"text-sm font-medium leading-5 text-gray-900 truncate",children:t.userData.email})]}),Object(u.jsxs)("div",{className:"py-1",children:[t.logged?Object(u.jsx)(l.c,{to:"/user/mypage",activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30de\u30a4\u30da\u30fc\u30b8"}):Object(u.jsx)(l.c,{to:"/user/signup",activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(u.jsx)("span",{tabIndex:"-1",className:"flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50","aria-disabled":"true",children:"Come Soon"})]}),Object(u.jsx)("div",{className:"py-1",children:t.logged?Object(u.jsx)(l.c,{to:"/user/logout",activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}):Object(u.jsx)(l.c,{to:"/user/login",activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a4\u30f3"})})]})]})},K=n(4),Y=n(6),A=n.n(Y),B=function(){var e=Object(a.useState)(new Date),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(u.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"lightgray"},children:n.toLocaleTimeString("ja-JP",{hour12:!0})})},P=Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:function(e){for(var t,n=[[],[],[],[],[],[]],c=A()(e).date(1).weekday(),a=A()(e).subtract(1,"month").daysInMonth(),r=A()(e).daysInMonth(),s=0;s<7;s+=1)for(var o=a-c+s+1,l=0;l<6;l+=1)n[l][s]=(t=o+7*l)<=a?t:t<=a+r?t-a:t-(a+r);return n}(A()()).map((function(e,t){return Object(u.jsx)("tr",{children:e.map((function(e,t){return Object(u.jsx)("td",{children:e},t)}))},t)}))})}),W=function(){return Object(u.jsxs)(u.Fragment,{children:[P,Object(u.jsx)(B,{}),Object(u.jsxs)("div",{tabIndex:1,onFocus:function(e){e.currentTarget===e.target?console.log("focused self"):console.log("focused child",e.target),e.currentTarget.contains(e.relatedTarget)||console.log("focus entered self")},onBlur:function(e){e.currentTarget===e.target?console.log("unfocused self"):console.log("unfocused child",e.target),e.currentTarget.contains(e.relatedTarget)||console.log("focus left self")},children:[Object(u.jsx)("input",{id:"1"}),Object(u.jsx)("input",{id:"2"})]})]})},Q=n(64),V=n.n(Q),J=n(22),q=n.n(J);A.a.updateLocale("ja",q.a);var X=function(e){return Object(u.jsxs)("div",{className:"comment",children:[Object(u.jsxs)("div",{className:"comment-user",children:[Object(u.jsxs)("span",{className:"text-blue-500",children:[e.data.name,"\u3000"]}),Object(u.jsx)("span",{className:"comment-createdtime",children:A()(e.data.createdAt).format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")})]}),Object(u.jsx)("span",{children:e.data.msg})]})},Z=function(){return Object(u.jsx)("div",{className:"loading"})},$=Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),d=i[0],j=i[1],b=Object(a.useState)(""),f=Object(o.a)(b,2),m=f[0],O=f[1],h=Object(a.useState)(""),x=Object(o.a)(h,2),p=x[0],v=x[1],g=Object(a.useRef)(null);Object(a.useImperativeHandle)(t,(function(){return{checkSubmit:y,focus:w,value:d,setValue:j,setFilled:s}})),Object(a.useEffect)((function(){s(d?"filled":"")}),[d]);var y=function(){d?(O(""),v("")):(O("border-red-500"),v("text-red-500"))},w=function(){g.current.focus()};return Object(u.jsxs)("div",{className:"mb-4 relative",children:[Object(u.jsx)("input",{className:"".concat(r," input border border-gray-200 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-blue-200 focus:outline-none active:outline-none active:border-blue-200 ").concat(m),id:e.forID,type:e.type,value:d,onChange:function(e){j(e.target.value)},onKeyUp:function(){O(""),v("")},ref:g,onKeyDown:e.onKeyDown}),Object(u.jsx)("label",{htmlFor:e.forID,onClick:function(e){e.target.previousElementSibling.focus()},className:"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text ".concat(p),children:e.children})]})})),ee=function(e){return Object(u.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})},te=function(e){return Object(u.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})};A.a.updateLocale("ja",q.a);var ne=V()();function ce(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(o.a)(r,2),l=s[0],i=s[1],d=Object(a.useState)(!0),j=Object(o.a)(d,2),b=j[0],f=j[1],m=Object(a.useRef)(null),O=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=!1;return ne.emit("reqMsg",{}),ne.on("sysMsg",(function(t){e||i(t)})),ne.on("recvMsg",(function(t){e||(c(t),f(!1))})),function(){e=!0}}),[]);var h=function(e){e.preventDefault(),m.current.checkSubmit(),O.current.checkSubmit(),m.current.value&&O.current.value&&(ne.emit("sendMsg",{name:m.current.value,msg:O.current.value}),O.current.focus(),O.current.setValue(""),O.current.setFilled(""))};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["\u30aa\u30f3\u30e9\u30a4\u30f3\u4eba\u6570\uff1a",l]}),Object(u.jsx)($,{type:"text",forID:"user-name",ref:m,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsx)($,{type:"textarea",forID:"msg",onKeyDown:function(e){13===e.keyCode&&h(e)},ref:O,children:"\u30e1\u30c3\u30bb\u30fc\u30b8"}),Object(u.jsx)("div",{className:"flex justify-end",children:Object(u.jsx)(te,{className:"w-1/4",onClick:h,children:"\u9001\u4fe1"})}),Object(u.jsxs)("div",{className:"msg-list",children:[b&&Object(u.jsx)(Z,{}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(u.jsx)(X,{data:e,index:t},t)}))]})]})}var ae=function(e){var t=Object(a.useContext)(c).state,n=Object(a.useState)(""),r=Object(o.a)(n,2),s=r[0],l=r[1],i=Object(a.useState)(""),d=Object(o.a)(i,2),j=d[0],b=d[1],f=Object(a.useRef)(null),m=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=!1;return U.a.get("/api/users/userInfo").then((function(t){var n;e||(0===t.data.code?(l(t.data.data.username),f.current.focus()):null===(n=m.current)||void 0===n||n.focus())})),function(){e=!0}}),[]);var O=function(n){if(n.preventDefault(),e.onSubmit){var c=t.userData.email;e.onSubmit({username:s,email:c,content:j})}b("")};return Object(u.jsxs)("div",{className:"comment-input",children:[Object(u.jsxs)("div",{className:"comment-field",children:[Object(u.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(u.jsx)("div",{className:"comment-field-input",children:Object(u.jsx)("input",{value:s,ref:m,onChange:function(e){return l(e.target.value)}})})]}),Object(u.jsxs)("div",{className:"comment-field",children:[Object(u.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(u.jsx)("div",{className:"comment-field-input",children:Object(u.jsx)("textarea",{className:"h-24",ref:f,value:j,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){e.ctrlKey&&13===e.keyCode&&O(e)}})})]}),Object(u.jsx)("div",{className:"flex justify-end",children:Object(u.jsx)(te,{className:"w-20 sm:w-1/4",onClick:O,children:"\u6295\u7a3f"})})]})};A.a.updateLocale("ja",q.a);var re=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),i=l[0],d=l[1],j=Object(a.useRef)();Object(a.useEffect)((function(){return b(),j.current=setInterval(b,6e4),function(){clearInterval(j.current)}}));var b=function(){var t=A()(e.comment.createdAt);r(t.fromNow()),d(t.format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206"))};return Object(u.jsxs)("div",{className:"comment",children:[Object(u.jsxs)("div",{className:"comment-user text-sm",children:[Object(u.jsx)("span",{className:"text-blue-500",children:e.comment.username}),"\u30fb",Object(u.jsx)("span",{className:"text-gray-500 text-xs",title:i,children:c}),!!e.comment.email&&Object(u.jsx)("span",{onClick:function(){e.onDeleteComment&&e.onDeleteComment(e.comment._id)},className:"comment-delete",children:"\u524a\u9664"})]}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:e.comment.content}})]})},se=function(e){return Object(u.jsx)(u.Fragment,{children:e.comments.map((function(t,n){return Object(u.jsx)(re,{comment:t,index:n,onDeleteComment:function(t){return function(t){e.onDeleteComment&&e.onDeleteComment(t)}(t)}},n)}))})},oe=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(o.a)(r,2),l=s[0],i=s[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){U.a.get("/api/comments/").then((function(e){c(e.data)})).catch((function(e){console.error(e)})).then((function(){i(!1)}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ae,{onSubmit:function(e){if(e)return e.username?e.content?void U.a.post("/api/comments/add",e).then(d).catch((function(e){console.log(e)})):alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"):alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")}}),Object(u.jsxs)("div",{className:"bg-white p-5 border-2 border-gray-50",children:[l&&Object(u.jsx)(Z,{}),Object(u.jsx)(se,{loading:l,comments:n,onDeleteComment:function(e){U.a.delete("/api/comments/"+e).then((function(t){console.log(t.data),c(n.filter((function(t){return t._id!==e})))})).catch((function(e){console.log(e)}))}})]})]})},le=function(e){var t=Object(a.useContext)(c),n=t.state,r=t.dispatch,s=Object(a.useRef)(null),o=Object(a.useRef)(null),l=Object(a.useRef)(null),i=Object(a.useRef)(null);Object(a.useEffect)((function(){!0===n.logged&&e.history.push("/user/mypage")}),[n.logged,e.history]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(u.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),l.current.value!==i.current.value)?alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"):function(e){return function(){var t=Object(L.a)(R.a.mark((function t(n){var c,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:C}),t.next=4,U.a.post("/api/users/",e);case 4:c=t.sent,a=c.data,n({type:k,value:a}),alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:D,value:t.t0.response?t.t0.response.data.message:"errorMessage"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}({username:s.current.value,email:o.current.value,password:l.current.value})(r)},children:[Object(u.jsx)($,{type:"text",forID:"user-name",ref:s,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsx)($,{type:"email",forID:"e-mail",ref:o,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(u.jsx)($,{type:"password",forID:"password",ref:l,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)($,{type:"password",forID:"confirm-password",ref:i,children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(u.jsx)(te,{type:"submit",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"})]})]})},ie=function(e){var t=Object(a.useContext)(c),n=t.state,r=t.dispatch,s=Object(a.useRef)(null),o=Object(a.useRef)(null),l=Object(a.useRef)(null),i=Object(a.useRef)(null);Object(a.useEffect)((function(){Object(L.a)(R.a.mark((function t(){var n,c,a,o,l;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(r);case 2:void 0!==(null===(a=t.sent)||void 0===a||null===(n=a.data)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.username)?s.current.setValue(null===a||void 0===a||null===(o=a.data)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.username):e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[e.history,r]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),l.current.value!==i.current.value);else{var c={username:s.current.value,email:n.userData.email,password:o.current.value,newPassword:l.current.value};U.a.post("/api/users/update",c).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),e.history.push("/comment")})).catch((function(e){console.table(e)}))}},children:[Object(u.jsx)($,{type:"text",forID:"user-name",ref:s,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(u.jsx)("span",{children:n.userData.email})]}),Object(u.jsx)($,{type:"password",forID:"old-password",ref:o,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)($,{type:"password",forID:"new-password",ref:l,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)($,{type:"password",forID:"confirm-new-password",ref:i,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(u.jsx)(te,{type:"submit",children:"\u5909\u66f4"})]})]})},ue=function(e){var t=Object(a.useContext)(c),n=t.state,r=t.dispatch,s=Object(a.useRef)(null),o=Object(a.useRef)(null);Object(a.useEffect)((function(){!0===n.logged&&e.history.push("/comment")}),[n.logged,e.history]);var l=function(e){var t,n;e.preventDefault(),(t=s.current.value,n=o.current.value,function(){var e=Object(L.a)(R.a.mark((function e(c){var a,r,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:h}),a={email:t,password:n},e.next=5,U.a.post("/api/users/login",a);case 5:r=e.sent,s=r.data,c({type:x,value:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c({type:p,value:e.t0.response?e.t0.response.data.message:"errorMessage"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())(r)};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){return l(e)},children:[Object(u.jsx)($,{type:"email",forID:"mail-address",ref:s,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(u.jsx)($,{type:"password",forID:"now-password",ref:o,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)(te,{type:"submit",children:"\u30ed\u30b0\u30a4\u30f3"})]})})},de=function(e){var t=Object(a.useContext)(c),n=t.state,r=t.dispatch;Object(a.useEffect)((function(){Object(L.a)(R.a.mark((function t(){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(r);case 2:0!==(null===(c=t.sent)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.code)&&e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[n.logged,r,e.history]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)(ee,{onClick:function(){e.history.push("/")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(u.jsx)(te,{onClick:function(){return function(e){e({type:v}),U.a.get("/api/users/logout").then((function(){e({type:g})})).catch((function(t){e({type:y,value:t.response?t.response.data.message:"errorMessage"})}))}(r)},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})},je=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(K.a,{path:"/",exact:!0,component:W}),Object(u.jsx)(K.a,{path:"/chat",exact:!0,component:ce}),Object(u.jsx)(K.a,{path:"/comment",component:oe}),Object(u.jsx)(K.a,{path:"/user/signup",component:le}),Object(u.jsx)(K.a,{path:"/user/mypage",component:ie}),Object(u.jsx)(K.a,{path:"/user/login",component:ue}),Object(u.jsx)(K.a,{path:"/user/logout",component:de})]})},be=[{to:"/",icon:d,text:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"},{to:"/comment",icon:b,text:"\u30b3\u30e1\u30f3\u30c8"},{to:"/chat",icon:j,text:"\u30c1\u30e3\u30c3\u30c8"}],fe=function(){return Object(u.jsx)("aside",{className:"bg-gray-50 fixed flex flex-col p-3 h-full w-48",children:Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:"",children:be.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)(l.c,{to:e.to,exact:!0,activeClassName:"active-nav",className:"nav-text",children:[e.icon,Object(u.jsx)("span",{children:e.text})]})},t)}))})})})};var me=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){c(!n)};Object(a.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[]);var s=function(e){"Escape"===e.key&&c(!1)},d=Object(i.classnames)("top-0","fixed","w-full","h-full",{hidden:!n,"z-40":n});return Object(u.jsx)("div",{className:"",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(z,{handleSidebar:r}),Object(u.jsx)("div",{onClick:r,className:d}),Object(u.jsxs)("div",{className:"relative opacity-1 transition-opacity top-10 container mx-auto my-3 max-w-3xl p-5 wh-90 justify-center",children:[Object(u.jsx)("nav",{className:"z-50 ".concat(n?"nav-menu active":"nav-menu"," top-14"),children:Object(u.jsx)(fe,{})}),Object(u.jsx)(je,{})]})]})})};s.a.render(Object(u.jsx)(H,{children:Object(u.jsx)(me,{})}),document.getElementById("root"))},69:function(e,t,n){}},[[123,1,2]]]);