(this.webpackJsonpwokai=this.webpackJsonpwokai||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n(63),s=n.n(a),o=(n(70),n(2)),i=n(13),l=n(23),u=n(0),d=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),j=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),b=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),f=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),m=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),h=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:Object(u.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})}),x=n(3),O="USER_LOGIN_REQUEST",p="USER_LOGIN_SUCCESS",v="USER_LOGIN_FAIL",g="USER_LOGOUT_REQUEST",y="USER_LOGOUT_SUCCESS",w="USER_LOGOUT_FAIL",N="USER_CHECK_LOGGED_REQUEST",k="USER_CHECK_LOGGED_SUCCESS",C="USER_CHECK_LOGGED_FAIL",S="USER_SIGNUP_REQUEST",E="USER_SIGNUP_SUCCESS",D="USER_SIGNUP_FAIL",I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case p:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case v:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.value});case g:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case y:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,logged:!1,userData:{}});case w:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.value});case N:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case k:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case C:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.value});case S:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case E:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,logged:!0,userData:t.value});case D:return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.value});default:return e}},L=n(7),R=n.n(L),_=n(19),U=n(8),M=n.n(U),G=function(){var e=Object(_.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:N}),e.next=4,M.a.get("/api/users/userInfo");case 4:return 0===(n=e.sent).data.code?t({type:k,value:n.data.data}):t({type:C}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:C}),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=c=Object(r.createContext)(),z=F.Provider,T=(F.Consumer,{userData:{},error:null,logged:!1,loading:!0}),H=function(e){var t=Object(r.useReducer)(I,T),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){G(a)}),[]),Object(u.jsx)(z,{value:{state:c,dispatch:a},children:e.children})},K=function(e){var t=Object(r.useContext)(c).state,n=Object(r.useState)(!1),a=Object(o.a)(n,2),s=a[0],d=a[1],j=Object(r.useRef)(null),b=Object(r.useState)(),h=Object(o.a)(b,2),x=h[0],O=h[1];Object(r.useEffect)((function(){O(j.current.offsetLeft-180);var e=function(){var e=j.current.offsetLeft-180;O(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var p=Object(l.classnames)("transition-all","duration-300","transform","origin-top-right","absolute","right-0","top-14","z-50","w-56","mt-2","origin-top-right","bg-white","border","border-gray-200","divide-y","divide-gray-100","rounded-md","shadow-lg","outline-none",{"scale-95":!s,"-translate-y-2":!s,"opacity-0":!s,invisible:!s,"scale-100":s,"translate-y-0":s,"opacity-1":s,visible:s}),v=Object(l.classnames)("inset-0","fixed","z-0",{hidden:!s}),g=Object(l.classnames)("px-4","py-3",{hidden:!t.logged});return Object(u.jsx)("header",{className:"z-10 flex justify-center fixed w-full top-0 h-14 border border-blue-100 bg-white items-center",children:Object(u.jsxs)("div",{className:"flex items-center justify-between max-w-5xl w-full",children:[Object(u.jsxs)("div",{className:"flex items-center",children:[Object(u.jsx)("span",{onClick:e.handleSidebar,className:"block lg:hidden p-4 text-blue-300 cursor-pointer",children:m}),Object(u.jsx)(i.b,{to:"/",className:"pl-4 text-xl text-blue-300",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068"})]}),Object(u.jsx)("div",{ref:j,className:"relative inline-block text-left z-10",children:Object(u.jsx)("span",{onClick:function(){d(!s)},className:"p-4 text-blue-300 cursor-pointer",children:Object(u.jsx)("button",{className:"transition ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue",children:f})})}),Object(u.jsx)("div",{onClick:function(){return d(!1)},className:v}),Object(u.jsxs)("div",{style:{left:x},className:p,children:[Object(u.jsxs)("div",{className:g,children:[Object(u.jsx)("p",{className:"text-sm leading-5",children:"Signed in as"}),Object(u.jsx)("p",{className:"text-sm font-medium leading-5 text-gray-900 truncate",children:t.userData.email})]}),Object(u.jsxs)("div",{className:"py-1",children:[t.logged?Object(u.jsx)(i.c,{to:"/user/mypage",onClick:function(){return d(!1)},activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30de\u30a4\u30da\u30fc\u30b8"}):Object(u.jsx)(i.c,{to:"/user/signup",activeClassName:"active",onClick:function(){return d(!1)},className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(u.jsx)("span",{tabIndex:"-1",className:"flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50","aria-disabled":"true",children:"Come Soon"})]}),Object(u.jsx)("div",{className:"py-1",children:t.logged?Object(u.jsx)(i.c,{to:"/user/logout",activeClassName:"active",onClick:function(){return d(!1)},className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}):Object(u.jsx)(i.c,{to:"/user/login",onClick:function(){return d(!1)},activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a4\u30f3"})})]})]})})},A=[{to:"/",icon:d,text:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"},{to:"/comment",icon:b,text:"\u30b3\u30e1\u30f3\u30c8"},{to:"/chat",icon:j,text:"\u30c1\u30e3\u30c3\u30c8"},{to:"/tool",icon:h,text:"\u30c4\u30fc\u30eb"}],W=function(e){return Object(u.jsx)("aside",{className:"".concat(e.class," p-3 flex bg-white flex-col"),children:Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:"",children:A.map((function(t,n){return Object(u.jsx)("li",{children:Object(u.jsxs)(i.c,{to:t.to,exact:!0,onClick:e.handleSidebar,activeClassName:"active-nav",className:"nav-text",children:[t.icon,Object(u.jsx)("span",{className:e.toggleText,children:t.text})]})},n)}))})})})},B=function(e){var t=Object(l.classnames)("inset-0","fixed","z-20",{hidden:!e.sidebar});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:e.handleSidebar,className:t}),Object(u.jsx)("div",{className:"".concat(e.toggleClass," opacity-1 transition-opacity"),children:Object(u.jsx)("div",{className:"z-50 ".concat(e.sidebar?"nav-menu active":"nav-menu"," top-14"),children:Object(u.jsx)(W,{class:"fixed w-48 h-screen border-r",handleSidebar:e.handleSidebar,toggleText:e.toggleText})})})]})},Y=n(4),P=n(6),V=n.n(P),q=function(){var e=Object(r.useState)(new Date),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(u.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"lightgray"},children:n.toLocaleTimeString("ja-JP",{hour12:!0})})},Q=Object(u.jsx)("table",{className:"border-gray-100 border-2 text-center",children:Object(u.jsxs)("tbody",{children:[Object(u.jsx)("tr",{children:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"].map((function(e,t){return Object(u.jsx)("td",{className:"border-gray-100 border-2 p-1",children:e},t)}))}),function(e){for(var t,n=[[],[],[],[],[],[]],c=V()(e).date(1).weekday(),r=V()(e).subtract(1,"month").daysInMonth(),a=V()(e).daysInMonth(),s=0;s<7;s+=1)for(var o=r-c+s+1,i=0;i<6;i+=1)n[i][s]=(t=o+7*i)<=r?t:t<=r+a?t-r:t-(r+a);return n}(V()()).map((function(e,t){return Object(u.jsx)("tr",{children:e.map((function(e,n){return Object(u.jsx)("td",{className:"".concat(parseFloat(V()().format("DD"))===e&&e>=7*(t-1)&&e<=7*(t+1)?"bg-green-200":""," border-gray-100 border-2 p-1"),children:e},n)}))},t)}))]})}),J=function(){return Object(u.jsxs)(u.Fragment,{children:[Q,Object(u.jsx)(q,{})]})},X=n(65),Z=n.n(X),$=n(22),ee=n.n($);V.a.updateLocale("ja",ee.a);var te=function(e){return Object(u.jsxs)("div",{className:"comment",children:[Object(u.jsxs)("div",{className:"comment-user",children:[Object(u.jsxs)("span",{className:"text-blue-500",children:[e.data.name,"\u3000"]}),Object(u.jsx)("span",{className:"comment-createdtime",children:V()(e.data.createdAt).format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")})]}),Object(u.jsx)("span",{children:e.data.msg})]})},ne=Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(""),c=Object(o.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(r.useState)(""),f=Object(o.a)(b,2),m=f[0],h=f[1],x=Object(r.useState)(""),O=Object(o.a)(x,2),p=O[0],v=O[1],g=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(function(){return{checkSubmit:y,focus:w,value:d,setValue:j,setFilled:s}})),Object(r.useEffect)((function(){s(d?"filled":"")}),[d]);var y=function(){d?(h(""),v("")):(h("border-red-500"),v("text-red-500"))},w=function(){g.current.focus()};return Object(u.jsxs)("div",{className:"mb-4 relative",children:[Object(u.jsx)("input",{className:"".concat(a," input border border-gray-200 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-blue-200 focus:outline-none active:outline-none active:border-blue-200 ").concat(m),id:e.forID,type:e.type,value:d,onChange:function(t){if(e.checkNaturalNumber){var n=t.target.value;(/^\d*?$/.test(n)&&n.length<4||""===n)&&j(t.target.value)}else j(t.target.value)},onKeyUp:function(){h(""),v("")},ref:g,onKeyDown:e.onKeyDown}),Object(u.jsx)("label",{htmlFor:e.forID,onClick:function(e){e.target.previousElementSibling.focus()},className:"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text ".concat(p),children:e.children})]})})),ce=function(e){return Object(u.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})},re=function(e){return Object(u.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})},ae=n(24),se=n.n(ae);V.a.updateLocale("ja",ee.a);var oe=Z()();function ie(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(o.a)(a,2),i=s[0],l=s[1],d=Object(r.useRef)(null),j=Object(r.useRef)(null);Object(r.useEffect)((function(){se.a.start();var e=!1;return oe.emit("reqMsg",{}),oe.on("sysMsg",(function(t){e||l(t)})),oe.on("recvMsg",(function(t){e||(c(t),se.a.done())})),function(){e=!0}}),[]);var b=function(e){e.preventDefault(),d.current.checkSubmit(),j.current.checkSubmit(),d.current.value&&j.current.value&&(oe.emit("sendMsg",{name:d.current.value,msg:j.current.value}),j.current.focus(),j.current.setValue(""),j.current.setFilled(""))};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["\u30aa\u30f3\u30e9\u30a4\u30f3\u4eba\u6570\uff1a",i]}),Object(u.jsx)(ne,{type:"text",forID:"user-name",ref:d,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsx)(ne,{type:"textarea",forID:"msg",onKeyDown:function(e){13===e.keyCode&&b(e)},ref:j,children:"\u30e1\u30c3\u30bb\u30fc\u30b8"}),Object(u.jsx)("div",{className:"flex justify-end",children:Object(u.jsx)(re,{className:"w-1/4",onClick:b,children:"\u9001\u4fe1"})}),Object(u.jsx)("div",{className:"msg-list",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(u.jsx)(te,{data:e,index:t},t)}))})]})}var le=function(e){var t=Object(r.useContext)(c).state,n=Object(r.useState)(""),a=Object(o.a)(n,2),s=a[0],i=a[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),j=d[0],b=d[1],f=Object(r.useRef)(null),m=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=!1;return M.a.get("/api/users/userInfo").then((function(t){e||(0===t.data.code?(i(t.data.data.username),null===f||void 0===f||f.current.focus()):null===m||void 0===m||m.current.focus())})),function(){e=!0}}),[]);var h=function(n){if(n.preventDefault(),e.onSubmit){var c=t.userData.email;e.onSubmit({username:s,email:c,content:j.trimEnd()})}b("")};return Object(u.jsxs)("div",{className:"comment-input",children:[Object(u.jsxs)("div",{className:"comment-field",children:[Object(u.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(u.jsx)("div",{className:"comment-field-input",children:Object(u.jsx)("input",{value:s,ref:m,onChange:function(e){return i(e.target.value)}})})]}),Object(u.jsxs)("div",{className:"comment-field",children:[Object(u.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(u.jsx)("div",{className:"comment-field-input",children:Object(u.jsx)("textarea",{className:"h-24",ref:f,value:j,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){e.ctrlKey&&13===e.keyCode&&h(e)}})})]}),Object(u.jsx)("div",{className:"flex justify-end",children:Object(u.jsx)(re,{className:"w-20 sm:w-1/4",onClick:h,children:"\u6295\u7a3f"})})]})};V.a.updateLocale("ja",ee.a);var ue=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],j=Object(r.useRef)();Object(r.useEffect)((function(){return b(),j.current=setInterval(b,6e4),function(){clearInterval(j.current)}}));var b=function(){var t=V()(e.comment.createdAt);a(t.fromNow()),d(t.format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206"))};return Object(u.jsxs)("div",{className:"comment",children:[Object(u.jsxs)("div",{className:"comment-user text-sm",children:[Object(u.jsx)("span",{className:"text-blue-500",children:e.comment.username}),"\u30fb",Object(u.jsx)("span",{className:"text-gray-500 text-xs",title:l,children:c}),!!e.comment.email&&Object(u.jsx)("span",{onClick:function(){e.onDeleteComment&&e.onDeleteComment(e.comment._id)},className:"comment-delete",children:"\u524a\u9664"})]}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:e.comment.content}})]})},de=function(e){return Object(u.jsx)(u.Fragment,{children:e.comments.map((function(t,n){return Object(u.jsx)(ue,{comment:t,index:n,onDeleteComment:function(t){return function(t){e.onDeleteComment&&e.onDeleteComment(t)}(t)}},n)}))})},je=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){se.a.start(),M.a.get("/api/comments/").then((function(e){c(e.data)})).catch((function(e){console.error(e)})).then((function(){se.a.done()}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(le,{onSubmit:function(e){if(e)return e.username?e.content?void M.a.post("/api/comments/add",e).then(a).catch((function(e){alert("\u6295\u7a3f\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),console.log(e)})):alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"):alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")}}),Object(u.jsx)("div",{className:"bg-white p-5 border-2 border-gray-50",children:Object(u.jsx)(de,{comments:n,onDeleteComment:function(e){M.a.delete("/api/comments/"+e).then((function(t){console.log(t.data),c(n.filter((function(t){return t._id!==e})))})).catch((function(e){console.log(e)}))}})})]})},be=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),c=new Uint8Array(n.length),r=0;r<n.length;++r)c[r]=n.charCodeAt(r);return c},fe=function(){var e=Object(_.a)(R.a.mark((function e(t,n,c){var r,a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register("/serviceWorker.js",{scope:"/"});case 2:return r=e.sent,e.next=5,navigator.serviceWorker.ready;case 5:return e.next=7,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:be("BOVjyLKO6qyyTL_EkSuANUdMFfjCIdn26dDqXLBE69RKabZ5mQF6pU-GC9YJo01o5N9EOSs6nA_K8B1DqXqeIe8")});case 7:return a=e.sent,s={subscription:a,title:t,detail:n,timer:c},e.next=11,M.a.post("/api/subscribe/",s);case 11:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),me=function(e,t,n){"serviceWorker"in navigator&&fe(e,t,n).catch((function(e){return console.error(e)}))},he=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useRef)(),s=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){l()}),[]);var l=function(){c(V()().format("HH:mm:ss"))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(ne,{type:"text",forID:"title",ref:a,children:"\u30d7\u30c3\u30b7\u30e5\u30bf\u30a4\u30c8\u30eb"}),Object(u.jsx)(ne,{type:"textarea",forID:"detail",ref:s,children:"\u30d7\u30c3\u30b7\u30e5\u5185\u5bb9"}),Object(u.jsx)(ne,{type:"text",checkNaturalNumber:!0,forID:"timer",ref:i,children:"\u30bf\u30a4\u30de\u30fc\uff08\u5358\u4f4d\uff1a\u5206\uff09"}),Object(u.jsx)(re,{onClick:function(){me(a.current.value,s.current.value,1e3*parseInt(i.current.value)*60)},children:"\u30bb\u30c3\u30c8\u30d7\u30c3\u30b7\u30e5"})]}),Object(u.jsx)(q,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(re,{onClick:l,children:"\u30bf\u30a4\u30e0\u30bb\u30c3\u30c8"}),Object(u.jsxs)("div",{children:["\u30bb\u30c3\u30c8\u3055\u308c\u305f\u6642\u9593\uff1a",Object(u.jsx)("span",{children:n})]})]})]})},xe=function(e){var t=Object(r.useContext)(c),n=t.state,a=t.dispatch,s=Object(r.useRef)(null),o=Object(r.useRef)(null),i=Object(r.useRef)(null),l=Object(r.useRef)(null);Object(r.useEffect)((function(){!0===n.logged&&e.history.push("/user/mypage")}),[n.logged,e.history]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(u.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),i.current.value!==l.current.value)?alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"):function(e){return function(){var t=Object(_.a)(R.a.mark((function t(n){var c,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:S}),t.next=4,M.a.post("/api/users/",e);case 4:c=t.sent,r=c.data,n({type:E,value:r}),alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:D,value:t.t0.response?t.t0.response.data.message:"errorMessage"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}({username:s.current.value,email:o.current.value,password:i.current.value})(a)},children:[Object(u.jsx)(ne,{type:"text",forID:"user-name",ref:s,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsx)(ne,{type:"email",forID:"e-mail",ref:o,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(u.jsx)(ne,{type:"password",forID:"password",ref:i,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)(ne,{type:"password",forID:"confirm-password",ref:l,children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(u.jsx)(re,{type:"submit",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"})]})]})},Oe=function(e){var t=Object(r.useContext)(c),n=t.state,a=t.dispatch,s=Object(r.useRef)(null),o=Object(r.useRef)(null),i=Object(r.useRef)(null),l=Object(r.useRef)(null);Object(r.useEffect)((function(){Object(_.a)(R.a.mark((function t(){var n,c,r,o,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(a);case 2:void 0!==(null===(r=t.sent)||void 0===r||null===(n=r.data)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.username)?s.current.setValue(null===r||void 0===r||null===(o=r.data)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.username):e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[e.history,a]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i.current.value!==l.current.value);else{var c={username:s.current.value,email:n.userData.email,password:o.current.value,newPassword:i.current.value};M.a.post("/api/users/update",c).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),e.history.push("/comment")})).catch((function(e){console.table(e)}))}},children:[Object(u.jsx)(ne,{type:"text",forID:"user-name",ref:s,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(u.jsx)("span",{children:n.userData.email})]}),Object(u.jsx)(ne,{type:"password",forID:"old-password",ref:o,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)(ne,{type:"password",forID:"new-password",ref:i,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)(ne,{type:"password",forID:"confirm-new-password",ref:l,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(u.jsx)(re,{type:"submit",children:"\u5909\u66f4"})]})]})},pe=function(e){var t=Object(r.useContext)(c),n=t.state,a=t.dispatch,s=Object(r.useRef)(null),o=Object(r.useRef)(null);Object(r.useEffect)((function(){!0===n.logged&&e.history.push("/comment")}),[n.logged,e.history]);var i=function(e){var t,n;e.preventDefault(),(t=s.current.value,n=o.current.value,function(){var e=Object(_.a)(R.a.mark((function e(c){var r,a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:O}),r={email:t,password:n},e.next=5,M.a.post("/api/users/login",r);case 5:a=e.sent,s=a.data,c({type:p,value:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c({type:v,value:e.t0.response?e.t0.response.data.message:"errorMessage"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())(a)};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(u.jsx)(ne,{type:"email",forID:"mail-address",ref:s,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(u.jsx)(ne,{type:"password",forID:"now-password",ref:o,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(u.jsx)(re,{type:"submit",children:"\u30ed\u30b0\u30a4\u30f3"})]})})},ve=function(e){var t=Object(r.useContext)(c),n=t.state,a=t.dispatch;Object(r.useEffect)((function(){Object(_.a)(R.a.mark((function t(){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(a);case 2:0!==(null===(c=t.sent)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.code)&&e.history.push("/user/login");case 4:case"end":return t.stop()}}),t)})))()}),[n.logged,a,e.history]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)(ce,{onClick:function(){e.history.push("/")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(u.jsx)(re,{onClick:function(){return function(e){e({type:g}),M.a.get("/api/users/logout").then((function(){e({type:y})})).catch((function(t){e({type:w,value:t.response?t.response.data.message:"errorMessage"})}))}(a)},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})},ge=function(){return Object(u.jsxs)("div",{className:"max-w-2xl w-full p-6",children:[Object(u.jsx)(Y.a,{path:"/",exact:!0,component:J}),Object(u.jsx)(Y.a,{path:"/chat",exact:!0,component:ie}),Object(u.jsx)(Y.a,{path:"/comment",component:je}),Object(u.jsx)(Y.a,{path:"/tool",exact:!0,component:he}),Object(u.jsx)(Y.a,{path:"/user/signup",component:xe}),Object(u.jsx)(Y.a,{path:"/user/mypage",component:Oe}),Object(u.jsx)(Y.a,{path:"/user/login",component:pe}),Object(u.jsx)(Y.a,{path:"/user/logout",component:ve})]})},ye=function(){return Object(u.jsxs)("div",{className:"relative top-10 flex container justify-center mx-auto my-3",children:[Object(u.jsx)(W,{class:"hidden md:block w-16 lg:w-64",toggleText:"hidden lg:block"}),Object(u.jsx)(ge,{})]})};n(124);var we=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=function(){c(!n)};Object(r.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[]);var s=function(e){"Escape"===e.key&&c(!1)};return Object(u.jsx)("div",{className:"",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(K,{handleSidebar:a}),Object(u.jsx)(B,{toggleClass:"block lg:hidden",handleSidebar:a,sidebar:n}),Object(u.jsx)(ye,{})]})})};s.a.render(Object(u.jsx)(H,{children:Object(u.jsx)(we,{})}),document.getElementById("root"))},70:function(e,t,n){}},[[125,1,2]]]);