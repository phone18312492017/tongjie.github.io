(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swiper-dot-swiper-dot"],{"025e":function(t,e,n){"use strict";var o=n("3bf7"),i=n.n(o);i.a},"0911":function(t,e,n){"use strict";n.r(e);var o=n("9fb6"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"0d52":function(t,e,n){"use strict";n.r(e);var o=n("dc12"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"11d5":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniSwiperDot:n("58bd").default,uniSection:n("8795").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uni-swiper-dot",{staticClass:"uni-swiper-dot-box",attrs:{info:t.info,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles,field:"content"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},[n("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperDotIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.info,(function(e,o){return n("v-uni-swiper-item",{key:o},[n("v-uni-view",{staticClass:"swiper-item",class:e.colorClass},[n("v-uni-image",{staticClass:"image",attrs:{src:e.url,mode:"aspectFill",draggable:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onBanner(o)}}})],1)],1)})),1)],1),n("uni-section",{attrs:{title:"模式选择",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("v-uni-view",{staticClass:"example-body-item",class:{active:0===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("default",0)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("default")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:1===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("dot",1)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("dot")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:2===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("round",2)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("round")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:3===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("nav",3)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("nav")])],1),n("v-uni-view",{staticClass:"example-body-item",class:{active:4===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("indexes",4)}}},[n("v-uni-text",{staticClass:"example-body-item-text"},[t._v("indexes")])],1)],1),n("uni-section",{attrs:{title:"颜色样式选择",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},["nav"!==t.mode?t._l(t.dotStyle,(function(e,o){return n("v-uni-view",{key:o,staticClass:"example-body-item",class:{active:t.styleIndex===o},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(o)}}},[n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}}),n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}}),n("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}})],1)})):t._e(),"nav"===t.mode?t._l(t.dotStyle,(function(e,o){return n("v-uni-view",{key:o,staticClass:"example-body-item",class:{active:t.styleIndex===o},style:{"background-color":e.selectedBackgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(o)}}},[n("v-uni-text",{staticClass:"example-body-item-text",style:{color:e.color}},[t._v("内容")])],1)})):t._e()],2)],1)},a=[]},1278:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=o},"20c1":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?n("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return n("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(o===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(o)}}})})),1):t._e(),"dot"===t.mode?n("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return n("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(o)}}})})),1):t._e(),"round"===t.mode?n("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return n("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item ",class:[o===t.current&&"uni-swiper__dots-long"],style:{width:(o===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(o)}}})})),1):t._e(),"nav"===t.mode?n("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[n("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?n("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return n("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:o===t.current?t.dots.selectedColor:t.dots.color,"background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(o)}}},[n("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(o+1))])],1)})),1):t._e()],2)},a=[]},2602:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e},"2ced":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".uni-swiper__warp[data-v-d64b53d2]{\ndisplay:flex;\nflex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-d64b53d2]{position:absolute;bottom:10px;left:0;right:0;\ndisplay:flex;\nflex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-d64b53d2]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);\ncursor:pointer\n}.uni-swiper__dots-item[data-v-d64b53d2]:first-child{margin:0}.uni-swiper__dots-default[data-v-d64b53d2]{border-radius:100px}.uni-swiper__dots-long[data-v-d64b53d2]{border-radius:50px}.uni-swiper__dots-bar[data-v-d64b53d2]{border-radius:50px}.uni-swiper__dots-nav[data-v-d64b53d2]{bottom:0;height:40px;\ndisplay:flex;\nflex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-d64b53d2]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-d64b53d2]{\ndisplay:flex;\njustify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-d64b53d2]{color:#fff;font-size:12px}",""]),t.exports=e},"2f4a":function(t,e,n){"use strict";n.r(e);var o=n("1278"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"3bf7":function(t,e,n){var o=n("2602");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("b29c838c",o,!0,{sourceMap:!1,shadowMode:!1})},"3e67":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[]},"58bd":function(t,e,n){"use strict";n.r(e);var o=n("20c1"),i=n("2f4a");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("b992");var d,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"d64b53d2",null,!1,o["a"],d);e["default"]=s.exports},6964:function(t,e,n){var o=n("2ced");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("6b27389b",o,!0,{sourceMap:!1,shadowMode:!1})},8034:function(t,e,n){"use strict";n.r(e);var o=n("11d5"),i=n("0911");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f2a2");var d,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"7900a14e",null,!1,o["a"],d);e["default"]=s.exports},8795:function(t,e,n){"use strict";n.r(e);var o=n("3e67"),i=n("0d52");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("025e");var d,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"76375ba1",null,!1,o["a"],d);e["default"]=s.exports},"995b":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-7900a14e]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-7900a14e]{font-size:14px;line-height:inherit}.example[data-v-7900a14e]{padding:0 15px 15px}.example-info[data-v-7900a14e]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-7900a14e]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-7900a14e]{padding:0 15px}.example-info[data-v-7900a14e]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-7900a14e]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-7900a14e]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-7900a14e]{font-size:18px;color:#fff}.word-btn[data-v-7900a14e]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-7900a14e]{background-color:#4ca2ff}.swiper-box[data-v-7900a14e]{height:200px}.swiper-item[data-v-7900a14e]{\ndisplay:flex;\nflex-direction:column;justify-content:center;align-items:center;background-color:#999;color:#fff}.image[data-v-7900a14e]{width:%?750?%}\n[data-v-7900a14e] .image img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}\n@media screen and (min-width:500px){.uni-swiper-dot-box[data-v-7900a14e]{width:400px;margin:0 auto;margin-top:8px}.image[data-v-7900a14e]{width:100%}}.uni-bg-red[data-v-7900a14e]{background-color:#ff5a5f}.uni-bg-green[data-v-7900a14e]{background-color:#09bb07}.uni-bg-blue[data-v-7900a14e]{background-color:#007aff}.example-body[data-v-7900a14e]{\ndisplay:flex;\nflex-direction:row;padding:%?20?%}.example-body-item[data-v-7900a14e]{flex-direction:row;justify-content:center;align-items:center;margin:%?15?%;padding:%?15?%;height:%?60?%;\ndisplay:flex;padding:0 %?15?%;\nflex:1;border-color:#e5e5e5;border-style:solid;border-width:1px;border-radius:5px}.example-body-item-text[data-v-7900a14e]{font-size:%?28?%;color:#333}.example-body-dots[data-v-7900a14e]{width:%?16?%;height:%?16?%;border-radius:50px;background-color:#333;margin-left:%?10?%}.active[data-v-7900a14e]{border-style:solid;border-color:#007aff;border-width:1px}body.?%PAGE?%[data-v-7900a14e]{background-color:#efeff4}",""]),t.exports=e},"9fb6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0}},onLoad:function(){},methods:{change:function(t){this.swiperDotIndex=this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(t){this.swiperDotIndex=t},onBanner:function(e){t("log",22222,e," at pages/extUI/swiper-dot/swiper-dot.vue:108")}}};e.default=n}).call(this,n("0de9")["log"])},b992:function(t,e,n){"use strict";var o=n("6964"),i=n.n(o);i.a},bc83:function(t,e,n){var o=n("995b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("b71aa574",o,!0,{sourceMap:!1,shadowMode:!1})},dc12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},f2a2:function(t,e,n){"use strict";var o=n("bc83"),i=n.n(o);i.a}}]);