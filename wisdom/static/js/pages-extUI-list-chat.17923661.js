(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-chat"],{"14bc":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return a}));var a={uniSection:e("8795").default,uniList:e("e3cc").default,uniListChat:e("025f").default,uniIcons:e("1ffe").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("此示例展示了聊天列表的使用场景")]),e("uni-section",{attrs:{title:"圆头像且不显示分割线",type:"line"}}),e("uni-list",{attrs:{border:!1}},t._l(t.listData,(function(t){return e("uni-list-chat",{key:t.id,attrs:{"avatar-circle":!0,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,clickable:!1}})})),1),e("uni-section",{attrs:{title:"带圆点",type:"line"}}),e("uni-list",t._l(t.listData,(function(t){return e("uni-list-chat",{key:t.id,attrs:{title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,"badge-text":t.text,clickable:!1,"badge-positon":"left","badge-text":"dot"}})})),1),e("uni-section",{attrs:{title:"自定义右侧内容",type:"line"}}),e("uni-list",t._l(t.listData,(function(n){return e("uni-list-chat",{key:n.id,attrs:{title:n.author_name,avatar:n.cover,note:n.title,"badge-positon":"left","badge-text":n.text}},[e("v-uni-view",{staticClass:"chat-custom-right"},[e("v-uni-text",{staticClass:"chat-custom-text"},[t._v("刚刚")]),e("uni-icons",{attrs:{type:"star-filled",color:"#999",size:"18"}})],1)],1)})),1),e("uni-section",{attrs:{title:"带通知角标的单头像聊天列表",type:"line"}}),e("uni-list",t._l(t.listData,(function(n){return e("uni-list-chat",{key:n.id,attrs:{title:n.author_name,avatar:n.cover,note:n.title,time:n.published_at,clickable:!0,"badge-text":n.text},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}})})),1),e("uni-section",{attrs:{title:"带通知角标的多头像聊天列表",type:"line"}}),e("uni-list",t._l(t.listData,(function(n,a){return e("uni-list-chat",{key:n.id,attrs:{title:n.author_name,avatar:n.cover,note:n.title,time:n.published_at,clickable:!0,avatarList:t.avatar(a+1),"badge-text":n.text},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}})})),1)],1)},l=[]},"1c12":function(t,n,e){var a=e("24fb"),i=e("1de5"),l=e("97ed");n=a(!1);var o=i(l);n.push([t.i,"\n@font-face{font-family:uniicons;src:url("+o+') format("truetype")}\n.uni-icons[data-v-3623ae51]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=n},"1ffe":function(t,n,e){"use strict";e.r(n);var a=e("fee4"),i=e("4b5b");for(var l in i)"default"!==l&&function(t){e.d(n,t,(function(){return i[t]}))}(l);e("6f5e");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"3623ae51",null,!1,a["a"],o);n["default"]=c.exports},"40cd":function(t,n,e){"use strict";var a=e("9383"),i=e.n(a);i.a},"4b5b":function(t,n,e){"use strict";e.r(n);var a=e("a7e8"),i=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(n,t,(function(){return a[t]}))}(l);n["default"]=i.a},"535b":function(t,n,e){var a=e("1c12");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("1a4b4c73",a,!0,{sourceMap:!1,shadowMode:!1})},"5bc7":function(t,n,e){"use strict";(function(t){e("99af"),e("4160"),e("d81d"),e("fb6a"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},data:function(){return{UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[],avatarList:[{url:"/static/logo.png"},{url:"/static/logo.png"},{url:"/static/logo.png"}]}},onLoad:function(){this.getList()},methods:{onClick:function(){uni.showToast({title:"列表被点击"})},avatar:function(t){var n=[];return this.avatarList.forEach((function(e,a){a<t&&n.push(e)})),n},getList:function(){var n=this,e={column:"id,post_id,title,author_name,cover,published_at"};uni.request({url:"https://unidemo.dcloud.net.cn/api/news",data:e,success:function(t){if(200==t.statusCode){var e=n.setTime(t.data);e=n.reload?e:n.listData.concat(e),e.map((function(t){return t.text=Math.floor(-19*Math.random()+20),t})),n.listData=n.getRandomArrayElements(e,3)}},fail:function(n,e){t("log","fail"+JSON.stringify(n)," at pages/extUI/list/chat.vue:93")}})},getRandomArrayElements:function(t,n){var e,a,i=t.slice(0),l=t.length,o=l-n;while(l-- >o)a=Math.floor((l+1)*Math.random()),e=i[a],i[a]=i[l],i[l]=e;return i.slice(o)},setTime:function(t){var n=this,e=[];return t.forEach((function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:n.format(t.published_at),title:t.title})})),e},format:function(t){var n=this.parse(t),e=Date.now()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var a=function(t){return t<10?"0"+t:t};return n.getFullYear()+"-"+a(n.getMonth()+1)+"-"+a(n.getDate())+" "+a(n.getHours())+":"+a(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}}};n.default=a}).call(this,e("0de9")["log"])},"6f5e":function(t,n,e){"use strict";var a=e("535b"),i=e.n(a);i.a},"80e4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};n.default=a},"914f":function(t,n,e){"use strict";e.r(n);var a=e("14bc"),i=e("9e11");for(var l in i)"default"!==l&&function(t){e.d(n,t,(function(){return i[t]}))}(l);e("40cd");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"52efd00a",null,!1,a["a"],o);n["default"]=c.exports},9383:function(t,n,e){var a=e("c560");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("2f0589a8",a,!0,{sourceMap:!1,shadowMode:!1})},"97ed":function(t,n,e){t.exports=e.p+"static/fonts/uni.75745d34.ttf"},"9e11":function(t,n,e){"use strict";e.r(n);var a=e("5bc7"),i=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(n,t,(function(){return a[t]}))}(l);n["default"]=i.a},a7e8:function(t,n,e){"use strict";var a=e("4ea4");e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("80e4")),l={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};n.default=l},c560:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-52efd00a]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-52efd00a]{font-size:14px;line-height:inherit;background-color:#d3dce6}.example[data-v-52efd00a]{padding:0 15px 15px}.example-info[data-v-52efd00a]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-52efd00a]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-52efd00a]{padding:0 15px}.example-info[data-v-52efd00a]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-52efd00a]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-52efd00a]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-52efd00a]{font-size:18px;color:#fff}.word-btn[data-v-52efd00a]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-52efd00a]{background-color:#4ca2ff}.chat-custom-right[data-v-52efd00a]{flex:1;\ndisplay:flex;\nflex-direction:column;justify-content:space-between;align-items:flex-end}.chat-custom-text[data-v-52efd00a]{font-size:12px;color:#999}body.?%PAGE?%[data-v-52efd00a]{background-color:#efeff4}",""]),t.exports=n},fee4:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},l=[]}}]);