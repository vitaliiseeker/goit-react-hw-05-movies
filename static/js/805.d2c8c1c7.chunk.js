"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[805],{999:function(n,r,e){e.d(r,{P:function(){return s}});var t,i=e(168),a=e(444).ZP.p(t||(t=(0,i.Z)(["\npadding: 15px 25px;\nfont-size: 20px;\nfont-style: italic;\ncolor: #ff8080;\n"]))),o=e(184),s=function(n){var r=n.message;return(0,o.jsx)(a,{children:r})}},669:function(n,r,e){e.d(r,{Df:function(){return u},TP:function(){return d},jW:function(){return f},uC:function(){return l},z1:function(){return p}});var t=e(165),i=e(861),a=e(44),o=e(7),s=e.n(o);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="e5b22da478d64a4856b7de5bb232688f",u=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return r=n.sent,console.log(r.data.results),n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/search/movie",{params:{api_key:c,query:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();p.propTypes={query:s().string.isRequired},d.propTypes={movieId:s().string.isRequired},l.propTypes={movieId:s().string.isRequired},f.propTypes={movieId:s().string.isRequired}},805:function(n,r,e){e.r(r),e.d(r,{default:function(){return S}});var t,i,a,o,s,c,u,p=e(165),d=e(861),l=e(885),f=e(791),x=e(739),v=e(669),h=e(649),m=e(168),Z=e(444),g=Z.ZP.div(t||(t=(0,m.Z)(["\ndisplay: flex;\npadding: 15px;\nborder-bottom: 2px solid #c0c0c0;\n\n@media screen and (max-width: 550px) {\n  flex-direction: column;\n  gap: 8px;\n}\n\n@media screen and (min-width: 550.02px) {\n  flex-direction: row;\n  gap: 15px;\n}\n"]))),j=Z.ZP.div(i||(i=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 15px;\npadding: 15px;\n"]))),b=Z.ZP.button(a||(a=(0,m.Z)(["\n  margin-top: 15px;\n\n  padding: 4px 8px;\n  max-width: 200px;\n\n  font-size: 14px;\n  color: #000080;\n  background-color: #8080c0;\n\n  border: 1px solid #8080c0;\n  border-radius: 4px;\n\n  box-shadow: 0px 2px 4px #808080;\n  outline: none;\n  cursor: pointer;\n\n  transition-property: color, background-color;\n  transition: var(--animation);\n\n  &:hover {\n    background-color: #0000ff;\n    color: #ffff00;\n  } \n"]))),w=e(184),y=function(n){var r=n.type,e=n.children,t=n.onClick,i=void 0===t?function(){}:t;return(0,w.jsxs)(b,{type:r,onClick:i,children:[" ",e]})},k=function(n){var r=n.movie,e=(0,x.TH)(),t=(0,x.s0)(),i=r.title,a=r.release_date,o=r.poster_path,s=r.overview,c=r.tagline,u=r.vote_average,p=r.genres;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,{type:"button",onClick:function(){var n,r;t(null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:o&&"https://image.tmdb.org/t/p/w500".concat(o),alt:i,width:"300"}),(0,w.jsxs)(j,{children:[(0,w.jsx)("h2",{children:"".concat(i," (").concat(null===a||void 0===a?void 0:a.slice(0,4),")")}),c&&(0,w.jsxs)("p",{children:["Tagline: ",c]}),(0,w.jsxs)("p",{children:["User Score: ",Math.round(10*u),"%"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:s}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:null===p||void 0===p?void 0:p.map((function(n){return n.name})).join("  ")})]})]})]})},_=e(731),P=Z.ZP.p(o||(o=(0,m.Z)(["\npadding: 10px 20px;\n"]))),T=Z.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px 40px;\n  border-bottom: 2px solid #c0c0c0;\n"]))),C=Z.ZP.li(c||(c=(0,m.Z)(["\n  position: relative;\n"]))),q=(0,Z.ZP)(_.OL)(u||(u=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #004080;\n  \n  transition: color var(--animation);\n\n  &.active,\n  &:hover ,\n  &:focus {\n    color: #ffff00;\n}\n"]))),R=e(999),S=function(){var n,r,e=(0,f.useState)({}),t=(0,l.Z)(e,2),i=t[0],a=t[1],o=(0,f.useState)(null),s=(0,l.Z)(o,2),c=s[0],u=s[1],m=(0,f.useState)(!1),Z=(0,l.Z)(m,2),g=Z[0],j=Z[1],b=(0,x.UO)().movieId,y=(0,x.TH)();(0,f.useEffect)((function(){b&&_()}),[b]);var _=function(){var n=(0,d.Z)((0,p.Z)().mark((function n(){var r;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,(0,v.TP)(b);case 4:r=n.sent,a(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),u("Error");case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[c&&(0,w.jsx)(q,{to:"/",end:!0,children:(0,w.jsx)(R.P,{message:"Sorry, try again. Go to the main page."})}),g&&(0,w.jsx)(h.a,{}),!c&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{movie:i}),(0,w.jsx)(P,{children:"Additional information"}),(0,w.jsxs)(T,{children:[(0,w.jsx)(C,{children:(0,w.jsx)(q,{to:"cast",state:{from:null===y||void 0===y||null===(n=y.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,w.jsx)(C,{children:(0,w.jsx)(q,{to:"reviews",state:{from:null===y||void 0===y||null===(r=y.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,w.jsx)(f.Suspense,{fallback:(0,w.jsx)(h.a,{}),children:(0,w.jsx)(x.j3,{})})]})]})}}}]);
//# sourceMappingURL=805.d2c8c1c7.chunk.js.map