(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(530)},242:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);a(236);var n=a(0),r=a.n(n),c=a(73),l=a.n(c),o=(a(242),a(34)),i=a(3),u=a(12),s=a(532),d=a(533),m=a(534),E=a(541),b=a(535),f=a(536),g=a(531),h=function(e){var t=e.to,a=e.children;return r.a.createElement(g.a,{to:t,activeClassName:"active",tag:o.b},a)},O="Peako Light Prototypes",v="red",j=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(s.a,{color:"light",light:!0,expand:"md"},r.a.createElement(d.a,null,O),r.a.createElement(m.a,{onClick:function(){return c(!a)}}),r.a.createElement(E.a,{isOpen:a,navbar:!0},r.a.createElement(b.a,{navbar:!0,className:"ml-auto"},r.a.createElement(f.a,null,r.a.createElement(h,{to:"/relays"},"Relays")),r.a.createElement(f.a,null,r.a.createElement(h,{to:"/triacs"},"Triacs")))))},p=a(538),w=a(204),k=a(537),y=function(e){var t=e.children,a=Object(w.a)(e,["children"]);return r.a.createElement(k.a,Object.assign({},a,{tag:o.b}),t)},x=function(e){Object(n.useEffect)(function(){document.title=e},[e])},F=function(e){var t=e.tickMs,a=e.tickCount,r=a-1,c=Object(n.useState)(0),l=Object(u.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)(function(){var e=window.setInterval(function(){o<r?i(o+1):o===r&&i(0)},t);return function(){window.clearInterval(e)}}),{position:o}},C=a(189),P=a(203),R=window.ResizeObserver||P.a,M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ref,a=e.onResize,r=Object(n.useRef)(null);t=t||r;var c=Object(n.useState)({width:void 0,height:void 0}),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useRef)({width:void 0,height:void 0});return Object(n.useEffect)(function(){if("object"===typeof t&&null!==t&&t.current instanceof Element){var e=t.current,n=new R(function(e){if(Array.isArray(e)&&e.length){var t=e[0],n=Math.round(t.contentRect.width),r=Math.round(t.contentRect.height);if(s.current.width!==n||s.current.height!==r){var c={width:n,height:r};a?a(c):(s.current.width=n,s.current.height=r,i(c))}}});return n.observe(e),function(){return n.unobserve(e)}}},[t,a]),Object(n.useMemo)(function(){return Object(C.a)({ref:t},o)},[t,o?o.width:null,o?o.height:null])},N=function(){return x(O),r.a.createElement(p.a,null,r.a.createElement("h1",null,"Select Prototype"),r.a.createElement(y,{to:"/relays",className:"mr-2"},"Relays"),r.a.createElement(y,{to:"/triacs"},"Triacs"))},I=a(539),K=a(540),A=a(42),S=a(43);function T(){var e=Object(A.a)(["\n  background-color: ",";\n  border: 1px solid black;\n  border-radius: 50%;\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n"]);return T=function(){return e},e}var L=S.a.div(T(),function(e){var t=e.r,a=e.g,n=e.b,r=e.a;return"rgba(".concat(t,", ").concat(a,", ").concat(n,", ").concat(r,")")}),z=function(e){var t=e.title,a=e.color,n=e.brightness,c=function(e){switch(e){case v:return 255;default:return 0}}(a),l=function(e){switch(e){case"green":return 255;default:return 0}}(a),o=function(e){switch(e){case"blue":return 255;default:return 0}}(a),i=function(e){return 0===e?.05:e}(n);return r.a.createElement(L,{title:t,r:c,g:l,b:o,a:i})};function J(){var e=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return J=function(){return e},e}var B,D,G=S.a.div(J()),H=function(e,t,a){var n=e.start,r=n+e.duration;return!(!(r>a)||!(t>=0&&t<r-a||t>=n))||n<=t&&r>t},q=function(e){return e?1:0},Q=function(e){var t=e.tickMs,a=e.tickCount,n=e.lights,c=F({tickMs:t,tickCount:a}).position,l=n.red2,o=n.green2,i=n.blue,u=n.green1,s=n.red1;return r.a.createElement(I.a,null,r.a.createElement(K.a,{sm:2}),r.a.createElement(K.a,{sm:8},r.a.createElement(G,null,r.a.createElement(z,{title:l.id,color:l.color,brightness:q(H(l,c,a))}),r.a.createElement(z,{title:o.id,color:o.color,brightness:q(H(o,c,a))}),r.a.createElement(z,{title:i.id,color:i.color,brightness:q(H(i,c,a))}),r.a.createElement(z,{title:u.id,color:u.color,brightness:q(H(u,c,a))}),r.a.createElement(z,{title:s.id,color:s.color,brightness:q(H(s,c,a))}))),r.a.createElement(K.a,{sm:2}),r.a.createElement(K.a,{xs:12},r.a.createElement("hr",null)),r.a.createElement(K.a,{xs:12},r.a.createElement("p",{className:"small text-muted"},"Loop Position: ",c)))},U=a(10),V=(B={},Object(U.a)(B,"red2",{id:"red2",color:v,start:32,duration:8}),Object(U.a)(B,"green2",{id:"green2",color:"green",start:20,duration:17}),Object(U.a)(B,"blue",{id:"blue",color:"blue",start:0,duration:60}),Object(U.a)(B,"green1",{id:["green1"],color:"green",start:5,duration:17}),Object(U.a)(B,"red1",{id:"red1",color:v,start:0,duration:8}),B),W=function(){return x("Relays | ".concat(O)),r.a.createElement(I.a,null,r.a.createElement(K.a,{xs:12},r.a.createElement("h1",null,"Relays"),r.a.createElement("hr",null)),r.a.createElement(K.a,{xs:12},r.a.createElement(Q,{tickMs:1e3,tickCount:60,lights:V})))},X=a(18),Y=a(76),Z=(D={},Object(U.a)(D,"red2",{id:"red2",color:v,startFadeIn:160,startFadeOut:205,fadeFor:10}),Object(U.a)(D,"green2",{id:"green2",color:"green",startFadeIn:100,startFadeOut:180,fadeFor:10}),Object(U.a)(D,"blue",{id:"blue",color:"blue",alwaysOn:!0}),Object(U.a)(D,"green1",{id:["green1"],color:"green",startFadeIn:25,startFadeOut:105,fadeFor:10}),Object(U.a)(D,"red1",{id:"red1",color:v,startFadeIn:0,startFadeOut:45,fadeFor:10}),D),$=20,_=[26,28,29,30,31,32,33,34,35,36],ee=function(e,t){var a=e.alwaysOn,n=e.startFadeIn,r=e.startFadeOut,c=e.fadeFor;if(a)return new Array(t).fill(37);for(var l=[],o=0;o<t;){var i=o>=r&&o<r+c,u=o>n+c&&o<=r;if(o>n&&o<=n+c){var s=o-n-1;l.push(_[s])}else if(i){var d=o-r;l.push(Object(Y.a)(_).reverse()[d])}else u?l.push(37):l.push($);o++}return l},te=function(e){var t=[$].concat(Object(Y.a)(_),[37]);return t.indexOf(e)/(t.length-1)};function ae(){var e=Object(A.a)(["\n  height: 200px;\n"]);return ae=function(){return e},e}var ne,re=function(e){for(var t=e.tickCount,a=e.powerPositions,n=[],r=0;r<t;){var c;n.push((c={position:r},Object(U.a)(c,"red2",te(a.red2[r])),Object(U.a)(c,"green2",te(a.green2[r])),Object(U.a)(c,"green1",te(a.green1[r])),Object(U.a)(c,"red1",te(a.red1[r])),c)),r++}return n},ce=function(e){return"".concat(parseFloat(100*e).toFixed(1),"%")},le=function(e){var t=e.x,a=e.y,n=e.payload;return r.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},r.a.createElement("text",{dy:16,textAnchor:"middle",fill:"#666"},n.value))},oe=S.a.div(ae()),ie=function(e){var t=e.tickCount,a=e.powerPositions,c=Object(n.useRef)(null),l=M({ref:c}).width,o={type:"monotone",dot:!1};return r.a.createElement(oe,{ref:c},r.a.createElement(X.c,{width:l,height:300,margin:{top:20,right:20,left:0,bottom:40},data:re({tickCount:t,powerPositions:a})},r.a.createElement(X.a,{strokeDasharray:"3 3"}),r.a.createElement(X.e,{dataKey:"position",ticks:[0,49,99,149,199,249,299],tick:r.a.createElement(le,null)}),r.a.createElement(X.f,{tickCount:6,tickFormatter:ce}),r.a.createElement(X.d,{formatter:ce}),r.a.createElement(X.b,Object.assign({dataKey:"red2",stroke:v},o)),r.a.createElement(X.b,Object.assign({dataKey:"green2",stroke:"green"},o)),r.a.createElement(X.b,Object.assign({dataKey:"green1",stroke:"green"},o)),r.a.createElement(X.b,Object.assign({dataKey:"red1",stroke:v},o))))},ue=function(e){var t=e.tickMs,a=e.tickCount,n=e.lights,c=e.powerPositions,l=F({tickMs:t,tickCount:a}).position,o=n.red2,i=n.green2,u=n.blue,s=n.green1,d=n.red1;return r.a.createElement(I.a,null,r.a.createElement(K.a,{sm:2}),r.a.createElement(K.a,{sm:8},r.a.createElement(G,null,r.a.createElement(z,{title:o.id,color:o.color,brightness:te(c.red2[l])}),r.a.createElement(z,{title:i.id,color:i.color,brightness:te(c.green2[l])}),r.a.createElement(z,{title:u.id,color:u.color,brightness:te(c.blue[l])}),r.a.createElement(z,{title:s.id,color:s.color,brightness:te(c.green1[l])}),r.a.createElement(z,{title:d.id,color:d.color,brightness:te(c.red1[l])}))),r.a.createElement(K.a,{sm:2}),r.a.createElement(K.a,{xs:12},r.a.createElement("hr",null)),r.a.createElement(K.a,{xs:12},r.a.createElement("p",{className:"small text-muted"},"Loop Position: ",l)))},se=Z.green2,de=Z.blue,me=Z.green1,Ee=Z.red1,be=ee(Z.red2,300),fe=ee(se,300),ge=ee(de,300),he=ee(me,300),Oe=ee(Ee,300),ve=(ne={},Object(U.a)(ne,"red2",be),Object(U.a)(ne,"green2",fe),Object(U.a)(ne,"blue",ge),Object(U.a)(ne,"green1",he),Object(U.a)(ne,"red1",Oe),ne),je=function(){return x("Triacs | ".concat(O)),r.a.createElement(I.a,null,r.a.createElement(K.a,{xs:12},r.a.createElement("h1",null,"Triacs"),r.a.createElement("hr",null)),r.a.createElement(K.a,{xs:12},r.a.createElement(ue,{tickMs:200,tickCount:300,lights:Z,powerPositions:ve})),r.a.createElement(K.a,{xs:12},r.a.createElement(ie,{tickCount:300,powerPositions:ve})))},pe=function(){return x("Page Not Found | ".concat(O)),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-danger"},"Page Not Found"),r.a.createElement(y,{to:"/",outline:!0},"Go Home"))},we=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("main",{className:"container text-center"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(N,null)}),r.a.createElement(i.a,{path:"relays",element:r.a.createElement(W,null)}),r.a.createElement(i.a,{path:"triacs",element:r.a.createElement(je,null)}),r.a.createElement(i.a,{path:"*",element:r.a.createElement(pe,null)}))))},ke=function(){return r.a.createElement(o.a,null,r.a.createElement(we,null))};l.a.render(r.a.createElement(ke,null),document.getElementById("root"))}},[[235,2,1]]]);
//# sourceMappingURL=main.9644d261.chunk.js.map