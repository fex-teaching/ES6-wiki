(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue = {}));
}(this, (function (exports) { 'use strict';

  function reactive(target) {
    console.log('target:', target);
  }

  exports.reactive = reactive;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reactivity.js.map
