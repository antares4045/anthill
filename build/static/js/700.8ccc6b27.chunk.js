"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[700,45],{700:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(1413),i=n(885),o=(n(8045),n(2791)),a=(n(8181),n(9893)),s=n(184);function l(e){var t=e.style,n=void 0===t?{}:t,l=e.zoomAutoOnLoad,c=void 0!==l&&l,u=e.zoomAutoOnSiftZ,d=void 0!==u&&u,f=e.children,h=(0,a.Z)(),p=(0,i.Z)(h,3),y=p[0],g=y.mul,x=y.shift,v=y.anchor,Z=y.contentRef,j=y.bgRef,m=y.dragHandler,k=p[1],w=k.setDefaultSize,b=k.startDrag,S=k.moveToMouse,D=k.stopDrag,z=k.zoomAroundMouse,L=k.clearDragHandler,C=p[2],B=C.onHandleDrag,M=C.onHandleDragStop;function P(e){v&&D(),m&&(M(),L())}return(0,o.useEffect)((function(){function e(e){!e.shiftKey||e.altKey||e.ctrlKey||"KeyZ"!=e.code||(e.stopPropagation(),w())}return c&&w(),d&&document.addEventListener("keypress",e),function(){return d&&document.removeEventListener("keypress",e)}}),[]),(0,s.jsx)("div",{style:(0,r.Z)({position:"relative",width:"100%",height:"100%",margin:"auto"},n),children:(0,s.jsxs)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",onMouseDown:function(e){0==e.button&&(e.stopPropagation(),b(e))},onMouseUp:function(e){0==e.button&&(e.stopPropagation(),P())},onMouseLeave:function(e){return P()},onMouseMove:function(e){v&&S(e),m&&B(e)},onWheel:function(e){e.stopPropagation(),z(e)},children:[(0,s.jsx)("g",{ref:j,children:(0,s.jsx)("rect",{fill:"transparent",stroke:"gray",strokeWidth:"1",width:"100%",height:"100%"})}),(0,s.jsx)("g",{ref:Z,transform:"scale(".concat(g,") translate(").concat(x.x," ").concat(x.y,")"),children:f})]})})}n(8777);var c=n(5994),u=n(890),d=n(2550),f=n(9877),h=n(6151),p=n(3329),y=n(7122),g=n(9823),x=[{key:"agents",type:"int",range:[0,5e3],description:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0433\u0435\u043d\u0442\u043e\u0432"},{key:"speedLimits",type:"range",range:[0,30],description:"\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u043d\u043e\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d"},{key:"rotationBorder",type:"int",range:[0,180],description:"\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0432\u043e\u0440\u043e\u0442"},{key:"positionBufferSize",type:"int",range:[0,1e3],description:"\u0434\u043b\u0438\u043d\u043d\u0430 \u0441\u043b\u0435\u0434\u0430"},{key:"worldBorderSize",type:"point",range:[0,5e3],description:"\u0440\u0430\u0437\u043c\u0435\u0440 \u043c\u0438\u0440\u0430"}];function v(e){var t=e.value,n=e.setter,r=e.type,i=e.range,o=e.description,a=e.key,l=e.labelStyle,c=void 0===l?{}:l;return"int"==r||"range"==r?(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(u.Z,{style:c,children:o}),(0,s.jsx)(d.ZP,{value:t,onChange:function(e,t){return n(t)},"aria-label":"Small",valueLabelDisplay:"auto",min:i[0],max:i[1]},a)]}):"point"==r?(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(u.Z,{style:c,children:o}),"x:",(0,s.jsx)(d.ZP,{value:t.x,onChange:function(e,r){t.x=r,n(t)},"aria-label":"Small",valueLabelDisplay:"auto",min:i[0],max:i[1]},a),"y:",(0,s.jsx)(d.ZP,{value:t.y,onChange:function(e,r){t.y=r,n(t)},"aria-label":"Small",valueLabelDisplay:"auto",min:i[0],max:i[1]},a)]}):(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(u.Z,{style:c,children:o}),(0,s.jsx)(u.Z,{style:c,children:"\u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0438\u043f"})]})}function Z(e){var t=e.configDescription,n=e.state,r=e.setter,i=e.labelStyle,a=void 0===i?{}:i;return(0,s.jsx)(o.Fragment,{children:t.map((function(e){return(0,s.jsx)(v,{value:n[e.key],setter:function(t){return r({key:e.key,value:t})},type:e.type,range:e.range,description:e.description,labelStyle:a},e.key)}))})}function j(e){var t=e.position,n=void 0===t?{position:"absolute",top:5,left:5,zIndex:1e3}:t,a=(0,c.Z)(),l=(0,i.Z)(a,2),u=l[0],d=l[1],p=d.SET,v=d.resetWoldBySettings,j=(0,o.useReducer)((function(e){return!e}),!1),m=(0,i.Z)(j,2),k=m[0],w=m[1];return k?(0,s.jsxs)("div",{className:"card",style:(0,r.Z)((0,r.Z)({},n),{},{opacity:.8,background:"gray",padding:5,minWidth:300}),children:[(0,s.jsx)(f.Z,{onClick:w,children:(0,s.jsx)(g.Z,{})}),(0,s.jsx)(Z,{configDescription:x,state:u,setter:p,labelStyle:{color:"white"}}),(0,s.jsx)(h.Z,{variant:"contained",onClick:v,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]}):(0,s.jsx)(f.Z,{style:n,onClick:w,children:(0,s.jsx)(y.Z,{})})}function m(){var e=(0,a.Z)(),t=((0,i.Z)(e,2)[1].setDefaultSize,(0,c.Z)()),n=(0,i.Z)(t,2),r=n[0],u=r.builders,d=r.worldBorder,f=n[1],h=f.tick,p=f.resetWoldBySettings,y=(0,o.useReducer)((function(){return new Date}),0),g=(0,i.Z)(y,2),x=(g[0],g[1]),v=(0,o.useState)(100),Z=(0,i.Z)(v,2),m=Z[0];Z[1];return(0,o.useEffect)((function(){return p()}),[]),(0,o.useEffect)((function(){var e=setInterval((function(){h(),x()}),m);return function(){return clearInterval(e)}}),[m]),(0,s.jsxs)("div",{width:"100vw",height:"100vh",className:"pageRoot",children:[(0,s.jsx)(j,{}),(0,s.jsxs)(l,{style:{width:"calc(100vw - 5px)",height:"calc(100vh - 5px)"},zoomAutoOnSiftZ:!0,zoomAutoOnLoad:!0,children:[(0,s.jsx)("rect",{stroke:"white",fill:"transparent",x:d[0].x,y:d[0].y,width:d[1].x-d[0].x,height:d[1].y-d[0].y}),(0,s.jsx)("g",{children:u.map((function(e,t){return e.visualizeBuffer({key:t})}))}),(0,s.jsx)("g",{children:u.map((function(e,t){return e.visualizeAnt({key:t})}))})]})]})}},8045:function(e,t,n){n.r(t),t.default={}}}]);
//# sourceMappingURL=700.8ccc6b27.chunk.js.map