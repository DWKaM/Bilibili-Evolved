!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/outer-watchlater"]=e():t["video/outer-watchlater"]=e()}(self,(function(){return function(){var t,e,n={51:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".video-toolbar .ops .watchlater,\n.video-toolbar-v1 .toolbar-left .watchlater {\n  font-size: 14px;\n  font-weight: normal;\n  margin-right: 28px !important;\n  position: relative;\n  width: auto !important;\n}\n@media screen and (max-width: 1320px), (max-height: 750px) {\n.video-toolbar .ops .watchlater,\n.video-toolbar-v1 .toolbar-left .watchlater {\n    margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.video-toolbar .ops .watchlater .text,\n.video-toolbar-v1 .toolbar-left .watchlater .text {\n    display: none;\n}\n}\n.video-toolbar .ops .watchlater .tip,\n.video-toolbar-v1 .toolbar-left .watchlater .tip {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.8666666667);\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #eee;\n  transition: all 0.2s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.video-toolbar .ops .watchlater .tip.show,\n.video-toolbar-v1 .toolbar-left .watchlater .tip.show {\n  opacity: 1;\n  pointer-events: initial;\n}\n.video-toolbar .ops .watchlater .be-icon,\n.video-toolbar-v1 .toolbar-left .watchlater .be-icon {\n  display: inline-flex;\n}\n.video-toolbar-v1 .watchlater .be-icon {\n  transform: translateY(1px);\n}\n.more-ops-list > ul > li:nth-child(2),\n.van-popover .more_dropdown > li:nth-child(2) {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,e),references:1}),o.push(d)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,v=0;function m(t,e){var n,o,r;if(e.singleton){var i=v++;n=h||(h=l(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(t,e),l=0;l<n.length;l++){var d=s(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},532:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"watchlater",class:{on:t.on},attrs:{title:"稍后再看"},on:{click:function(e){return t.toggle()}}},[n("VIcon",{staticClass:"icon",attrs:{size:28,icon:"mdi-timetable"}}),t._v(" "),n("span",{staticClass:"text"},[t._v("稍后再看")]),t._v(" "),n("div",{staticClass:"tip",class:{show:t.tipShowing}},[t._v(t._s(t.tipText))])],1)};o._withStripped=!0;var r=coreApis.ui,i=coreApis.componentApis.video.watchlater,a=Vue.extend({components:{VIcon:r.VIcon},data:()=>({watchlaterList:i.watchlaterList,aid:unsafeWindow.aid,tipText:"",tipShowing:!1,tipHandle:0}),computed:{on(){return console.log(this.watchlaterList,this.aid,this.watchlaterList.includes(parseInt(this.aid))),this.watchlaterList.includes(parseInt(this.aid))}},methods:{showTip(t){this.tipText=t,this.tipShowing=!0,this.tipHandle&&clearTimeout(this.tipHandle),this.tipHandle=setTimeout((()=>{this.tipShowing=!1}),2e3)},async toggle(){await(0,i.toggleWatchlater)(this.aid),this.showTip(this.on?"已添加至稍后再看":"已从稍后再看移除")}}}),s=n(379),c=n.n(s),l=n(51),d=n.n(l),u={insert:"head",singleton:!1};c()(d(),u),d().locals;var p=function(t,e,n,o,r,i,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}(a,o,[],!1,null,null,null);p.options.__file="registry/lib/components/video/outer-watchlater/OuterWatchlater.vue";var f=p.exports},391:function(t){"use strict";t.exports=coreApis.observer},200:function(t){"use strict";t.exports=coreApis.spinQuery},605:function(t){"use strict";t.exports=coreApis.utils}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return a}});var t=coreApis.componentApis.define,e=r(605),n=coreApis.utils.urls;const o=(0,t.defineOptionsMetadata)({showInWatchlaterPages:{defaultValue:!1,displayName:"在稍后再看页面中仍然显示"}}),a=(0,t.defineComponentMetadata)({name:"outerWatchlater",displayName:"外置稍后再看",entry:async t=>{let{settings:o}=t;if(n.watchlaterUrls.some(e.matchUrlPattern)&&!o.options.showInWatchlaterPages)return;const{mountVueComponent:i,getUID:a,playerReady:s}=await Promise.resolve().then(r.t.bind(r,605,23));if(!a())return;await s();const c=dq(".video-toolbar .ops .collect, .video-toolbar-v1 .toolbar-left .collect");if(!c)return;const{hasVideo:l}=await Promise.resolve().then(r.t.bind(r,200,23));await l();const d=i(await Promise.resolve().then(r.bind(r,532)));c.insertAdjacentElement("afterend",d.$el);const{videoChange:u}=await Promise.resolve().then(r.t.bind(r,391,23));u((t=>{let{aid:e}=t;console.log("videoChange",unsafeWindow.aid,e),d.aid=unsafeWindow.aid}))},tags:[componentsTags.video],description:{"zh-CN":"将视频页面菜单里的 `稍后再看` 移到外面. 请注意如果在稍后再看页面中仍然显示, 是不会实时同步右侧的播放列表的."},urlInclude:n.videoUrls,options:o,reload:()=>{dqa(".ops .watchlater").forEach((t=>{t.style.display="inline-block"}))},unload:()=>{dqa(".ops .watchlater").forEach((t=>{t.style.display="none"}))},plugin:{displayName:"稍后再看 - 快捷键支持",setup:t=>{let{addData:e}=t;e("keymap.actions",(t=>{t.watchlater={displayName:"稍后再看",run:t=>{const{clickElement:e}=t;return e(".video-toolbar .ops .watchlater, .more-ops-list .ops-watch-later, .video-toolbar-module .see-later-box",t)}}})),e("keymap.presets",(t=>{t.watchlater="shift w"}))}},commitHash:"63e6ee0f714d10f3c4200948d3a5527b5fc17b6d",coreVersion:"2.3.2"})}(),i=i.component}()}));