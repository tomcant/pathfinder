(this["webpackJsonppath-finder"]=this["webpackJsonppath-finder"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r,a=n(1),i=n.n(a),s=n(12),c=n.n(s),u=n(4),o=n(5),h=n(3),d=n(2),f=n.n(d),l=n(11),b=n(7),p=n(8),v=function(){function t(e,n){Object(b.a)(this,t),this.x=e,this.y=n}return Object(p.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}]),t}();!function(t){t[t.Empty=0]="Empty",t[t.Wall=1]="Wall"}(r||(r={}));var j,w,y=function(){function t(e,n){for(Object(b.a)(this,t),this.rows=[];n--;)this.rows.push(Array(e).fill(r.Empty))}return Object(p.a)(t,[{key:"withCell",value:function(e,n){if(!this.isWithinBounds(e))throw new Error("Out of bounds: ".concat(e.toString()));var r=new t(this.width,this.height);return r.rows=this.rows,r.rows[e.y][e.x]=n,r}},{key:"isEmpty",value:function(t){return this.rows[t.y][t.x]===r.Empty}},{key:"getNeighbours",value:function(t){for(var e=[],n=0,r=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}];n<r.length;n++){var a=r[n],i=a.dx,s=a.dy,c=t.add(new v(i,s));this.isWithinBounds(c)&&(this.isEmpty(c)&&e.push(c))}return e}},{key:"isWithinBounds",value:function(t){return t.x>=0&&t.y>=0&&t.x<this.width&&t.y<this.height}},{key:"width",get:function(){return this.rows[0].length}},{key:"height",get:function(){return this.rows.length}},{key:"generateWalls",value:function(){this.rows=[[0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0],[0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0],[0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0],[0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0],[0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0],[1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1],[1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0],[1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0],[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1],[1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1],[0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],[0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1],[0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0],[0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0],[0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0]]}}]),t}(),O=function(t){for(var e=[];t.prev;)e.unshift(t.pos),t=t.prev;return e},x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(b.a)(this,t),this.items=e}return Object(p.a)(t,[{key:"enqueue",value:function(){var t;(t=this.items).push.apply(t,arguments)}},{key:"dequeue",value:function(){return this.items.shift()}},{key:"isEmpty",value:function(){return 0===this.size}},{key:"size",get:function(){return this.items.length}}]),t}(),g={name:"Breadth First Search",start:f.a.mark((function(t){var e,n,r,a,i,s,c,u,h,d;return f.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:e=t.map,n=t.start,r=t.target,a=new Set([n.toString()]),i=new x([{pos:n}]);case 3:if(i.isEmpty()){f.next=11;break}return s=i.dequeue(),f.next=7,{current:s,visited:a,found:s.pos.equals(r)};case 7:c=Object(o.a)(e.getNeighbours(s.pos));try{for(c.s();!(u=c.n()).done;)h=u.value,d=h.toString(),a.has(d)||(a.add(d),i.enqueue({pos:h,prev:s}))}catch(l){c.e(l)}finally{c.f()}f.next=3;break;case 11:case"end":return f.stop()}}),n)})),rewind:O};!function(t){t[t.Forward=0]="Forward",t[t.Backward=1]="Backward"}(j||(j={}));var k,S={"breadth-first-search":g,"bi-directional-bfs":{name:"Bi-directional BFS",start:f.a.mark((function(t){var e,n,r,a,i,s,c,h,d,l,b,p,v,y,O,g;return f.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:e=t.map,n=t.start,r=t.target,w=[],a=new Set([n.toString()]),i=new Set([r.toString()]),s=new x([{searchNode:{pos:n},direction:j.Forward},{searchNode:{pos:r},direction:j.Backward}]);case 5:if(s.isEmpty()){f.next=14;break}return c=s.dequeue(),h=c.searchNode,d=c.direction,l=d===j.Forward&&i.has(h.pos.toString())||d===j.Backward&&a.has(h.pos.toString()),f.next=10,{current:h,visited:new Set([].concat(Object(u.a)(a),Object(u.a)(i))),found:l};case 10:b=Object(o.a)(e.getNeighbours(h.pos));try{for(b.s();!(p=b.n()).done;)v=p.value,y=v.toString(),O=!1,d===j.Forward?a.has(y)||(a.add(y),O=!0):i.has(y)||(i.add(y),O=!0),O&&(g={searchNode:{pos:v,prev:h},direction:d},w.push(g),s.enqueue(g))}catch(k){b.e(k)}finally{b.f()}f.next=5;break;case 14:case"end":return f.stop()}}),n)})),rewind:function(t){var e=w.filter((function(e){var n=e.searchNode;return t.pos.equals(n.pos)}));return[].concat(Object(u.a)(O(e[0].searchNode)),Object(u.a)(O(e[1].searchNode).reverse()))}}},m=n(0),N=function(){var t=Object(l.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();!function(t){t[t.None=0]="None",t[t.Start=1]="Start",t[t.Target=2]="Target"}(k||(k={}));var E=function(){return new y(40,20)},q=function(){return new v(1,1)},B=function(){return new v(38,18)},W=function(){return new Set},C=function(){return new Set},F=function(){var t=Object(a.useState)(E()),e=Object(h.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(q()),c=Object(h.a)(s,2),d=c[0],b=c[1],p=Object(a.useState)(B()),j=Object(h.a)(p,2),w=j[0],y=j[1],O=Object(a.useState)(W()),x=Object(h.a)(O,2),g=x[0],F=x[1],M=Object(a.useState)(C()),T=Object(h.a)(M,2),z=T[0],J=T[1],P=Object(a.useState)("breadth-first-search"),A=Object(h.a)(P,2),D=A[0],G=A[1],I=Object(a.useState)(k.None),R=Object(h.a)(I,2),U=R[0],H=R[1],K=Object(a.useState)(!1),L=Object(h.a)(K,2),Q=L[0],V=L[1],X=function(t){t.equals(d)?H(k.Start):t.equals(w)?H(k.Target):(V(!0),i(n.withCell(t,n.isEmpty(t)?r.Wall:r.Empty)))},Y=function(t){U!==k.Start?U!==k.Target?Q&&i(n.withCell(t,r.Wall)):y(t):b(t)},Z=function(){var t=Object(l.a)(f.a.mark((function t(){var e,r,a,i,s,c,h,l,b,p;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=C(),J(e),r=Object(o.a)(S[D].start({map:n,start:d,target:w})),t.prev=3,r.s();case 5:if((a=r.n()).done){t.next=32;break}if(i=a.value,s=i.current,c=i.found,h=i.visited,F(new Set(Object(u.a)(h))),!c){t.next=28;break}l=Object(o.a)(S[D].rewind(s)),t.prev=10,l.s();case 12:if((b=l.n()).done){t.next=19;break}return p=b.value,J(new Set(Object(u.a)(e.add(p.toString())))),t.next=17,N(20);case 17:t.next=12;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(10),l.e(t.t0);case 24:return t.prev=24,l.f(),t.finish(24);case 27:return t.abrupt("break",32);case 28:return t.next=30,N(10);case 30:t.next=5;break;case 32:t.next=37;break;case 34:t.prev=34,t.t1=t.catch(3),r.e(t.t1);case 37:return t.prev=37,r.f(),t.finish(37);case 40:case"end":return t.stop()}}),t,null,[[3,34,37,40],[10,21,24,27]])})));return function(){return t.apply(this,arguments)}}(),$=function(){i(E()),b(q()),y(B()),F(W()),J(W())},_=function(t){return n.isEmpty(t)?d.equals(t)?"start":w.equals(t)?"target":z.has(t.toString())?"solution":g.has(t.toString())?"visited":"":"wall"};return Object(m.jsxs)("div",{className:"PathFinder",children:[Object(m.jsxs)("div",{className:"Controls",children:[Object(m.jsx)("button",{onClick:Z,children:"Start"}),Object(m.jsx)("button",{onClick:$,children:"Reset"}),Object(m.jsx)("button",{onClick:function(){$();var t=E();t.generateWalls(),i(t)},children:"Generate map"}),Object(m.jsx)("select",{onChange:function(t){G(t.target.value)},children:Object.entries(S).map((function(t){var e=Object(h.a)(t,2),n=e[0],r=e[1];return Object(m.jsx)("option",{value:n,children:r.name},n)}))})]}),Object(m.jsx)("div",{className:"Map",children:function(){for(var t=[],e=0;e<n.height;++e)for(var r=function(n){var r=new v(n,e);t.push(Object(m.jsx)("div",{className:_(r),onMouseUp:function(){return H(k.None),void V(!1)},onMouseDown:function(){return X(r)},onMouseEnter:function(){return Y(r)}},r.toString()))},a=0;a<n.width;++a)r(a);return t}()})]})},M=function(){return Object(m.jsx)(F,{})};n(19);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d65f0ea8.chunk.js.map