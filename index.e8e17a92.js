!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i.register("kPTCV",(function(t,e){t.exports=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("fEyDU")})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.e8e17a92.js","fEyDU":"no-images-found.2dcc3282.png","5UbS1":"index.3f274036.css","7nwxg":"library.debe4a03.js"}'));var o=i("iY7oS"),s=i("bpxeT"),a=i("2TvXO"),u=i("dIxxU");function c(){return(c=t(s)(t(a).mark((function e(n,r,i,o){var s;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(u).get("https://api.themoviedb.org/3/trending/".concat(r,"/").concat(i,"?api_key=").concat(n,"&page=").concat(o));case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var l=function(t,e,n,r){return c.apply(this,arguments)};s=i("bpxeT"),a=i("2TvXO"),u=i("dIxxU");function p(){return(p=t(s)(t(a).mark((function e(n,r,i){var o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(u).get("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=").concat(i,"&include_adult=false"));case 3:return o=e.sent,e.abrupt("return",o.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var f=function(t,e,n){return p.apply(this,arguments)};s=i("bpxeT"),a=i("2TvXO"),u=i("dIxxU");function d(){return(d=t(s)(t(a).mark((function e(n){var r;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(u).get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.genres);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var h=function(t){return d.apply(this,arguments)},g=(o=i("iY7oS"),document.querySelector(".card__colection"));var v,_=function(t){h(o.default).then((function(e){g.innerHTML="";var n=t.map((function(t){var n=i("kPTCV"),r=t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):n,o=t.genre_ids.map((function(t){return e.filter((function(e){return e.id===t}))[0]})).map((function(t){return t.name})),s=o.length>2?o.slice(0,2).join(", ")+" ...":o.join(", "),a=t.release_date?new Date(t.release_date).getFullYear():"0000";return'<li class="card__film" >\n        <div class="thumb" data-id=\''.concat(t.id,"'>\n          <img src=\"").concat(r,'" alt="').concat(t.title,'" onerror=\'this.src="').concat(n,'"\'/>\n        </div>\n        <h2 class="card__title">').concat(t.title,'</h2>\n        <p class="card__text">\n          <span class="genres">').concat(s.length>0?s:"No genres",'</span> | <span class="release">').concat(a,'</span> <span\n            class="card__vote_average">').concat(t.vote_average.toFixed(1),"</span>\n        </p>\n      </li>")})).join("");g.insertAdjacentHTML("beforeend",n)}))},m={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
v=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,o,s=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])s.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),o=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),o=n(0),s=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(o/2),(n=(e=Math.max(t-r,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(s-1)*o+1,n=s*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),o=n(4),s=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){r(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var r=this;o(t)?(t=t.split(l),c(t,(function(t){r._bindEvent(t,e,n)}))):s(t)&&(n=e,c(t,(function(t,e){r.on(e,t,n)})))},p.prototype.once=function(t,e,n){var r=this;if(s(t))return n=e,void c(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,r=0;if(a(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},p.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,o=e===r.context,s=i&&o;return s&&n._forgetContext(r.context),s}},p.prototype._offByEventName=function(t,e){var n=this,r=u(e),i=n._matchHandler(e);t=t.split(l),c(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?c(t,(function(t,e){r.off(e,t)})):o(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),o=n(21),s=n(22),a=n(24),u=n(25),c=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||u(e,this._firstItemClassName),n!==i||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,r,i=o(e);a(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!f.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),o=n(23);function s(t,e,n,r){function s(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,r){var s=o(t,e),a=!1;i(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:r})}(t,e,n,s)}t.exports=function(t,e,n,o){r(e)?i(e.split(/\s+/g),(function(e){s(t,e,n,o)})):i(e,(function(e,r){s(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),o=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];a?r(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,u)<0&&u.push(t)})),s(t,u))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),o=n(2),s=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],o=0,s=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(s,i)),s=i+1)})),r.push(e.slice(s)),{exps:n,sourcesInsideIf:r}}(t,e),o=!1,s="";return i(r.exps,(function(t,e){return(o=y(t,n))&&(s=b(r.sourcesInsideIf[e],n)),!o})),s},each:function(t,e,n){var r=y(t,n),s=o(r)?"@index":"@key",u={},c="";return i(r,(function(t,r){u[s]=r,u["@this"]=t,a(n,u),c+=b(e.slice(),n)})),c},with:function(t,e,n){var i=r("as",t),o=t[i+1],s=y(t.slice(0,i),n),u={};return u[o]=s,b(e,a(n,u))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(o,r)),o=r+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function m(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(h,""):c.test(t)?r=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?r=m((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function x(t,e,n){for(var r,i,o,a,u=v[t],c=1,l=2,p=e[l];c&&s(p);)0===p.indexOf(t)?c+=1:0===p.indexOf("/"+t)&&(c-=1,r=l),p=e[l+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(i=0,o=r,(a=e.splice(i+1,o-i)).pop(),a),n),e}function y(t,e){var n=m(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(m(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function b(t,e){for(var n,r,i,o=1,a=t[o];s(a);)r=(n=a.split(" "))[0],v[r]?(i=x(r,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=y(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return b(_(t,u),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},m=v();var x=i("kvC6y"),y=i("dmvdd"),b=(y=i("dmvdd"),{}),P=i("l5bVx"),E="Expected a function",C=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,I=/^0o[0-7]+$/i,T=parseInt,B="object"==typeof e&&e&&e.Object===Object&&e,L="object"==typeof self&&self&&self.Object===Object&&self,N=B||L||Function("return this")(),O=Object.prototype.toString,S=Math.max,k=Math.min,j=function(){return N.Date.now()};function H(t,e,n){var r,i,o,s,a,u,c=0,l=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError(E);function d(e){var n=r,o=i;return r=i=void 0,c=e,s=t.apply(o,n)}function h(t){return c=t,a=setTimeout(v,e),l?d(t):s}function g(t){var n=t-u;return void 0===u||n>=e||n<0||p&&t-c>=o}function v(){var t=j();if(g(t))return _(t);a=setTimeout(v,function(t){var n=e-(t-u);return p?k(n,o-(t-c)):n}(t))}function _(t){return a=void 0,f&&r?d(t):(r=i=void 0,s)}function m(){var t=j(),n=g(t);if(r=arguments,i=this,u=t,n){if(void 0===a)return h(u);if(p)return a=setTimeout(v,e),d(u)}return void 0===a&&(a=setTimeout(v,e)),s}return e=A(e)||0,F(n)&&(l=!!n.leading,o=(p="maxWait"in n)?S(A(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),m.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=i=a=void 0},m.flush=function(){return void 0===a?s:_(j())},m}function F(e){var n=void 0===e?"undefined":t(P)(e);return!!e&&("object"==n||"function"==n)}function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(P)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==O.call(e)}(e))return NaN;if(F(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=F(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(C,"");var r=M.test(e);return r||I.test(e)?T(e.slice(2),r?2:8):w.test(e)?NaN:+e}b=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(E);return F(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),H(t,e,{leading:r,maxWait:e,trailing:i})};var D={currentPage:1,keyWord:"",cardCollection:document.querySelector(".card__colection"),searchForm:document.querySelector(".search__form"),alertBox:document.querySelector(".alert__container")};l(o.default,"movie","week",D.currentPage).then((function(t){_(t.results),q.reset(t.total_results)})).then(x.hideLoader);var V=document.getElementById("pagination-container"),U={totalItems:20,itemsPerPage:20,visiblePages:3,page:D.currentPage,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},q=new(t(m))(V,U);q.on("beforeMove",(function(t){D.currentPage=t.page,(0,x.showLoader)(),l(o.default,"movie","week",D.currentPage).then((function(t){_(t.results)})).then(y.topFunction).then(x.hideLoader)}));var R=new(t(m))(V,U);D.searchForm.addEventListener("input",b((function(t){D.keyWord=t.target.value}),500)),D.searchForm.addEventListener("submit",b((function(t){t.preventDefault();var e=D.keyWord;console.log(e),(0,x.showLoader)(),f(e,o.default,D.currentPage).then((function(t){console.log(t.results),0===t.results.length?(D.alertBox.classList.remove("visually-hidden"),D.searchForm.reset(),D.cardCollection.innerHTML="",q.reset(0)):(D.alertBox.classList.add("visually-hidden"),_(t.results),R.reset(t.total_results),R.on("beforeMove",(function(t){D.currentPage=t.page,f(e,o.default,D.currentPage).then((function(t){_(t.results)})).then(y.topFunction).then(x.hideLoader),D.searchForm.reset()})))})).then(x.hideLoader)}),500)),(0,y.default)();var $=i("3dbg1");i("bwjSJ"),i("kgvtT"),i("kgvtT"),i("gbcVY"),i("kgvtT"),i("2Z7mb"),window.addEventListener("load",(function(){null!==localStorage.getItem("userData")&&((0,$.renderCurrentUserName)(),document.getElementById("sign-out-btn").addEventListener("click",(function(){localStorage.removeItem("userData"),localStorage.removeItem("watchedFilms"),localStorage.removeItem("queueFilms"),document.querySelector(".modal-open-btn").classList.remove("hidden"),document.getElementById("user-name-contain").innerHTML=""})))}))}();
//# sourceMappingURL=index.e8e17a92.js.map
