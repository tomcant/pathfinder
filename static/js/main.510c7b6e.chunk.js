(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,a=n(12),s=n(4),i=n.n(s),c=n(16),u=n.n(c),o=n(5),l=n(2),d=n(0),f=n.n(d),h=n(11),p=n(3),v=n(6),b=n(7),g=function(e){return Math.floor(Math.random()*e)},w=function(e){return 2*g(Math.ceil(e/2))},x=function(e){return e[g(e.length)]},k=function(e){for(var t=e.length;t>0;){var n=g(t--),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},m=function(){function e(t,n){Object(v.a)(this,e),this.x=t,this.y=n}return Object(b.a)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}],[{key:"origin",value:function(){return new e(0,0)}},{key:"random",value:function(t,n){return new e(t.x+g(n.x-t.x),t.y+g(n.y-t.y))}}]),e}(),y=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}],j=function(e,t,n){return function(e,t){return y.map((function(n){var r=n.dx,a=n.dy;return e.add(new m(r*t,a*t))}))}(t,n).filter((function(t){return e.isWithinBounds(t)}))},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return j(e,t,n).filter((function(t){return e.isWall(t)}))},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return j(e,t,n).filter((function(t){return!e.isWall(t)}))},W=function(e,t,n){var r;do{r=m.random(t,n)}while(e.isWall(r));return r};r=Symbol.iterator;var M,q,C=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(v.a)(this,e),this.set=void 0,this.set=new Map(n.map((function(e){return[t.toKey(e),e]})))}return Object(b.a)(e,[{key:"has",value:function(e){return this.set.has(this.toKey(e))}},{key:"add",value:function(e){return this.set.set(this.toKey(e),e),this}},{key:"delete",value:function(e){return this.set.delete(this.toKey(e)),this}},{key:r,value:function(){return this.set.values()}},{key:"toKey",value:function(e){return JSON.stringify(e)}}]),e}();M=Symbol.iterator,q=Symbol.toStringTag;var F,z,D,E,T=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(v.a)(this,e),this.items=void 0,this.items=new Map(n.map((function(e){var n=Object(p.a)(e,2),r=n[0],a=n[1];return[t.toKey(r),{key:r,value:a}]})))}return Object(b.a)(e,[{key:"clear",value:function(){this.items.clear()}},{key:"delete",value:function(e){return this.items.delete(this.toKey(e))}},{key:"get",value:function(e){var t;return null===(t=this.items.get(this.toKey(e)))||void 0===t?void 0:t.value}},{key:"has",value:function(e){return this.items.has(this.toKey(e))}},{key:"set",value:function(e,t){return this.items.set(this.toKey(e),{key:e,value:t}),this}},{key:M,value:f.a.mark((function e(){var t,n,r,a,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(l.a)(this.items),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=Object(p.a)(n.value,2),a=r[1],s=a.key,i=a.value,e.next=7,[s,i];case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"entries",value:f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(this[Symbol.iterator](),"t0",1);case 1:case"end":return e.stop()}}),e,this)}))},{key:"keys",value:f.a.mark((function e(){var t,n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(l.a)(this.items),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=Object(p.a)(n.value,2),a=r[1].key,e.next=7,a;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"values",value:f.a.mark((function e(){var t,n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(l.a)(this.items),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=Object(p.a)(n.value,2),a=r[1].value,e.next=7,a;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"forEach",value:function(e,t){var n,r=Object(l.a)(this.items);try{for(r.s();!(n=r.n()).done;){var a=Object(p.a)(n.value,2)[1],s=a.key,i=a.value;e.call(t,i,s,this)}}catch(c){r.e(c)}finally{r.f()}}},{key:"size",get:function(){return this.items.size}},{key:q,get:function(){return this.constructor.name}},{key:"toKey",value:function(e){return JSON.stringify(e)}}]),e}(),B=function(){function e(t,n){Object(v.a)(this,e),this.numCols=t,this.numRows=n,this.walls=new C,this.weights=new T}return Object(b.a)(e,[{key:"isEmpty",value:function(e){return!this.isWall(e)&&!this.isWeight(e)}},{key:"isWall",value:function(e){return this.walls.has(e)}},{key:"toggleWall",value:function(e){return this.toggleWalls([e])}},{key:"toggleWalls",value:function(e){var t,n=this.clone(),r=Object(l.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(!this.isWithinBounds(a))throw new Error("Out of bounds: ".concat(a.toString()));n.isWall(a)?n.walls.delete(a):n.walls.add(a)}}catch(s){r.e(s)}finally{r.f()}return n}},{key:"isWeight",value:function(e){return this.weights.has(e)}},{key:"getWeight",value:function(e){return this.weights.get(e)}},{key:"setWeight",value:function(e,t){var n=this.clone();return n.weights.set(e,t),n.walls.delete(e),n}},{key:"removeWeight",value:function(e){var t=this.clone();return t.weights.delete(e),t}},{key:"clearWeights",value:function(){var e=this.clone();return e.weights=new T,e}},{key:"isWithinBounds",value:function(e){return e.x>=0&&e.y>=0&&e.x<this.numCols&&e.y<this.numRows}},{key:"clone",value:function(){var t=e.empty(this.numCols,this.numRows);return t.walls=new C(Object(o.a)(this.walls)),t.weights=new T(Object(o.a)(this.weights)),t}}],[{key:"empty",value:function(t,n){return new e(t,n)}},{key:"full",value:function(t,n){for(var r=[],a=0;a<n;++a)for(var s=0;s<t;++s)r.push(new m(s,a));return e.empty(t,n).toggleWalls(r)}}]),e}(),N={name:"Prims",generate:f.a.mark((function e(t,n){var r,a,s,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=B.full(t,n),a=[m.random(m.origin(),new m(t,n))];case 2:if(!a.some((function(e){return r.isWall(e)}))){e.next=13;break}if(s=x(a.filter((function(e){return r.isWall(e)}))),r=r.toggleWall(s),!((i=S(r,s,2)).length>0)){e.next=10;break}return c=x(i),e.next=10,r=r.toggleWall(new m((s.x+c.x)/2,(s.y+c.y)/2));case 10:a.push.apply(a,Object(o.a)(O(r,s,2))),e.next=2;break;case 13:case"end":return e.stop()}}),e)}))},Y={name:"Binary tree",generate:f.a.mark((function e(t,n){var r,a,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=B.empty(t,n),a=2;case 2:if(!(a<n)){e.next=14;break}s=2;case 4:if(!(s<t)){e.next=11;break}return i=[new m(s-1,a),new m(s,a-1)],e.next=8,r=r.toggleWalls([i[g(2)],new m(s-1,a-1)]);case 8:s+=2,e.next=4;break;case 11:a+=2,e.next=2;break;case 14:case"end":return e.stop()}}),e)}))},G=f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.random(m.origin(),new m(t,n)),F=B.full(t,n).toggleWall(r),e.delegateYield(K(r,new C([r])),"t0",3);case 3:case"end":return e.stop()}}),e)})),K=f.a.mark((function e(t,n){var r,a,s;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r=Object(l.a)(k(O(F,t,2))),i.prev=1,r.s();case 3:if((a=r.n()).done){i.next=11;break}if(s=a.value,n.has(s)){i.next=9;break}return i.next=8,F=F.toggleWalls([s,new m((t.x+s.x)/2,(t.y+s.y)/2)]);case 8:return i.delegateYield(e(s,n.add(s)),"t0",9);case 9:i.next=3;break;case 11:i.next=16;break;case 13:i.prev=13,i.t1=i.catch(1),r.e(i.t1);case 16:return i.prev=16,r.f(),i.finish(16);case 19:case"end":return i.stop()}}),e,null,[[1,13,16,19]])})),R={name:"Depth-first search",generate:G},P=f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z=B.empty(t,n),r=0;case 2:if(!(r<t)){e.next=8;break}return e.next=5,z=z.toggleWalls([new m(r,0),new m(t-r-1,n-1)]);case 5:++r,e.next=2;break;case 8:a=1;case 9:if(!(a<n-1)){e.next=15;break}return e.next=12,z=z.toggleWalls([new m(0,a),new m(t-1,n-a-1)]);case 12:++a,e.next=9;break;case 15:return e.delegateYield(I(new m(1,1),new m(t-2,n-2)),"t0",16);case 16:case"end":return e.stop()}}),e)})),I=f.a.mark((function e(t,n){var r,a,s,i,c,u,o,l,d;return f.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(r=n.x-t.x+1,a=n.y-t.y+1,!(r<3||a<3)){f.next=4;break}return f.abrupt("return");case 4:i=1+((s=r>a)?t.x+w(r-2):t.y+w(a-2)),c=s?new m(i,t.y+w(a)):new m(t.x+w(r),i),u=s?new m(i,t.y):new m(t.x,i),o=s?new m(i,n.y+1):new m(n.x+1,i),l=s?new m(0,1):new m(1,0),d=u;case 11:if(d.equals(o)){f.next=18;break}if(d.equals(c)){f.next=15;break}return f.next=15,z=z.toggleWall(d);case 15:d=d.add(l),f.next=11;break;case 18:if(!s){f.next=23;break}return f.delegateYield(e(t,new m(o.x-1,n.y)),"t0",20);case 20:return f.delegateYield(e(new m(o.x+1,t.y),n),"t1",21);case 21:f.next=25;break;case 23:return f.delegateYield(e(t,new m(n.x,o.y-1)),"t2",24);case 24:return f.delegateYield(e(new m(t.x,o.y+1),n),"t3",25);case 25:case"end":return f.stop()}}),e)})),V={prims:N,binaryTree:Y,recursiveDivision:{name:"Recursive division",generate:P},depthFirstSearch:R,random:{name:"Random",generate:f.a.mark((function e(t,n){var r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=B.empty(t,n),a=0;case 2:if(!(a<n)){e.next=14;break}s=0;case 4:if(!(s<t)){e.next=11;break}if(!(Math.random()<.25)){e.next=8;break}return e.next=8,r=r.toggleWall(new m(s,a));case 8:++s,e.next=4;break;case 11:++a,e.next=2;break;case 14:case"end":return e.stop()}}),e)}))}},A=function(e){for(var t=[];e.prev;)t.unshift(e.pos),e=e.prev;return t},J=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(v.a)(this,e),this.items=t}return Object(b.a)(e,[{key:"enqueue",value:function(){var e;(e=this.items).push.apply(e,arguments)}},{key:"dequeue",value:function(){if(this.isEmpty())throw new Error("Cannot dequeue empty queue");return this.items.shift()}},{key:"isEmpty",value:function(){return 0===this.size}},{key:"size",get:function(){return this.items.length}}]),e}(),U={name:"Breadth-first search",search:f.a.mark((function e(t){var n,r,a,s,i,c,u,o,d,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,s=new J([{pos:r}]),i=new C;case 3:if(s.isEmpty()){e.next=14;break}if(c=s.dequeue(),u=c.pos,!i.has(u)){e.next=8;break}return e.abrupt("continue",3);case 8:return e.next=10,{current:c,visited:i.add(u),found:a.equals(u)};case 10:o=Object(l.a)(S(n,u));try{for(o.s();!(d=o.n()).done;)h=d.value,s.enqueue({pos:h,prev:c})}catch(f){o.e(f)}finally{o.f()}e.next=3;break;case 14:case"end":return e.stop()}}),e)})),rewind:A,isWeighted:!1};!function(e){e[e.Forward=0]="Forward",e[e.Backward=1]="Backward"}(D||(D={}));var H,L={name:"Bidirectional BFS",search:f.a.mark((function e(t){var n,r,a,s,i,c,u,d,h,p,v,b,g,w,x;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,E=[],s=new J([{node:{pos:r},direction:D.Forward},{node:{pos:a},direction:D.Backward}]),i=new C,c=new C;case 5:if(s.isEmpty()){e.next=28;break}u=s.dequeue(),d=u.node,h=u.direction,p=d.pos,v=void 0,e.t0=h,e.next=e.t0===D.Forward?12:e.t0===D.Backward?17:22;break;case 12:if(!i.has(p)){e.next=14;break}return e.abrupt("continue",5);case 14:return v=c.has(p),i.add(p),e.abrupt("break",22);case 17:if(!c.has(p)){e.next=19;break}return e.abrupt("continue",5);case 19:return v=i.has(p),c.add(p),e.abrupt("break",22);case 22:return e.next=24,{current:d,visited:new C([].concat(Object(o.a)(i),Object(o.a)(c))),found:v};case 24:b=Object(l.a)(S(n,p));try{for(b.s();!(g=b.n()).done;)w=g.value,x={node:{pos:w,prev:d},direction:h},E.push(x),s.enqueue(x)}catch(f){b.e(f)}finally{b.f()}e.next=5;break;case 28:case"end":return e.stop()}}),e)})),rewind:function(e){var t=E.filter((function(t){var n=t.node;return e.pos.equals(n.pos)})).sort((function(e){return e.direction===D.Forward?-1:1}));return[].concat(Object(o.a)(A(t[0].node)),Object(o.a)(A(t[t.length-1].node).reverse()))},isWeighted:!1},Q=n(9),X=n.n(Q),Z=f.a.mark((function e(t){var n,r,a,s,i,c,u,o,d,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,s=new X.a({comparator:function(e,t){return $(e.pos,a)-$(t.pos,a)},initialValues:[{pos:r}]}),i=new C;case 3:if(!(s.length>0)){e.next=14;break}if(c=s.dequeue(),u=c.pos,!i.has(u)){e.next=8;break}return e.abrupt("continue",3);case 8:return e.next=10,{current:c,visited:i.add(u),found:a.equals(u)};case 10:o=Object(l.a)(S(n,u));try{for(o.s();!(d=o.n()).done;)h=d.value,s.queue({pos:h,prev:c})}catch(f){o.e(f)}finally{o.f()}e.next=3;break;case 14:case"end":return e.stop()}}),e)})),$=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},_={name:"Greedy best-first search",search:Z,rewind:A,isWeighted:!1},ee={name:"Dijkstra",search:f.a.mark((function e(t){var n,r,a,s,i,c,u,o,d,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,s=new X.a({comparator:function(e,t){return e.distance-t.distance},initialValues:[{pos:r,distance:0}]}),i=new C;case 3:if(!(s.length>0)){e.next=14;break}if(c=s.dequeue(),u=c.pos,!i.has(u)){e.next=8;break}return e.abrupt("continue",3);case 8:return e.next=10,{current:c,visited:i.add(u),found:a.equals(u)};case 10:o=Object(l.a)(S(n,u));try{for(o.s();!(d=o.n()).done;)h=d.value,s.queue({pos:h,prev:c,distance:c.distance+(n.getWeight(h)||1)})}catch(f){o.e(f)}finally{o.f()}e.next=3;break;case 14:case"end":return e.stop()}}),e)})),rewind:A,isWeighted:!0},te=f.a.mark((function e(t){var n,r,a,s,i,c,u,o,d;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.maze,r=t.start,a=t.target,s=new X.a({comparator:function(e,t){return e.distFromStart-t.distFromStart+e.distToTarget-t.distToTarget},initialValues:[{pos:r,distFromStart:0,distToTarget:0}]}),i=new C;case 3:if(!(s.length>0)){e.next=13;break}if(c=s.dequeue(),!i.has(c.pos)){e.next=7;break}return e.abrupt("continue",3);case 7:return e.next=9,{current:c,visited:i.add(c.pos),found:a.equals(c.pos)};case 9:u=Object(l.a)(S(n,c.pos));try{for(u.s();!(o=u.n()).done;)d=o.value,s.queue({pos:d,prev:c,distFromStart:c.distFromStart+(n.getWeight(d)||1),distToTarget:ne(d,a)})}catch(f){u.e(f)}finally{u.f()}e.next=3;break;case 13:case"end":return e.stop()}}),e)})),ne=function(e,t){return Math.sqrt(Math.pow(Math.abs(e.x-t.x),2)+Math.pow(Math.abs(e.y-t.y),2))},re={name:"A*",search:te,rewind:A,isWeighted:!0},ae=f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(se({pos:t.start},new C,t),"t0",1);case 1:case"end":return e.stop()}}),e)})),se=f.a.mark((function e(t,n,r){var a,s,i,c;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(a=t.pos,!n.has(a)){u.next=3;break}return u.abrupt("return");case 3:return u.next=5,{current:t,visited:n.add(a),found:r.target.equals(a)};case 5:s=Object(l.a)(S(r.maze,a)),u.prev=6,s.s();case 8:if((i=s.n()).done){u.next=13;break}return c=i.value,u.delegateYield(e({pos:c,prev:t},n,r),"t0",11);case 11:u.next=8;break;case 13:u.next=18;break;case 15:u.prev=15,u.t1=u.catch(6),s.e(u.t1);case 18:return u.prev=18,s.f(),u.finish(18);case 21:case"end":return u.stop()}}),e,null,[[6,15,18,21]])})),ie={breadthFirstSearch:U,biDirectionalBfs:L,greedBestFirstSearch:_,dijkstra:ee,aStar:re,depthFirstSearch:{name:"Depth-first search",search:ae,rewind:A,isWeighted:!1}},ce=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=n(1),oe=function(e){return Object(ue.jsxs)("div",{className:"Controls",children:[Object(ue.jsxs)("fieldset",{id:"maze-generator",children:[Object(ue.jsx)("legend",{children:"Maze generator"}),Object(ue.jsx)("select",{onChange:e.onMazeGeneratorSelect,value:e.selectedMazeGenerator,children:Object.entries(V).map((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(ue.jsx)("option",{value:n,children:r.name},n)}))}),Object(ue.jsx)("button",{onClick:e.onGenerateClick,disabled:e.isSearching||e.isGenerating,children:"Generate"}),Object(ue.jsx)("button",{onClick:e.onClearClick,disabled:e.isSearching||e.isGenerating,children:"Clear"})]}),Object(ue.jsxs)("fieldset",{id:"search-method",children:[Object(ue.jsx)("legend",{children:"Search method"}),Object(ue.jsx)("select",{onChange:e.onSearchMethodSelect,value:e.selectedSearchMethod,children:Object.entries(ie).map((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(ue.jsx)("option",{value:n,children:r.name},n)}))}),e.isWeighted&&Object(ue.jsx)("em",{children:Object(ue.jsx)("small",{children:"Double click to add weights!"})}),Object(ue.jsx)("button",{onClick:e.isSearching?e.onStopClick:e.onStartClick,disabled:e.isGenerating,children:e.isSearching?"Stop":"Search"})]})]})},le=function(e){for(var t=[],n=0;n<e.maze.numRows;++n)for(var r=function(r){var a=new m(r,n);t.push(Object(ue.jsx)("div",{className:e.getSquareClassName(a),"data-weight":e.maze.getWeight(a),onMouseUp:function(){return e.onMouseUp(a)},onMouseDown:function(){return e.onMouseDown(a)},onMouseEnter:function(){return e.onMouseEnter(a)},onDoubleClick:function(){return e.onDoubleClick(a)}},a.toString()))},a=0;a<e.maze.numCols;++a)r(a);return Object(ue.jsx)("div",{className:"Maze",style:e.style,children:t})};!function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.Target=2]="Target",e[e.Weight=3]="Weight",e[e.Drawing=4]="Drawing"}(H||(H={}));var de=function(){return{type:H.None,dragged:!1}},fe=function(e,t){return B.empty(e,t)},he=function(e,t){return new m(Math.floor(e/4)-1,Math.floor(t/2))},pe=function(e,t){return new m(e-Math.floor(e/4),Math.floor(t/2))},ve=function(){return new C},be=function(){return new C},ge=function(e){var t=e.mazeSize,n=t.cols,r=t.rows,i=e.mazeStyle,c=Object(s.useState)(fe(n,r)),u=Object(p.a)(c,2),d=u[0],v=u[1],b=Object(s.useState)(he(n,r)),g=Object(p.a)(b,2),w=g[0],x=g[1],k=Object(s.useState)(pe(n,r)),y=Object(p.a)(k,2),j=y[0],O=y[1],S=Object(s.useState)(ve()),M=Object(p.a)(S,2),q=M[0],F=M[1],z=Object(s.useState)(be()),D=Object(p.a)(z,2),E=D[0],T=D[1],B=Object(s.useState)(de()),N=Object(p.a)(B,2),Y=N[0],G=N[1],K=function(e,t){return G({type:e,dragged:!1,pos:t})},R=function(e){return G(Object(a.a)(Object(a.a)({},Y),{},{dragged:!0,pos:e}))},P=Object(s.useState)(Date.now),I=Object(p.a)(P,2)[1],A=Object(s.useState)(!1),J=Object(p.a)(A,2),U=J[0],L=J[1],Q=Object(s.useState)("recursiveDivision"),X=Object(p.a)(Q,2),Z=X[0],$=X[1],_=Object(s.useState)("breadthFirstSearch"),ee=Object(p.a)(_,2),te=ee[0],ne=ee[1],re=Object(s.useRef)(null),ae=function(e){re.current=e},se=Object(s.useRef)(!1),ge=function(){return se.current},we=function(e){se.current=e},xe=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:we(!0),null===re.current&&(ae(ke()),T(be()));case 2:if((t=re.current.next()).value&&t.value(),ge()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,ce(10);case 8:if(!t.done){e.next=2;break}case 9:ae(null),we(!1),I(Date.now);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=f.a.mark((function e(){var t,n,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=ie[te],n=Object(l.a)(t.search({maze:d,start:w,target:j})),e.prev=2,a=f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,e.next=3,function(){return F(new C(Object(o.a)(n.visited)))};case 3:if(!n.found){e.next=8;break}return e.delegateYield(f.a.mark((function e(){var r,a,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=be(),T(r),a=Object(l.a)(t.rewind(n.current)),e.prev=3,i=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.value,e.next=3,function(){return T(new C(Object(o.a)(r.add(t))))};case 3:case"end":return e.stop()}}),e)})),a.s();case 6:if((s=a.n()).done){e.next=10;break}return e.delegateYield(i(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),a.e(e.t1);case 15:return e.prev=15,a.f(),e.finish(15);case 18:return e.abrupt("return",{v:{v:void 0}});case 19:case"end":return e.stop()}}),e,null,[[3,12,15,18]])}))(),"t0",5);case 5:if("object"!==typeof(a=e.t0)){e.next=8;break}return e.abrupt("return",a.v);case 8:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=12;break}return e.delegateYield(a(),"t0",7);case 7:if("object"!==typeof(s=e.t0)){e.next=10;break}return e.abrupt("return",s.v);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(2),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})),me=function(){v(fe(n,r)),x(he(n,r)),O(pe(n,r)),F(ve()),T(be()),ae(null),L(!1),we(!1)},ye=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a,s,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:me(),L(!0),t=new m(n,r),x(t),O(t),a=d,s=Object(l.a)(V[Z].generate(n,r)),e.prev=7,s.s();case 9:if((i=s.n()).done){e.next=17;break}return c=i.value,v(c),a=c,e.next=15,ce(10);case 15:e.next=9;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),s.e(e.t0);case 22:return e.prev=22,s.f(),e.finish(22);case 25:x(W(a,m.origin(),new m(Math.floor(n/3),r))),O(W(a,new m(Math.floor(2*n/3),0),new m(n,r))),L(!1);case 28:case"end":return e.stop()}}),e,null,[[7,19,22,25]])})));return function(){return e.apply(this,arguments)}}();return Object(ue.jsxs)("div",{className:"PathFinder".concat(U?" is-generating is-"+Z:ge()?" is-searching":""),children:[Object(ue.jsx)(oe,{isGenerating:U,isSearching:ge(),isWeighted:ie[te].isWeighted,onStartClick:xe,onStopClick:function(){return we(!1)},onClearClick:me,onGenerateClick:ye,selectedMazeGenerator:Z,selectedSearchMethod:te,onMazeGeneratorSelect:function(e){return $(e.target.value)},onSearchMethodSelect:function(e){ie[e.target.value].isWeighted||v(d.clearWeights()),ne(e.target.value)}}),Object(ue.jsx)(le,{maze:d,style:i,getSquareClassName:function(e){return d.isWall(e)?"is-wall":e.equals(w)?"is-start":e.equals(j)?"is-target":E.has(e)?"is-solution":q.has(e)?"is-visited":void 0},onMouseUp:function(e){ge()||(d.isWeight(e)&&!Y.dragged&&v(d.setWeight(e,d.getWeight(e)+1)),G(de()))},onMouseDown:function(e){if(!ge()){if(e.equals(w))return K(H.Start,e);if(e.equals(j))return K(H.Target,e);if(d.isWeight(e))return K(H.Weight,e);K(H.Drawing,e),v(d.toggleWall(e))}},onMouseEnter:function(e){if(Y.type!==H.None){var t=e.equals(w)||e.equals(j),n=d.isEmpty(e);switch(Y.type){case H.Start:case H.Target:n&&!t&&(Y.type===H.Start?x(e):O(e),R(e));break;case H.Weight:n&&!t&&void 0!==Y.pos&&(v(d.setWeight(e,d.getWeight(Y.pos)).removeWeight(Y.pos)),R(e));break;case H.Drawing:t||!n&&!d.isWall(e)||(v(d.toggleWall(e)),R(e))}}},onDoubleClick:function(e){!ie[te].isWeighted||ge()||e.equals(w)||e.equals(j)||v(d.isWeight(e)?d.removeWeight(e):d.setWeight(e,5))}})]})},we=(n(25),function(){return-1!==window.location.search.indexOf("embed")});if(we()){var xe=document.createElement("style");xe.appendChild(document.createTextNode(":root{--nc-tx-1:#000000;--nc-tx-2:#1A1A1A;--nc-bg-1:#FFFFFF;--nc-bg-2:#F6F8FA;--nc-bg-3:#E5E7EB;--nc-lk-1:#0070F3;--nc-lk-2:#0366D6;--nc-lk-tx:#FFFFFF;--nc-ac-1:#79FFE1;--nc-ac-tx:#0C4047}header,#maze-generator legend,#maze-generator select,#search-method legend,#search-method select{display:none}:root{--square-width:24px}body{padding:0}.Controls{display:flex;margin-bottom:0}.Controls>fieldset,.Controls>fieldset>*{margin-right:1rem}#maze-generator,#search-method{padding:0;border:none}.Maze>.is-start{background-image:var(--start-light-bg)}")),(document.head||document.getElementsByTagName("head")[0]).appendChild(xe)}var ke=function(){var e={cols:null,rows:null},t=new URLSearchParams(window.location.search);return t.has("cols")&&(e.cols=parseInt(t.get("cols"))),t.has("rows")&&(e.rows=parseInt(t.get("rows"))),e};u.a.render(Object(ue.jsx)(i.a.StrictMode,{children:Object(ue.jsx)(ge,Object(a.a)({},function(){var e=ke(),t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width"));if(null===e.cols){var n=we()?0:parseInt(getComputedStyle(document.body).getPropertyValue("padding-left"));e.cols=Math.floor((window.innerWidth-2*n)/t)}if(null===e.rows){var r=we()?30:parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height"));e.rows=Math.max(5,Math.floor((window.innerHeight-3*r)/t))}return{mazeSize:e,mazeStyle:{gridTemplateColumns:"repeat(".concat(e.cols,", ").concat(t,"px)"),gridTemplateRows:"repeat(".concat(e.rows,", ").concat(t,"px)")}}}()))}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.510c7b6e.chunk.js.map