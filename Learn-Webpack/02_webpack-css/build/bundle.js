(()=>{var t={402:(t,r,n)=>{"use strict";var o=n(81),e=n.n(o),c=n(645);n.n(c)()(e()).push([t.id,".title {\r\n  color: lightcoral;\r\n  font-size: 26px;\r\n}",""])},645:t=>{"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var n="",o=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),o&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=t(r),o&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(t,n,o,e,c){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),e&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=e):l[4]="".concat(e)),r.push(l))}},r}},81:t=>{"use strict";t.exports=function(t){return t[1]}},466:t=>{t.exports={priceFormat:function(){return"￥98.89"}}}},r={};function n(o){var e=r[o];if(void 0!==e)return e.exports;var c=r[o]={id:o,exports:{}};return t[o](c,c.exports,n),c.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var o in r)n.o(r,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";n(402);const t=document.createElement("div");t.className="title",t.innerHTML="哈哈哈哈",document.body.appendChild(t);const{priceFormat:r}=n(466);console.log(50),console.log(r())})()})();