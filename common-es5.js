(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/functions/timer.function.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/functions/timer.function.ts ***!
    \****************************************************/

  /*! exports provided: countDown */

  /***/
  function srcAppSharedFunctionsTimerFunctionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countDown", function () {
      return countDown;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function countDown(seconds) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (t) {
        return seconds - t;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function (t) {
        return t >= 0;
      }));
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map