(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-countdown-countdown"],{"025e":function(t,n,e){"use strict";var o=e("3bf7"),i=e.n(o);i.a},"0d52":function(t,n,e){"use strict";e.r(n);var o=e("dc12"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"1a7f":function(t,n,e){"use strict";e.r(n);var o=e("3e78"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"1e76":function(t,n,e){"use strict";var o=e("431f"),i=e.n(o);i.a},2602:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=n},3087:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}')},"3bf7":function(t,n,e){var o=e("2602");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("b29c838c",o,!0,{sourceMap:!1,shadowMode:!1})},"3e67":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[]},"3e78":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={components:{},data:function(){return{testHour:1,testMinute:0,testSecond:0,start:!1,timeupSecond:10}},mounted:function(){var t=this;setTimeout((function(){t.testHour=1,t.testMinute=1,t.testSecond=0,t.start=!0}),3e3),setTimeout((function(){t.start=!1}),1e4)},methods:{timeup:function(){uni.showToast({title:"时间到"}),this.timeupSecond=29}}};n.default=o},"431f":function(t,n,e){var o=e("dac2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("8aed4d7e",o,!0,{sourceMap:!1,shadowMode:!1})},"452b":function(t,n,e){var o=e("cf01");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("f8ba52e6",o,!0,{sourceMap:!1,shadowMode:!1})},"551c":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.dayText))]):t._e(),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":t.hourText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":t.minuteText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.secondText))])],1)},a=[]},"58ff":function(t,n,e){"use strict";var o=e("452b"),i=e.n(o);i.a},"5a13":function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("907f")),a=o(e("c5b2")),r=o(e("3087")),u={en:i.default,"zh-Hans":a.default,"zh-Hant":r.default};n.default=u},"5ae4":function(t,n,e){"use strict";e.r(n);var o=e("e4e9"),i=e("1a7f");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("58ff");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"13a6f343",null,!1,o["a"],r);n["default"]=s.exports},8795:function(t,n,e){"use strict";e.r(n);var o=e("3e67"),i=e("0d52");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("025e");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"76375ba1",null,!1,o["a"],r);n["default"]=s.exports},"8a33":function(t,n,e){"use strict";e.r(n);var o=e("af16"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"907f":function(t){t.exports=JSON.parse('{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"}')},af16:function(t,n,e){"use strict";var o=e("4ea4");e("a9e3"),e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("37dc"),a=o(e("5a13")),r=(0,i.initVueI18n)(a.default),u=r.t,s={name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},computed:{dayText:function(){return u("uni-countdown.day")},hourText:function(t){return u("uni-countdown.h")},minuteText:function(t){return u("uni-countdown.m")},secondText:function(t){return u("uni-countdown.s")}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()},start:{immediate:!0,handler:function(t,n){if(t)this.startData();else{if(!n)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},destroyed:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o,i){return t?t-parseInt((new Date).getTime()/1e3,10):60*n*60*24+60*e*60+60*o+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0||(clearInterval(this.timer),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=s},c5b2:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"}')},cf01:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-13a6f343]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-13a6f343]{font-size:14px;line-height:inherit}.example[data-v-13a6f343]{padding:0 15px 15px}.example-info[data-v-13a6f343]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-13a6f343]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-13a6f343]{padding:0 15px}.example-info[data-v-13a6f343]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-13a6f343]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-13a6f343]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-13a6f343]{font-size:18px;color:#fff}.word-btn[data-v-13a6f343]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-13a6f343]{background-color:#4ca2ff}.example-body[data-v-13a6f343]{padding:10px}body.?%PAGE?%[data-v-13a6f343]{background-color:#efeff4}",""]),t.exports=n},d418:function(t,n,e){"use strict";e.r(n);var o=e("551c"),i=e("8a33");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("1e76");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"afcd682e",null,!1,o["a"],r);n["default"]=s.exports},dac2:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".uni-countdown[data-v-afcd682e]{\ndisplay:flex;\nflex-direction:row;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-afcd682e]{\ndisplay:flex;\njustify-content:center;line-height:%?48?%;padding:%?5?%;font-size:12px}.uni-countdown__number[data-v-afcd682e]{\ndisplay:flex;\njustify-content:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:12px}",""]),t.exports=n},dc12:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=o},e4e9:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={uniSection:e("8795").default,uniCountdown:e("d418").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")]),e("uni-section",{attrs:{title:"一般用法",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}})],1),e("uni-section",{attrs:{title:"自由控制开始/暂停",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{start:t.start,day:1,hour:1,minute:12,second:40}})],1),e("uni-section",{attrs:{title:"不显示天数",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{"show-day":!1,hour:12,minute:12,second:12}})],1),e("uni-section",{attrs:{title:"文字分隔符",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{minute:30,second:0,"show-colon":!1}})],1),e("uni-section",{attrs:{title:"修改颜色",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#007AFF","border-color":"#007AFF"}})],1),e("uni-section",{attrs:{title:"倒计时回调事件",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{"show-day":!1,second:t.timeupSecond},on:{timeup:function(n){arguments[0]=n=t.$handleEvent(n),t.timeup.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"动态赋值",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-countdown",{attrs:{"show-day":!1,hour:t.testHour,minute:t.testMinute,second:t.testSecond}})],1)],1)},a=[]}}]);