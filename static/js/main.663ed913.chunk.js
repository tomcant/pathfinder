(this["webpackJsonppath-finder"]=this["webpackJsonppath-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i=n(16),u=n(2),o=n.n(u),l=n(14),f=n.n(l),d=n(5),h=n(3),p=n(0),b=n.n(p),w=n(10),v=n(4),x=n(7),g=n(8),k=function(e){return Math.floor(Math.random()*e)},m=function(e){return 2*k(Math.ceil(e/2))},j=function(e){return e[k(e.length)]},y=function(e){for(var t=e.length;t>0;){var n=k(t--),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},S=function(){function e(t,n){Object(x.a)(this,e),this.x=t,this.y=n}return Object(g.a)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}],[{key:"origin",value:function(){return new e(0,0)}},{key:"random",value:function(t,n){return new e(t.x+k(n.x-t.x),t.y+k(n.y-t.y))}}]),e}(),O=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}],M=function(e,t,n){return function(e,t){return O.map((function(n){var r=n.dx,a=n.dy;return e.add(new S(r*t,a*t))}))}(t,n).filter((function(t){return e.isWithinBounds(t)}))},W=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return M(e,t,n).filter((function(t){return e.isWall(t)}))},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return M(e,t,n).filter((function(t){return!e.isWall(t)}))},q=function(e,t,n){var r;do{r=S.random(t,n)}while(e.isWall(r));return r},z=function(){function e(t,n){Object(x.a)(this,e),this.numCols=t,this.numRows=n,this.walls=new Set,this.weights=new Map}return Object(g.a)(e,[{key:"toggleWall",value:function(e){return this.toggleWalls([e])}},{key:"toggleWalls",value:function(e){var t,n=this.clone(),r=Object(h.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(!this.isWithinBounds(a))throw new Error("Out of bounds: ".concat(a.toString()));n.isWall(a)?n.walls.delete(a.toString()):n.walls.add(a.toString())}}catch(c){r.e(c)}finally{r.f()}return n}},{key:"isWall",value:function(e){return this.walls.has(e.toString())}},{key:"setWeight",value:function(e,t){var n=this.clone();return n.walls.delete(e.toString()),t>1?n.weights.set(e.toString(),t):n.weights.delete(e.toString()),n}},{key:"getWeight",value:function(e){return this.weights.get(e.toString())||1}},{key:"isWeight",value:function(e){return this.weights.has(e.toString())}},{key:"isWithinBounds",value:function(e){return e.x>=0&&e.y>=0&&e.x<this.numCols&&e.y<this.numRows}},{key:"clone",value:function(){var t=e.empty(this.numCols,this.numRows);return t.walls=new Set(Object(d.a)(this.walls)),t.weights=new Map(Object(d.a)(this.weights)),t}}],[{key:"empty",value:function(t,n){return new e(t,n)}},{key:"full",value:function(t,n){for(var r=[],a=0;a<n;++a)for(var c=0;c<t;++c)r.push(new S(c,a));return e.empty(t,n).toggleWalls(r)}}]),e}(),B={name:"Prims",generate:b.a.mark((function e(t,n){var r,a,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=z.full(t,n),a=[S.random(S.origin(),new S(t,n))];case 2:if(!a.some((function(e){return r.isWall(e)}))){e.next=13;break}if(c=j(a.filter((function(e){return r.isWall(e)}))),r=r.toggleWall(c),!((s=C(r,c,2)).length>0)){e.next=10;break}return i=j(s),e.next=10,r=r.toggleWall(new S((c.x+i.x)/2,(c.y+i.y)/2));case 10:a.push.apply(a,Object(d.a)(W(r,c,2))),e.next=2;break;case 13:case"end":return e.stop()}}),e)}))},F={name:"Binary tree",generate:b.a.mark((function e(t,n){var r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=z.empty(t,n),a=2;case 2:if(!(a<n)){e.next=14;break}c=2;case 4:if(!(c<t)){e.next=11;break}return s=[new S(c-1,a),new S(c,a-1)],e.next=8,r=r.toggleWalls([s[k(2)],new S(c-1,a-1)]);case 8:c+=2,e.next=4;break;case 11:a+=2,e.next=2;break;case 14:case"end":return e.stop()}}),e)}))},G=b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S.random(S.origin(),new S(t,n)),r=z.full(t,n).toggleWall(a),e.delegateYield(Y(a,new Set([a.toString()])),"t0",3);case 3:case"end":return e.stop()}}),e)})),Y=b.a.mark((function e(t,n){var a,c,s,i;return b.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:a=Object(h.a)(y(W(r,t,2))),u.prev=1,a.s();case 3:if((c=a.n()).done){u.next=12;break}if(s=c.value,i=s.toString(),n.has(i)){u.next=10;break}return u.next=9,r=r.toggleWalls([s,new S((t.x+s.x)/2,(t.y+s.y)/2)]);case 9:return u.delegateYield(e(s,n.add(i)),"t0",10);case 10:u.next=3;break;case 12:u.next=17;break;case 14:u.prev=14,u.t1=u.catch(1),a.e(u.t1);case 17:return u.prev=17,a.f(),u.finish(17);case 20:case"end":return u.stop()}}),e,null,[[1,14,17,20]])})),E={name:"Depth-first search",generate:G},N=b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=z.empty(t,n),r=0;case 2:if(!(r<t)){e.next=8;break}return e.next=5,a=a.toggleWalls([new S(r,0),new S(t-r-1,n-1)]);case 5:++r,e.next=2;break;case 8:c=1;case 9:if(!(c<n-1)){e.next=15;break}return e.next=12,a=a.toggleWalls([new S(0,c),new S(t-1,n-c-1)]);case 12:++c,e.next=9;break;case 15:return e.delegateYield(D(new S(1,1),new S(t-2,n-2)),"t0",16);case 16:case"end":return e.stop()}}),e)})),D=b.a.mark((function e(t,n){var r,c,s,i,u,o,l,f,d;return b.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:if(r=n.x-t.x+1,c=n.y-t.y+1,!(r<3||c<3)){h.next=4;break}return h.abrupt("return");case 4:i=1+((s=r>c)?t.x+m(r-2):t.y+m(c-2)),u=s?new S(i,t.y+m(c)):new S(t.x+m(r),i),o=s?new S(i,t.y):new S(t.x,i),l=s?new S(i,n.y+1):new S(n.x+1,i),f=s?new S(0,1):new S(1,0),d=o;case 11:if(d.equals(l)){h.next=18;break}if(d.equals(u)){h.next=15;break}return h.next=15,a=a.toggleWall(d);case 15:d=d.add(f),h.next=11;break;case 18:if(!s){h.next=23;break}return h.delegateYield(e(t,new S(l.x-1,n.y)),"t0",20);case 20:return h.delegateYield(e(new S(l.x+1,t.y),n),"t1",21);case 21:h.next=25;break;case 23:return h.delegateYield(e(t,new S(n.x,l.y-1)),"t2",24);case 24:return h.delegateYield(e(new S(t.x,l.y+1),n),"t3",25);case 25:case"end":return h.stop()}}),e)})),R={prims:B,binaryTree:F,recursiveDivision:{name:"Recursive division",generate:N},depthFirstSearch:E,random:{name:"Random",generate:b.a.mark((function e(t,n){var r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=z.empty(t,n),a=0;case 2:if(!(a<n)){e.next=14;break}c=0;case 4:if(!(c<t)){e.next=11;break}if(!(Math.random()<.25)){e.next=8;break}return e.next=8,r=r.toggleWall(new S(c,a));case 8:++c,e.next=4;break;case 11:++a,e.next=2;break;case 14:case"end":return e.stop()}}),e)}))}},T=function(e){for(var t=[];e.prev;)t.unshift(e.pos),e=e.prev;return t},P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(x.a)(this,e),this.items=t}return Object(g.a)(e,[{key:"enqueue",value:function(){var e;(e=this.items).push.apply(e,arguments)}},{key:"dequeue",value:function(){if(this.isEmpty())throw new Error("Cannot dequeue empty queue");return this.items.shift()}},{key:"isEmpty",value:function(){return 0===this.size}},{key:"size",get:function(){return this.items.length}}]),e}(),I={name:"Breadth-first search",search:b.a.mark((function e(t){var n,r,a,c,s,i,u,o,l,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,c=new P([{pos:r}]),s=new Set;case 3:if(c.isEmpty()){e.next=14;break}if(i=c.dequeue(),u=i.pos.toString(),!s.has(u)){e.next=8;break}return e.abrupt("continue",3);case 8:return e.next=10,{current:i,visited:s.add(u),found:a.equals(i.pos)};case 10:o=Object(h.a)(C(n,i.pos));try{for(o.s();!(l=o.n()).done;)f=l.value,c.enqueue({pos:f,prev:i})}catch(d){o.e(d)}finally{o.f()}e.next=3;break;case 14:case"end":return e.stop()}}),e)})),rewind:T};!function(e){e[e.Forward=0]="Forward",e[e.Backward=1]="Backward"}(c||(c={}));var V,U={name:"Bidirectional BFS",search:b.a.mark((function e(t){var n,r,a,i,u,o,l,f,p,w,v,x,g,k,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,s=[],i=new P([{node:{pos:r},direction:c.Forward},{node:{pos:a},direction:c.Backward}]),u=new Set,o=new Set;case 5:if(i.isEmpty()){e.next=28;break}l=i.dequeue(),f=l.node,p=l.direction,w=f.pos.toString(),v=void 0,e.t0=p,e.next=e.t0===c.Forward?12:e.t0===c.Backward?17:22;break;case 12:if(!u.has(w)){e.next=14;break}return e.abrupt("continue",5);case 14:return v=o.has(w),u.add(w),e.abrupt("break",22);case 17:if(!o.has(w)){e.next=19;break}return e.abrupt("continue",5);case 19:return v=u.has(w),o.add(w),e.abrupt("break",22);case 22:return e.next=24,{current:f,visited:new Set([].concat(Object(d.a)(u),Object(d.a)(o))),found:v};case 24:x=Object(h.a)(C(n,f.pos));try{for(x.s();!(g=x.n()).done;)k=g.value,m={node:{pos:k,prev:f},direction:p},s.push(m),i.enqueue(m)}catch(b){x.e(b)}finally{x.f()}e.next=5;break;case 28:case"end":return e.stop()}}),e)})),rewind:function(e){var t=s.filter((function(t){var n=t.node;return e.pos.equals(n.pos)})).sort((function(e){return e.direction===c.Forward?-1:1}));return[].concat(Object(d.a)(T(t[0].node)),Object(d.a)(T(t[1].node).reverse()))}},J=n(15),H=n.n(J),A=b.a.mark((function e(t){var n,r,a,c,s,i,u,o,l,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,c=new H.a({comparator:function(e,t){return K(e.pos,a)-K(t.pos,a)},initialValues:[{pos:r}]}),s=new Set;case 3:if(!(c.length>0)){e.next=14;break}if(i=c.dequeue(),u=i.pos.toString(),!s.has(u)){e.next=8;break}return e.abrupt("continue",3);case 8:return e.next=10,{current:i,visited:s.add(u),found:a.equals(i.pos)};case 10:o=Object(h.a)(C(n,i.pos));try{for(o.s();!(l=o.n()).done;)f=l.value,c.queue({pos:f,prev:i})}catch(d){o.e(d)}finally{o.f()}e.next=3;break;case 14:case"end":return e.stop()}}),e)})),K=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},L={name:"Greedy best-first search",search:A,rewind:T},Q=b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(X({pos:t.start},new Set,t),"t0",1);case 1:case"end":return e.stop()}}),e)})),X=b.a.mark((function e(t,n,r){var a,c,s,i;return b.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(a=t.pos.toString(),!n.has(a)){u.next=3;break}return u.abrupt("return");case 3:return u.next=5,{current:t,visited:n.add(a),found:r.target.equals(t.pos)};case 5:c=Object(h.a)(C(r.maze,t.pos)),u.prev=6,c.s();case 8:if((s=c.n()).done){u.next=13;break}return i=s.value,u.delegateYield(e({pos:i,prev:t},n,r),"t0",11);case 11:u.next=8;break;case 13:u.next=18;break;case 15:u.prev=15,u.t1=u.catch(6),c.e(u.t1);case 18:return u.prev=18,c.f(),u.finish(18);case 21:case"end":return u.stop()}}),e,null,[[6,15,18,21]])})),Z={breadthFirstSearch:I,biDirectionalBfs:U,greedBestFirstSearch:L,depthFirstSearch:{name:"Depth-first search",search:Q,rewind:T}},$=function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(1),ee=function(e){return Object(_.jsxs)("div",{className:"Controls",children:[Object(_.jsxs)("fieldset",{children:[Object(_.jsx)("legend",{children:"Maze generator"}),Object(_.jsx)("select",{onChange:e.onMazeGeneratorSelect,value:e.selectedMazeGenerator,children:Object.entries(R).map((function(e){var t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(_.jsx)("option",{value:n,children:r.name},n)}))}),Object(_.jsx)("button",{onClick:e.onGenerateClick,disabled:e.isSearching||e.isGenerating,children:"Generate"}),Object(_.jsx)("button",{onClick:e.onClearClick,disabled:e.isSearching||e.isGenerating,children:"Clear"})]}),Object(_.jsxs)("fieldset",{children:[Object(_.jsx)("legend",{children:"Search method"}),Object(_.jsx)("select",{onChange:e.onSearchMethodSelect,value:e.selectedSearchMethod,children:Object.entries(Z).map((function(e){var t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(_.jsx)("option",{value:n,children:r.name},n)}))}),Object(_.jsx)("button",{onClick:e.isSearching?e.onStopClick:e.onStartClick,disabled:e.isGenerating,children:e.isSearching?"Stop":"Start"})]})]})},te=function(e){for(var t=[],n=0;n<e.numRows;++n)for(var r=function(r){var a=new S(r,n);t.push(Object(_.jsx)("div",{className:e.getSquareClassName(a),onMouseUp:function(){return e.onMouseUp(a)},onMouseDown:function(){return e.onMouseDown(a)},onMouseEnter:function(){return e.onMouseEnter(a)}},a.toString()))},a=0;a<e.numCols;++a)r(a);return Object(_.jsx)("div",{className:"Maze",style:e.style,children:t})};!function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.Target=2]="Target"}(V||(V={}));var ne=function(e,t){return z.empty(e,t)},re=function(e,t){return new S(Math.floor(e/4)-1,Math.floor(t/2))},ae=function(e,t){return new S(e-Math.floor(e/4),Math.floor(t/2))},ce=function(){return new Set},se=function(){return new Set},ie=function(e){var t=e.mazeSize,n=t.cols,r=t.rows,a=e.mazeStyle,c=Object(u.useState)(ne(n,r)),s=Object(v.a)(c,2),i=s[0],o=s[1],l=Object(u.useState)(re(n,r)),f=Object(v.a)(l,2),p=f[0],x=f[1],g=Object(u.useState)(ae(n,r)),k=Object(v.a)(g,2),m=k[0],j=k[1],y=Object(u.useState)(ce()),O=Object(v.a)(y,2),M=O[0],W=O[1],C=Object(u.useState)(se()),z=Object(v.a)(C,2),B=z[0],F=z[1],G=Object(u.useState)(Date.now),Y=Object(v.a)(G,2)[1],E=Object(u.useState)(V.None),N=Object(v.a)(E,2),D=N[0],T=N[1],P=Object(u.useState)(!1),I=Object(v.a)(P,2),U=I[0],J=I[1],H=Object(u.useState)(!1),A=Object(v.a)(H,2),K=A[0],L=A[1],Q=Object(u.useState)("recursiveDivision"),X=Object(v.a)(Q,2),ie=X[0],ue=X[1],oe=Object(u.useState)("breadthFirstSearch"),le=Object(v.a)(oe,2),fe=le[0],de=le[1],he=Object(u.useRef)(null),pe=function(e){he.current=e},be=Object(u.useRef)(!1),we=function(){return be.current},ve=function(e){be.current=e},xe=function(){var e=Object(w.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve(!0),null===he.current&&(pe(ge()),F(se()));case 2:if((t=he.current.next()).value&&t.value(),we()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,$(8);case 8:if(!t.done){e.next=2;break}case 9:pe(null),ve(!1),Y(Date.now);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=b.a.mark((function e(){var t,n,r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Z[fe],n=Object(h.a)(t.search({maze:i,start:p,target:m})),e.prev=2,a=b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,e.next=3,function(){return W(new Set(Object(d.a)(n.visited)))};case 3:if(!n.found){e.next=8;break}return e.delegateYield(b.a.mark((function e(){var r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=se(),F(r),a=Object(h.a)(t.rewind(n.current)),e.prev=3,s=b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,e.next=3,function(){return F(new Set(Object(d.a)(r.add(t.toString()))))};case 3:case"end":return e.stop()}}),e)})),a.s();case 6:if((c=a.n()).done){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),a.e(e.t1);case 15:return e.prev=15,a.f(),e.finish(15);case 18:return e.abrupt("return",{v:{v:void 0}});case 19:case"end":return e.stop()}}),e,null,[[3,12,15,18]])}))(),"t0",5);case 5:if("object"!==typeof(a=e.t0)){e.next=8;break}return e.abrupt("return",a.v);case 8:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=12;break}return e.delegateYield(a(),"t0",7);case 7:if("object"!==typeof(c=e.t0)){e.next=10;break}return e.abrupt("return",c.v);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(2),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})),ke=function(){o(ne(n,r)),x(re(n,r)),j(ae(n,r)),W(ce()),F(se()),pe(null),L(!1),ve(!1)},me=function(){var e=Object(w.a)(b.a.mark((function e(){var t,a,c,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ke(),L(!0),t=new S(n,r),x(t),j(t),a=i,c=Object(h.a)(R[ie].generate(n,r)),e.prev=7,c.s();case 9:if((s=c.n()).done){e.next=17;break}return u=s.value,o(u),a=u,e.next=15,$(8);case 15:e.next=9;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),c.e(e.t0);case 22:return e.prev=22,c.f(),e.finish(22);case 25:x(q(a,S.origin(),new S(Math.floor(n/3),r))),j(q(a,new S(Math.floor(2*n/3),0),new S(n,r))),L(!1);case 28:case"end":return e.stop()}}),e,null,[[7,19,22,25]])})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"PathFinder".concat(K?" is-generating is-"+ie:we()?" is-searching":""),children:[Object(_.jsx)(ee,{isGenerating:K,isSearching:we(),onStartClick:xe,onStopClick:function(){return ve(!1)},onClearClick:ke,onGenerateClick:me,selectedMazeGenerator:ie,selectedSearchMethod:fe,onMazeGeneratorSelect:function(e){return ue(e.target.value)},onSearchMethodSelect:function(e){return de(e.target.value)}}),Object(_.jsx)(te,{numRows:r,numCols:n,style:a,getSquareClassName:function(e){return i.isWall(e)?"is-wall":p.equals(e)?"is-start":m.equals(e)?"is-target":B.has(e.toString())?"is-solution":M.has(e.toString())?"is-visited":""},onMouseUp:function(){T(V.None),J(!1)},onMouseDown:function(e){if(!we()){if(e.equals(p))return T(V.Start);if(e.equals(m))return T(V.Target);J(!0),o(i.toggleWall(e))}},onMouseEnter:function(e){if(D!==V.None&&!i.isWall(e))return D===V.Start?x(e):j(e);!U||e.equals(p)||e.equals(m)||o(i.toggleWall(e))}})]})};n(25);f.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(ie,Object(i.a)({},function(){var e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-left")),t=parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height")),n=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width")),r=Math.floor((window.innerWidth-2*e)/n),a=Math.max(5,Math.floor((window.innerHeight-3*t)/n));return{mazeSize:{cols:r,rows:a},mazeStyle:{gridTemplateColumns:"repeat(".concat(r,", ").concat(n,"px)"),gridTemplateRows:"repeat(".concat(a,", ").concat(n,"px)")}}}()))}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.663ed913.chunk.js.map