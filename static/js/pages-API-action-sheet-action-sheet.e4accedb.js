(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-action-sheet-action-sheet"],{"27a9":function(t,e,n){"use strict";n.r(e);var i=n("a898"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"6d42":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={pageHead:n("c5f5").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"target",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetTap.apply(void 0,arguments)}}},[t._v("弹出action sheet")])],1)],1)],1)},a=[]},"9c8d":function(t,e,n){"use strict";n.r(e);var i=n("6d42"),o=n("27a9");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports},a898:function(t,e,n){"use strict";(function(t){n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"action-sheet",buttonRect:{}}},onReady:function(){this.getNodeInfo(),window.addEventListener("resize",this.getNodeInfo)},beforeDestroy:function(){window.removeEventListener("resize",this.getNodeInfo)},methods:{actionSheetTap:function(){var e=this;uni.showActionSheet({title:"标题",itemList:["item1","item2","item3","item4"],popover:{top:e.buttonRect.top+104+e.buttonRect.height,left:e.buttonRect.left+e.buttonRect.width/2},success:function(e){t("log",e.tapIndex," at pages/API/action-sheet/action-sheet.vue:40"),uni.showToast({title:"点击了第"+e.tapIndex+"个选项",icon:"none"})}})},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var n=e[0];n&&(t.buttonRect=n)}))}}};e.default=i}).call(this,n("0de9")["log"])}}]);