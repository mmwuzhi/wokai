(this["webpackJsonp@wokai/front"]=this["webpackJsonp@wokai/front"]||[]).push([[0],{107:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(33),s=n.n(c),a=n(10),i=n(51),o=Object(i.b)({name:"user",initialState:{userData:{id:"",username:"",email:""},error:null,logged:!1},reducers:{loginSuccess:function(e,t){var n=t.payload;e.logged=!0,e.userData=n},loginFail:function(e,t){var n=t.payload;e.error=n.error},logoutSuccess:function(e,t){var n=t.payload;e.userData={id:"",username:"",email:""},e.logged=n}}}),u=o.actions,l=u.loginSuccess,d=u.loginFail,j=u.logoutSuccess,b=o.reducer,f=Object(i.a)({reducer:{user:b}}),m=(n(107),n(8)),x=n(20),h=n(19),p=n(91),O=(n(108),n(7)),v=n.n(O),g=n(30),w=n.n(g);v.a.interceptors.request.use((function(e){return w.a.start(),e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return w.a.done(),e}),(function(e){return Promise.reject(e)})),w.a.configure({showSpinner:!1});var y=n(36),k=n(0),N=Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),C=Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}),D=Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),S=Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),I=Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),E=function(e){var t=Object(a.c)((function(e){return e.user})),n=Object(r.useState)(!1),c=Object(m.a)(n,2),s=c[0],i=c[1],o=Object(r.useRef)(null),u=Object(r.useState)(),l=Object(m.a)(u,2),d=l[0],j=l[1];Object(r.useEffect)((function(){j(o.current.offsetLeft-180);var e=function(){var e=o.current.offsetLeft-180;j(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var b=Object(y.classnames)("transition-all","duration-300","origin-top-right","absolute","right-0","top-14","z-50","w-56","mt-2","origin-top-right","bg-white","border","border-gray-200","divide-y","divide-gray-100","rounded-md","shadow-lg","outline-none",{"scale-95":!s,"-translate-y-2":!s,"opacity-0":!s,invisible:!s,"scale-100":s,"translate-y-0":s,"opacity-100":s,visible:s}),f=Object(y.classnames)("inset-0","fixed","z-0",{hidden:!s}),h=Object(y.classnames)("px-4","py-3",{hidden:!t.logged});return Object(k.jsx)("header",{className:"z-10 flex justify-center fixed w-full top-0 h-14 border border-blue-100 bg-white items-center",children:Object(k.jsxs)("div",{className:"flex items-center justify-between max-w-5xl w-full",children:[Object(k.jsxs)("div",{className:"flex items-center",children:[Object(k.jsx)("span",{onClick:e.handleSidebar,className:"block lg:hidden p-4 text-blue-300 cursor-pointer",children:I}),Object(k.jsx)(x.b,{to:"/",className:"pl-4 text-xl text-blue-300",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068"})]}),Object(k.jsx)("div",{ref:o,className:"relative inline-block text-left z-10",children:Object(k.jsx)("span",{onClick:function(){i(!s)},className:"p-4 text-blue-300 cursor-pointer",children:Object(k.jsx)("button",{className:"transition ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue",children:S})})}),Object(k.jsx)("div",{onClick:function(){return i(!1)},className:f}),Object(k.jsxs)("div",{style:{left:d},className:"transform ".concat(b),children:[Object(k.jsxs)("div",{className:h,children:[Object(k.jsx)("p",{className:"text-sm leading-5",children:"Signed in as"}),Object(k.jsx)("p",{className:"text-sm font-medium leading-5 text-gray-900 truncate",children:t.userData.email})]}),Object(k.jsxs)("div",{className:"py-1",children:[t.logged?Object(k.jsx)(x.c,{to:"/user/mypage",onClick:function(){return i(!1)},activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30de\u30a4\u30da\u30fc\u30b8"}):Object(k.jsx)(x.c,{to:"/user/signup",activeClassName:"active",onClick:function(){return i(!1)},className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(k.jsx)("span",{tabIndex:-1,className:"flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50","aria-disabled":"true",children:"Come Soon"})]}),Object(k.jsx)("div",{className:"py-1",children:t.logged?Object(k.jsx)(x.c,{to:"/user/logout",activeClassName:"active",onClick:function(){return i(!1)},className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}):Object(k.jsx)(x.c,{to:"/user/login",onClick:function(){return i(!1)},activeClassName:"active",className:"text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",children:"\u30ed\u30b0\u30a4\u30f3"})})]})]})})},L=[{to:"/",icon:N,text:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"},{to:"/comment",icon:D,text:"\u30b3\u30e1\u30f3\u30c8"},{to:"/chat",icon:C,text:"\u30c1\u30e3\u30c3\u30c8"},{to:"/tool",icon:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:Object(k.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})}),text:"\u30c4\u30fc\u30eb"}],M=function(e){return Object(k.jsx)("aside",{className:"".concat(e.class," p-3 flex bg-white flex-col"),children:Object(k.jsx)("nav",{children:Object(k.jsx)("ul",{className:"",children:L.map((function(t,n){return Object(k.jsx)("li",{children:Object(k.jsxs)(x.c,{to:t.to,exact:!0,onClick:e.handleSidebar,activeClassName:"active-nav",className:"nav-text",children:[t.icon,Object(k.jsx)("span",{className:e.toggleText,children:t.text})]})},n)}))})})})},R=function(e){var t=Object(y.classnames)("inset-0","fixed","z-20",{hidden:!e.sidebar});return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{onClick:e.handleSidebar,className:t}),Object(k.jsx)("div",{className:"".concat(e.toggleClass," opacity-1 transition-opacity"),children:Object(k.jsx)("div",{className:"z-50 ".concat(e.sidebar?"nav-menu active":"nav-menu"," top-14"),children:Object(k.jsx)(M,{class:"fixed w-48 h-screen border-r",handleSidebar:e.handleSidebar,toggleText:e.toggleText})})})]})},z=n(9),F=n(12),W=n.n(F),A=function(){var e=Object(r.useState)(new Date),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(k.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"lightgray"},children:n.toLocaleTimeString("ja-JP",{hour12:!0})})},B=Object(k.jsx)("table",{className:"border-gray-100 border-2 text-center",children:Object(k.jsxs)("tbody",{children:[Object(k.jsx)("tr",{children:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"].map((function(e,t){return Object(k.jsx)("td",{className:"border-gray-100 border-2 p-1",children:e},t)}))}),function(e){for(var t,n=[[],[],[],[],[],[]],r=W()(e).date(1).weekday(),c=W()(e).subtract(1,"month").daysInMonth(),s=W()(e).daysInMonth(),a=0;a<7;a+=1)for(var i=c-r+a+1,o=0;o<6;o+=1)n[o][a]=(t=i+7*o)<=c?t:t<=c+s?t-c:t-(c+s);return n}(W()()).map((function(e,t){return Object(k.jsx)("tr",{children:e.map((function(e,n){return Object(k.jsx)("td",{className:"".concat(parseFloat(W()().format("DD"))===e&&e>=7*(t-1)&&e<=7*(t+1)?"bg-green-200":""," border-gray-100 border-2 p-1"),children:e},n)}))},t)}))]})}),H=function(){return Object(k.jsxs)(k.Fragment,{children:[B,Object(k.jsx)(A,{})]})},K=n(93),Q=n.n(K),Y=n(35),T=n.n(Y);W.a.updateLocale("ja",T.a);var q=function(e){return Object(k.jsxs)("div",{className:"comment",children:[Object(k.jsxs)("div",{className:"comment-user",children:[Object(k.jsxs)("span",{className:"text-blue-500",children:[e.data.name,"\u3000"]}),Object(k.jsx)("span",{className:"comment-createdtime",children:W()(e.data.createdAt).format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")})]}),Object(k.jsx)("span",{children:e.data.msg})]})},V=Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(""),c=Object(m.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(""),o=Object(m.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],f=j[1],x=Object(r.useState)(""),h=Object(m.a)(x,2),p=h[0],O=h[1],v=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(function(){return{checkSubmit:g,focus:w,value:u,setValue:l,setFilled:a}})),Object(r.useEffect)((function(){a(u?"filled":"")}),[u]);var g=function(){u?(f(""),O("")):(f("border-red-500"),O("text-red-500"))},w=function(){v.current.focus()};return Object(k.jsxs)("div",{className:"mb-4 relative",children:[Object(k.jsx)("input",{className:"".concat(s," input border border-gray-200 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-blue-200 focus:outline-none active:outline-none active:border-blue-200 ").concat(b),id:e.forID,type:e.type,value:u,onChange:function(t){if(e.checkNaturalNumber){var n=t.target.value;(/^\d*?$/.test(n)&&n.length<4||""===n)&&l(t.target.value)}else l(t.target.value)},onKeyUp:function(){f(""),O("")},ref:v,onKeyDown:e.onKeyDown}),Object(k.jsx)("label",{htmlFor:e.forID,onClick:function(e){e.target.previousElementSibling.focus()},className:"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text ".concat(p),children:e.children})]})})),_=function(e){return Object(k.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})},P=function(e){return Object(k.jsx)("button",{type:e.type,onClick:e.onClick,className:"border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 focus:outline-none focus:shadow-outline ".concat(e.className),children:e.children})};W.a.updateLocale("ja",T.a);var J=Q()();function U(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(),a=Object(m.a)(s,2),i=a[0],o=a[1],u=Object(r.useRef)(null),l=Object(r.useRef)(null);Object(r.useEffect)((function(){w.a.start();var e=!1;return J.emit("reqMsg",{}),J.on("sysMsg",(function(t){e||o(t)})),J.on("recvMsg",(function(t){e||(c(t),w.a.done())})),function(){e=!0}}),[]);var d=function(e){e.preventDefault(),u.current.checkSubmit(),l.current.checkSubmit(),u.current.value&&l.current.value&&(J.emit("sendMsg",{name:u.current.value,msg:l.current.value}),l.current.focus(),l.current.setValue(""),l.current.setFilled(""))};return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:["\u30aa\u30f3\u30e9\u30a4\u30f3\u4eba\u6570\uff1a",i]}),Object(k.jsx)(V,{type:"text",forID:"user-name",ref:u,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(k.jsx)(V,{type:"textarea",forID:"msg",onKeyDown:function(e){"Enter"===e.key&&d(e)},ref:l,children:"\u30e1\u30c3\u30bb\u30fc\u30b8"}),Object(k.jsx)("div",{className:"flex justify-end",children:Object(k.jsx)(P,{className:"w-1/4",onClick:d,children:"\u9001\u4fe1"})}),Object(k.jsx)("div",{className:"msg-list",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(k.jsx)(q,{data:e,index:t},t)}))})]})}var X=n(5),G=n.n(X),Z=n(11),$=function(){var e=Object(Z.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(t.username){e.next=4;break}return e.abrupt("return",alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"));case 4:if(t.content){e.next=6;break}return e.abrupt("return",alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"));case 6:return e.prev=6,e.next=9,v.a.post("/api/comments/add",t);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(6),alert("\u6295\u7a3f\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(h.useMutation)($).mutate,t=Object(h.useQueryClient)(),n=Object(a.c)((function(e){return e.user})),c=Object(r.useState)(""),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),l=Object(m.a)(u,2),d=l[0],j=l[1],b=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){o(n.userData.username)}),[n.userData.username]);var x=function(r){r.preventDefault();var c=n.userData.email;e({username:i,email:c,content:d.trimEnd()},{onSuccess:function(){t.invalidateQueries("comments")},onError:function(){j("")}})};return Object(k.jsxs)("div",{className:"comment-input",children:[Object(k.jsxs)("div",{className:"comment-field",children:[Object(k.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(k.jsx)("div",{className:"comment-field-input",children:Object(k.jsx)("input",{value:i,ref:f,onChange:function(e){return o(e.target.value)}})})]}),Object(k.jsxs)("div",{className:"comment-field",children:[Object(k.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(k.jsx)("div",{className:"comment-field-input",children:Object(k.jsx)("textarea",{className:"h-24",ref:b,value:d,onChange:function(e){return j(e.target.value)},onKeyDown:function(e){e.ctrlKey&&"Enter"===e.key&&x(e)}})})]}),Object(k.jsx)("div",{className:"flex justify-end",children:Object(k.jsx)(P,{className:"w-20 sm:w-1/4",onClick:x,children:"\u6295\u7a3f"})})]})};W.a.updateLocale("ja",T.a);var te=function(){var e=Object(Z.a)(G.a.mark((function e(t){var n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/api/comments/"+t);case 2:n=e.sent,r=n.data,console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(e){var t=Object(r.useState)(""),n=Object(m.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(m.a)(a,2),o=i[0],u=i[1],l=Object(r.useRef)(),d=Object(h.useMutation)(te).mutate,j=Object(h.useQueryClient)();Object(r.useEffect)((function(){return b(),l.current=window.setInterval(b,6e4),function(){clearInterval(l.current)}}));var b=function(){var t=W()(e.comment.createdAt);s(t.fromNow()),u(t.format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206"))};return Object(k.jsxs)("div",{className:"comment",children:[Object(k.jsxs)("div",{className:"comment-user text-sm",children:[Object(k.jsx)("span",{className:"text-blue-500",children:e.comment.username}),"\u30fb",Object(k.jsx)("span",{className:"text-gray-500 text-xs",title:o,children:c}),!!e.comment.email&&Object(k.jsx)("span",{onClick:function(){d(e.comment._id,{onSuccess:function(){j.invalidateQueries("comments")}})},className:"comment-delete",children:"\u524a\u9664"})]}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:e.comment.content}})]})},re=function(){var e=Object(h.useQuery)("comments",Object(Z.a)(G.a.mark((function e(){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/comments/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),t=e.data,n=e.isLoading,r=e.isError;return Object(k.jsx)(k.Fragment,{children:n?Object(k.jsx)("span",{children:"Loading..."}):r?Object(k.jsx)("span",{children:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"}):null===t||void 0===t?void 0:t.map((function(e,t){return Object(k.jsx)(ne,{comment:e,index:t},t)}))})},ce=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ee,{}),Object(k.jsx)("div",{className:"bg-white p-5 border-2 border-gray-50",children:Object(k.jsx)(re,{})})]})},se=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),c=0;c<n.length;++c)r[c]=n.charCodeAt(c);return r},ae=function(){var e=Object(Z.a)(G.a.mark((function e(t,n,r){var c,s,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register("/serviceWorker.js",{scope:"/"});case 2:return c=e.sent,e.next=5,navigator.serviceWorker.ready;case 5:return e.next=7,c.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:se("BOVjyLKO6qyyTL_EkSuANUdMFfjCIdn26dDqXLBE69RKabZ5mQF6pU-GC9YJo01o5N9EOSs6nA_K8B1DqXqeIe8")});case 7:return s=e.sent,a={subscription:s,title:t,detail:n,timer:r},e.next=11,v.a.post("/api/subscribe/",a);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ie=function(e,t,n){"serviceWorker"in navigator&&ae(e,t,n).catch((function(e){return console.error(e)}))},oe=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){o()}),[]);var o=function(){c(W()().format("HH:mm:ss"))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(V,{type:"text",forID:"title",ref:s,children:"\u30d7\u30c3\u30b7\u30e5\u30bf\u30a4\u30c8\u30eb"}),Object(k.jsx)(V,{type:"textarea",forID:"detail",ref:a,children:"\u30d7\u30c3\u30b7\u30e5\u5185\u5bb9"}),Object(k.jsx)(V,{type:"text",checkNaturalNumber:!0,forID:"timer",ref:i,children:"\u30bf\u30a4\u30de\u30fc\uff08\u5358\u4f4d\uff1a\u5206\uff09"}),Object(k.jsx)(P,{onClick:function(){ie(s.current.value,a.current.value,1e3*parseInt(i.current.value)*60)},children:"\u30bb\u30c3\u30c8\u30d7\u30c3\u30b7\u30e5"})]}),Object(k.jsx)(A,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(P,{onClick:o,children:"\u30bf\u30a4\u30e0\u30bb\u30c3\u30c8"}),Object(k.jsxs)("div",{children:["\u30bb\u30c3\u30c8\u3055\u308c\u305f\u6642\u9593\uff1a",Object(k.jsx)("span",{children:n})]})]})]})},ue=function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.user})),c=Object(r.useRef)(null),s=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null);Object(r.useEffect)((function(){!0===n.logged&&e.history.push("/user/mypage")}),[n.logged,e.history]);return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(k.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),i.current.value!==o.current.value)?alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"):function(e){return function(){var t=Object(Z.a)(G.a.mark((function t(n){var r,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/users/",e);case 3:r=t.sent,c=r.data,n(l(c)),alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v.a.isAxiosError(t.t0)&&t.t0.response&&400===t.t0.response.status&&n(d(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}({username:c.current.value,email:s.current.value,password:i.current.value})(t)},children:[Object(k.jsx)(V,{type:"text",forID:"user-name",ref:c,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(k.jsx)(V,{type:"email",forID:"e-mail",ref:s,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(k.jsx)(V,{type:"password",forID:"password",ref:i,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(k.jsx)(V,{type:"password",forID:"confirm-password",ref:o,children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(k.jsx)(P,{type:"submit",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"})]})]})},le=function(){var e=Object(Z.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/users/userInfo");case 3:return 0===(n=e.sent).data.code&&t(l(n.data.data)),e.abrupt("return",n.data);case 8:if(e.prev=8,e.t0=e.catch(0),!v.a.isAxiosError(e.t0)||!e.t0.response||400!==e.t0.response.status){e.next=13;break}return t(d(e.t0.message)),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),de=function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.user})),c=Object(r.useRef)(null),s=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null);Object(r.useEffect)((function(){Object(Z.a)(G.a.mark((function n(){var r,s,a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,le(t);case 2:void 0!==(null===(s=n.sent)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.username)?c.current.setValue(null===s||void 0===s||null===(a=s.data)||void 0===a?void 0:a.username):e.history.push("/user/login");case 4:case"end":return n.stop()}}),n)})))()}),[e.history,t]);return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(k.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i.current.value!==o.current.value);else{var r={username:c.current.value,email:n.userData.email,password:s.current.value,newPassword:i.current.value};v.a.post("/api/users/update",r).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),e.history.push("/comment")})).catch((function(e){console.table(e)}))}},children:[Object(k.jsx)(V,{type:"text",forID:"user-name",ref:c,children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(k.jsx)("span",{children:n.userData.email})]}),Object(k.jsx)(V,{type:"password",forID:"old-password",ref:s,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(k.jsx)(V,{type:"password",forID:"new-password",ref:i,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(k.jsx)(V,{type:"password",forID:"confirm-new-password",ref:o,children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(k.jsx)(P,{type:"submit",children:"\u5909\u66f4"})]})]})},je=function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.user})),c=Object(r.useRef)(null),s=Object(r.useRef)(null);Object(r.useEffect)((function(){!0===n.logged&&e.history.push("/comment")}),[n.logged,e.history]);var i=function(e){var n,r;e.preventDefault(),(n=c.current.value,r=s.current.value,function(){var e=Object(Z.a)(G.a.mark((function e(t){var c,s,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={email:n,password:r},e.next=4,v.a.post("/api/users/login",c);case 4:s=e.sent,a=s.data,t(l(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v.a.isAxiosError(e.t0)&&e.t0.response&&400===e.t0.response.status&&t(d(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())(t)};return Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(k.jsx)(V,{type:"email",forID:"mail-address",ref:c,children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(k.jsx)(V,{type:"password",forID:"now-password",ref:s,children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(k.jsx)(P,{type:"submit",children:"\u30ed\u30b0\u30a4\u30f3"})]})})},be=function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.user.logged}));Object(r.useEffect)((function(){Object(Z.a)(G.a.mark((function r(){var c;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,le(t);case 2:0===(null===(c=r.sent)||void 0===c?void 0:c.code)&&!1!==n||e.history.push("/user/login");case 4:case"end":return r.stop()}}),r)})))()}),[n,t,e.history]);return Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:"",children:"\u306a\u306b\u306a\u306b\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)(_,{onClick:function(){e.history.push("/")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(k.jsx)(P,{onClick:function(){return function(e){v.a.get("/api/users/logout").then((function(){e(j(!1))})).catch((function(t){e(d(t))}))}(t)},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})},fe=function(){return Object(k.jsxs)("div",{className:"max-w-2xl w-full p-6",children:[Object(k.jsx)(z.a,{path:"/",exact:!0,component:H}),Object(k.jsx)(z.a,{path:"/chat",exact:!0,component:U}),Object(k.jsx)(z.a,{path:"/comment",component:ce}),Object(k.jsx)(z.a,{path:"/tool",exact:!0,component:oe}),Object(k.jsx)(z.a,{path:"/user/signup",component:ue}),Object(k.jsx)(z.a,{path:"/user/mypage",component:de}),Object(k.jsx)(z.a,{path:"/user/login",component:je}),Object(k.jsx)(z.a,{path:"/user/logout",component:be})]})},me=function(){return Object(k.jsxs)("div",{className:"relative top-10 flex container justify-center mx-auto my-3",children:[Object(k.jsx)(M,{class:"hidden md:block w-16 lg:w-64",toggleText:"hidden lg:block"}),Object(k.jsx)(fe,{})]})},xe=function(){var e=Object(a.b)(),t=new h.QueryClient,n=Object(r.useState)(!1),c=Object(m.a)(n,2),s=c[0],i=c[1],o=function(){i(!s)};Object(r.useEffect)((function(){return le(e),window.addEventListener("keydown",u),function(){window.removeEventListener("keydown",u)}}),[e]);var u=function(e){"Escape"===e.key&&i(!1)};return Object(k.jsxs)(h.QueryClientProvider,{client:t,children:[Object(k.jsxs)(x.a,{children:[Object(k.jsx)(E,{handleSidebar:o}),Object(k.jsx)(R,{toggleClass:"block lg:hidden",handleSidebar:o,sidebar:s}),Object(k.jsx)(me,{})]}),Object(k.jsx)(p.ReactQueryDevtools,{initialIsOpen:!1})]})};s.a.render(Object(k.jsx)(a.a,{store:f,children:Object(k.jsx)(xe,{})}),document.getElementById("root"))}},[[160,1,2]]]);