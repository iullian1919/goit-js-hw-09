function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("1GAPJ");const l=document.querySelector(".form"),i={amount:l.elements.amount,delay:l.elements.delay,step:l.elements.step};function a(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}function f(t){e(u).Notify.success(t)}function d(t){e(u).Notify.failure(t)}l.addEventListener("submit",(function(t){if(t.preventDefault(),i.amount.value<0||i.delay.value<0)return void e(u).Notify.failure("The value cannot be negative");let n=Number(i.delay.value);for(let e=1;e<=i.amount.value;e+=1){a(e,n).then(f).catch(d);n+=Number(i.step.value)}}));
//# sourceMappingURL=03-promises.a1081044.js.map
