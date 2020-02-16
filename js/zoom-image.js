"use strict";!function(){var H=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o=function(e){return"IMG"===e.tagName},C=function(e){return e&&1===e.nodeType},O=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},c=function(e){try{return Array.isArray(e)?e.filter(o):(t=e,NodeList.prototype.isPrototypeOf(t)?[].slice.call(e).filter(o):C(e)?[e].filter(o):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(o):[])}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}var t},A=function(e,t){var o=H({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n},n=function t(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},i=function(){for(var e=arguments,t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=e[n];var i=o.reduce(function(e,t){return[].concat(e,c(t))},[]);return i.filter(function(e){return-1===h.indexOf(e)}).forEach(function(e){h.push(e),e.classList.add("medium-zoom-image")}),a.forEach(function(e){var t=e.type,o=e.listener,n=e.options;i.forEach(function(e){e.addEventListener(t,o,n)})}),L},r=function(){var p=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,g=function(){var e=Math.min,t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},o=void 0,n=void 0;if(b.container)if(b.container instanceof Object)o=(t=H({},t,b.container)).width-t.left-t.right-2*b.margin,n=t.height-t.top-t.bottom-2*b.margin;else{var i=(C(b.container)?b.container:document.querySelector(b.container)).getBoundingClientRect(),r=i.width,d=i.height,a=i.left,m=i.top;t=H({},t,{width:r,height:d,left:a,top:m})}o=o||t.width-2*b.margin,n=n||t.height-2*b.margin;var l=E.zoomedHd||E.original,c=O(l)?o:l.naturalWidth||o,u=O(l)?n:l.naturalHeight||n,s=l.getBoundingClientRect(),f=s.top,p=s.left,g=s.width,v=s.height,h=e(e(c,o)/g,e(u,n)/v),z="scale("+h+") translate3d("+((o-g)/2-p+b.margin+t.left)/h+"px, "+((n-v)/2-f+b.margin+t.top)/h+"px, 0)";E.zoomed.style.transform=z,E.zoomedHd&&(E.zoomedHd.style.transform=z)};return new n(function(t){if(p&&-1===h.indexOf(p))t(L);else if(E.zoomed)t(L);else{if(p)E.original=p;else{if(!(0<h.length))return void t(L);var e=h;E.original=e[0]}if(E.original.dispatchEvent(A("medium-zoom:open",{detail:{zoom:L}})),y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,z=!0,E.zoomed=(n=E.original,i=n.getBoundingClientRect(),r=i.top,d=i.left,a=i.width,m=i.height,l=n.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,l.removeAttribute("id"),l.style.position="absolute",l.style.top=r+c+"px",l.style.left=d+u+"px",l.style.width=a+"px",l.style.height=m+"px",l.style.transform="",l),document.body.appendChild(w),b.template){var o=C(b.template)?b.template:document.querySelector(b.template);E.template=document.createElement("div"),E.template.appendChild(o.content.cloneNode(!0)),document.body.appendChild(E.template)}var n,i,r,d,a,m,l,c,u;if(document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",v),E.zoomed.addEventListener("transitionend",function e(){z=!1,E.zoomed.removeEventListener("transitionend",e),E.original.dispatchEvent(A("medium-zoom:opened",{detail:{zoom:L}})),t(L)}),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(s),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,g()};var s=setInterval(function(){E.zoomedHd.complete&&(clearInterval(s),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",v),document.body.appendChild(E.zoomedHd),g())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes");var f=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",f),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",v),document.body.appendChild(E.zoomedHd),g()})}else g()}})},v=function(){return new n(function(t){!z&&E.original?(z=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(A("medium-zoom:close",{detail:{zoom:L}})),E.zoomed.addEventListener("transitionend",function e(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(w),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),z=!1,E.zoomed.removeEventListener("transitionend",e),E.original.dispatchEvent(A("medium-zoom:closed",{detail:{zoom:L}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,t(L)})):t(L)})},d=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return E.original?v():r({target:e})},h=[],a=[],z=!1,y=0,b=o,E={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(e)?b=e:(e||"string"==typeof e)&&i(e),b=H({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b);var m,l,w=(m=b.background,(l=document.createElement("div")).classList.add("medium-zoom-overlay"),l.style.background=m,l);document.addEventListener("click",function(e){var t=e.target;return t===w?void v():void(-1===h.indexOf(t)||d({target:t}))}),document.addEventListener("keyup",function(e){27===(e.keyCode||e.which)&&v()}),document.addEventListener("scroll",function(){if(!z&&E.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(y-e)>b.scrollOffset&&setTimeout(v,150)}}),window.addEventListener("resize",v);var L={open:r,close:v,toggle:d,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(w.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=H({},b.container,e.container)),e.template){var o=C(e.template)?e.template:document.querySelector(e.template);t.template=o}return b=H({},b,t),h.forEach(function(e){e.dispatchEvent(A("medium-zoom:update",{detail:{zoom:L}}))}),L},clone:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(H({},b,e))},attach:i,detach:function(){for(var e=arguments,t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=e[n];E.zoomed&&v();var i=0<o.length?o.reduce(function(e,t){return[].concat(e,c(t))},[]):h;return i.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(A("medium-zoom:detach",{detail:{zoom:L}}))}),h=h.filter(function(e){return-1===i.indexOf(e)}),L},on:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return h.forEach(function(e){e.addEventListener("medium-zoom:"+t,o,n)}),a.push({type:"medium-zoom:"+t,listener:o,options:n}),L},off:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return h.forEach(function(e){e.removeEventListener("medium-zoom:"+t,o,n)}),a=a.filter(function(e){return e.type!=="medium-zoom:"+t||e.listener.toString()!==o.toString()}),L},getOptions:function(){return b},getImages:function(){return h},getZoomedImage:function(){return E.original}};return L};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var i=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector;$docsify.plugins=[].concat(function(e){var o;e.doneEach(function(e){var t=Array.apply(null,document.querySelectorAll(".markdown-section img:not(.emoji):not([data-no-zoom])"));t=t.filter(function(e){return!1===i.call(e,"a img")}),o&&o.detach(),o=n(t)})},$docsify.plugins)}();