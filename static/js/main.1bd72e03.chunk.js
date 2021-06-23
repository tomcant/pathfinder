(this["webpackJsonppath-finder"]=this["webpackJsonppath-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,a,s=n(16),o=n(2),u=n.n(o),c=n(14),i=n.n(c),l=n(5),d=n(4),f=n(0),h=n.n(f),p=n(10),b=n(3),v=n(7),w=n(8),m=function(){function e(t,n){Object(v.a)(this,e),this.numCols=t,this.numRows=n,this.walls=new Set}return Object(w.a)(e,[{key:"toggleWall",value:function(t){if(!this.isWithinBounds(t))throw new Error("Out of bounds: ".concat(t.toString()));var n=new e(this.numCols,this.numRows);return n.walls=new Set(Object(l.a)(this.walls)),n.isWall(t)?n.walls.delete(t.toString()):n.walls.add(t.toString()),n}},{key:"isWall",value:function(e){return this.walls.has(e.toString())}},{key:"isWithinBounds",value:function(e){return e.x>=0&&e.y>=0&&e.x<this.numCols&&e.y<this.numRows}}]),e}(),g=function(){function e(t,n){Object(v.a)(this,e),this.x=t,this.y=n}return Object(w.a)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}],[{key:"random",value:function(t,n,r,a){return new e(Math.floor(t+Math.random()*(r-t)),Math.floor(n+Math.random()*(a-n)))}}]),e}(),j=function(e,t){for(var n=g.random(0,0,e/3,t/3),r=g.random(2*e/3,2*t/3,e,t),a=new m(e,t),s=0;s<t;++s)for(var o=0;o<e;++o){var u=new g(o,s);n.equals(u)||r.equals(u)||Math.random()<.25&&(a=a.toggleWall(u))}return{maze:a,start:n,target:r}},x=function(e){for(var t=[];e.prev;)t.unshift(e.pos),e=e.prev;return t},S=function(e,t){for(var n=[],r=0,a=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}];r<a.length;r++){var s=a[r],o=s.dx,u=s.dy,c=t.add(new g(o,u));e.isWithinBounds(c)&&!e.isWall(c)&&n.push(c)}return n},k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(v.a)(this,e),this.items=t}return Object(w.a)(e,[{key:"enqueue",value:function(){var e;(e=this.items).push.apply(e,arguments)}},{key:"dequeue",value:function(){if(this.isEmpty())throw new Error("Cannot dequeue empty queue");return this.items.shift()}},{key:"isEmpty",value:function(){return 0===this.size}},{key:"size",get:function(){return this.items.length}}]),e}(),y={name:"Breadth-first search",start:h.a.mark((function(e){var t,n,r,a,s,o,u,c,i,l;return h.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:t=e.maze,n=e.start,r=e.target,a=new Set([n.toString()]),s=new k([{pos:n}]);case 3:if(s.isEmpty()){f.next=11;break}return o=s.dequeue(),f.next=7,{current:o,visited:a,found:o.pos.equals(r)};case 7:u=Object(d.a)(S(t,o.pos));try{for(u.s();!(c=u.n()).done;)i=c.value,l=i.toString(),a.has(l)||(a.add(l),s.enqueue({pos:i,prev:o}))}catch(h){u.e(h)}finally{u.f()}f.next=3;break;case 11:case"end":return f.stop()}}),n)})),rewind:x};!function(e){e[e.Forward=0]="Forward",e[e.Backward=1]="Backward"}(r||(r={}));var O,C={name:"Bidirectional BFS",start:h.a.mark((function(e){var t,n,s,o,u,c,i,f,p,b,v,w,m,g,j,x;return h.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:t=e.maze,n=e.start,s=e.target,a=[],o=new Set([n.toString()]),u=new Set([s.toString()]),c=new k([{node:{pos:n},direction:r.Forward},{node:{pos:s},direction:r.Backward}]);case 5:if(c.isEmpty()){h.next=14;break}return i=c.dequeue(),f=i.node,p=i.direction,b=p===r.Forward&&u.has(f.pos.toString())||p===r.Backward&&o.has(f.pos.toString()),h.next=10,{current:f,visited:new Set([].concat(Object(l.a)(o),Object(l.a)(u))),found:b};case 10:v=Object(d.a)(S(t,f.pos));try{for(v.s();!(w=v.n()).done;)m=w.value,g=m.toString(),j=!1,p===r.Forward?o.has(g)||(o.add(g),j=!0):u.has(g)||(u.add(g),j=!0),j&&(x={node:{pos:m,prev:f},direction:p},a.push(x),c.enqueue(x))}catch(y){v.e(y)}finally{v.f()}h.next=5;break;case 14:case"end":return h.stop()}}),n)})),rewind:function(e){var t=a.filter((function(t){var n=t.node;return e.pos.equals(n.pos)})).sort((function(e){return e.direction===r.Forward?-1:1}));return[].concat(Object(l.a)(x(t[0].node)),Object(l.a)(x(t[1].node).reverse()))}},M=n(15),q=n.n(M),z=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},R={name:"Greedy best-first search",start:h.a.mark((function(e){var t,n,r,a,s,o,u,c,i,l;return h.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:t=e.maze,n=e.start,r=e.target,a=new Set([n.toString()]),s=new q.a({comparator:function(e,t){return z(e.pos,r)-z(t.pos,r)},initialValues:[{pos:n}]});case 3:if(!(s.length>0)){f.next=11;break}return o=s.dequeue(),f.next=7,{current:o,visited:a,found:o.pos.equals(r)};case 7:u=Object(d.a)(S(t,o.pos));try{for(u.s();!(c=u.n()).done;)i=c.value,l=i.toString(),a.has(l)||(a.add(l),s.queue({pos:i,prev:o}))}catch(h){u.e(h)}finally{u.f()}f.next=3;break;case 11:case"end":return f.stop()}}),n)})),rewind:x},W=h.a.mark((function e(t,n,r){var a,s,o,u;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,{current:t,visited:n,found:t.pos.equals(r.target)};case 2:a=Object(d.a)(S(r.maze,t.pos)),c.prev=3,a.s();case 5:if((s=a.n()).done){c.next=13;break}if(o=s.value,u=o.toString(),n.has(u)){c.next=11;break}return n.add(u),c.delegateYield(e({pos:o,prev:t},n,r),"t0",11);case 11:c.next=5;break;case 13:c.next=18;break;case 15:c.prev=15,c.t1=c.catch(3),a.e(c.t1);case 18:return c.prev=18,a.f(),c.finish(18);case 21:case"end":return c.stop()}}),e,null,[[3,15,18,21]])})),B={"breadth-first-search":y,"bidirectional-bfs":C,"greedy-best-first-search":R,"depth-first-search":{name:"Depth-first search",start:h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(W({pos:t.start},new Set([t.start.toString()]),t),"t0",1);case 1:case"end":return e.stop()}}),e)})),rewind:x}},E=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=n(1),F=function(e){return Object(N.jsxs)("div",{className:"Controls",children:[Object(N.jsx)("button",{onClick:e.isRunning?e.onStopClick:e.onStartClick,children:e.isRunning?"Stop":"Start"}),Object(N.jsx)("button",{onClick:e.onClearClick,disabled:e.isRunning,children:"Clear"}),Object(N.jsx)("button",{onClick:e.onGenerateClick,disabled:e.isRunning,children:"Generate"}),Object(N.jsx)("select",{onChange:e.onMethodSelect,value:e.selectedSearchMethod,children:Object.entries(B).map((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(N.jsx)("option",{value:n,children:r.name},n)}))})]})},D=function(e){for(var t=[],n=0;n<e.numRows;++n)for(var r=function(r){var a=new g(r,n);t.push(Object(N.jsx)("div",{className:e.getSquareClassName(a),onMouseUp:function(){return e.onMouseUp(a)},onMouseDown:function(){return e.onMouseDown(a)},onMouseEnter:function(){return e.onMouseEnter(a)}},a.toString()))},a=0;a<e.numCols;++a)r(a);return Object(N.jsx)("div",{className:"Maze",style:e.style,children:t})};!function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.Target=2]="Target"}(O||(O={}));var T=function(e,t){return new m(e,t)},P=function(e,t){return new g(Math.floor(e/4)-1,Math.floor(t/2)-1)},Y=function(e,t){return new g(e-Math.floor(e/4),Math.floor(t/2)-1)},G=function(){return new Set},I=function(){return new Set},V=function(e){var t=e.mazeSize,n=t.cols,r=t.rows,a=e.mazeStyle,s=Object(o.useState)(T(n,r)),u=Object(b.a)(s,2),c=u[0],i=u[1],f=Object(o.useState)(P(n,r)),v=Object(b.a)(f,2),w=v[0],m=v[1],g=Object(o.useState)(Y(n,r)),x=Object(b.a)(g,2),S=x[0],k=x[1],y=Object(o.useState)(G()),C=Object(b.a)(y,2),M=C[0],q=C[1],z=Object(o.useState)(I()),R=Object(b.a)(z,2),W=R[0],V=R[1],U=Object(o.useState)("breadth-first-search"),J=Object(b.a)(U,2),H=J[0],A=J[1],K=Object(o.useState)(O.None),L=Object(b.a)(K,2),Q=L[0],X=L[1],Z=Object(o.useState)(!1),$=Object(b.a)(Z,2),_=$[0],ee=$[1],te=Object(o.useState)(Date.now),ne=Object(b.a)(te,2)[1],re=Object(o.useRef)(null),ae=Object(o.useRef)(!1),se=function(){return ae.current},oe=function(e){ae.current=e,e||ne(Date.now)},ue=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe(!0),re.current||(re.current=ce(),V(I()));case 2:if((t=re.current.next()).value&&t.value(),se()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,E(5);case 8:if(!t.done){e.next=2;break}case 9:re.current=null,oe(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=h.a.mark((function e(){var t,n,r,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=B[H],n=Object(d.a)(t.start({maze:c,start:w,target:S})),e.prev=2,a=h.a.mark((function e(){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,e.next=3,function(){return q(new Set(Object(l.a)(n.visited)))};case 3:if(!n.found){e.next=8;break}return e.delegateYield(h.a.mark((function e(){var r,a,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=I(),V(r),a=Object(d.a)(t.rewind(n.current)),e.prev=3,o=h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.value,e.next=3,function(){return V(new Set(Object(l.a)(r.add(t.toString()))))};case 3:case"end":return e.stop()}}),e)})),a.s();case 6:if((s=a.n()).done){e.next=10;break}return e.delegateYield(o(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),a.e(e.t1);case 15:return e.prev=15,a.f(),e.finish(15);case 18:return e.abrupt("return",{v:{v:void 0}});case 19:case"end":return e.stop()}}),e,null,[[3,12,15,18]])}))(),"t0",5);case 5:if("object"!==typeof(a=e.t0)){e.next=8;break}return e.abrupt("return",a.v);case 8:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=12;break}return e.delegateYield(a(),"t0",7);case 7:if("object"!==typeof(s=e.t0)){e.next=10;break}return e.abrupt("return",s.v);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(2),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})),ie=function(){i(T(n,r)),m(P(n,r)),k(Y(n,r)),q(G()),V(I()),oe(!1),re.current=null};return Object(N.jsxs)("div",{className:"PathFinder".concat(se()?" is-running":""),children:[Object(N.jsx)(F,{isRunning:se(),onStartClick:ue,onStopClick:function(){oe(!1)},onClearClick:ie,onGenerateClick:function(){ie();var e=j(n,r),t=e.maze,a=e.start,s=e.target;i(t),m(a),k(s)},onMethodSelect:function(e){A(e.target.value)},selectedSearchMethod:H}),Object(N.jsx)(D,{numRows:r,numCols:n,style:a,getSquareClassName:function(e){return c.isWall(e)?"is-wall":w.equals(e)?"is-start":S.equals(e)?"is-target":W.has(e.toString())?"is-solution":M.has(e.toString())?"is-visited":""},onMouseUp:function(){X(O.None),ee(!1)},onMouseDown:function(e){if(!se()){if(e.equals(w))return X(O.Start);if(e.equals(S))return X(O.Target);ee(!0),i(c.toggleWall(e))}},onMouseEnter:function(e){if(Q!==O.None&&!c.isWall(e))return Q===O.Start?m(e):k(e);!_||e.equals(w)||e.equals(S)||i(c.toggleWall(e))}})]})};n(25);i.a.render(Object(N.jsx)(u.a.StrictMode,{children:Object(N.jsx)(V,Object(s.a)({},function(){var e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-left")),t=parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height")),n=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width")),r=Math.floor((window.innerWidth-2*e)/n),a=Math.floor((window.innerHeight-2*t-e)/n);return{mazeSize:{cols:r,rows:a},mazeStyle:{gridTemplateColumns:"repeat(".concat(r,", ").concat(n,"px)"),gridTemplateRows:"repeat(".concat(a,", ").concat(n,"px)")}}}()))}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1bd72e03.chunk.js.map