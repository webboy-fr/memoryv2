(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0251bfcf":"13b36621","chunk-0d503da2":"a667f957","chunk-1d256fee":"380d35c3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1d256fee":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0251bfcf":"31d6cfe0","chunk-0d503da2":"31d6cfe0","chunk-1d256fee":"4899e416"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){u=m[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2f62"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),c=n("1da1");n("96cf");function i(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(e,t){return l.apply(this,arguments)}function l(){return l=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}r["a"].use(a["a"]);var m=new a["a"].Store({state:{gameId:0,game:[],selectedCards:[],levelList:["facile","moyen","difficile"],selectedLevel:0,timer:0,timerInterval:{},player:"",returningCard:!1,scoreEasy:[],scoreMedium:[],scoreHard:[]},mutations:{setGameId:function(e,t){e.gameId=t},setGame:function(e,t){e.game=t},setSelectedCards:function(e,t){e.selectedCards.push(t)},cleanSelectedCards:function(e){e.selectedCards=[]},setSelectedLevel:function(e,t){e.selectedLevel=t},setTimer:function(e,t){e.timer=t},setTimerInterval:function(e,t){e.timerInterval=t},cleanTimerInterval:function(e){clearInterval(e.timerInterval)},setPlayer:function(e,t){e.player=t},setReturningCard:function(e,t){e.returningCard=t},setScoreEasy:function(e,t){e.scoreEasy=t},setScoreMedium:function(e,t){e.scoreMedium=t},setScoreHard:function(e,t){e.scoreHard=t}},getters:{victory:function(e){if(e.game.length>0)return e.game.every((function(e){return!0===e.visible}))}},actions:{newGame:function(e){e.commit("setGame",[]),e.commit("cleanTimerInterval"),e.commit("setTimer",0),i("http://memoryv2back.local/home/newGame/".concat(e.state.selectedLevel)).then((function(t){e.commit("setGameId",t.id),e.commit("setGame",t.grid);var n=setInterval((function(){var t=e.state.timer+1;e.commit("setTimer",t)}),1e3);e.commit("setTimerInterval",n)}))},selectCard:function(e,t){e.dispatch("checkEven"),e.commit("cleanSelectedCards",t)},checkEven:function(e){u("http://memoryv2back.local/home/checkEven",{gameId:e.state.gameId,selectedCards:e.state.selectedCards}).then((function(t){e.commit("cleanSelectedCards"),e.commit("setGame",t),e.commit("setReturningCard",!1)}))},saveScore:function(e){u("http://memoryv2back.local/home/save",{gameId:e.state.gameId,player:e.state.player,time:e.state.timer})},getScores:function(e,t){i("http://memoryv2back.local/home/scores/".concat(t)).then((function(n){0==t?e.commit("setScoreEasy",n):1==t?e.commit("setScoreMedium",n):2==t&&e.commit("setScoreHard",n)}))}}});r["a"].use(o["a"]);var d=[{path:"/",name:"Home",component:function(){return n.e("chunk-0d503da2").then(n.bind(null,"bb51"))}},{path:"/play",name:"Play",beforeEnter:function(e,t,n){m.commit("setGame",[]),m.commit("cleanTimerInterval"),m.commit("setTimer",0),n()},component:function(){return n.e("chunk-1d256fee").then(n.bind(null,"8363"))}},{path:"/scores",name:"Scores",component:function(){return n.e("chunk-0251bfcf").then(n.bind(null,"c14f"))}}],f=new o["a"]({mode:"history",routes:d}),p=f,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"text-center"},[n("router-link",{staticClass:"m-3 btn btn-primary",attrs:{to:{name:"Home"}}},[e._v("Accueil")]),n("router-link",{staticClass:"m-3 btn btn-success",attrs:{to:{name:"Play"}}},[e._v("Jouer")]),n("router-link",{staticClass:"m-3 btn btn-warning",attrs:{to:{name:"Scores"}}},[e._v("Meilleurs scores")])],1),n("hr"),n("router-view",{key:e.$route.fullPath})],1)},v=[],y={name:"App"},g=y,b=n("2877"),k=Object(b["a"])(g,h,v,!1,null,null,null),w=k.exports;r["a"].use(a["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)},store:m,router:p}).$mount("#app")}});
//# sourceMappingURL=app.7ad04015.js.map