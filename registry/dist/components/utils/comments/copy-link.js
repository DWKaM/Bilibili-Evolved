!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/copy-link"]=t():e["utils/comments/copy-link"]=t()}(self,(function(){return function(){"use strict";var e,t,n={206:function(e){e.exports=coreApis.componentApis.utils.commentApis}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return n}});var e=coreApis.utils,t=coreApis.utils.urls;const n={name:"copyCommentsLink",displayName:"复制评论链接",description:{"zh-CN":"开启后, 可在每条评论的菜单中选择复制链接."},entry:async()=>{const{forEachCommentItem:n,addMenuItem:o}=await Promise.resolve().then(r.t.bind(r,206,23));n({added:n=>{const r=n=>{n.forEach((n=>{o(n,{className:"copy-link",text:"复制链接",action:async()=>{const o=(n=>{if(document.URL.match(/\/\/t\.bilibili\.com\/(\d+)/))return"";if(t.feedsUrls.every((t=>!(0,e.matchUrlPattern)(t))))return"";let o=n;for(;null!==o&&o!==document.body;){if(o.hasAttribute("data-did"))return`https://t.bilibili.com/${o.getAttribute("data-did")}`;o=o.parentElement}return""})(n.element)||document.URL.replace(location.hash,"");await navigator.clipboard.writeText(`${o}#reply${n.id}`);const r=dq(n.element,".opera-list");r&&(r.style.display="none")}})}))};r([n,...n.replies]),n.onRepliesUpdate=e=>r(e)}})},tags:[componentsTags.utils],commitHash:"63e6ee0f714d10f3c4200948d3a5527b5fc17b6d",coreVersion:"2.3.2"}}(),i=i.component}()}));