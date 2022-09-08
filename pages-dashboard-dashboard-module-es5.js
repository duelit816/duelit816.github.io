function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./src/app/features/admin/components/keen/keen.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/admin/components/keen/keen.component.ts ***!
    \******************************************************************/

  /*! exports provided: KeenComponent */

  /***/
  function srcAppFeaturesAdminComponentsKeenKeenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeenComponent", function () {
      return KeenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_keen_data_keen_data_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives/keen-data/keen-data.directive */
    "./src/app/features/admin/directives/keen-data/keen-data.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var KeenComponent =
    /*#__PURE__*/
    function () {
      function KeenComponent() {
        _classCallCheck(this, KeenComponent);

        this.loading = true;
        this.viewInit = false;
      }

      _createClass(KeenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KeenComponent;
    }();

    KeenComponent.ɵfac = function KeenComponent_Factory(t) {
      return new (t || KeenComponent)();
    };

    KeenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeenComponent,
      selectors: [["duelit-keen"]],
      inputs: {
        title: "title",
        keenName: "keenName",
        viewType: "viewType",
        queryType: "queryType",
        query: "query",
        subTitle: "subTitle",
        isCombined: "isCombined",
        apiResult: "apiResult"
      },
      decls: 3,
      vars: 11,
      consts: [["duelitKeenData", "", 1, "duelit-keen-data", 3, "duelitkeenname", "viewType", "queryType", "query", "title", "ngClass", "isCombined", "apiResult"]],
      template: function KeenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("metric", ctx.viewType === "metric");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("duelitkeenname", ctx.keenName)("viewType", ctx.viewType)("queryType", ctx.queryType)("query", ctx.query)("title", ctx.subTitle)("ngClass", ctx.keenName)("isCombined", ctx.isCombined)("apiResult", ctx.apiResult);
        }
      },
      directives: [_directives_keen_data_keen_data_directive__WEBPACK_IMPORTED_MODULE_1__["KeenDataDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["[_nghost-%COMP%]   .duelit-keen-data[_ngcontent-%COMP%] {\n  height: 250px;\n  width: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[_nghost-%COMP%]   .duelit-keen-data[_ngcontent-%COMP%]     span.loading {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n[_nghost-%COMP%]   .duelit-keen-data.metric[_ngcontent-%COMP%] {\n  height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vY29tcG9uZW50cy9rZWVuL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxjb21wb25lbnRzXFxrZWVuXFxrZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9jb21wb25lbnRzL2tlZW4va2Vlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKSjtBRE1JO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0pOO0FET0k7RUFDRSxhQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9jb21wb25lbnRzL2tlZW4va2Vlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuOmhvc3Qge1xyXG4gIC8vIGhlaWdodDogMjUwcHg7XHJcblxyXG4gIC5kdWVsaXQta2Vlbi1kYXRhIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgOjpuZy1kZWVwIHNwYW4ubG9hZGluZyB7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1ldHJpYyB7XHJcbiAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5kdWVsaXQta2Vlbi1kYXRhIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmR1ZWxpdC1rZWVuLWRhdGEgOjpuZy1kZWVwIHNwYW4ubG9hZGluZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcbn1cbjpob3N0IC5kdWVsaXQta2Vlbi1kYXRhLm1ldHJpYyB7XG4gIGhlaWdodDogdW5zZXQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-keen',
          templateUrl: './keen.component.html',
          styleUrls: ['./keen.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        keenName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        queryType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        query: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isCombined: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        apiResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/components/keen/keen.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/features/admin/components/keen/keen.module.ts ***!
    \***************************************************************/

  /*! exports provided: KeenModule */

  /***/
  function srcAppFeaturesAdminComponentsKeenKeenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeenModule", function () {
      return KeenModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/keen-data/keen-data.module */
    "./src/app/features/admin/directives/keen-data/keen-data.module.ts");
    /* harmony import */


    var _keen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keen.component */
    "./src/app/features/admin/components/keen/keen.component.ts");

    var KeenModule = function KeenModule() {
      _classCallCheck(this, KeenModule);
    };

    KeenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: KeenModule
    });
    KeenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function KeenModule_Factory(t) {
        return new (t || KeenModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_2__["KeenDataModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KeenModule, {
        declarations: [_keen_component__WEBPACK_IMPORTED_MODULE_3__["KeenComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_2__["KeenDataModule"]],
        exports: [_keen_component__WEBPACK_IMPORTED_MODULE_3__["KeenComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_keen_component__WEBPACK_IMPORTED_MODULE_3__["KeenComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_2__["KeenDataModule"]],
          exports: [_keen_component__WEBPACK_IMPORTED_MODULE_3__["KeenComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/directives/keen-data/keen-data.directive.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/admin/directives/keen-data/keen-data.directive.ts ***!
    \****************************************************************************/

  /*! exports provided: KeenDataDirective */

  /***/
  function srcAppFeaturesAdminDirectivesKeenDataKeenDataDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeenDataDirective", function () {
      return KeenDataDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var keen_dataviz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! keen-dataviz */
    "./node_modules/keen-dataviz/dist/external_d3_c3/keen-dataviz.js");
    /* harmony import */


    var keen_dataviz__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(keen_dataviz__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_keen_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/keen-io.service */
    "./src/app/features/admin/services/keen-io.service.ts");

    var KeenDataDirective =
    /*#__PURE__*/
    function () {
      function KeenDataDirective(el, renderer, keen) {
        _classCallCheck(this, KeenDataDirective);

        this.el = el;
        this.renderer = renderer;
        this.keen = keen;
        this.viewInit = false;
        this.loading = true;
      }

      _createClass(KeenDataDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderer.addClass(this.el.nativeElement, 'duelit-keen-data');
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.query && this.viewInit) {
            this.el.nativeElement.innerHTML = "<span class=\"duelit-keen-data loading\"></span>";
            this.doQuery();
          }
        }
      }, {
        key: "doQuery",
        value: function doQuery() {
          var _this = this;

          this.el.nativeElement.innerHTML = "<span class=\"duelit-keen-data loading\"></span>";
          this.chart = new keen_dataviz__WEBPACK_IMPORTED_MODULE_1__["Dataviz"]({
            container: ".".concat(this.duelitkeenname),
            title: this.viewType === 'metric' ? this.title : false,
            type: this.viewType,
            legend: {
              pagination: {
                limit: 10
              }
            },
            labelMapping: {
              "Regular": "Challenge",
              "Open": "Tournament",
              "Practice game": "Practice"
            }
          });

          if (!(this.query.eventCollection instanceof Array)) {
            this.loading = true;
            this.keen.query(this.queryType, this.query).then(function (keenResult) {
              setTimeout(function () {
                if (_this.isCombined && _this.apiResult) {
                  keenResult["result"] = [keenResult.result.find(function (x) {
                    return x["Game.type"] === "Practice game";
                  })];

                  _this.apiResult.subscribe(function (apiResult) {
                    apiResult.forEach(function (x) {
                      keenResult["result"].push({
                        "Game.type": x.type,
                        result: x.count
                      });
                    });

                    _this.chart.render(keenResult);
                  });
                } else {
                  _this.chart.render(keenResult);
                }
              });
              _this.loading = false;
            }).catch(function (error) {
              setTimeout(function () {
                _this.chart.message(error.message);
              });
              _this.loading = false;
            });
          } else {
            var queries = [];
            this.query.eventCollection.forEach(function (eventCollection) {
              queries.push(_this.keen.query(_this.queryType, {
                eventCollection: eventCollection,
                timeframe: _this.query.timeframe,
                timezone: 'UTC'
              }));
            });
            this.keen.run(queries).then(function (response) {
              var chartData = [];
              chartData.push({
                type: "Accepted",
                result: response[1].result
              }, {
                type: "Rejected",
                result: response[0].result - response[1].result
              });

              _this.chart.render({
                query: {
                  timeframe: _this.query.timeframe,
                  timezone: 'UTC'
                },
                result: chartData
              });
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.viewInit = true;
          this.doQuery();
        }
      }]);

      return KeenDataDirective;
    }();

    KeenDataDirective.ɵfac = function KeenDataDirective_Factory(t) {
      return new (t || KeenDataDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keen_io_service__WEBPACK_IMPORTED_MODULE_2__["KeenIoService"]));
    };

    KeenDataDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: KeenDataDirective,
      selectors: [["", "duelitKeenData", ""]],
      inputs: {
        duelitkeenname: "duelitkeenname",
        viewType: "viewType",
        queryType: "queryType",
        query: "query",
        title: "title",
        isCombined: "isCombined",
        apiResult: "apiResult"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeenDataDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[duelitKeenData]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _services_keen_io_service__WEBPACK_IMPORTED_MODULE_2__["KeenIoService"]
        }];
      }, {
        duelitkeenname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        viewType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        queryType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        query: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isCombined: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        apiResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/directives/keen-data/keen-data.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/admin/directives/keen-data/keen-data.module.ts ***!
    \*************************************************************************/

  /*! exports provided: KeenDataModule */

  /***/
  function srcAppFeaturesAdminDirectivesKeenDataKeenDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeenDataModule", function () {
      return KeenDataModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _keen_data_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./keen-data.directive */
    "./src/app/features/admin/directives/keen-data/keen-data.directive.ts");

    var KeenDataModule = function KeenDataModule() {
      _classCallCheck(this, KeenDataModule);
    };

    KeenDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: KeenDataModule
    });
    KeenDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function KeenDataModule_Factory(t) {
        return new (t || KeenDataModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KeenDataModule, {
        declarations: [_keen_data_directive__WEBPACK_IMPORTED_MODULE_2__["KeenDataDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_keen_data_directive__WEBPACK_IMPORTED_MODULE_2__["KeenDataDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeenDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_keen_data_directive__WEBPACK_IMPORTED_MODULE_2__["KeenDataDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_keen_data_directive__WEBPACK_IMPORTED_MODULE_2__["KeenDataDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/app-data/app-data.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/app-data/app-data.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AppDataComponent */

  /***/
  function srcAppFeaturesAdminPagesDashboardAppDataAppDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDataComponent", function () {
      return AppDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/constants/api */
    "./src/app/shared/constants/api/index.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/constants */
    "./src/app/core/constants/index.ts");
    /* harmony import */


    var _shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/functions/date.util */
    "./src/app/shared/functions/date.util.ts");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/dashboard-date.service */
    "./src/app/features/admin/services/dashboard-date.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_date_picker_range_date_picker_range_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../shared/components/date-picker-range/date-picker-range.component */
    "./src/app/shared/components/date-picker-range/date-picker-range.component.ts");
    /* harmony import */


    var _components_keen_api_keen_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../components/keen-api/keen-api.component */
    "./src/app/features/admin/components/keen-api/keen-api.component.ts");
    /* harmony import */


    var _components_keen_keen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../components/keen/keen.component */
    "./src/app/features/admin/components/keen/keen.component.ts");
    /* harmony import */


    var _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../components/metric/metric.component */
    "./src/app/features/admin/components/metric/metric.component.ts");

    function AppDataComponent_ng_container_8_duelit_keen_api_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen-api", 10);
      }

      if (rf & 2) {
        var item_r126 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", item_r126);
      }
    }

    function AppDataComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_8_duelit_keen_api_1_Template, 1, 1, "duelit-keen-api", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r124 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r124);
      }
    }

    function AppDataComponent_duelit_keen_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen", 11);
      }

      if (rf & 2) {
        var item_r127 = ctx.$implicit;

        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r127.title)("keenName", item_r127.keenname)("viewType", item_r127.viewType)("queryType", item_r127.queryType)("query", item_r127.query)("isCombined", item_r127.isCombined)("apiResult", ctx_r107.tournamentCountPerType$);
      }
    }

    function AppDataComponent_ng_container_17_duelit_keen_api_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen-api", 13);
      }

      if (rf & 2) {
        var item_r130 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", item_r130);
      }
    }

    function AppDataComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_17_duelit_keen_api_1_Template, 1, 1, "duelit-keen-api", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r128);
      }
    }

    function AppDataComponent_ng_container_20_duelit_keen_api_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen-api", 13);
      }

      if (rf & 2) {
        var item_r133 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", item_r133);
      }
    }

    function AppDataComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_20_duelit_keen_api_1_Template, 1, 1, "duelit-keen-api", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r131 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r131);
      }
    }

    function AppDataComponent_ng_container_23_duelit_keen_api_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen-api", 13);
      }

      if (rf & 2) {
        var item_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", item_r136);
      }
    }

    function AppDataComponent_ng_container_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_23_duelit_keen_api_1_Template, 1, 1, "duelit-keen-api", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r134);
      }
    }

    function AppDataComponent_ng_container_26_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-metric", 15);
      }

      if (rf & 2) {
        var item_r139 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r139);
      }
    }

    function AppDataComponent_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_26_duelit_metric_1_Template, 1, 1, "duelit-metric", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r137 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r137);
      }
    }

    function AppDataComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-keen-api", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", ctx_r112.challengeRatioStats$);
      }
    }

    function AppDataComponent_ng_container_31_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDataComponent_ng_container_31_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var item_r143 = ctx.$implicit;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r144.openUsersSignup(item_r143);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r143 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r143);
      }
    }

    function AppDataComponent_ng_container_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_31_duelit_metric_1_Template, 1, 1, "duelit-metric", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r141 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r141);
      }
    }

    function AppDataComponent_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-keen-api", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", ctx_r114.signupRatioStats$);
      }
    }

    function AppDataComponent_duelit_keen_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen", 18);
      }

      if (rf & 2) {
        var item_r146 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r146.title)("keenName", item_r146.keenname)("viewType", item_r146.viewType)("queryType", item_r146.queryType)("query", item_r146.query);
      }
    }

    function AppDataComponent_duelit_keen_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen", 19);
      }

      if (rf & 2) {
        var item_r147 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r147.title)("keenName", item_r147.keenname)("viewType", item_r147.viewType)("queryType", item_r147.queryType)("query", item_r147.query);
      }
    }

    function AppDataComponent_ng_container_42_duelit_keen_api_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-keen-api", 10);
      }

      if (rf & 2) {
        var item_r150 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", item_r150);
      }
    }

    function AppDataComponent_ng_container_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_42_duelit_keen_api_1_Template, 1, 1, "duelit-keen-api", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r148 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r148);
      }
    }

    function AppDataComponent_ng_container_44_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDataComponent_ng_container_44_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155);

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r154.openActiveUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r153 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r153);
      }
    }

    function AppDataComponent_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_44_duelit_metric_1_Template, 1, 1, "duelit-metric", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r151 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r151);
      }
    }

    function AppDataComponent_ng_container_46_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDataComponent_ng_container_46_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r159.openUsersByBanned();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r158 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r158);
      }
    }

    function AppDataComponent_ng_container_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_46_duelit_metric_1_Template, 1, 1, "duelit-metric", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r156 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r156);
      }
    }

    function AppDataComponent_ng_container_49_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDataComponent_ng_container_49_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r165);

          var item_r163 = ctx.$implicit;

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r164.openConvertedUsers(item_r163.type);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r163 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r163);
      }
    }

    function AppDataComponent_ng_container_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDataComponent_ng_container_49_duelit_metric_1_Template, 1, 1, "duelit-metric", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r161 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r161);
      }
    }

    function AppDataComponent_ng_container_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-keen-api", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", ctx_r121.txnOnInsufficientFundsRatio$);
      }
    }

    function AppDataComponent_ng_template_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var START_DATE = moment__WEBPACK_IMPORTED_MODULE_3__().subtract(6, 'days').format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
    var END_DATE = moment__WEBPACK_IMPORTED_MODULE_3__().format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);

    var AppDataComponent =
    /*#__PURE__*/
    function () {
      function AppDataComponent(api, dashboardDate, router, numberPipe) {
        _classCallCheck(this, AppDataComponent);

        this.api = api;
        this.dashboardDate = dashboardDate;
        this.router = router;
        this.numberPipe = numberPipe;
        this.gamesQueries = [{
          title: 'Daily Games',
          keenname: 'daily-games',
          viewType: 'line',
          queryType: 'count',
          query: {
            eventCollection: 'Game played',
            groupBy: 'Game.name',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            },
            interval: 'daily',
            filters: [{
              property_name: 'Game.name',
              operator: 'ne',
              property_value: null
            }]
          }
        }, {
          title: 'Games Per Type',
          keenname: 'games-per-type',
          viewType: 'pie',
          queryType: 'count',
          query: {
            eventCollection: 'Game played',
            groupBy: 'Game.type',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            }
          },
          isCombined: true
        }];
        this.engagement1Queries = [{
          title: 'Total Challenges',
          keenname: 'challenges-total',
          viewType: 'metric',
          queryType: 'count',
          query: {
            eventCollection: 'Challenge created',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            }
          }
        }, {
          title: 'Accepted Challenges',
          keenname: 'challenges-accepted',
          viewType: 'metric',
          queryType: 'count',
          query: {
            eventCollection: 'Challenge accepted',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            }
          }
        }, {
          title: 'Challenge Ratio',
          keenname: 'challenge-ratio',
          viewType: 'pie',
          queryType: 'count',
          query: {
            eventCollection: ['Challenge created', 'Challenge accepted'],
            timeframe: {
              start: START_DATE,
              end: END_DATE
            }
          }
        }];
        this.engagement3Queries = [{
          title: 'Total App Launched',
          keenname: 'app-launced-total',
          viewType: 'metric',
          queryType: 'count',
          query: {
            eventCollection: 'App launched',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            }
          }
        }];
        this.engagement4Queries = [{
          title: 'Games Per OS',
          keenname: 'games-per-os',
          viewType: 'pie',
          queryType: 'count',
          query: {
            eventCollection: 'Game played',
            groupBy: 'Device.OS',
            timeframe: {
              start: START_DATE,
              end: END_DATE
            },
            filters: [{
              property_name: 'Device.OS',
              operator: 'exists',
              property_value: true
            }]
          }
        }];
        this.signupRatioStats$ = {
          title: "Signup Ratio",
          classSelector: "signup-ratio",
          viewType: "pie"
        };
        this.challengeRatioStats$ = {
          title: "Challenge Ratio",
          classSelector: "challenge-ratio",
          viewType: "pie"
        };
        this.txnOnInsufficientFundsRatio$ = {
          title: "Transaction on Insufficient Funds",
          classSelector: "txn-on-insufficient-funds-ratio",
          viewType: "pie"
        };
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.FAILED_TO_RETRIEVE = '-';
      }

      _createClass(AppDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.rangeDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardDate.range);
          this.rangeDate.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (value) {
            _this2.dashboardDate.range = value;
          });
          this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.dashboardDate.range);
          this.date$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (_ref) {
            var from = _ref.from,
                to = _ref.to;
            var startDate = moment__WEBPACK_IMPORTED_MODULE_3__().year(from.year).month(from.month - 1).date(from.day).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
            var endDate = moment__WEBPACK_IMPORTED_MODULE_3__().year(to.year).month(to.month - 1).date(to.day).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);

            _this2.getRevenueStats(startDate, endDate);

            _this2.getSignupTypeStats(startDate, endDate);

            _this2.getSignupCountStats(startDate, endDate);

            _this2.getSignupRatioStats();

            _this2.getActiveUsersStats(startDate, endDate);

            _this2.getChallengeStats(startDate, endDate);

            _this2.getTxnOnInsufficientFunds(startDate, endDate);

            _this2.getCreatedChallengePerHrStats(startDate, endDate);

            _this2.getCompletedChallengePerHrStats(startDate, endDate);

            _this2.getCompletedTournamentPerHrStats(startDate, endDate);

            _this2.getTournamentCountPerType(startDate, endDate);

            _this2.getChallengeRatioStats();

            _this2.getTxnOnInsufficientFundsRatio();

            _this2.getUserStats(startDate, endDate);

            _this2.updateQueries(_this2.engagement1Queries, startDate, endDate);

            _this2.updateQueries(_this2.engagement3Queries, startDate, endDate);

            _this2.updateQueries(_this2.engagement4Queries, startDate, endDate);

            _this2.updateQueries(_this2.gamesQueries, startDate, endDate);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
          this.date$.complete();
        }
      }, {
        key: "getRevenueStats",
        value: function getRevenueStats(startDate, endDate) {
          this.revenueStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminFunctionsApi"].RevenueStats, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var revenueData = [];
            var data = [];

            if (result.length) {
              var duelitRevenue = result.reduce(function (r, i) {
                r += i.duelit_revenue;
                return r;
              }, 0);
              var playerRevenue = result.reduce(function (r, i) {
                r += i.player_revenue;
                return r;
              }, 0);
              data = [{
                type: "Duelit",
                result: duelitRevenue
              }, {
                type: "Player",
                result: playerRevenue
              }];
            }

            var revenueByUserType = {
              title: "Revenue Generated",
              classSelector: "revenue1",
              viewType: "bar",
              data: data
            };
            revenueData.push(revenueByUserType);
            var revenueByUserTypePercentage = {
              title: "Revenue Generated (Percentage)",
              classSelector: "revenue2",
              viewType: "pie",
              data: data
            };
            revenueData.push(revenueByUserTypePercentage);
            var revenueByGame = {
              title: "Revenue by Game (Duelit)",
              classSelector: "revenue3",
              viewType: "pie",
              data: result.map(function (i) {
                return {
                  type: i.game,
                  result: i.duelit_revenue
                };
              })
            };
            revenueData.push(revenueByGame);
            return revenueData;
          }));
        }
      }, {
        key: "getSignupTypeStats",
        value: function getSignupTypeStats(startDate, endDate) {
          this.signupTypeStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].SignupType, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var data = [];

            if (!(result.facebook === "0" && result.apple === "0" && result.email === "0")) {
              Object.keys(result).forEach(function (key) {
                data.push({
                  type: key.charAt(0).toUpperCase() + key.slice(1),
                  result: result[key]
                });
              });
            }

            var signupType = {
              title: "Signup Type",
              classSelector: "signup-type",
              viewType: "pie",
              data: data
            };
            return [signupType];
          }));
        }
      }, {
        key: "getSignupCountStats",
        value: function getSignupCountStats(startDate, endDate) {
          var _this3 = this;

          this.signupCountStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].SignupCount, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return [{
              name: _core_constants__WEBPACK_IMPORTED_MODULE_6__["ChartName"].SignupCount,
              title: "Total Sign Ups",
              subTitle: 'Count - Sign up',
              data: _this3.numberPipe.transform(result.signups)
            }, {
              name: _core_constants__WEBPACK_IMPORTED_MODULE_6__["ChartName"].ActivatedSignupCount,
              title: "Total Activated Sign Ups",
              subTitle: 'Count - Sign up activated',
              data: _this3.numberPipe.transform(result.activated)
            }];
          }));
        }
      }, {
        key: "getSignupRatioStats",
        value: function getSignupRatioStats() {
          var _this4 = this;

          this.signupCountStats$.subscribe(function (signupStats) {
            var pendingCount = 0;

            if (signupStats[0].data && signupStats[1].data) {
              pendingCount = signupStats[0].data.replace(/,/g, "") - signupStats[1].data.replace(/,/g, "");
            }

            var data = [{
              type: "Activated",
              result: signupStats[1].data ? signupStats[1].data.replace(/,/g, "") : 0
            }, {
              type: "Pending",
              result: pendingCount
            }];
            _this4.signupRatioStats$ = {
              title: "Signup Ratio",
              classSelector: "signup-ratio",
              viewType: "pie",
              data: data
            };
          });
        }
      }, {
        key: "getActiveUsersStats",
        value: function getActiveUsersStats(startDate, endDate) {
          this.activeUsersStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].ActiveUsersStats, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return [{
              title: "Active Users",
              subTitle: 'Count - Active Users',
              data: result.active_users_count
            }];
          }));
        }
      }, {
        key: "getChallengeStats",
        value: function getChallengeStats(startDate, endDate) {
          var _this5 = this;

          this.challengeStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].ChallengeStats, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return [{
              title: "Cancelled",
              subTitle: 'Cancelled Challenges',
              data: result.cancelled ? _this5.numberPipe.transform(result.cancelled) : 0
            }, {
              title: "Completed",
              subTitle: 'Completed Challenges',
              data: result.completed ? _this5.numberPipe.transform(result.completed) : 0
            }];
          }));
        }
      }, {
        key: "getTxnOnInsufficientFunds",
        value: function getTxnOnInsufficientFunds(startDate, endDate) {
          var _this6 = this;

          var convertedUrl = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].UsersByConverted, ['converted']);
          this.txnOnInsufficientFunds$ = this.api.get(convertedUrl, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (convertedResult) {
            var churnedUrl = _this6.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].UsersByConverted, ['churned']);

            return _this6.api.get(churnedUrl, {
              query: {
                start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
                end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (churnedResult) {
              return [{
                title: "Users Converted when Coins Ran Out",
                subTitle: 'Count',
                type: "converted",
                data: convertedResult.totalCount ? _this6.numberPipe.transform(convertedResult.totalCount) : 0
              }, {
                title: "Users Churned when Coins Ran Out",
                subTitle: 'Count',
                type: "churned",
                data: churnedResult.totalCount ? _this6.numberPipe.transform(churnedResult.totalCount) : 0
              }];
            }));
          }));
        }
      }, {
        key: "getCreatedChallengePerHrStats",
        value: function getCreatedChallengePerHrStats(startDate, endDate) {
          this.createdChallengePerHrStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].TournamentPerHrStats, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var challengePerHr = [];

            if (result && Object.keys(result) && Object.keys(result).length) {
              for (var i = 0; i < 24; i++) {
                challengePerHr.push({
                  type: i,
                  count: result[i] || 0
                });
              }
            }

            return [{
              title: "Created Challenge",
              classSelector: "total-challenge-sent",
              viewType: "line",
              xAxisLabel: "Hour of day (in UTC)",
              yAxisLabel: "Count",
              data: challengePerHr
            }];
          }));
        }
      }, {
        key: "getCompletedChallengePerHrStats",
        value: function getCompletedChallengePerHrStats(startDate, endDate) {
          this.completedChallengePerHrStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].TournamentPerHrStats, {
            query: {
              status: "Ended",
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var challengePerHr = [];

            if (result && Object.keys(result) && Object.keys(result).length) {
              for (var i = 0; i < 24; i++) {
                challengePerHr.push({
                  type: i,
                  count: result[i] || 0
                });
              }
            }

            return [{
              title: "Completed Challenge",
              classSelector: "total-challenge-Completed",
              viewType: "line",
              xAxisLabel: "Hour of day (in UTC)",
              yAxisLabel: "Count",
              data: challengePerHr
            }];
          }));
        }
      }, {
        key: "getCompletedTournamentPerHrStats",
        value: function getCompletedTournamentPerHrStats(startDate, endDate) {
          this.completedTournamentPerHrStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].TournamentPerHrStats, {
            query: {
              type: "open",
              status: "Ended",
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var tournamentPerHr = [];

            if (result && Object.keys(result) && Object.keys(result).length) {
              for (var i = 0; i < 24; i++) {
                tournamentPerHr.push({
                  type: i,
                  count: result[i] || 0
                });
              }
            }

            return [{
              title: "Completed Tournament",
              classSelector: "total-tournament-completed",
              viewType: "line",
              xAxisLabel: "Hour of day (in UTC)",
              yAxisLabel: "Count",
              data: tournamentPerHr
            }];
          }));
        }
      }, {
        key: "getTournamentCountPerType",
        value: function getTournamentCountPerType(startDate, endDate) {
          this.tournamentCountPerType$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].TournamentCountPerType, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }));
        }
      }, {
        key: "getChallengeRatioStats",
        value: function getChallengeRatioStats() {
          var _this7 = this;

          this.challengeStats$.subscribe(function (challengeStats) {
            var data = [{
              type: "Cancelled",
              result: challengeStats[0].data ? challengeStats[0].data.replace(/,/g, "") : 0
            }, {
              type: "Completed",
              result: challengeStats[1].data ? challengeStats[1].data.replace(/,/g, "") : 0
            }];
            _this7.challengeRatioStats$ = {
              title: "Challenge Ratio",
              classSelector: "challenge-ratio",
              viewType: "pie",
              data: data
            };
          });
        }
      }, {
        key: "getTxnOnInsufficientFundsRatio",
        value: function getTxnOnInsufficientFundsRatio() {
          var _this8 = this;

          this.txnOnInsufficientFunds$.subscribe(function (txnOnInsufficientFunds) {
            var data = [{
              type: "Converted",
              result: txnOnInsufficientFunds[0].data ? txnOnInsufficientFunds[0].data.replace(/,/g, "") : 0
            }, {
              type: "Churned",
              result: txnOnInsufficientFunds[1].data ? txnOnInsufficientFunds[1].data.replace(/,/g, "") : 0
            }];
            _this8.txnOnInsufficientFundsRatio$ = {
              title: "Total User that Ran Out of Coins",
              classSelector: "transaction-ratio",
              viewType: "pie",
              data: data
            };
          });
        }
      }, {
        key: "getUserStats",
        value: function getUserStats(startDate, endDate) {
          var _this9 = this;

          var bannedUsersCountApi = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].UsersCountByStatus, ['banned']);
          this.userStats$ = this.api.get(bannedUsersCountApi, {
            query: {
              start_date: moment__WEBPACK_IMPORTED_MODULE_3__(startDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]),
              end_date: moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err.error.text || _this9.FAILED_TO_RETRIEVE);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return [{
              title: 'Total Banned Users',
              subTitle: 'Count - Banned Users',
              data: result
            }];
          }));
        }
      }, {
        key: "updateQueries",
        value: function updateQueries(queries, startDate, endDate) {
          var timeframe;

          if (startDate === endDate && startDate === moment__WEBPACK_IMPORTED_MODULE_3__().format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"])) {
            timeframe = "this_1_days";
          } else {
            timeframe = {
              start: startDate,
              end: endDate
            };
          }

          queries.forEach(function (q) {
            if (typeof q.query.timeframe !== 'string') {
              q.query = Object.assign(Object.assign({}, q.query), {
                timeframe: timeframe
              });
            }
          });
        }
      }, {
        key: "updateDate",
        value: function updateDate() {
          this.date$.next(Object.assign({}, this.dashboardDate.range));
        }
      }, {
        key: "isDateRangeValid",
        value: function isDateRangeValid() {
          var rangeDate = this.rangeDate.value;
          return rangeDate.from && rangeDate.to;
        }
      }, {
        key: "openUsersSignup",
        value: function openUsersSignup(details) {
          var _this$date$$getValue = this.date$.getValue(),
              from = _this$date$$getValue.from,
              to = _this$date$$getValue.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          this.router.navigate(['/admin/users'], {
            queryParams: {
              created_start_date: startDate,
              created_end_date: endDate,
              not_status: details.name === _core_constants__WEBPACK_IMPORTED_MODULE_6__["ChartName"].ActivatedSignupCount ? "pending" : ""
            }
          });
        }
      }, {
        key: "openUsersByBanned",
        value: function openUsersByBanned() {
          var _this$date$$getValue2 = this.date$.getValue(),
              from = _this$date$$getValue2.from,
              to = _this$date$$getValue2.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          this.router.navigate(['/admin/users'], {
            queryParams: {
              status: _core_constants__WEBPACK_IMPORTED_MODULE_6__["UserStatus"].Banned,
              start_date: startDate,
              end_date: endDate
            }
          });
        }
      }, {
        key: "openUsersByTransaction",
        value: function openUsersByTransaction(details) {
          var _this$date$$getValue3 = this.date$.getValue(),
              from = _this$date$$getValue3.from,
              to = _this$date$$getValue3.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          this.router.navigate(['/admin/users'], {
            queryParams: {
              transaction: _core_constants__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].RedeemCoinsRequest,
              start_date: startDate,
              end_date: endDate
            }
          });
        }
      }, {
        key: "openActiveUsers",
        value: function openActiveUsers() {
          var _this$date$$getValue4 = this.date$.getValue(),
              from = _this$date$$getValue4.from,
              to = _this$date$$getValue4.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          this.router.navigate(['/admin/users'], {
            queryParams: {
              last_active_start_date: startDate,
              last_active_end_date: endDate
            }
          });
        }
      }, {
        key: "openConvertedUsers",
        value: function openConvertedUsers(convertedType) {
          var _this$date$$getValue5 = this.date$.getValue(),
              from = _this$date$$getValue5.from,
              to = _this$date$$getValue5.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_7__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_6__["DATE_FORMAT"]);
          this.router.navigate(['/admin/users'], {
            queryParams: {
              convertedType: convertedType,
              start_date: startDate,
              end_date: endDate
            }
          });
        }
      }]);

      return AppDataComponent;
    }();

    AppDataComponent.ɵfac = function AppDataComponent_Factory(t) {
      return new (t || AppDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_9__["DashboardDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]));
    };

    AppDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppDataComponent,
      selectors: [["duelit-app-data"]],
      decls: 55,
      vars: 57,
      consts: [[1, "date-filter"], [3, "formControl"], [1, "btn", "custom", "primary", 3, "disabled", "click"], [1, "row", "container"], [4, "ngIf", "ngIfElse"], ["class", "col-6", 3, "title", "keenName", "viewType", "queryType", "query", "isCombined", "apiResult", 4, "ngFor", "ngForOf"], ["class", "col metric", 3, "title", "keenName", "viewType", "queryType", "query", 4, "ngFor", "ngForOf"], ["class", "col-6 metric", 3, "title", "keenName", "viewType", "queryType", "query", 4, "ngFor", "ngForOf"], ["loading", ""], ["class", "col-4", 3, "keenApiInput", 4, "ngFor", "ngForOf"], [1, "col-4", 3, "keenApiInput"], [1, "col-6", 3, "title", "keenName", "viewType", "queryType", "query", "isCombined", "apiResult"], ["class", "col-12", 3, "keenApiInput", 4, "ngFor", "ngForOf"], [1, "col-12", 3, "keenApiInput"], ["class", "col-4 pointer", 3, "metric", 4, "ngFor", "ngForOf"], [1, "col-4", "pointer", 3, "metric"], ["class", "col-4 pointer", 3, "metric", "click", 4, "ngFor", "ngForOf"], [1, "col-4", "pointer", 3, "metric", "click"], [1, "col", "metric", 3, "title", "keenName", "viewType", "queryType", "query"], [1, "col-6", "metric", 3, "title", "keenName", "viewType", "queryType", "query"], [1, "col", "col-loading"], [1, "metric", "loading"]],
      template: function AppDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-date-picker-range", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDataComponent_Template_button_click_2_listener() {
            return ctx.updateDate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Revenue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppDataComponent_ng_container_8_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppDataComponent_duelit_keen_13_Template, 1, 7, "duelit-keen", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Engagement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppDataComponent_ng_container_17_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppDataComponent_ng_container_20_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppDataComponent_ng_container_23_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppDataComponent_ng_container_26_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppDataComponent_ng_container_28_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppDataComponent_ng_container_31_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppDataComponent_ng_container_33_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppDataComponent_duelit_keen_36_Template, 1, 5, "duelit-keen", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppDataComponent_duelit_keen_38_Template, 1, 5, "duelit-keen", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "User Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppDataComponent_ng_container_42_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AppDataComponent_ng_container_44_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppDataComponent_ng_container_46_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AppDataComponent_ng_container_49_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppDataComponent_ng_container_51_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AppDataComponent_ng_template_53_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rangeDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isDateRangeValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 31, ctx.revenueStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamesQueries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 33, ctx.createdChallengePerHrStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 35, ctx.completedChallengePerHrStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 37, ctx.completedTournamentPerHrStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 39, ctx.challengeStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 41, ctx.challengeStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 43, ctx.signupCountStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 45, ctx.signupCountStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.engagement3Queries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.engagement4Queries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 47, ctx.signupTypeStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 49, ctx.activeUsersStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 51, ctx.userStats$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 53, ctx.txnOnInsufficientFunds$))("ngIfElse", _r122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 55, ctx.txnOnInsufficientFunds$))("ngIfElse", _r122);
        }
      },
      directives: [_shared_components_date_picker_range_date_picker_range_component__WEBPACK_IMPORTED_MODULE_12__["DatePickerRangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_keen_api_keen_api_component__WEBPACK_IMPORTED_MODULE_13__["KeenApiComponent"], _components_keen_keen_component__WEBPACK_IMPORTED_MODULE_14__["KeenComponent"], _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_15__["MetricComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n[_nghost-%COMP%]   span.metric.loading[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n[_nghost-%COMP%]   .col-loading[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .date-filter[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   .date-filter[_ngcontent-%COMP%]   .btn.custom.primary[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]  .revenue1 .c3-bar-1 {\n  fill: #fe6672 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2FwcC1kYXRhL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcZGFzaGJvYXJkXFxhcHAtZGF0YVxcYXBwLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9hcHAtZGF0YS9hcHAtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FDQUo7QURFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREVFO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0FKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtBQ0ROO0FESUU7RUFDRSx3QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2FwcC1kYXRhL2FwcC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIHNwYW4ubWV0cmljLmxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggMTIwcHg7XHJcbiAgfVxyXG4gIC5jb2wtbG9hZGluZyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYnRuLmN1c3RvbS5wcmltYXJ5IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6Om5nLWRlZXAgLnJldmVudWUxIC5jMy1iYXItMSB7XHJcbiAgICBmaWxsOiByZ2IoMjU0LCAxMDIsIDExNCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaDQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuOmhvc3Qgc3Bhbi5tZXRyaWMubG9hZGluZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcbn1cbjpob3N0IC5jb2wtbG9hZGluZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmRhdGUtZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5kYXRlLWZpbHRlciAuYnRuLmN1c3RvbS5wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG46aG9zdDo6bmctZGVlcCAucmV2ZW51ZTEgLmMzLWJhci0xIHtcbiAgZmlsbDogI2ZlNjY3MiAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-app-data',
          templateUrl: './app-data.component.html',
          styleUrls: ['./app-data.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_9__["DashboardDateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/dashboard-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/dashboard-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppFeaturesAdminPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/features/admin/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/dashboard.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/dashboard.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppFeaturesAdminPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_data_app_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-data/app-data.component */
    "./src/app/features/admin/pages/dashboard/app-data/app-data.component.ts");
    /* harmony import */


    var _finance_finance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finance/finance.component */
    "./src/app/features/admin/pages/dashboard/finance/finance.component.ts");
    /* harmony import */


    var _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./realtime/realtime.component */
    "./src/app/features/admin/pages/dashboard/realtime/realtime.component.ts");

    function DashboardComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-app-data");
      }
    }

    function DashboardComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-finance");
      }
    }

    function DashboardComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-realtime");
      }
    }

    var DashboardComponent = function DashboardComponent() {
      _classCallCheck(this, DashboardComponent);

      this.activeTab = 'Application Data';
    };

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["duelit-dashboard"]],
      decls: 18,
      vars: 2,
      consts: [["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "Application Data"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "Finance"], ["ngbNavItem", "Realtime Data"], [1, "timezone"], [1, "mt-2", 3, "ngbNavOutlet"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function DashboardComponent_Template_ul_activeIdChange_0_listener($event) {
            return ctx.activeTab = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Finance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_ng_template_9_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Realtime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_ng_template_13_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Timezone: UTC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 8);
        }

        if (rf & 2) {
          var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.activeTab);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r167);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _app_data_app_data_component__WEBPACK_IMPORTED_MODULE_2__["AppDataComponent"], _finance_finance_component__WEBPACK_IMPORTED_MODULE_3__["FinanceComponent"], _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_4__["RealtimeComponent"]],
      styles: [".timezone[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  float: right;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-pack: right;\n          justify-content: right;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lem9uZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuIiwiLnRpbWV6b25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/dashboard.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/dashboard.module.ts ***!
    \********************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppFeaturesAdminPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_components_date_picker_range_date_picker_range_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/components/date-picker-range/date-picker-range.module */
    "./src/app/shared/components/date-picker-range/date-picker-range.module.ts");
    /* harmony import */


    var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/components/table/table.module */
    "./src/app/shared/components/table/table.module.ts");
    /* harmony import */


    var _components_keen_keen_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/keen/keen.module */
    "./src/app/features/admin/components/keen/keen.module.ts");
    /* harmony import */


    var _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/metric/metric.module */
    "./src/app/features/admin/components/metric/metric.module.ts");
    /* harmony import */


    var _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/keen-api/keen-api.module */
    "./src/app/features/admin/components/keen-api/keen-api.module.ts");
    /* harmony import */


    var _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../directives/keen-data/keen-data.module */
    "./src/app/features/admin/directives/keen-data/keen-data.module.ts");
    /* harmony import */


    var _app_data_app_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-data/app-data.component */
    "./src/app/features/admin/pages/dashboard/app-data/app-data.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/features/admin/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/features/admin/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _finance_finance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./finance/finance.component */
    "./src/app/features/admin/pages/dashboard/finance/finance.component.ts");
    /* harmony import */


    var _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./realtime/realtime.component */
    "./src/app/features/admin/pages/dashboard/realtime/realtime.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], // NgbDatepickerModule
      _shared_components_date_picker_range_date_picker_range_module__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_9__["KeenDataModule"], _components_keen_keen_module__WEBPACK_IMPORTED_MODULE_6__["KeenModule"], _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_7__["MetricModule"], _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_8__["KeenApiModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__["TableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _app_data_app_data_component__WEBPACK_IMPORTED_MODULE_10__["AppDataComponent"], _finance_finance_component__WEBPACK_IMPORTED_MODULE_13__["FinanceComponent"], _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_14__["RealtimeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], // NgbDatepickerModule
        _shared_components_date_picker_range_date_picker_range_module__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_9__["KeenDataModule"], _components_keen_keen_module__WEBPACK_IMPORTED_MODULE_6__["KeenModule"], _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_7__["MetricModule"], _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_8__["KeenApiModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__["TableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _app_data_app_data_component__WEBPACK_IMPORTED_MODULE_10__["AppDataComponent"], _finance_finance_component__WEBPACK_IMPORTED_MODULE_13__["FinanceComponent"], _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_14__["RealtimeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"], // NgbDatepickerModule
          _shared_components_date_picker_range_date_picker_range_module__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _directives_keen_data_keen_data_module__WEBPACK_IMPORTED_MODULE_9__["KeenDataModule"], _components_keen_keen_module__WEBPACK_IMPORTED_MODULE_6__["KeenModule"], _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_7__["MetricModule"], _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_8__["KeenApiModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__["TableModule"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/finance/finance.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/finance/finance.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FinanceComponent */

  /***/
  function srcAppFeaturesAdminPagesDashboardFinanceFinanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinanceComponent", function () {
      return FinanceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/constants/api */
    "./src/app/shared/constants/api/index.ts");
    /* harmony import */


    var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/constants */
    "./src/app/core/constants/index.ts");
    /* harmony import */


    var _shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/functions/date.util */
    "./src/app/shared/functions/date.util.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/dashboard-date.service */
    "./src/app/features/admin/services/dashboard-date.service.ts");
    /* harmony import */


    var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @core/services/toast.service */
    "./src/app/core/services/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_date_picker_range_date_picker_range_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../shared/components/date-picker-range/date-picker-range.component */
    "./src/app/shared/components/date-picker-range/date-picker-range.component.ts");
    /* harmony import */


    var _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../components/metric/metric.component */
    "./src/app/features/admin/components/metric/metric.component.ts");

    function FinanceComponent_ng_container_3_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-metric", 8);
      }

      if (rf & 2) {
        var item_r179 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r179);
      }
    }

    function FinanceComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinanceComponent_ng_container_3_duelit_metric_1_Template, 1, 1, "duelit-metric", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r177 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r177);
      }
    }

    function FinanceComponent_ng_container_13_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinanceComponent_ng_container_13_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184);

          var item_r182 = ctx.$implicit;

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r183.openUsersByTransaction(item_r182);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r182 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r182);
      }
    }

    function FinanceComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinanceComponent_ng_container_13_duelit_metric_1_Template, 1, 1, "duelit-metric", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r180 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r180);
      }
    }

    function FinanceComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FinanceComponent_ng_container_20_duelit_metric_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-metric", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinanceComponent_ng_container_20_duelit_metric_1_Template_duelit_metric_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var item_r187 = ctx.$implicit;

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r188.openUsersByTransaction(item_r187);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r187 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", item_r187);
      }
    }

    function FinanceComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinanceComponent_ng_container_20_duelit_metric_1_Template, 1, 1, "duelit-metric", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r185 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r185);
      }
    }

    function FinanceComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-metric", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r176.totalProfitStats$);
      }
    }

    var FinanceComponent =
    /*#__PURE__*/
    function () {
      function FinanceComponent(api, dashboardDate, toast, router, numberPipe, currencyPipe) {
        _classCallCheck(this, FinanceComponent);

        this.api = api;
        this.dashboardDate = dashboardDate;
        this.toast = toast;
        this.router = router;
        this.numberPipe = numberPipe;
        this.currencyPipe = currencyPipe;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(FinanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.rangeDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardDate.range);
          this.rangeDate.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (value) {
            _this10.dashboardDate.range = value;
          });
          this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.dashboardDate.range);
          this.totalCredits$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["CreditsApi"].TotalCredits).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
              totalCoins: 0,
              giftedCoins: 0
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            return [{
              title: 'Total Coins',
              subTitle: 'Count - Total In-game Coins',
              data: result.totalCoins ? _this10.numberPipe.transform(result.totalCoins) : '0'
            }, {
              title: 'Total Gifted Coins',
              subTitle: 'Count - Total Gifted Coins',
              data: result.giftedCoins ? _this10.numberPipe.transform(result.giftedCoins) : '0'
            }];
          }));
          this.date$.subscribe(function (_ref2) {
            var from = _ref2.from,
                to = _ref2.to;
            var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_FORMAT"]);
            var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_FORMAT"]);

            _this10.getRedeemedStats(startDate, endDate);

            _this10.getTotalProfitStats();

            _this10.productsSold$ = _this10.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["CreditsApi"].PurchasedCoins, {
              query: {
                start_date: startDate,
                end_date: endDate
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
              _this10.toast.error(err.error || err.statusText || err.message);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([{
                amount: '4.99',
                count: 0
              }, {
                amount: '9.99',
                count: 0
              }, {
                amount: '25.99',
                count: 0
              }, {
                amount: '49.99',
                count: 0
              }]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
              return result.map(function (res) {
                return {
                  name: _core_constants__WEBPACK_IMPORTED_MODULE_3__["ChartName"].PurchasedCount,
                  title: null,
                  subTitle: "Count - Total Purchased $".concat(res.amount),
                  data: res.count,
                  amount: Number(res.amount)
                };
              });
            }));
          });
        }
      }, {
        key: "updateDate",
        value: function updateDate() {
          this.date$.next(Object.assign({}, this.dashboardDate.range));
        }
      }, {
        key: "isDateRangeValid",
        value: function isDateRangeValid() {
          var rangeDate = this.rangeDate.value;
          return rangeDate.from && rangeDate.to;
        }
      }, {
        key: "getRedeemedStats",
        value: function getRedeemedStats(startDate, endDate) {
          var _this11 = this;

          this.redeemedStats$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["CreditsApi"].RedeemedCoins, {
            query: {
              start_date: startDate,
              end_date: endDate
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
              totalAmount: _core_constants__WEBPACK_IMPORTED_MODULE_3__["FAILED_TO_RETRIEVE"],
              playerCount: _core_constants__WEBPACK_IMPORTED_MODULE_3__["FAILED_TO_RETRIEVE"]
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            var dollarFormat = '0.0';
            var coins;
            var dollar;

            try {
              coins = parseInt(result.totalAmount);
              dollar = Math.floor(coins * 0.00825 * 100) / 100;
            } catch (e) {
              console.log("Invalid coin amount", e);
            }

            var data = "$0<br>0 coins";

            if (dollar && coins) {
              data = "".concat(_this11.currencyPipe.transform(dollar), "<br>").concat(_this11.numberPipe.transform(coins), " coins");
            }

            return [{
              name: _core_constants__WEBPACK_IMPORTED_MODULE_3__["ChartName"].RedeemCount,
              title: 'Total Redeems',
              subTitle: 'Redeem Stats',
              data: data,
              class: 'coin-dollar-metric',
              amount: dollar
            }, {
              name: _core_constants__WEBPACK_IMPORTED_MODULE_3__["ChartName"].RedeemCount,
              title: 'Redeemed Players Count',
              subTitle: 'Count - Players Count',
              data: result.playerCount
            }];
          }));
        }
      }, {
        key: "getTotalProfitStats",
        value: function getTotalProfitStats() {
          var _this12 = this;

          var redeemDollar;
          this.redeemedStats$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (redeemStats) {
            redeemDollar = redeemStats[0].amount;
            return _this12.productsSold$;
          })).subscribe(function (productSold) {
            var totalDollarPurchase = productSold.reduce(function (accumulator, p) {
              accumulator += p.amount * Number(p.data);
              return accumulator;
            }, 0);
            var totalProfit = totalDollarPurchase - redeemDollar;
            var data = "$0<br>0 coins";

            if (totalProfit) {
              data = "".concat(_this12.currencyPipe.transform(totalProfit), "<br>").concat(_this12.numberPipe.transform(Math.floor(totalProfit / 0.00825)), " coins");
            }

            _this12.totalProfitStats$ = {
              title: 'Total Profit',
              subTitle: 'Total Profit Stats',
              data: data,
              class: 'coin-dollar-metric'
            };
          });
        }
      }, {
        key: "openUsersByTransaction",
        value: function openUsersByTransaction(details) {
          var _this$date$$getValue6 = this.date$.getValue(),
              from = _this$date$$getValue6.from,
              to = _this$date$$getValue6.to;

          var startDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(from).format(_core_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_FORMAT"]);
          var endDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(to).format(_core_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_FORMAT"]);
          var queryParams = {
            transaction: _core_constants__WEBPACK_IMPORTED_MODULE_3__["TransactionType"].RedeemCoinsRequest,
            start_date: startDate,
            end_date: endDate
          };

          if (details.name === _core_constants__WEBPACK_IMPORTED_MODULE_3__["ChartName"].PurchasedCount) {
            queryParams["transaction"] = _core_constants__WEBPACK_IMPORTED_MODULE_3__["TransactionType"].Transaction;
            queryParams["amount"] = details.amount;
          }

          this.router.navigate(['/admin/users'], {
            queryParams: queryParams
          });
        }
      }]);

      return FinanceComponent;
    }();

    FinanceComponent.ɵfac = function FinanceComponent_Factory(t) {
      return new (t || FinanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_8__["DashboardDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]));
    };

    FinanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinanceComponent,
      selectors: [["duelit-finance"]],
      decls: 27,
      vars: 18,
      consts: [[1, "row", "container"], [4, "ngIf", "ngIfElse"], [1, "divider"], [1, "date-filter"], [3, "formControl"], [1, "btn", "custom", "primary", 3, "disabled", "click"], ["loading", ""], ["class", "col-6", 3, "metric", 4, "ngFor", "ngForOf"], [1, "col-6", 3, "metric"], ["class", "col-3 pointer", 3, "metric", "click", 4, "ngFor", "ngForOf"], [1, "col-3", "pointer", 3, "metric", "click"], [1, "col", "col-loading"], [1, "metric", "loading"], ["class", "col-6 pointer", 3, "metric", "click", 4, "ngFor", "ngForOf"], [1, "col-6", "pointer", 3, "metric", "click"], [1, "col-12", 3, "metric"]],
      template: function FinanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FinanceComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "duelit-date-picker-range", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinanceComponent_Template_button_click_8_listener() {
            return ctx.updateDate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Purchased Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FinanceComponent_ng_container_13_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FinanceComponent_ng_template_15_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Redeemed Coins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FinanceComponent_ng_container_20_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Profit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FinanceComponent_ng_container_25_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.totalCredits$))("ngIfElse", _r173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rangeDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isDateRangeValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx.productsSold$))("ngIfElse", _r173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, ctx.redeemedStats$))("ngIfElse", _r173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 16, ctx.redeemedStats$))("ngIfElse", _r173);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_date_picker_range_date_picker_range_component__WEBPACK_IMPORTED_MODULE_12__["DatePickerRangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_13__["MetricComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n[_nghost-%COMP%]   span.metric.loading[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n[_nghost-%COMP%]   .col-loading[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .date-filter[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   .date-filter[_ngcontent-%COMP%]   .btn.custom.primary[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]  .revenue1 .c3-bar-1 {\n  fill: #fe6672 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2FwcC1kYXRhL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcZGFzaGJvYXJkXFxhcHAtZGF0YVxcYXBwLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9hcHAtZGF0YS9hcHAtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FDQUo7QURFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREVFO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0FKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtBQ0ROO0FESUU7RUFDRSx3QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2FwcC1kYXRhL2FwcC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIHNwYW4ubWV0cmljLmxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggMTIwcHg7XHJcbiAgfVxyXG4gIC5jb2wtbG9hZGluZyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYnRuLmN1c3RvbS5wcmltYXJ5IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6Om5nLWRlZXAgLnJldmVudWUxIC5jMy1iYXItMSB7XHJcbiAgICBmaWxsOiByZ2IoMjU0LCAxMDIsIDExNCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaDQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuOmhvc3Qgc3Bhbi5tZXRyaWMubG9hZGluZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcbn1cbjpob3N0IC5jb2wtbG9hZGluZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmRhdGUtZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5kYXRlLWZpbHRlciAuYnRuLmN1c3RvbS5wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG46aG9zdDo6bmctZGVlcCAucmV2ZW51ZTEgLmMzLWJhci0xIHtcbiAgZmlsbDogI2ZlNjY3MiAhaW1wb3J0YW50O1xufSJdfQ== */", ".divider[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL2ZpbmFuY2UvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcYXBwXFxmZWF0dXJlc1xcYWRtaW5cXHBhZ2VzXFxkYXNoYm9hcmRcXGZpbmFuY2VcXGZpbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9maW5hbmNlL2ZpbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9wYWdlcy9kYXNoYm9hcmQvZmluYW5jZS9maW5hbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCIuZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-finance',
          templateUrl: './finance.component.html',
          styleUrls: ['../app-data/app-data.component.scss', './finance.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _services_dashboard_date_service__WEBPACK_IMPORTED_MODULE_8__["DashboardDateService"]
        }, {
          type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/dashboard/realtime/realtime.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/features/admin/pages/dashboard/realtime/realtime.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RealtimeComponent */

  /***/
  function srcAppFeaturesAdminPagesDashboardRealtimeRealtimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealtimeComponent", function () {
      return RealtimeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/constants/api */
    "./src/app/shared/constants/api/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/table/table.component */
    "./src/app/shared/components/table/table.component.ts");

    function RealtimeComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RealtimeComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duelit-table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var tournaments_r193 = ctx.$implicit;

        var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", tournaments_r193)("headerMapping", ctx_r192.tableHeadersMapping);
      }
    }

    var RealtimeComponent =
    /*#__PURE__*/
    function () {
      function RealtimeComponent(api) {
        _classCallCheck(this, RealtimeComponent);

        this.api = api;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.POLL_INTERVAL = 10000;
        this.timer$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.POLL_INTERVAL / 1000);
        this._stop = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._start = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tableHeadersMapping = [{
          name: 'ID',
          path: 'tournament_id'
        }, {
          name: 'Game Name',
          path: 'game_name'
        }, {
          name: 'Joined Players',
          path: 'total_players'
        }, {
          name: 'Real Players',
          path: 'total_real_players'
        }, {
          name: 'Minimum Players',
          path: 'minimum_players'
        }, {
          name: 'Status',
          path: 'status'
        }, {
          name: 'Total Payout',
          path: 'total_payout'
        }, {
          name: 'Level',
          path: 'level'
        }, {
          name: 'Time Left',
          path: 'time_left'
        }];
      }

      _createClass(RealtimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (t) {
            return _this13.POLL_INTERVAL / 1000 - t;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._stop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeatWhen"])(function () {
            return _this13._start;
          })).subscribe(function (t) {
            _this13.timer$.next(t);
          });
          this.openTournaments$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, this.POLL_INTERVAL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () {
            return _this13.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["TournamentsApi"].GetOccupiedOpenTournaments).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (result === null) {
              result = {};
            }

            _this13.restartTimer();

            var tournaments = _this13.getTournamentListByStatus(result, 'Started');

            tournaments = _this13.mapTimeLeft(tournaments);
            return tournaments;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe));
        }
      }, {
        key: "getTournamentListByStatus",
        value: function getTournamentListByStatus(list, status) {
          return Object.keys(list).filter(function (tournamentId) {
            return list[tournamentId].status === status;
          }).map(function (startedTournamentId) {
            return list[startedTournamentId];
          });
        }
      }, {
        key: "mapTimeLeft",
        value: function mapTimeLeft(tournamentList) {
          var now = moment__WEBPACK_IMPORTED_MODULE_1__();
          var tournaments = tournamentList.filter(function (t) {
            var startTime = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](t.timer.startAt, "DD/MM/YYYY h:mm:ss");
            return now.diff(startTime, "hours") === 0;
          }).map(function (t) {
            var startTime = moment__WEBPACK_IMPORTED_MODULE_1__["utc"](t.timer.startAt, "DD/MM/YYYY h:mm:ss");
            var diff = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](now.diff(startTime)); //.format("mm [mins] ss [seconds]");

            var minLeft = 10 - diff.minutes();
            var secLeft = 60 - diff.seconds();
            var totalSecs = minLeft * 60 + secLeft;
            t.time_left = "";

            if (minLeft > 0) {
              t.time_left += "".concat(minLeft, " mins ");
            }

            t.time_left += "".concat(secLeft, " secs");
            return t;
          });
          return tournaments;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "restartTimer",
        value: function restartTimer() {
          this._stop.next();

          this._start.next();
        }
      }]);

      return RealtimeComponent;
    }();

    RealtimeComponent.ɵfac = function RealtimeComponent_Factory(t) {
      return new (t || RealtimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
    };

    RealtimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RealtimeComponent,
      selectors: [["duelit-realtime"]],
      decls: 9,
      vars: 7,
      consts: [["loading", ""], [1, "d-inline", "pr-1"], [4, "ngIf", "ngIfElse"], [1, "col", "col-loading"], [1, "metric", "loading"], [3, "data", "headerMapping"]],
      template: function RealtimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RealtimeComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active Tournaments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RealtimeComponent_ng_container_7_Template, 2, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        }

        if (rf & 2) {
          var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Refreshing in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.timer$), " seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.openTournaments$))("ngIfElse", _r190);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".col-loading[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n[_nghost-%COMP%]     span.loading {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvZGFzaGJvYXJkL3JlYWx0aW1lL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcZGFzaGJvYXJkXFxyZWFsdGltZVxccmVhbHRpbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9yZWFsdGltZS9yZWFsdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL2Rhc2hib2FyZC9yZWFsdGltZS9yZWFsdGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29sLWxvYWRpbmcge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG46aG9zdCB7XHJcbiAgOjpuZy1kZWVwIHNwYW4ubG9hZGluZyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcclxuICB9XHJcbn1cclxuIiwiLmNvbC1sb2FkaW5nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpob3N0IDo6bmctZGVlcCBzcGFuLmxvYWRpbmcge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHggMTIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealtimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-realtime',
          templateUrl: './realtime.component.html',
          styleUrls: ['./realtime.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/table/table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/table/table.component.ts ***!
    \************************************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppSharedComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_directives_ngbd_sortable_header_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/directives/ngbd-sortable-header/ngbd-sortable-header.directive */
    "./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TableComponent_table_0_th_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_table_0_th_3_Template_th_sort_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r95.onSort($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("duelitSortable", item_r94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r94.name);
      }
    }

    function TableComponent_table_0_tr_5_ng_container_1_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r99);
      }
    }

    function TableComponent_table_0_tr_5_ng_container_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r99);
      }
    }

    function TableComponent_table_0_tr_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_table_0_tr_5_ng_container_1_th_1_Template, 2, 1, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_table_0_tr_5_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r100 = ctx.index;

        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r100 === 0)("ngIfElse", _r102);
      }
    }

    function TableComponent_table_0_tr_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_table_0_tr_5_ng_container_1_Template, 4, 2, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowData_r97 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rowData_r97);
      }
    }

    function TableComponent_table_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_table_0_th_3_Template, 2, 2, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_table_0_tr_5_Template, 2, 1, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r89.headerMapping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r89.tableData);
      }
    }

    function TableComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No data to show.\n");
      }
    }

    var compare = function compare(v1, v2) {
      return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    };

    var TableComponent =
    /*#__PURE__*/
    function () {
      function TableComponent() {
        _classCallCheck(this, TableComponent);

        this.headerMapping = [];
        this.data = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortDirection = '';
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tableName) {}
        }
      }, {
        key: "getData",
        value: function getData(path, data) {
          var temp = data;
          path.split('.').forEach(function (p) {
            return temp = temp[p];
          });
          return String(temp);
        }
      }, {
        key: "onSort",
        value: function onSort(_ref3) {
          var column = _ref3.column,
              direction = _ref3.direction;
          // resetting other headers
          this.headers.forEach(function (header) {
            if (header.duelitSortable !== column) {
              header.direction = '';
            }
          });
          this.sortColumn = column;
          this.sortDirection = direction;
        }
      }, {
        key: "tableData",
        get: function get() {
          var _this14 = this;

          return this.data.map(function (row) {
            return _this14.headerMapping.map(function (header) {
              return _this14.getData(header.path, row);
            });
          }).sort(function (a, b) {
            var indexOfSortedCol = _this14.headerMapping.indexOf(_this14.sortColumn);

            if (indexOfSortedCol < 0) {
              indexOfSortedCol = 0;
            }

            var result = compare(a[indexOfSortedCol], b[indexOfSortedCol]);
            return _this14.sortDirection === 'desc' ? result * -1 : result;
          });
        }
      }]);

      return TableComponent;
    }();

    TableComponent.ɵfac = function TableComponent_Factory(t) {
      return new (t || TableComponent)();
    };

    TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableComponent,
      selectors: [["duelit-table"]],
      viewQuery: function TableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_shared_directives_ngbd_sortable_header_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeaderDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headers = _t);
        }
      },
      inputs: {
        headerMapping: "headerMapping",
        data: "data",
        tableName: "tableName"
      },
      outputs: {
        sort: "sort"
      },
      decls: 3,
      vars: 2,
      consts: [["class", "table table-striped", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "table", "table-striped"], ["scope", "col", 3, "duelitSortable", "sort", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col", 3, "duelitSortable", "sort"], ["scope", "row", 4, "ngIf", "ngIfElse"], ["td", ""], ["scope", "row"]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableComponent_table_0_Template, 6, 2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length)("ngIfElse", _r90);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_directives_ngbd_sortable_header_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeaderDirective"]],
      styles: ["th.asc[_ngcontent-%COMP%]::before, th.desc[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC\") no-repeat;\n  background-size: auto;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n  float: left;\n  margin-left: -22px;\n}\n\nth.desc[_ngcontent-%COMP%]::before {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDI4QkFBQTtFQUNJLHFCQUFBO0VBQ0oscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLmFzYzo6YmVmb3JlLCB0aC5kZXNjOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFBbXhKUkVGVWVBSHRta3NyUlZFVXg3MmZIOENJR1FOSmtwR1VVbWFrREVpWlNKUklac1JRbUNrVEpSbVptSmdRRTBrcFgwRDVESktKZ2ZmN3YrcnUydTNPM3Z2YzY3VE92c2RhdGRybm5QMVkvLy92N0h2dnViZGJVaUloQklTQUVCQUNRa0FJQ0FFaElBUTRDWFNoMkRueURmbUNQRUcySXY5RjlNUGxNL0xIeUFlY2R5TXpIWU53UjNmZE5LL09IOUhYbDFVQ296RDI0VEN2SUx4aXpFRFdJRXpBMEZjTTh3b0NnUnJKQ29TNVBJd3JBTlFTTUFKWDFMRUk5YnFwUW80SllORkZLUlN2SWdzeEhEVm5xWmdJa1BuTkJNMHJJR3RZazlZT09zcWdiZ2VwUkNmZGJtRnRxaEZrVkVEVlBqSnAwK1o2ZTZoUkhocUJLZ2c2WkRDdllCeWdWbVVvRUdvaDVKVFJ2SUp3aEpvMWFVT29oNENMUE15dnh4aTdFV09NZ25DR3NYWEkxR0lYbFpVWVg3dWNVK2tiUjhOVzhsaDNPN2N1ZTBQazMyTUtuZGZVeFFGQXd4ZGlyazNmSGFwcEFuYzBvcURQekRmR1RCckNmSFAwNGRNNG9UVjhjeHIwU1Z6SDlGRjA3eEQzaWI2eENERStNK2FVY1Z5Z3RXenpidEdYMnJQQnJFVVlmZWNmUWthRnpZaTZIalZuR0JkdEw3ZXBxQWxjMStqUmRBYXA3NFJyblBjNEJDaWp0dFkydFJjZE4wZzE3dzdIcVpyWGhkSlRZQXVTM2hkOHordktnSzNWMXpXUGFlMG1aRE15a2FkQm4xaFRRQkxuWk53VnJKcFNlL053RWVEc0V3Q2N0RU9zSlRzZ3hMdkNxVWwyQUNmdEVHdkpEZ2p4cm5CcWtoM0FTVHZFV3JJRFFyd3JuSnBrQjNEU0RyR1c3SUFRN3dxbkp0a0JuTFJ6dGVqWFhWdTQrbXh6L25ROWpSMXc1VkI4NmVqTFRGY25uRHdoelYrRjZUK0NIWmx4NlRIU2puNzZleXlCSU9QSHlEYWtoQkFRQWtKQUNBZ0JJU0FFaElBUVlDTHdDOEp4cEFtc0VHdDZBQUFBQUVsRlRrU3VRbUNDXCIpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjJweDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG59XHJcblxyXG50aC5kZXNjOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbiIsInRoLmFzYzo6YmVmb3JlLCB0aC5kZXNjOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFBbXhKUkVGVWVBSHRta3NyUlZFVXg3MmZIOENJR1FOSmtwR1VVbWFrREVpWlNKUklac1JRbUNrVEpSbVptSmdRRTBrcFgwRDVESktKZ2ZmN3YrcnUydTNPM3Z2YzY3VE92c2RhdGRybm5QMVkvLy92N0h2dnViZGJVaUloQklTQUVCQUNRa0FJQ0FFaElBUTRDWFNoMkRueURmbUNQRUcySXY5RjlNUGxNL0xIeUFlY2R5TXpIWU53UjNmZE5LL09IOUhYbDFVQ296RDI0VEN2SUx4aXpFRFdJRXpBMEZjTTh3b0NnUnJKQ29TNVBJd3JBTlFTTUFKWDFMRUk5YnFwUW80SllORkZLUlN2SWdzeEhEVm5xWmdJa1BuTkJNMHJJR3RZazlZT09zcWdiZ2VwUkNmZGJtRnRxaEZrVkVEVlBqSnAwK1o2ZTZoUkhocUJLZ2c2WkRDdllCeWdWbVVvRUdvaDVKVFJ2SUp3aEpvMWFVT29oNENMUE15dnh4aTdFV09NZ25DR3NYWEkxR0lYbFpVWVg3dWNVK2tiUjhOVzhsaDNPN2N1ZTBQazMyTUtuZGZVeFFGQXd4ZGlyazNmSGFwcEFuYzBvcURQekRmR1RCckNmSFAwNGRNNG9UVjhjeHIwU1Z6SDlGRjA3eEQzaWI2eENERStNK2FVY1Z5Z3RXenpidEdYMnJQQnJFVVlmZWNmUWthRnpZaTZIalZuR0JkdEw3ZXBxQWxjMStqUmRBYXA3NFJyblBjNEJDaWp0dFkydFJjZE4wZzE3dzdIcVpyWGhkSlRZQXVTM2hkOHordktnSzNWMXpXUGFlMG1aRE15a2FkQm4xaFRRQkxuWk53VnJKcFNlL053RWVEc0V3Q2N0RU9zSlRzZ3hMdkNxVWwyQUNmdEVHdkpEZ2p4cm5CcWtoM0FTVHZFV3JJRFFyd3JuSnBrQjNEU0RyR1c3SUFRN3dxbkp0a0JuTFJ6dGVqWFhWdTQrbXh6L25ROWpSMXc1VkI4NmVqTFRGY25uRHdoelYrRjZUK0NIWmx4NlRIU2puNzZleXlCSU9QSHlEYWtoQkFRQWtKQUNBZ0JJU0FFaElBUVlDTHdDOEp4cEFtc0VHdDZBQUFBQUVsRlRrU3VRbUNDXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTIycHg7XG59XG5cbnRoLmRlc2M6OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-table',
          templateUrl: './table.component.html',
          styleUrls: ['./table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        headerMapping: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tableName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_shared_directives_ngbd_sortable_header_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeaderDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/table/table.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/table/table.module.ts ***!
    \*********************************************************/

  /*! exports provided: TableModule */

  /***/
  function srcAppSharedComponentsTableTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_directives_ngbd_sortable_header_ngbd_sortable_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/directives/ngbd-sortable-header/ngbd-sortable-header.module */
    "./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.module.ts");
    /* harmony import */


    var _table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table.component */
    "./src/app/shared/components/table/table.component.ts");

    var TableModule = function TableModule() {
      _classCallCheck(this, TableModule);
    };

    TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TableModule
    });
    TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TableModule_Factory(t) {
        return new (t || TableModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_directives_ngbd_sortable_header_ngbd_sortable_header_module__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TableModule, {
        declarations: [_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_directives_ngbd_sortable_header_ngbd_sortable_header_module__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderModule"]],
        exports: [_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_directives_ngbd_sortable_header_ngbd_sortable_header_module__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderModule"]],
          exports: [_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.directive.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.directive.ts ***!
    \******************************************************************************************/

  /*! exports provided: NgbdSortableHeaderDirective */

  /***/
  function srcAppSharedDirectivesNgbdSortableHeaderNgbdSortableHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdSortableHeaderDirective", function () {
      return NgbdSortableHeaderDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _rotate = {
      asc: 'desc',
      desc: '',
      '': 'asc'
    };

    var NgbdSortableHeaderDirective =
    /*#__PURE__*/
    function () {
      function NgbdSortableHeaderDirective() {
        _classCallCheck(this, NgbdSortableHeaderDirective);

        this.duelitSortable = '';
        this.direction = '';
        this.tableName = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NgbdSortableHeaderDirective, [{
        key: "rotate",
        value: function rotate() {
          this.direction = _rotate[this.direction];
          this.sort.emit({
            column: this.duelitSortable,
            direction: this.direction
          });
        }
      }, {
        key: "_t",
        get: function get() {
          return true;
        }
      }, {
        key: "isAscending",
        get: function get() {
          return this.direction === 'asc';
        }
      }, {
        key: "isDescending",
        get: function get() {
          return this.direction === 'desc';
        }
      }]);

      return NgbdSortableHeaderDirective;
    }();

    NgbdSortableHeaderDirective.ɵfac = function NgbdSortableHeaderDirective_Factory(t) {
      return new (t || NgbdSortableHeaderDirective)();
    };

    NgbdSortableHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgbdSortableHeaderDirective,
      selectors: [["th", "duelitSortable", ""]],
      hostVars: 6,
      hostBindings: function NgbdSortableHeaderDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeaderDirective_click_HostBindingHandler($event) {
            return ctx.rotate($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pointer", ctx._t)("asc", ctx.isAscending)("desc", ctx.isDescending);
        }
      },
      inputs: {
        duelitSortable: "duelitSortable",
        direction: "direction",
        tableName: "tableName"
      },
      outputs: {
        sort: "sort"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdSortableHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'th[duelitSortable]'
        }]
      }], null, {
        duelitSortable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tableName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _t: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.pointer']
        }],
        isAscending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.asc']
        }],
        isDescending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.desc']
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: NgbdSortableHeaderModule */

  /***/
  function srcAppSharedDirectivesNgbdSortableHeaderNgbdSortableHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdSortableHeaderModule", function () {
      return NgbdSortableHeaderModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ngbd-sortable-header.directive */
    "./src/app/shared/directives/ngbd-sortable-header/ngbd-sortable-header.directive.ts");

    var NgbdSortableHeaderModule = function NgbdSortableHeaderModule() {
      _classCallCheck(this, NgbdSortableHeaderModule);
    };

    NgbdSortableHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgbdSortableHeaderModule
    });
    NgbdSortableHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgbdSortableHeaderModule_Factory(t) {
        return new (t || NgbdSortableHeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgbdSortableHeaderModule, {
        declarations: [_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgbdSortableHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_ngbd_sortable_header_directive__WEBPACK_IMPORTED_MODULE_2__["NgbdSortableHeaderDirective"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map