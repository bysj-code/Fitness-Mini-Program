(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaolian/add-or-update"],{1362:function(n,e,t){"use strict";(function(n){t("f588"),t("921b");i(t("66fd"));var e=i(t("974a"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"25cb":function(n,e,t){},"974a":function(n,e,t){"use strict";t.r(e);var i=t("f35d"),a=t("9f1b");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("efd1");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6ba5c320",null,!1,i["a"],o);e["default"]=s.exports},"9f1b":function(n,e,t){"use strict";t.r(e);var i=t("ef88"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},ef88:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,o){try{var u=n[r](o),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(i,a)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var o=n.apply(e,t);function u(n){r(o,i,a,u,s,"next",n)}function s(n){r(o,i,a,u,s,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5d79"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{jiaoliangonghao:"",mima:"",jiaolianxingming:"",xingbie:"",nianling:"",zhaopian:"",youxiang:"",shoujihao:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoliangonghao:!1,mima:!1,jiaolianxingming:!1,xingbie:!1,nianling:!1,zhaopian:!1,youxiang:!1,shoujihao:!1,money:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=o(i.default.mark((function e(t){var a,r,o,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("jiaolian",this.ruleForm.id);case 12:r=e.sent,this.ruleForm=r.data;case 14:if(!t.cross){e.next=57;break}o=n.getStorageSync("crossObj"),e.t0=i.default.keys(o);case 17:if((e.t1=e.t0()).done){e.next=57;break}if(u=e.t1.value,"jiaoliangonghao"!=u){e.next=23;break}return this.ruleForm.jiaoliangonghao=o[u],this.ro.jiaoliangonghao=!0,e.abrupt("continue",17);case 23:if("mima"!=u){e.next=27;break}return this.ruleForm.mima=o[u],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("jiaolianxingming"!=u){e.next=31;break}return this.ruleForm.jiaolianxingming=o[u],this.ro.jiaolianxingming=!0,e.abrupt("continue",17);case 31:if("xingbie"!=u){e.next=35;break}return this.ruleForm.xingbie=o[u],this.ro.xingbie=!0,e.abrupt("continue",17);case 35:if("nianling"!=u){e.next=39;break}return this.ruleForm.nianling=o[u],this.ro.nianling=!0,e.abrupt("continue",17);case 39:if("zhaopian"!=u){e.next=43;break}return this.ruleForm.zhaopian=o[u],this.ro.zhaopian=!0,e.abrupt("continue",17);case 43:if("youxiang"!=u){e.next=47;break}return this.ruleForm.youxiang=o[u],this.ro.youxiang=!0,e.abrupt("continue",17);case 47:if("shoujihao"!=u){e.next=51;break}return this.ruleForm.shoujihao=o[u],this.ro.shoujihao=!0,e.abrupt("continue",17);case 51:if("money"!=u){e.next=55;break}return this.ruleForm.money=o[u],this.ro.money=!0,e.abrupt("continue",17);case 55:e.next=17;break;case 57:this.styleChange();case 58:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){n.next=3;break}return this.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 3:if(!this.ruleForm.shoujihao||this.$validate.isMobile(this.ruleForm.shoujihao)){n.next=6;break}return this.$utils.msg("手机号应输入手机格式"),n.abrupt("return");case 6:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){n.next=9;break}return this.$utils.msg("余额应输入数字"),n.abrupt("return");case 9:if(!this.ruleForm.id){n.next=14;break}return n.next=12,this.$api.update("jiaolian",this.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,this.$api.add("jiaolian",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},efd1:function(n,e,t){"use strict";var i=t("25cb"),a=t.n(i);a.a},f35d:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))}},[["1362","common/runtime","common/vendor"]]]);