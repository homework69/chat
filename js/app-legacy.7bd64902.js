(function(){"use strict";var n={3601:function(n,e,s){s(6992),s(8674),s(9601),s(7727);var t=s(5010),o=s(3396),a={class:"messages"},i={class:"messages__window"},r={class:"messages__window"};function c(n,e,s,t,c,u){var l=(0,o.up)("Header"),d=(0,o.up)("Main"),m=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o.Wm)(l,{src:"alex",name:"Александр",status:"Онлайн"}),(0,o.Wm)(d,{sendId:2,message:c.message},null,8,["message"]),(0,o.Wm)(m,{sendId:2,onNewMess:u.newMess},null,8,["onNewMess"])]),(0,o._)("div",r,[(0,o.Wm)(l,{src:"jane",name:"Евгений",status:"Онлайн"}),(0,o.Wm)(d,{sendId:1,message:c.message},null,8,["message"]),(0,o.Wm)(m,{sendId:1,onNewMess:u.newMess},null,8,["onNewMess"])])])}s(7658),s(8862),s(8309);var u=s(7139),l={class:"messages__window-header"},d=["src"],m={class:"messages__window-info"},f={class:"messages__window-name"},w={class:"messages__window-status"};function g(n,e,s,t,a,i){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("img",{src:a.ava[s.src],alt:"",class:"messages__window-avatar"},null,8,d),(0,o._)("div",m,[(0,o._)("h2",f,(0,u.zw)(s.name),1),(0,o._)("p",w,(0,u.zw)(s.status),1)])])}var _={props:["src","name","status"],data:function(){return{ava:{alex:s(7831),jane:s(8152)}}}},p=s(89);const h=(0,p.Z)(_,[["render",g]]);var v=h,b={class:"main"},y={class:"main__chatitem-time"},M={class:"main__chatitem-text"},k=["src"];function D(n,e,s,a,i,r){return(0,o.wg)(),(0,o.iD)("main",b,[(0,o.Wm)(t.W3,{name:"list"},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.message,(function(n,e){var t;return(0,o.wg)(),(0,o.iD)("div",{class:"main__chatitem",key:e},[(0,o._)("div",{class:(0,u.C_)(["main__chatitem-body",{send:n.sendId==s.sendId,get:n.sendId!=s.sendId}])},[(0,o._)("span",y,(0,u.zw)(n.time),1),(0,o._)("div",M,[(null===(t=n.photo)||void 0===t?void 0:t.length)>0?((0,o.wg)(),(0,o.iD)("img",{key:0,src:n.photo,alt:""},null,8,k)):(0,o.kq)("",!0),(0,o._)("p",null,(0,u.zw)(n.body),1)])],2)])})),128))]})),_:1})])}s(9653);var I={props:{message:Array,sendId:Number}};const O=(0,p.Z)(I,[["render",D]]);var x=O,j=s.p+"img/photo.6260456c.svg",C=s.p+"img/send.e8776971.svg",W={class:"footer"},N=(0,o._)("img",{src:j,alt:""},null,-1),H=[N],P=(0,o._)("img",{src:C,alt:""},null,-1),S=[P],z=(0,o._)("h2",{class:"window__title"},"Отправить картинку",-1),U={class:"window__form"},Z=(0,o._)("span",null,"URL",-1),F=(0,o._)("span",null,"Комментарий",-1),V={class:"window__footer"};function q(n,e,s,a,i,r){return(0,o.wg)(),(0,o.iD)("footer",W,[(0,o.wy)((0,o._)("textarea",{rows:"1",placeholder:"Написать сообщение...",class:"footer__edit","onUpdate:modelValue":e[0]||(e[0]=function(n){return i.message=n})},"\r\n    ",512),[[t.nr,i.message]]),0==i.message.length?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"footer__btn",onClick:e[1]||(e[1]=function(n){return i.window=!0})},H)):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"footer__btn",onClick:e[2]||(e[2]=function(){return r.sendMess&&r.sendMess.apply(r,arguments)})},S)),i.window?((0,o.wg)(),(0,o.iD)("div",{key:2,class:"window",onClick:e[8]||(e[8]=function(n){return i.window=!1})},[(0,o._)("div",{class:"window__body",onClick:e[7]||(e[7]=(0,t.iM)((function(){}),["stop","prevent"]))},[z,(0,o._)("div",U,[(0,o._)("label",null,[Z,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[3]||(e[3]=function(n){return i.photo=n})},null,512),[[t.nr,i.photo]])]),(0,o._)("label",null,[F,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(n){return i.comment=n})},null,512),[[t.nr,i.comment]])])]),(0,o._)("div",V,[(0,o._)("button",{class:"btn",onClick:e[5]||(e[5]=function(n){return i.window=!1})},"Отмена"),(0,o._)("button",{class:"btn",onClick:e[6]||(e[6]=function(){return r.sendMessPhoto&&r.sendMessPhoto.apply(r,arguments)})},"ОТПРАВИТЬ")])])])):(0,o.kq)("",!0)])}s(2222),s(3210);var J={props:["sendId"],data:function(){return{message:"",window:!1,photo:"",comment:""}},methods:{sendMessPhoto:function(){var n="".concat((new Date).getHours(),":").concat((new Date).getMinutes());if(this.photo.length>0){var e={};e.body=this.comment.trim(),e.sendId=this.sendId,e.photo=this.photo.trim(),e.time=n,this.$emit("newMess",e),this.comment=this.photo="",this.window=!1}},sendMess:function(){var n="".concat((new Date).getHours(),":").concat((new Date).getMinutes());if(this.message.length>0){var e={};e.body=this.message.trim(),e.sendId=this.sendId,e.time=n,this.$emit("newMess",e),this.message=""}}}};const T=(0,p.Z)(J,[["render",q]]);var $=T,A={components:{Header:v,Main:x,Footer:$},data:function(){return{message:[]}},created:function(){var n=localStorage.message?JSON.parse(localStorage.message):[];this.message=n},methods:{newMess:function(n){this.message.push(n),localStorage.message=JSON.stringify(this.message)}}};const E=(0,p.Z)(A,[["render",c]]);var K=E;(0,t.ri)(K).mount("#app")},7831:function(n,e,s){n.exports=s.p+"img/alex.1b994f55.svg"},8152:function(n,e,s){n.exports=s.p+"img/jane.4d2a191f.svg"}},e={};function s(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return n[t](a,a.exports,s),a.exports}s.m=n,function(){var n=[];s.O=function(e,t,o,a){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],o=n[l][1],a=n[l][2];for(var r=!0,c=0;c<t.length;c++)(!1&a||i>=a)&&Object.keys(s.O).every((function(n){return s.O[n](t[c])}))?t.splice(c--,1):(r=!1,a<i&&(i=a));if(r){n.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,o,a]}}(),function(){s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,{a:e}),e}}(),function(){s.d=function(n,e){for(var t in e)s.o(e,t)&&!s.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){s.p="/chat/"}(),function(){var n={143:0};s.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,a,i=t[0],r=t[1],c=t[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(c)var l=c(s)}for(e&&e(t);u<i.length;u++)a=i[u],s.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return s.O(l)},t=self["webpackChunkchat"]=self["webpackChunkchat"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(3601)}));t=s.O(t)})();
//# sourceMappingURL=app-legacy.7bd64902.js.map