(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["index"],{4073:function(t,e,s){},9728:function(t,e,s){"use strict";s("e279")},afe5:function(t,e,s){"use strict";s("ff96")},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"migrate"},[e("span",{staticClass:"back"}),e("div",{staticClass:"step-box"},[e("div",{staticClass:"step"},[t._l(3,(function(s,a){return e("span",{key:a,staticClass:"circle",class:{activeCircle:a===t.active},style:{left:50*a+"%"}})})),t._l(3,(function(s,a){return e("div",{key:a,staticClass:"step-item",class:{active:a===t.active,top:1===a,right:2===a},style:t.getStyle(a)},[e("div",{staticClass:"desc",staticStyle:{left:"0%"}},[e("span",{staticClass:"index"},[t._v(" "+t._s(s)+"/3 ")]),e("p",{staticClass:"title"},[t._v(t._s(t.$t("Migrate.Title"+s)))]),e("p",{staticClass:"text11"},[t._v(t._s(t.$t("Migrate.Text"+s)))]),e("p",{staticClass:"desc1"},[t._v(t._s(t.$t("Migrate.Desc"+s)))])])])}))],2)]),e("div",{staticClass:"content1"},[t._v(" "+t._s(t.$t("Migrate.TITLE"))+" ")])])},n=[],i=s("c7eb"),r=s("1da1"),c=s("5530"),o=(s("d401"),s("d3b7"),s("25f0"),s("a9e3"),s("b680"),s("acd8"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"step"},[e("h4",{staticClass:"title"},[t._v(" "+t._s(t.$t("Migrate.title1"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.text1"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.text2"))+" ")]),e("h4",{staticClass:"title2"},[t._v(" "+t._s(t.$t("Migrate.text3"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text5"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text6"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text7"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text8"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text4"))+" ")]),e("div",{staticClass:"approve",on:{click:t.handleWithdraw}},[t._v(" "+t._s(t.$t("Migrate.Approve"))+" ")])])}),l=[],u=s("4624"),f={name:"Step1",mixins:[u["a"]],methods:{handleWithdraw:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){var s;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s="",e.next=4,t.$sero.execute("triggerVote",[],t.addr,t.addrPK);case 4:return s=e.sent,e.next=7,t.confirmTransaction(s);case 7:t.getSystemInfo();case 8:case"end":return e.stop()}}),e)})))()}}},d=f,p=(s("afe5"),s("2877")),v=Object(p["a"])(d,o,l,!1,null,"288f89d9",null),_=v.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"step"},[e("h4",{staticClass:"title"},[t._v(" "+t._s(t.$t("Migrate.title2"))+" ")]),e("div",{staticClass:"voting"},[e("i",{staticClass:"icon icon-msucc"}),e("span",{staticClass:"voting-text"},[t._v(" "+t._s(t.$t("Migrate.Voting"))+" ")])]),e("div",{staticClass:"rate",class:{isColor:t.isRate}},[t._v(t._s(t.rate)+"%")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text1"))+" ")]),e("p",{staticClass:"text mr1"},[t._v(" "+t._s(t.$t("Migrate.Step2Text2"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text3"))+" ")]),e("van-count-down",{staticClass:"day",attrs:{time:t.time},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"block"},[t._v(t._s(s.days)+" ")]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Day"))+"-")]),e("span",{staticClass:"block"},[t._v(t._s(s.hours)+" ")]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Hour"))+"-")]),e("span",{staticClass:"block"},[t._v(t._s(s.minutes))]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Min")))])]}}])}),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text4"))+" ")])],1)},g=[],x=(s("5ba3"),s("901e")),h=s.n(x),C={name:"Home",props:{rate:{type:String,default:"0.00"},time:{type:Number,require:!0}},components:{},data:function(){return{active:1}},computed:{isRate:function(){return 1===h()("50").comparedTo(h()(this.rate))}}},b=C,$=(s("9728"),Object(p["a"])(b,m,g,!1,null,"66137f94",null)),w=$.exports,M=(s("ed08"),s("2f62")),T=(s("2ef0"),{name:"Home",mixins:[u["a"]],components:{Step1:_,Step2:w},data:function(){return{time:0,rate:"0"}},computed:Object(c["a"])(Object(c["a"])({},Object(M["e"])({userInfo:function(t){return t.common.userInfo},systemInfo:function(t){return t.common.systemInfo},userAllPackages:function(t){return t.common.userAllPackages}})),{},{active:function(){return 0},medalShareTotal:function(){return console.log("dfd",this.systemInfo.medalShareTotal),new h.a(this.systemInfo.medalShareTotal).minus(new h.a(0x84dbe35cfeafb80)).toString(10)}}),mounted:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){var s,a,n,r,c,o;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$sero.call("getSystem",[]);case 2:s=e.sent,a=t.$sero.utils.fromTa(s.total),n=t.$sero.utils.fromTa(s.vote),r=s.end,c=Number((new Date).getTime()/1e3),t.time=1e3*(Number(r)-c),o=h()(n).div(h()(a)).times(h()("100")).toString(10),console.log("111",s,o),t.rate=parseFloat(o).toFixed(2);case 11:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:0!=t.userInfo.exist&&0==t.userInfo.vote||(t.active=1);case 1:case"end":return e.stop()}}),e)})))()},getStyle:function(t){return 0===t?"left: 0":1===t?"left: 50%":2===t?"right: 0":void 0},handleWithdraw:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){var s;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s="",e.next=4,t.$sero.execute("triggerVote",[],t.addr,t.addrPK);case 4:return s=e.sent,t.showWithdraw=!1,e.next=8,t.confirmTransaction(s);case 8:case"end":return e.stop()}}),e)})))()},taggle:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){var s,a,n;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s=t.isUsdt?usdtValue:s,a=t.systemInfo.triggleFee,s=t.$sero.utils.toTa(s),n="",e.next=7,t.$sero.execute("triggleAff",[t.addr,0,"0x0000000000000000000000000000000000000000000000000000000000000000",100],t.addr,t.addrPK,a,"UCON");case 7:return n=e.sent,t.showTrigger=!1,e.next=11,t.confirmTransaction(n);case 11:case"end":return e.stop()}}),e)})))()}}}),O=T,j=(s("cf8d"),Object(p["a"])(O,a,n,!1,null,"7492d650",null));e["default"]=j.exports},cf8d:function(t,e,s){"use strict";s("4073")},e279:function(t,e,s){},ff96:function(t,e,s){}}]);