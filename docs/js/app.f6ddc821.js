(function(t){function e(e){for(var n,l,c=e[0],i=e[1],u=e[2],p=0,f=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("global-header"),r("v-content",[r("router-view")],1),r("global-footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",color:"white"}},[r("v-img",{attrs:{src:"https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg",contain:!0,"max-height":"25",position:"left"}})],1)},c=[],i={name:"GlobalHeader"},u=i,s=r("2877"),p=r("6544"),f=r.n(p),d=r("40dc"),v=r("adda"),b=Object(s["a"])(u,l,c,!1,null,"03a6780a",null),h=b.exports;f()(b,{VAppBar:d["a"],VImg:v["a"]});var m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",[r("v-card-text",{staticClass:"text-center"},[t._v("© TEDxNagoyaU")])],1)},x=[],g={name:"GlobalFooter"},y=g,w=r("99d9"),O=r("553a"),_=Object(s["a"])(y,m,x,!1,null,"774aa99c",null),j=_.exports;f()(_,{VCardText:w["a"],VFooter:O["a"]});var V={name:"App",components:{GlobalHeader:h,GlobalFooter:j},data:function(){return{}}},P=V,T=r("7496"),k=r("a75b"),C=Object(s["a"])(P,a,o,!1,null,null,null),S=C.exports;f()(C,{VApp:T["a"],VContent:k["a"]});var E=r("8c4f"),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-parallax",{attrs:{src:t.imgLink.firstView,height:"600"}},[r("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[r("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("キャッチコピー募集！ ")]),r("div",{staticClass:"white--text subheading mb-3 text-xs-center",staticStyle:{"font-weight":"900","text-shadow":"2px 2px #000000","border-bottom":"solid 2px red"}},[t._v("サブタイトルください！！")])])],1)],1)},D=[],G={name:"Home",components:{},data:function(){return{imgLink:{firstView:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg"}}}},H=G,M=r("a722"),A=r("8b9c"),F=Object(s["a"])(H,$,D,!1,null,null,null),L=F.exports;f()(F,{VLayout:M["a"],VParallax:A["a"]}),n["a"].use(E["a"]);var J=[{path:"/",name:"Home",meta:{title:"TODOアプリ　一覧画面",desc:"TODOアプリの一覧画面です。TODOのリストを確認できます。"},component:L}],B=new E["a"]({mode:"history",base:"",routes:J}),I=B,N=r("f309");n["a"].use(N["a"]);var U=new N["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:I,vuetify:U,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.f6ddc821.js.map