(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["index"],{4823:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"migrate"})},r=[],n=s("c7eb"),i=s("1da1"),c=s("5530"),o=(s("d401"),s("d3b7"),s("25f0"),s("ed08"),s("2f62")),l=s("4624"),d=s("901e"),u=s.n(d),f=s("4e9a"),v=(s("2ef0"),{name:"Home",mixins:[l["a"]],components:{Step1:Step1,Step2:Step2},data:function(){return{time:0,rate:"0",contract:null}},computed:Object(c["a"])(Object(c["a"])({},Object(o["e"])({userInfo:function(t){return t.common.userInfo},systemInfo:function(t){return t.common.systemInfo},userAllPackages:function(t){return t.common.userAllPackages}})),{},{active:function(){return 0},medalShareTotal:function(){return console.log("dfd",this.systemInfo.medalShareTotal),new u.a(this.systemInfo.medalShareTotal).minus(new u.a(0x84dbe35cfeafb80)).toString(10)}}),mounted:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.contract=new Sero({ABI:f["a"],dapp:dapp,contractAddress:"WK9DrgoBXktMpePUQaC1q9SgG9YoZXKPutFsRXn3Y5tmQtw7AVLKoh1HSxfyhUWvrh4fGDxQrAPkHAkA39DRP5X"});case 1:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:0!=t.userInfo.exist&&0==t.userInfo.vote||(t.active=1);case 1:case"end":return e.stop()}}),e)})))()},handleWithdraw:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s="",e.next=4,t.$sero.execute("triggerVote",[],t.addr,t.addrPK);case 4:return s=e.sent,t.showWithdraw=!1,e.next=8,t.confirmTransaction(s);case 8:case"end":return e.stop()}}),e)})))()},taggle:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a,r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s=t.isUsdt?usdtValue:s,a=t.systemInfo.triggleFee,s=t.$sero.utils.toTa(s),r="",e.next=7,t.$sero.execute("triggleAff",[t.addr,0,"0x0000000000000000000000000000000000000000000000000000000000000000",100],t.addr,t.addrPK,a,"UCON");case 7:return r=e.sent,t.showTrigger=!1,e.next=11,t.confirmTransaction(r);case 11:case"end":return e.stop()}}),e)})))()}}}),p=v,m=(s("af49"),s("2877")),_=Object(m["a"])(p,a,r,!1,null,"75ed807b",null);e["default"]=_.exports},"8ebd":function(t,e,s){"use strict";s("bc9b")},9728:function(t,e,s){"use strict";s("e279")},af49:function(t,e,s){"use strict";s("c779")},afe5:function(t,e,s){"use strict";s("ff96")},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"migrate"},[e("span",{staticClass:"back"}),e("div",{staticClass:"step-box"},[e("div",{staticClass:"step"},[t._l(3,(function(s,a){return e("span",{key:a,staticClass:"circle",class:{activeCircle:a===t.active},style:{left:50*a+"%"}})})),t._l(3,(function(s,a){return e("div",{key:a,staticClass:"step-item",class:{active:a===t.active,top:1===a,right:2===a},style:t.getStyle(a)},[e("div",{staticClass:"desc",staticStyle:{left:"0%"}},[e("span",{staticClass:"index"},[t._v(" "+t._s(s)+"/3 ")]),e("p",{staticClass:"title"},[t._v(t._s(t.$t("Migrate.Title"+s)))]),e("p",{staticClass:"text11"},[t._v(t._s(t.$t("Migrate.Text"+s)))]),e("p",{staticClass:"desc1"},[t._v(t._s(t.$t("Migrate.Desc"+s)))])])])}))],2)]),0===t.active?e("div",{staticClass:"content1"},[t._v(" "+t._s(t.$t("Migrate.TITLE"))+" ")]):t._e(),1===t.active?e("div",{staticClass:"content2"},[e("h4",{staticClass:"title1"},[t._v(" "+t._s(t.$t("Migrate.TITLE1"))+" ")]),e("h4",{staticClass:"title3"},[t._v(" "+t._s(t.$t("Claim.Text4"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text5"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text6"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text9"))+" ")]),e("h4",{staticClass:"title3"},[t._v(" "+t._s(t.$t("Claim.Text7"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text8"))+" ")])]):t._e(),2!==t.active||t.isSeroAddress?t._e():e("div",{staticClass:"content2"},[e("h4",{staticClass:"title1"},[t._v(" "+t._s(t.$t("Claim.Title1"))+" ")]),t.isSeroAddress?t._e():e("h4",{staticClass:"tip"},[e("van-icon",{staticClass:"icon",attrs:{name:"warning-o"}}),t._v(" "+t._s(t.$t("Claim.Title2"))+" ")],1),e("h4",{staticClass:"title2"},[t._v(" "+t._s(t.$t("Claim.Title2"))+" ")]),e("div",{staticClass:"input"},[e("van-field",{attrs:{placeholder:"0X",clearable:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),e("div",{staticClass:"error"},[t._v(" "+t._s(t.errorText)+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text1"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text2"))+" ")]),e("div",{staticClass:"btn",on:{click:t.claim}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])]),2===t.active&&t.isSeroAddress?e("div",{staticClass:"content2"},[e("h4",{staticClass:"title1"},[t._v(" "+t._s(t.$t("Claim.Title1"))+" ")]),e("h4",{staticClass:"tip1"},[e("van-icon",{staticClass:"icon",attrs:{name:"certificate"}}),t._v(" "+t._s(t.$t("Claim.Title4"))+" ")],1),e("h4",{staticClass:"title2"},[t._v(" "+t._s(t.$t("Claim.Title5"))+" ")]),e("div",{staticClass:"input"},[t._v(" "+t._s(t.addrText)+" ")]),e("div",{staticClass:"error"},[t._v(" "+t._s(t.errorText)+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Claim.Text3"))+" ")])]):t._e()])},r=[],n=s("c7eb"),i=s("1da1"),c=s("5530"),o=(s("fb6a"),s("d401"),s("d3b7"),s("25f0"),s("a9e3"),s("b680"),s("acd8"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"step"},[e("h4",{staticClass:"title"},[t._v(" "+t._s(t.$t("Migrate.title1"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.text1"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.text2"))+" ")]),e("h4",{staticClass:"title2"},[t._v(" "+t._s(t.$t("Migrate.text3"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text5"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text6"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text7"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text8"))+" ")]),e("p",{staticClass:"text1"},[t._v(" "+t._s(t.$t("Migrate.text4"))+" ")]),e("div",{staticClass:"approve",on:{click:t.handleWithdraw}},[t._v(" "+t._s(t.$t("Migrate.Approve"))+" ")])])}),l=[],d=s("4624"),u={name:"Step1",mixins:[d["a"]],methods:{handleWithdraw:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s="",e.next=4,t.$sero.execute("triggerVote",[],t.addr,t.addrPK);case 4:return s=e.sent,e.next=7,t.confirmTransaction(s);case 7:t.getSystemInfo();case 8:case"end":return e.stop()}}),e)})))()}}},f=u,v=(s("afe5"),s("2877")),p=Object(v["a"])(f,o,l,!1,null,"288f89d9",null),m=p.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"step"},[e("h4",{staticClass:"title"},[t._v(" "+t._s(t.$t("Migrate.title2"))+" ")]),e("div",{staticClass:"voting"},[e("i",{staticClass:"icon icon-msucc"}),e("span",{staticClass:"voting-text"},[t._v(" "+t._s(t.$t("Migrate.Voting"))+" ")])]),e("div",{staticClass:"rate",class:{isColor:t.isRate}},[t._v(t._s(t.rate)+"%")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text1"))+" ")]),e("p",{staticClass:"text mr1"},[t._v(" "+t._s(t.$t("Migrate.Step2Text2"))+" ")]),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text3"))+" ")]),e("van-count-down",{staticClass:"day",attrs:{time:t.time},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"block"},[t._v(t._s(s.days)+" ")]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Day"))+"-")]),e("span",{staticClass:"block"},[t._v(t._s(s.hours)+" ")]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Hour"))+"-")]),e("span",{staticClass:"block"},[t._v(t._s(s.minutes))]),e("span",{staticClass:"colon"},[t._v(t._s(t.$t("Migrate.Min")))])]}}])}),e("p",{staticClass:"text"},[t._v(" "+t._s(t.$t("Migrate.Step2Text4"))+" ")])],1)},x=[],h=(s("5ba3"),s("901e")),b=s.n(h),C={name:"Home",props:{rate:{type:String,default:"0.00"},time:{type:Number,require:!0}},components:{},data:function(){return{active:1}},computed:{isRate:function(){return 1===b()("50").comparedTo(b()(this.rate))}}},g=C,w=(s("9728"),Object(v["a"])(g,_,x,!1,null,"66137f94",null)),T=w.exports,$=(s("ed08"),s("2f62")),j=s("4e9a"),O=s("b5c7"),k=s("db49"),S=s("c0d8"),A=s.n(S),M=(s("2ef0"),{name:"Home",mixins:[d["a"]],components:{Step1:m,Step2:T},data:function(){return{time:0,rate:"0",isSeroAddress:!1,address:"",active:2,contract:null,errorText:""}},computed:Object(c["a"])(Object(c["a"])({},Object($["e"])({userInfo:function(t){return t.common.userInfo},systemInfo:function(t){return t.common.systemInfo},userAllPackages:function(t){return t.common.userAllPackages}})),{},{addrText:function(){return this.address.slice(0,4)+"..."+this.address.slice(-4)},medalShareTotal:function(){return console.log("dfd",this.systemInfo.medalShareTotal),new b.a(this.systemInfo.medalShareTotal).minus(new b.a(0x84dbe35cfeafb80)).toString(10)}}),watch:{addr:function(t){}},mounted:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a,r,i,c,o;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.contract=new O["a"]({ABI:j["a"],dapp:k["dapp"],contractAddress:"5XRL8JUBP7ddw2bJRBo2qRk4Evh7a5d5bmzC7UNV6qhoCj4U7BU79kYqkjR8niyJWMMkuhuReFZWG8MAHFnELk7K"}),e.next=3,t.$sero.call("getSystem",[]);case 3:s=e.sent,a=t.$sero.utils.fromTa(s.total),r=t.$sero.utils.fromTa(s.vote),i=s.end,c=Number((new Date).getTime()/1e3),t.time=1e3*(Number(i)-c),o=b()(r).div(b()(a)).times(b()("100")).toString(10),t.rate=parseFloat(o).toFixed(2),t.getSeroAddress();case 12:case"end":return e.stop()}}),e)})))()},methods:{getSeroAddress:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a,r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addr="",e.next=3,t.contract.call("seroAddrRecord",[t.addr],t.addr);case 3:if(s=e.sent,t.isSeroAddress=s[0],t.active=2,!t.isSeroAddress){e.next=14;break}return e.next=9,t.contract.call("getAddrClaim",[t.addr],t.addr);case 9:a=e.sent,console.log("sssss",s,a),r=a.ubsv1Info,a.uminerInfo,t.address=r.bscAddr,console.log("info",a);case 14:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a,r,i;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=new A.a,a=s.utils.isAddress(t.address),a){e.next=5;break}return t.errorText=t.$t("Claim.Error1"),e.abrupt("return",!1);case 5:return r=s.eth.abi.encodeParameter("address",t.address),e.next=8,t.contract.call("bscAddrRecord",[r]);case 8:if(i=e.sent,console.log("isAddress",i),!i[0]){e.next=13;break}return t.errorText=t.$t("Claim.Error2"),e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})))()},claim:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAddress();case 2:if(s=e.sent,!s){e.next=11;break}return t.openToast(),e.next=7,t.contract.execute("claim",[t.address],t.addr,t.addrPK);case 7:return a=e.sent,e.next=10,t.confirmTransaction(a);case 10:t.getSeroAddress();case 11:case"end":return e.stop()}}),e)})))()},load:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:0!=t.userInfo.exist&&0==t.userInfo.vote||(t.active=1);case 1:case"end":return e.stop()}}),e)})))()},getStyle:function(t){return 0===t?"left: 0":1===t?"left: 50%":2===t?"right: 0":void 0},handleWithdraw:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s="",e.next=4,t.$sero.execute("triggerVote",[],t.addr,t.addrPK);case 4:return s=e.sent,t.showWithdraw=!1,e.next=8,t.confirmTransaction(s);case 8:case"end":return e.stop()}}),e)})))()},taggle:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,a,r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.openToast(),s=t.isUsdt?usdtValue:s,a=t.systemInfo.triggleFee,s=t.$sero.utils.toTa(s),r="",e.next=7,t.$sero.execute("triggleAff",[t.addr,0,"0x0000000000000000000000000000000000000000000000000000000000000000",100],t.addr,t.addrPK,a,"UCON");case 7:return r=e.sent,t.showTrigger=!1,e.next=11,t.confirmTransaction(r);case 11:case"end":return e.stop()}}),e)})))()}}}),y=M,I=(s("8ebd"),Object(v["a"])(y,a,r,!1,null,"1326a368",null));e["default"]=I.exports},bc9b:function(t,e,s){},c779:function(t,e,s){},e279:function(t,e,s){},ff96:function(t,e,s){}}]);