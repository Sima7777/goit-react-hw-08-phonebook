(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{110:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return Kt}));var r=e(29),a=e(46),i=(e(67),e(0)),o=(e(59),e(58)),c=(e(21),e(27),o.a.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(t){c[t]=c(t)}));var s,u=c,l=u.form(s||(s=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 450px;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),d=e(34),f=e(16),p={data:""},m=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||p},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,v=/\/\*[^]*?\*\/|\s\s+|\n/g,g=function t(n,e){var r,a="",i="",o="",c=function(c){var u=n[c];"object"==typeof u?(r=e?e.replace(/([^,])+/g,(function(t){return c.replace(/([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):c,i+="@"==c[0]?"f"==c[1]?t(u,c):c+"{"+t(u,"k"==c[1]?"":e)+"}":t(u,r)):"@"==c[0]&&"i"==c[1]?a=c+" "+u+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(c,u):c+":"+u+";"),s=c};for(var s in n)c(s);return o[0]?a+(r=e?e+"{"+o+"}":o)+i:a+i},h={},y=function t(n){var e="";for(var r in n)e+=r+("object"==typeof n[r]?t(n[r]):n[r]);return e},j=function(t,n,e,r,a){var i="object"==typeof t?y(t):t,o=h[i]||(h[i]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(i));if(!h[o]){var c="object"==typeof t?t:function(t){for(var n,e=[{}];n=b.exec(t.replace(v,""));)n[4]&&e.shift(),n[3]?e.unshift(e[0][n[3]]=e[0][n[3]]||{}):n[4]||(e[0][n[1]]=n[2]);return e[0]}(t);h[o]=g(a?Object(f.a)({},"@keyframes "+o,c):c,e?"":"."+o)}return function(t,n,e){-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(h[o],n,r),o},x=function(t,n,e){return t.reduce((function(t,r,a){var i=n[a];if(i&&i.call){var o=i(e),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=c?"."+c:o&&"object"==typeof o?o.props?"":g(o,""):o}return t+r+(null==i?"":i)}),"")};function O(t){var n=this||{},e=t.call?t(n.p):t;return j(e.unshift?e.raw?x(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return e?Object.assign(t,e.call?e(n.p):e):t}),{}):e,m(n.target),n.g,n.o,n.k)}O.bind({g:1});var T,A,S,E=O.bind({k:1});function w(t,n){var e=this||{};return function(){var r=arguments;function a(i,o){var c=Object.assign({},i),s=c.className||a.className;e.p=Object.assign({theme:A&&A()},c),e.o=/ *go\d+/.test(s),c.className=O.apply(e,r)+(s?" "+s:""),n&&(c.ref=o);var u=c.as||t;return S&&u[0]&&S(c),T(u,c)}return n?n(a):a}}function D(){return(D=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function _(t,n){return n||(n=t.slice(0)),t.raw=n,t}var k,P=function(t,n){return function(t){return"function"===typeof t}(t)?t(n):t},C=function(){var t=0;return function(){return(++t).toString()}}(),U=function(){var t=void 0;return function(){if(void 0===t){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(k||(k={}));var z=new Map,I=function(t){if(!z.has(t)){var n=setTimeout((function(){z.delete(t),B({type:k.REMOVE_TOAST,toastId:t})}),1e3);z.set(t,n)}},M=function t(n,e){switch(e.type){case k.ADD_TOAST:return D({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case k.UPDATE_TOAST:return e.toast.id&&function(t){var n=z.get(t);n&&clearTimeout(n)}(e.toast.id),D({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?D({},t,e.toast):t}))});case k.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:k.UPDATE_TOAST,toast:r}):t(n,{type:k.ADD_TOAST,toast:r});case k.DISMISS_TOAST:var a=e.toastId;return a?I(a):n.toasts.forEach((function(t){I(t.id)})),D({},n,{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?D({},t,{visible:!1}):t}))});case k.REMOVE_TOAST:return void 0===e.toastId?D({},n,{toasts:[]}):D({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case k.START_PAUSE:return D({},n,{pausedAt:e.time});case k.END_PAUSE:var i=e.time-(n.pausedAt||0);return D({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return D({},t,{pauseDuration:t.pauseDuration+i})}))})}},R=[],N={toasts:[],pausedAt:void 0},B=function(t){N=M(N,t),R.forEach((function(t){t(N)}))},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},q=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),D({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||C()})}(n,t,e);return B({type:k.UPSERT_TOAST,toast:r}),r.id}},L=function(t,n){return q("blank")(t,n)};L.error=q("error"),L.success=q("success"),L.loading=q("loading"),L.custom=q("custom"),L.dismiss=function(t){B({type:k.DISMISS_TOAST,toastId:t})},L.remove=function(t){return B({type:k.REMOVE_TOAST,toastId:t})},L.promise=function(t,n,e){var r=L.loading(n.loading,D({},e,null==e?void 0:e.loading));return t.then((function(t){return L.success(P(n.success,t),D({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){L.error(P(n.error,t),D({id:r},e,null==e?void 0:e.error))})),t};var V=function(t){var n=function(t){void 0===t&&(t={});var n=Object(i.useState)(N),e=n[0],r=n[1];Object(i.useEffect)((function(){return R.push(r),function(){var t=R.indexOf(r);t>-1&&R.splice(t,1)}}),[e]);var a=e.toasts.map((function(n){var e,r,a;return D({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||F[n.type],style:D({},t.style,null==(a=t[n.type])?void 0:a.style,n.style)})}));return D({},e,{toasts:a})}(t),e=n.toasts,r=n.pausedAt;Object(i.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return L.dismiss(n.id)}),e);n.visible&&L.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var a=Object(i.useMemo)((function(){return{startPause:function(){B({type:k.START_PAUSE,time:Date.now()})},endPause:function(){r&&B({type:k.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return B({type:k.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,a=n||{},i=a.reverseOrder,o=void 0!==i&&i,c=a.gutter,s=void 0===c?8:c,u=a.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),d=l.findIndex((function(n){return n.id===t.id})),f=l.filter((function(t,n){return n<d&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,o?[f+1]:[0,f]).reduce((function(t,n){return t+(n.height||0)+s}),0)}}}),[e,r]);return{toasts:e,handlers:a}};function Z(){var t=_(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return Z=function(){return t},t}function H(){var t=_(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return H=function(){return t},t}function J(){var t=_(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return J=function(){return t},t}function G(){var t=_(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return G=function(){return t},t}var $=E(G()),Y=E(J()),K=E(H()),Q=w("div")(Z(),(function(t){return t.primary||"#ff4b4b"}),$,Y,(function(t){return t.secondary||"#fff"}),K);function W(){var t=_(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return W=function(){return t},t}function X(){var t=_(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return X=function(){return t},t}var tt=E(X()),nt=w("div")(W(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),tt);function et(){var t=_(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return et=function(){return t},t}function rt(){var t=_(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return rt=function(){return t},t}function at(){var t=_(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return at=function(){return t},t}var it=E(at()),ot=E(rt()),ct=w("div")(et(),(function(t){return t.primary||"#61d345"}),it,ot,(function(t){return t.secondary||"#fff"}));function st(){var t=_(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return st=function(){return t},t}function ut(){var t=_(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return ut=function(){return t},t}function lt(){var t=_(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return lt=function(){return t},t}function dt(){var t=_(["\n  position: absolute;\n"]);return dt=function(){return t},t}var ft=w("div")(dt()),pt=w("div")(lt()),mt=E(ut()),bt=w("div")(st(),mt),vt=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"===typeof e?Object(i.createElement)(bt,null,e):e:"blank"===r?null:Object(i.createElement)(pt,null,Object(i.createElement)(nt,Object.assign({},a)),"loading"!==r&&Object(i.createElement)(ft,null,"error"===r?Object(i.createElement)(Q,Object.assign({},a)):Object(i.createElement)(ct,Object.assign({},a))))};function gt(){var t=_(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return gt=function(){return t},t}function ht(){var t=_(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return ht=function(){return t},t}var yt=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},jt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},xt=w("div",i.forwardRef)(ht()),Ot=w("div")(gt()),Tt=Object(i.memo)((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,o=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=U()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[yt(e),jt(e)],a=r[1];return{animation:n?E(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":E(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},c=Object(i.createElement)(vt,{toast:n}),s=Object(i.createElement)(Ot,Object.assign({},n.ariaProps),P(n.message,n));return Object(i.createElement)(xt,{className:n.className,style:D({},o,r,n.style)},"function"===typeof a?a({icon:c,message:s}):Object(i.createElement)(i.Fragment,null,c,s))}));function At(){var t=_(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return At=function(){return t},t}!function(t,n,e,r){g.p=n,T=t,A=e,S=r}(i.createElement);var St,Et=O(At()),wt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,a=t.toastOptions,o=t.gutter,c=t.children,s=t.containerStyle,u=t.containerClassName,l=V(a),d=l.toasts,f=l.handlers;return Object(i.createElement)("div",{style:D({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(t){var e,a=t.position||r,s=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return D({left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,a)}(a,f.calculateOffset(t,{reverseOrder:n,gutter:o,defaultPosition:r})),u=t.height?void 0:(e=function(n){f.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return Object(i.createElement)("div",{ref:u,className:t.visible?Et:"",key:t.id,style:s},"custom"===t.type?P(t.message,t):c?c(t):Object(i.createElement)(Tt,{toast:t,position:a}))})))},Dt=e(47),_t=e(1),kt={input:{display:"block",marginBottom:"10px",marginTop:"5px"},label:{marginBottom:"10px"},button:{width:"100px",fontSize:"12px"}};function Pt(){var t=Object(d.b)(),n=Object(r.a)(t,2),e=n[0],a=n[1].isLoading,i=Object(d.d)().data;return Object(_t.jsx)(_t.Fragment,{children:Object(_t.jsxs)(l,{onSubmit:function(t){t.preventDefault(),i.find((function(n){return n.name===t.target.elements.name.value}))?(alert("".concat(t.target.elements.name.value," is already in contacts")),L.error("Contact not added")):(e({name:t.target.elements.name.value,number:t.target.elements.number.value}),L.success("Contact added")),t.target.reset()},children:[Object(_t.jsxs)("label",{style:kt.label,children:["\u0418\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",Object(_t.jsx)("input",{style:kt.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(_t.jsxs)("label",{style:kt.label,children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",Object(_t.jsx)("input",{style:kt.input,type:"tel",name:"number",required:!0})]}),Object(_t.jsx)(Dt.a,{type:"submit",style:kt.button,disabled:a,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}var Ct,Ut=u.ul(St||(St=Object(a.a)(["\n  padding: 0;\n  list-style: none;\n  width: 450px;\n  margin: 0px;\n"]))),zt=u.li(Ct||(Ct=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n  align-items: center;\n"]))),It={button:{fontSize:"12px"}};function Mt(t){var n=t.name,e=t.number,r=t.onDelBtnClick;return Object(_t.jsxs)(zt,{children:[n,": ",e,Object(_t.jsx)(Dt.a,{type:"submit",name:n,onClick:r,style:It.button,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}Mt.defaultProps={name:null,number:null,onDelBtnClick:function(){return null}};var Rt=Mt;var Nt,Bt=function(t){var n=t.contacts,e=Object(d.c)(),a=Object(r.a)(e,1)[0];return Object(_t.jsx)(Ut,{children:n.map((function(t){var n=t.id,e=t.name,r=t.number;return Object(_t.jsx)(Rt,{name:e,number:r,onDelBtnClick:function(){return a(n)}},n)}))})},Ft=u.div(Nt||(Nt=Object(a.a)(["\n  margin-bottom: 20px;\n"]))),qt=e(4),Lt=e(60),Vt={input:{display:"block",marginTop:"5px"}};var Zt=function(){var t=Object(qt.d)();return Object(_t.jsx)(Ft,{children:Object(_t.jsxs)("label",{children:["\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(_t.jsx)("input",{style:Vt.input,type:"text",name:"filter",onChange:function(n){var e=n.target.value;t(Object(Lt.a)(e))}})]})})},Ht=e(57),Jt=function(t){return t.filter.filter},Gt=e(104),$t=e(105),Yt=e(106);function Kt(){var t=Object(d.d)(),n=t.data,e=t.isFetching,r=Object(qt.e)(Jt);return Object(_t.jsx)(Gt.a,{children:Object(_t.jsx)($t.a,{children:Object(_t.jsxs)(Yt.a,{children:[Object(_t.jsx)("h2",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(_t.jsx)(Pt,{}),Object(_t.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(_t.jsx)(Zt,{}),e&&Object(_t.jsx)(Ht.a,{}),n&&Object(_t.jsx)(Bt,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(r)}))}),Object(_t.jsx)(wt,{})]})})})}}}]);
//# sourceMappingURL=3.4370d70d.chunk.js.map