(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["about"],{"67d4":function(t,e,n){},"88e9":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container home"},[e("BaseHeader"),e("div",{staticClass:"content"},[e("keep-alive",[e("router-view",{staticClass:"content"})],1)],1)],1)},s=[],o=n("c7eb"),r=n("1da1"),a=n("5530"),u=n("2f62"),i=n("4624"),f=n("1014"),m={name:"Layout",mixins:[i["a"]],components:{BaseHeader:f["default"]},data:function(){return{showNotice:!1,activeName:"1"}},computed:Object(a["a"])(Object(a["a"])({},Object(u["e"])({user:function(t){return t.common.user},userInfo:function(t){return t.common.userInfo},accountList:function(t){return t.common.accountList},systemInfo:function(t){return t.common.systemInfo}})),{},{addr:function(){return this.user&&this.user.MainPKr}}),mounted:function(){var t=this;return Object(r["a"])(Object(o["a"])().mark((function e(){var n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$sero.getAccountList();case 2:n=e.sent,t.SET_ACCOUNT_LIST(n),t.getSystemInfo();case 5:case"end":return e.stop()}}),e)})))()},methods:Object(a["a"])({},Object(u["d"])(["SET_COINS","SET_ACCOUNT_LIST"]))},d=m,l=(n("9c2e"),n("2877")),b=Object(l["a"])(d,c,s,!1,null,null,null);e["default"]=b.exports},"9c2e":function(t,e,n){"use strict";n("67d4")}}]);