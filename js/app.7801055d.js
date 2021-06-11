(function(e){function t(t){for(var i,a,c=t[0],o=t[1],u=t[2],m=0,d=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,c=1;c<r.length;c++){var o=r[c];0!==n[o]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var i={},n={app:0},s=[];function a(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=i,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"2b64":function(e,t,r){"use strict";r("3781")},"326b":function(e,t,r){"use strict";r("396a")},3781:function(e,t,r){},"396a":function(e,t,r){},"540e":function(e,t,r){"use strict";r("7075")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{ref:"headerRef"}),r("div",{staticClass:"container"},[r("Board",{attrs:{_restartGame:e._restartGame}}),r("Options",{attrs:{_restartGame:e._restartGame,_initializeRandomOrderNumbers:e._initializeRandomOrderNumbers}})],1)],1)},s=[],a=r("5530"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"moves"},[e._v(" Moves: "+e._s(e.moves)+" ")]),r("div",{staticClass:"time"},[e._v(" Time: "),r("span",[e._v(" "+e._s(0===e.time?"00:00":"")+" "+e._s(e._f("moment")(0!==e.time?e.time:"","mm:ss"))+" ")])])])},o=[],u=r("2f62"),l={name:"Header",computed:Object(u["b"])(["time","moves"])},m=l,d=(r("af29"),r("2877")),b=Object(d["a"])(m,c,o,!1,null,"751d6743",null),v=b.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board",class:{size4x3:"4x3"===this.boardSize,size4x4:"4x4"===this.boardSize,size5x4:"5x4"===this.boardSize,size6x5:"6x5"===this.boardSize,size6x6:"6x6"===this.boardSize}},[e._l(e.cells,(function(e){return r("BoardCell",{key:e.id,attrs:{id:e.id,number:e.value,isActive:e.active,guessed:e.guessed}})})),!e.gameIsStarted||e.won?r("div",{staticClass:"overlay"},[e.gameIsStarted||e.won?e._e():r("div",{staticClass:"message",on:{click:e.letsStartGame}},[e._v("Start game")]),e.won?r("div",{staticClass:"message",on:{click:this.$props._restartGame}},[r("div",[e._v("You won!")]),r("div",[e._v("Play again")])]):e._e()]):e._e()],2)},p=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"trigger",class:{active:this.$props.isActive||this.$props.guessed},on:{click:e.activateCell}},[r("div",{staticClass:"cell"},[r("div",{staticClass:"front"}),r("div",{staticClass:"back"},[e._v(e._s(this.$props.number))])])])},_=[],O=(r("a9e3"),{name:"BoardCell",props:{number:{type:Number,required:!0},isActive:{type:Boolean,required:!0},id:{type:Number,required:!0},guessed:{type:Boolean,required:!0}},computed:Object(u["b"])(["currentActiveNumbers"]),methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["clearActiveCell","incrementMoves","setActiveCell"])),{},{activateCell:function(){this.$props.isActive||this.$props.guessed||this.cellHandler(this.$props.id)},cellHandler:function(e){var t=this;if(this.currentActiveNumbers.length<2&&(this.setActiveCell(e),2===this.currentActiveNumbers.length)){var r=this.currentActiveNumbers[0].value===this.currentActiveNumbers[1].value;setTimeout((function(){t.clearActiveCell(r),t.incrementMoves()}),1e3)}}})}),g=O,N=(r("2b64"),Object(d["a"])(g,h,_,!1,null,"98132c5e",null)),S=N.exports,z={name:"Board",components:{BoardCell:S},methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["startGame","endGame","setTimer","stopTimer"])),{},{letsStartGame:function(){this.startGame(),this.setTimer()}}),computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["gameIsStarted","boardSize","cells","isWon"])),{},{won:function(){return this.isWon&&(this.stopTimer(),this.endGame()),this.isWon}}),props:{_restartGame:{type:Function,required:!0}}},j=z,x=(r("326b"),Object(d["a"])(j,f,p,!1,null,"271b3f0a",null)),C=x.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel"},[r("button",{staticClass:"restart-btn",attrs:{disabled:!e.gameIsStarted},on:{click:this.$props._restartGame}},[e._v("Restart")]),r("div",{staticClass:"board-size"},[r("span",[e._v("Board size: ")]),e._l(e.buttons,(function(t){return r("button",{key:t,staticClass:"btn",class:{active:e.boardSize===t},on:{click:function(r){return e.changeBoardSize(t)}}},[e._v(e._s(t))])}))],2)])},A=[],G={name:"Options",data:function(){return{buttons:["4x3","4x4","5x4","6x5","6x6"]}},methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["updateBoardSize","clearMoves","clearTimer","endGame"])),{},{changeBoardSize:function(e){var t=this;this.updateBoardSize(e),this.clearMoves(),this.clearTimer(),this.endGame(),setTimeout((function(){t.$props._initializeRandomOrderNumbers()}),0)}}),computed:Object(u["b"])(["gameIsStarted","boardSize"]),props:{_initializeRandomOrderNumbers:{type:Function,required:!0},_restartGame:{type:Function,required:!0}}},T=G,w=(r("540e"),Object(d["a"])(T,y,A,!1,null,"9de05764",null)),k=w.exports,I={name:"App",components:{Header:v,Board:C,Options:k},methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["generateNumbers","initializeRandomOrderNumbers","updateCurrentActiveNumbers","clearMoves","restartTimer","startGame"])),{},{_restartGame:function(){this.updateCurrentActiveNumbers([]),this._initializeRandomOrderNumbers(),this.clearMoves(),this.restartTimer(),this.startGame()},_initializeRandomOrderNumbers:function(){this.generateNumbers(),this.initializeRandomOrderNumbers()}}),mounted:function(){this._initializeRandomOrderNumbers()}},$=I,B=(r("034f"),Object(d["a"])($,n,s,!1,null,null,null)),M=B.exports,R={state:{moves:0,time:0,timer:null},mutations:{incrementMoves:function(e){e.moves+=1},clearMoves:function(e){e.moves=0},updateTime:function(e,t){e.time=t},setTimer:function(e){e.timer=setInterval((function(){e.time+=1}),1e3)},stopTimer:function(e){clearInterval(e.timer),e.timer=null},clearTimer:function(e){clearInterval(e.timer),e.timer=null,e.time=0},restartTimer:function(e){clearInterval(e.timer),e.timer=null,e.time=0,e.timer=setInterval((function(){e.time+=1}),1e3)}},getters:{moves:function(e){return e.moves},time:function(e){return e.time}}},P=r("2909"),q=(r("d81d"),r("99af"),r("4e82"),r("159b"),{state:{boardSize:"4x3",sourceNumbers:[],cells:[],currentActiveNumbers:[]},mutations:{generateNumbers:function(e){e.sourceNumbers=[];var t=0;switch(e.boardSize){case"4x3":t=6;break;case"4x4":t=8;break;case"5x4":t=10;break;case"6x5":t=15;break;case"6x6":t=18;break;default:break}for(var r=1;r<=t;r++)e.sourceNumbers.push(r)},updateBoardSize:function(e,t){e.boardSize=t},setActiveCell:function(e,t){e.cells=e.cells.map((function(r){return r.id===t&&(r.active=!0,e.currentActiveNumbers=[].concat(Object(P["a"])(e.currentActiveNumbers),[r])),r}))},clearActiveCell:function(e,t){e.cells=e.cells.map((function(e){return e.active&&(e.active=!1,t&&(e.guessed=!0)),e})),e.currentActiveNumbers=[]},initializeRandomOrderNumbers:function(e){var t=e.sourceNumbers.concat(e.sourceNumbers).sort((function(){return Math.random()-.5}));e.cells.length&&(e.cells=[]),t.forEach((function(t,r){var i={value:t,id:r,active:!1,guessed:!1};e.cells=[].concat(Object(P["a"])(e.cells),[i])}))},updateCells:function(e,t){e.cells=t},updateCurrentActiveNumbers:function(e,t){e.currentActiveNumbers=t}},getters:{sourceNumbers:function(e){return e.sourceNumbers},boardSize:function(e){return e.boardSize},cells:function(e){return e.cells},currentActiveNumbers:function(e){return e.currentActiveNumbers},isWon:function(e){return e.cells.every((function(e){return e.guessed}))}}});i["a"].use(u["a"]);var E=new u["a"].Store({state:{gameIsStarted:!1},mutations:{startGame:function(e){e.gameIsStarted=!0},endGame:function(e){e.gameIsStarted=!1}},getters:{gameIsStarted:function(e){return e.gameIsStarted}},modules:{movesAndTimer:R,board:q}});i["a"].config.productionTip=!1,i["a"].use(r("2ead")),new i["a"]({store:E,render:function(e){return e(M)}}).$mount("#app")},7075:function(e,t,r){},"85ec":function(e,t,r){},af29:function(e,t,r){"use strict";r("c9bc")},c9bc:function(e,t,r){}});
//# sourceMappingURL=app.7801055d.js.map