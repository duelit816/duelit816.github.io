function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-paypal-paypal-module"], {
  /***/
  "./src/app/core/constants/chart-name.enum.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/constants/chart-name.enum.ts ***!
    \***************************************************/

  /*! exports provided: ChartName */

  /***/
  function srcAppCoreConstantsChartNameEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartName", function () {
      return ChartName;
    });

    var ChartName;

    (function (ChartName) {
      ChartName["SignupCount"] = "signupCount";
      ChartName["ActivatedSignupCount"] = "activatedSignupCount";
      ChartName["PurchasedCount"] = "purchasedCount";
      ChartName["RedeemCount"] = "redeemCount";
    })(ChartName || (ChartName = {}));
    /***/

  },

  /***/
  "./src/app/core/constants/converted-type.enum.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/constants/converted-type.enum.ts ***!
    \*******************************************************/

  /*! exports provided: ConvertedType, isConvertedTypeValid */

  /***/
  function srcAppCoreConstantsConvertedTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvertedType", function () {
      return ConvertedType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isConvertedTypeValid", function () {
      return isConvertedTypeValid;
    });

    var ConvertedType;

    (function (ConvertedType) {
      ConvertedType["Converted"] = "converted";
      ConvertedType["Churned"] = "churned";
    })(ConvertedType || (ConvertedType = {}));

    function isConvertedTypeValid(type) {
      return Object.keys(ConvertedType).findIndex(function (key) {
        return ConvertedType[key] === type;
      }) >= 0;
    }
    /***/

  },

  /***/
  "./src/app/core/constants/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/core/constants/index.ts ***!
    \*****************************************/

  /*! exports provided: CASHOUT_REQUEST_AMOUNT, DATE_FORMAT, FAILED_TO_RETRIEVE, UserRole, UserStatus, TransactionType, isTransactionTypeValid, ChartName, ConvertedType, isConvertedTypeValid */

  /***/
  function srcAppCoreConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CASHOUT_REQUEST_AMOUNT", function () {
      return CASHOUT_REQUEST_AMOUNT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function () {
      return DATE_FORMAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAILED_TO_RETRIEVE", function () {
      return FAILED_TO_RETRIEVE;
    });
    /* harmony import */


    var _user_role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-role.enum */
    "./src/app/core/constants/user-role.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRole", function () {
      return _user_role_enum__WEBPACK_IMPORTED_MODULE_0__["UserRole"];
    });
    /* harmony import */


    var _user_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-status.enum */
    "./src/app/core/constants/user-status.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserStatus", function () {
      return _user_status_enum__WEBPACK_IMPORTED_MODULE_1__["UserStatus"];
    });
    /* harmony import */


    var _transaction_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./transaction-type.enum */
    "./src/app/core/constants/transaction-type.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TransactionType", function () {
      return _transaction_type_enum__WEBPACK_IMPORTED_MODULE_2__["TransactionType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isTransactionTypeValid", function () {
      return _transaction_type_enum__WEBPACK_IMPORTED_MODULE_2__["isTransactionTypeValid"];
    });
    /* harmony import */


    var _chart_name_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chart-name.enum */
    "./src/app/core/constants/chart-name.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChartName", function () {
      return _chart_name_enum__WEBPACK_IMPORTED_MODULE_3__["ChartName"];
    });
    /* harmony import */


    var _converted_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./converted-type.enum */
    "./src/app/core/constants/converted-type.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConvertedType", function () {
      return _converted_type_enum__WEBPACK_IMPORTED_MODULE_4__["ConvertedType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isConvertedTypeValid", function () {
      return _converted_type_enum__WEBPACK_IMPORTED_MODULE_4__["isConvertedTypeValid"];
    });

    var CASHOUT_REQUEST_AMOUNT = 'cashout-request-amount';
    var DATE_FORMAT = 'YYYY-MM-DD';
    var FAILED_TO_RETRIEVE = '-';
    /***/
  },

  /***/
  "./src/app/core/constants/transaction-type.enum.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/constants/transaction-type.enum.ts ***!
    \*********************************************************/

  /*! exports provided: TransactionType, isTransactionTypeValid */

  /***/
  function srcAppCoreConstantsTransactionTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionType", function () {
      return TransactionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isTransactionTypeValid", function () {
      return isTransactionTypeValid;
    });

    var TransactionType;

    (function (TransactionType) {
      TransactionType["Add"] = "add";
      TransactionType["AdminCredits"] = "adminCredits";
      TransactionType["Transaction"] = "transaction";
      TransactionType["RedeemCoinsRequest"] = "redeemCoinsRequest";
    })(TransactionType || (TransactionType = {}));

    function isTransactionTypeValid(type) {
      return Object.keys(TransactionType).findIndex(function (key) {
        return TransactionType[key] === type;
      }) >= 0;
    }
    /***/

  },

  /***/
  "./src/app/core/constants/user-role.enum.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/constants/user-role.enum.ts ***!
    \**************************************************/

  /*! exports provided: UserRole */

  /***/
  function srcAppCoreConstantsUserRoleEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRole", function () {
      return UserRole;
    });

    var UserRole;

    (function (UserRole) {
      UserRole["Admin"] = "admin";
      UserRole["Developer"] = "dev";
      UserRole["Player"] = "player";
    })(UserRole || (UserRole = {}));
    /***/

  },

  /***/
  "./src/app/core/constants/user-status.enum.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/constants/user-status.enum.ts ***!
    \****************************************************/

  /*! exports provided: UserStatus */

  /***/
  function srcAppCoreConstantsUserStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatus", function () {
      return UserStatus;
    });

    var UserStatus;

    (function (UserStatus) {
      UserStatus["Active"] = "active";
      UserStatus["Inactive"] = "inactive";
      UserStatus["Banned"] = "banned";
      UserStatus["Deactived"] = "deactivated";
      UserStatus["Pending"] = "pending";
    })(UserStatus || (UserStatus = {}));
    /***/

  },

  /***/
  "./src/app/features/paypal/paypal-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/features/paypal/paypal-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: PaypalRoutingModule */

  /***/
  function srcAppFeaturesPaypalPaypalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaypalRoutingModule", function () {
      return PaypalRoutingModule;
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


    var _paypal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./paypal.component */
    "./src/app/features/paypal/paypal.component.ts");

    var routes = [{
      path: '',
      component: _paypal_component__WEBPACK_IMPORTED_MODULE_2__["PaypalComponent"]
    }];

    var PaypalRoutingModule = function PaypalRoutingModule() {
      _classCallCheck(this, PaypalRoutingModule);
    };

    PaypalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaypalRoutingModule
    });
    PaypalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaypalRoutingModule_Factory(t) {
        return new (t || PaypalRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaypalRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaypalRoutingModule, [{
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
  "./src/app/features/paypal/paypal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/features/paypal/paypal.component.ts ***!
    \*****************************************************/

  /*! exports provided: PaypalComponent */

  /***/
  function srcAppFeaturesPaypalPaypalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaypalComponent", function () {
      return PaypalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/constants */
    "./src/app/core/constants/index.ts");
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/toast.service */
    "./src/app/core/services/toast.service.ts");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaypalComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Processing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PaypalComponent_ng_template_1_h3_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash out request saved successfully, please check your email.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PaypalComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaypalComponent_ng_template_1_h3_0_Template, 2, 0, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.isSuccessful);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting you to redeem page in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r69.timer$), "");
      }
    }

    var PaypalComponent =
    /*#__PURE__*/
    function () {
      function PaypalComponent(route, router, toast, api) {
        _classCallCheck(this, PaypalComponent);

        this.route = route;
        this.router = router;
        this.toast = toast;
        this.api = api;
        this.countdown = 5;
        this.timer$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.countdown);
        this.isProcessing = true;
        this.isSuccessful = false;
      }

      _createClass(PaypalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (result) {
            if (result.error) {
              // todo: toastr
              _this.redirectToRedeem();

              _this.toast.error(result.error_description || result.error || 'Error');

              return;
            }

            _this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].GetPaypalUserInfo, {
              query: result
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              _this.toast.error('Error on getting Paypal information.');

              _this.redirectToRedeem();

              return rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (userDetails) {
              var cashoutRequestAmount = localStorage.getItem(_core_constants__WEBPACK_IMPORTED_MODULE_1__["CASHOUT_REQUEST_AMOUNT"]);

              if (!cashoutRequestAmount) {
                _this.toast.error("Couldn't fetch amount requested.");

                _this.redirectToRedeem();

                return rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"];
              }

              return _this.api.post(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["CreditsApi"].CashoutRequest, {
                body: {
                  email: userDetails.email,
                  amount: cashoutRequestAmount
                },
                opts: {
                  addSecurity: false
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              _this.toast.error("".concat(err.data || err.error || JSON.stringify(err)));

              _this.redirectToRedeem();

              return rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"];
            })).subscribe(function () {
              _this.isSuccessful = true;

              _this.toast.show({
                textOrTpl: 'Cash out request saved successfully, please check your email.',
                class: 'success',
                dismissible: true,
                delay: 30000
              });

              localStorage.removeItem(_core_constants__WEBPACK_IMPORTED_MODULE_1__["CASHOUT_REQUEST_AMOUNT"]);

              _this.redirectToRedeem();
            });
          });
        }
      }, {
        key: "redirectToRedeem",
        value: function redirectToRedeem() {
          var _this2 = this;

          this.isProcessing = false;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (t) {
            return _this2.countdown - t;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function (t) {
            return t >= 0;
          })).subscribe(function (t) {
            _this2.timer$.next(t);

            if (t <= 0) {
              _this2.timer$.complete();

              _this2.router.navigate(['/redeem']);
            }
          });
        }
      }]);

      return PaypalComponent;
    }();

    PaypalComponent.ɵfac = function PaypalComponent_Factory(t) {
      return new (t || PaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]));
    };

    PaypalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaypalComponent,
      selectors: [["duelit-paypal"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["timer", ""], [1, "spinner-container"], [1, "loading"], [4, "ngIf"]],
      template: function PaypalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaypalComponent_ng_container_0_Template, 5, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaypalComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProcessing)("ngIfElse", _r68);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   div.spinner-container[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 150px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   div.spinner-container[_ngcontent-%COMP%]   span.loading[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  background-size: auto 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGF5cGFsL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXHBheXBhbFxccGF5cGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wYXlwYWwvcGF5cGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFFRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BheXBhbC9wYXlwYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBkaXYuc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBzcGFuLmxvYWRpbmcge1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBkaXYuc3Bpbm5lci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGRpdi5zcGlubmVyLWNvbnRhaW5lciBzcGFuLmxvYWRpbmcge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaypalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-paypal',
          templateUrl: './paypal.component.html',
          styleUrls: ['./paypal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/paypal/paypal.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/features/paypal/paypal.module.ts ***!
    \**************************************************/

  /*! exports provided: PaypalModule */

  /***/
  function srcAppFeaturesPaypalPaypalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaypalModule", function () {
      return PaypalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _paypal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./paypal-routing.module */
    "./src/app/features/paypal/paypal-routing.module.ts");
    /* harmony import */


    var _paypal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paypal.component */
    "./src/app/features/paypal/paypal.component.ts");

    var PaypalModule = function PaypalModule() {
      _classCallCheck(this, PaypalModule);
    };

    PaypalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaypalModule
    });
    PaypalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaypalModule_Factory(t) {
        return new (t || PaypalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _paypal_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaypalRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaypalModule, {
        declarations: [_paypal_component__WEBPACK_IMPORTED_MODULE_3__["PaypalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _paypal_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaypalRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaypalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_paypal_component__WEBPACK_IMPORTED_MODULE_3__["PaypalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _paypal_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaypalRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=features-paypal-paypal-module-es5.js.map