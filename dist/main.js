(()=>{"use strict";var e={126:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([e.id,"#logo{\r\n    margin: auto;\r\n    text-align: center;\r\n    padding: 5px 10px 5px 10px;\r\n    border:4px solid goldenrod;\r\n    background-color: rgb(3, 3, 70);\r\n    color:goldenrod;\r\n    width:180px;\r\n    border-radius: 15px;\r\n}\r\n\r\n#navbar{\r\n    margin-top: 20px;\r\n}\r\n\r\n#searchtab{\r\n    width:60%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n#search{\r\n    height:40px;\r\n    border:2px solid black;\r\n    border-radius: 12px;\r\n    padding-left: 10px;\r\n    font-size: 18px;\r\n    width:60%;\r\n}\r\n\r\n#parameters{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 20px;\r\n}\r\n\r\n#parameters h3{\r\n    background:crimson;\r\n    padding:10px 15px 10px 15px;\r\n    cursor: pointer;\r\n    border-radius: 12px;\r\n    color:white;\r\n    font-size: 20px;\r\n}\r\n\r\n#container{\r\n    display:grid;\r\n    grid-template-columns: repeat(4,1fr);\r\n    justify-content: center;\r\n    gap:20px;\r\n}\r\n\r\n.appenddiv{\r\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n    text-align: center;\r\n    padding:10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.image{\r\n    width: 300px;\r\n    height:300px;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=t.base?c[0]+t.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=r(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=a(h,t);t.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);n[s].references--}for(var c=t(e,a),d=0;d<o.length;d++){var p=r(o[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(795),a=r.n(t),o=r(569),i=r.n(o),s=r(565),c=r.n(s),d=r(216),p=r.n(d),l=r(589),u=r.n(l),h=r(126),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let m=async(e,n)=>{try{let r=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&client_id=${n}`);return await r.json()}catch(e){console.log(e)}},v=(e,n)=>{setTimeout((()=>{e.map((e=>{let r=document.createElement("div");r.setAttribute("class","appenddiv");let t=document.createElement("h3");t.setAttribute("class","title"),t.innerText=e.alt_description;let a=document.createElement("img");a.setAttribute("class","image"),a.src=e.urls.small,r.append(a,t),n.append(r)}))}),2e3)};const x="mAOfyJwidanfoklCSpXxuToe9QjAkxqxu80oFKV2SmE";document.getElementById("navbar").innerHTML='    <div id="searchtab">\n    <input type="text" placeholder="search" id="search">\n</div>\n\n<div id="parameters">\n    <h3 id="nature">Nature</h3>\n    <h3 id="cars">Cars</h3>\n    <h3 id="cartoons">Cartoons</h3>\n    <h3 id="films">Films</h3>\n    <h3 id="technology">Technology</h3>\n    <h3 id="science">Science</h3>\n</div>';let g=document.getElementById("parameters").children;function y(){document.getElementById("search").value=this.id,m(this.id,x).then((e=>{let n=document.getElementById("container");n.innerHTML=null,v(e.results,n)}))}for(let e of g)e.addEventListener("click",y);document.getElementById("search").addEventListener("keydown",(e=>{if("Enter"===e.key){const e=document.getElementById("search").value;m(e,x).then((e=>{let n=document.getElementById("container");n.innerHTML=null,v(e.results,n)}))}}))})()})();