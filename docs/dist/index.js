!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function c(t,e,n){return(c=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,n,r,u,c,s=(e=p,n=a(),function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function p(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).style.display="inline-block",t.style.verticalAlign="middle";var e=t.attachShadow({mode:"open"});t.img=document.createElement("img"),t.img.loading="lazy";var n=document.createElement("style");return n.textContent=t._style,e.appendChild(n),e.appendChild(t.img),t.render(),t}return r=p,c=[{key:"observedAttributes",get:function(){return["user","type","width","height"]}}],(u=[{key:"render",value:function(){var t=this.getAttribute("width")||32,e=this.getAttribute("height")||32;this.style.width="".concat(t,"px"),this.style.height="".concat(e,"px"),this.img.width=t,this.img.height=e,this.img.src=this.formatAvatarURL(this.getAttribute("user"),this.getAttribute("type")||"helm")}},{key:"connectedCallback",value:function(){this.rendered||(this.render(),this.rendered=!0)}},{key:"attributeChangedCallback",value:function(t,e,n){this.render()}},{key:"formatAvatarURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"steve",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"helm";return"https://minotar.net/".concat(e,"/").concat(t,"/16.png")}},{key:"_style",get:function(){return"\n\t\t\timg {\n\t\t\t\timage-rendering: pixelated;\n\t\t\t}\n\t\t"}}])&&o(r.prototype,u),c&&o(r,c),p}(u(HTMLElement));customElements.define("mc-avatar",s)}]);