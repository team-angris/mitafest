function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(e="Object"===e&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function _iterableToArrayLimit(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,u=[],i=!0,a=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return u}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).idbKeyval={})}(this,function(t){"use strict";function u(e){return new Promise(function(t,n){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return n(e.error)}})}function n(t,r){var n=indexedDB.open(t),o=(n.onupgradeneeded=function(){return n.result.createObjectStore(r)},u(n));return function(n,e){return o.then(function(t){return e(t.transaction(r,n).objectStore(r))})}}var e;function i(){return e=e||n("keyval-store","keyval")}function r(t,n){return t.openCursor().onsuccess=function(){this.result&&(n(this.result),this.result.continue())},u(t.transaction)}t.clear=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:i())("readwrite",function(t){return t.clear(),u(t.transaction)})},t.createStore=n,t.del=function(n){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:i())("readwrite",function(t){return t.delete(n),u(t.transaction)})},t.delMany=function(t){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:i())("readwrite",function(n){return t.forEach(function(t){return n.delete(t)}),u(n.transaction)})},t.entries=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i();return e("readonly",function(t){if(t.getAll&&t.getAllKeys)return Promise.all([u(t.getAllKeys()),u(t.getAll())]).then(function(t){var t=_slicedToArray(t,2),n=t[0],e=t[1];return n.map(function(t,n){return[t,e[n]]})});var n=[];return e("readonly",function(t){return r(t,function(t){n.push([t.key,t.value])}).then(function(){return n})})})},t.get=function(n){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:i())("readonly",function(t){return u(t.get(n))})},t.getMany=function(t){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:i())("readonly",function(n){return Promise.all(t.map(function(t){return u(n.get(t))}))})},t.keys=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:i())("readonly",function(t){if(t.getAllKeys)return u(t.getAllKeys());var n=[];return r(t,function(t){n.push(t.key)}).then(function(){return n})})},t.promisifyRequest=u,t.set=function(n,e){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:i())("readwrite",function(t){return t.put(e,n),u(t.transaction)})},t.setMany=function(t){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:i())("readwrite",function(n){return t.forEach(function(t){return n.put(t[1],t[0])}),u(n.transaction)})},t.update=function(r,o){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:i())("readwrite",function(e){return new Promise(function(t,n){e.get(r).onsuccess=function(){try{e.put(o(this.result),r),t(u(e.transaction))}catch(t){n(t)}}})})},t.values=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:i())("readonly",function(t){if(t.getAll)return u(t.getAll());var n=[];return r(t,function(t){n.push(t.value)}).then(function(){return n})})},Object.defineProperty(t,"__esModule",{value:!0})});