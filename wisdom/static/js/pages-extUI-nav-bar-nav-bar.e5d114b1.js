(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-nav-bar-nav-bar"],{"005c":function(n,t,e){"use strict";e.r(t);var a=e("be2a"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"1ce9":function(n,t,e){var a=e("580c");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("539eba80",a,!0,{sourceMap:!1,shadowMode:!1})},"48b8":function(n,t,e){"use strict";e.r(t);var a=e("b26f"),i=e("005c");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("b9df");var c,l=e("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"99421380",null,!1,a["a"],c);t["default"]=r.exports},"580c":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-99421380]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-99421380]{font-size:14px;line-height:inherit}.example[data-v-99421380]{padding:0 15px 15px}.example-info[data-v-99421380]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-99421380]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-99421380]{padding:0 15px}.example-info[data-v-99421380]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-99421380]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-99421380]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-99421380]{font-size:18px;color:#fff}.word-btn[data-v-99421380]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-99421380]{background-color:#4ca2ff}\nuni-page-body[data-v-99421380]{height:120%}\n.uni-nav-bar-text[data-v-99421380]{font-size:14px}.city[data-v-99421380]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:flex-start;margin-left:4px}.input-view[data-v-99421380]{\ndisplay:flex;\nflex-direction:row;flex:1;background-color:#f8f8f8;height:30px;border-radius:15px;padding:0 15px;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-uni-icon[data-v-99421380]{line-height:30px}.nav-bar-input[data-v-99421380]{height:30px;line-height:30px;\n\npadding:0 5px;font-size:14px;background-color:#f8f8f8}.example-body[data-v-99421380]{\ndisplay:block;\npadding:0}body.?%PAGE?%[data-v-99421380]{background-color:#efeff4}",""]),n.exports=t},b26f:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={uniNavBar:e("2ef0").default,uniSection:e("8795").default,uniIcons:e("1ffe").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-nav-bar",{attrs:{fixed:!0,color:"#ffffff","background-color":"#007AFF","status-bar":!0,"left-icon":"arrowleft","left-text":"返回",title:"uni-nav-bar 标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"example-info"},[n._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")]),e("uni-section",{attrs:{title:"基本用法",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"左右显示文字",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{"left-icon":"arrowleft","right-text":"菜单","left-text":"返回",title:"标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"插入slot",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.showCity.apply(void 0,arguments)},clickRight:function(t){arguments[0]=t=n.$handleEvent(t),n.scan.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"left"},slot:"left"},[e("v-uni-view",{staticClass:"city"},[e("v-uni-view",[e("v-uni-text",{staticClass:"uni-nav-bar-text"},[n._v(n._s(n.city))])],1),e("uni-icons",{attrs:{type:"arrowdown",color:"#333333",size:"22"}})],1)],1),e("v-uni-view",{staticClass:"input-view"},[e("uni-icons",{staticClass:"input-uni-icon",attrs:{type:"search",size:"22",color:"#666666"}}),e("v-uni-input",{staticClass:"nav-bar-input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.confirm.apply(void 0,arguments)}}})],1)],2)],1)],1)},o=[]},b9df:function(n,t,e){"use strict";var a=e("1ce9"),i=e.n(a);i.a},be2a:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){n("log","onPullDownRefresh"," at pages/extUI/nav-bar/nav-bar.vue:82"),setTimeout((function(){uni.stopPullDownRefresh(),n("log","stopPullDownRefresh"," at pages/extUI/nav-bar/nav-bar.vue:85")}),1e3)}};t.default=e}).call(this,e("0de9")["log"])}}]);