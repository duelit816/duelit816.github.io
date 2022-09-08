function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-redeem-redeem-module"], {
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
  "./src/app/core/services/credits.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/credits.service.ts ***!
    \**************************************************/

  /*! exports provided: CreditsService */

  /***/
  function srcAppCoreServicesCreditsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditsService", function () {
      return CreditsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/constants/api */
    "./src/app/shared/constants/api/index.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/core/services/api.service.ts");

    var CreditsService =
    /*#__PURE__*/
    function () {
      function CreditsService(api) {
        _classCallCheck(this, CreditsService);

        this.api = api;
      }

      _createClass(CreditsService, [{
        key: "getCredits",
        value: function getCredits() {
          return this.api.get(src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_1__["CreditsApi"].Credits);
        }
      }]);

      return CreditsService;
    }();

    CreditsService.ɵfac = function CreditsService_Factory(t) {
      return new (t || CreditsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    CreditsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CreditsService,
      factory: CreditsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/redeem/directives/paypal.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/redeem/directives/paypal.directive.ts ***!
    \****************************************************************/

  /*! exports provided: PaypalDirective */

  /***/
  function srcAppFeaturesRedeemDirectivesPaypalDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaypalDirective", function () {
      return PaypalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var PaypalDirective =
    /*#__PURE__*/
    function () {
      function PaypalDirective(el) {
        _classCallCheck(this, PaypalDirective);

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        el.nativeElement.id = 'duelit-paypal';
        this.use();
      }

      _createClass(PaypalDirective, [{
        key: "onClicked",
        value: function onClicked(e) {
          this.opened.emit();
        }
      }, {
        key: "use",
        value: function use() {
          // tslint:disable-next-line: no-string-literal
          if (window['paypal']) {
            try {
              // tslint:disable-next-line: no-string-literal
              window['paypal'].use(['login'], function (login) {
                login.render({
                  appid: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paypal.apiId,
                  authend: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paypal.environment,
                  scopes: 'email',
                  containerid: 'duelit-paypal',
                  locale: 'es-es',
                  theme: 'neutral',
                  text: 'Send Cash Out Request',
                  fullPage: 'true',
                  returnurl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].paypal.returnUrl
                });
              });
            } catch (err) {
              console.error(err); // todo: toastr
            }
          } else {
            console.error('Paypal not found');
          }
        }
      }]);

      return PaypalDirective;
    }();

    PaypalDirective.ɵfac = function PaypalDirective_Factory(t) {
      return new (t || PaypalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    PaypalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PaypalDirective,
      selectors: [["", "duelitPaypal", ""]],
      hostBindings: function PaypalDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaypalDirective_click_HostBindingHandler($event) {
            return ctx.onClicked($event);
          });
        }
      },
      outputs: {
        opened: "opened"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaypalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[duelitPaypal]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/redeem/redeem-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/features/redeem/redeem-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: RedeemRoutingModule */

  /***/
  function srcAppFeaturesRedeemRedeemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedeemRoutingModule", function () {
      return RedeemRoutingModule;
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


    var _guards_redeem_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @guards/redeem.guard */
    "./src/app/guards/redeem.guard.ts");
    /* harmony import */


    var _redeem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./redeem.component */
    "./src/app/features/redeem/redeem.component.ts");

    var routes = [{
      path: '',
      component: _redeem_component__WEBPACK_IMPORTED_MODULE_3__["RedeemComponent"],
      canActivate: [_guards_redeem_guard__WEBPACK_IMPORTED_MODULE_2__["RedeemGuard"]]
    }];

    var RedeemRoutingModule = function RedeemRoutingModule() {
      _classCallCheck(this, RedeemRoutingModule);
    };

    RedeemRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RedeemRoutingModule
    });
    RedeemRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RedeemRoutingModule_Factory(t) {
        return new (t || RedeemRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RedeemRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemRoutingModule, [{
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
  "./src/app/features/redeem/redeem.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/features/redeem/redeem.component.ts ***!
    \*****************************************************/

  /*! exports provided: RedeemComponent */

  /***/
  function srcAppFeaturesRedeemRedeemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedeemComponent", function () {
      return RedeemComponent;
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


    var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/constants */
    "./src/app/core/constants/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_services_credits_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/credits.service */
    "./src/app/core/services/credits.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/panel/panel.component */
    "./src/app/shared/components/panel/panel.component.ts");
    /* harmony import */


    var _directives_paypal_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./directives/paypal.directive */
    "./src/app/features/redeem/directives/paypal.directive.ts");

    function RedeemComponent_ng_container_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You will be credited a total of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " USD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r61.reedemableValue(), "0.2-2"), "");
      }
    }

    function RedeemComponent_ng_container_2_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Insufficient Funds.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var credits_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You can only redeem ", ctx_r62.maxReemableDollars(credits_r60.virtualAmount, credits_r60.coinsRateConversion), " or less");
      }
    }

    function RedeemComponent_ng_container_2_ng_template_24_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
      }
    }

    function RedeemComponent_ng_container_2_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RedeemComponent_ng_container_2_ng_template_24_div_0_Template, 1, 0, "div", 12);
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.cashOutForm.get("cashOutAmount").value > 0 && ctx_r64.reedemableValue() > 0);
      }
    }

    function RedeemComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "duelit-panel", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RedeemComponent_ng_container_2_span_11_Template, 6, 4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Redeemable for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RedeemComponent_ng_container_2_div_23_Template, 5, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RedeemComponent_ng_container_2_ng_template_24_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var credits_r60 = ctx.$implicit;

        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", credits_r60.virtualAmount, " coins = $ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 12, ctx_r57.maxReemableDollars(credits_r60.virtualAmount, credits_r60.coinsRateConversion), "0.2-2"), " USD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r57.cashOutForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r57.maxReemableDollars(credits_r60.virtualAmount, credits_r60.coinsRateConversion));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Paypals transaction fee $ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 15, ctx_r57.transactionFee(), "0.2-2"), " USD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.reedemableValue() > 0 && ctx_r57.cashOutForm.get("cashOutAmount").value <= ctx_r57.maxReemableDollars(credits_r60.virtualAmount, credits_r60.coinsRateConversion));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 18, ctx_r57.cashOutForm.get("cashOutAmount").value, "0.2-2"), " - $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 21, ctx_r57.transactionFee(), "0.2-2"), " = $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 24, ctx_r57.reedemableValue(), "0.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 27, ctx_r57.coinsToDeduct(), "0.0-0"), " coins");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.cashOutForm.get("cashOutAmount").value > ctx_r57.maxReemableDollars(credits_r60.virtualAmount, credits_r60.coinsRateConversion))("ngIfElse", _r63);
      }
    }

    function RedeemComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Getting coins data... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RedeemComponent =
    /*#__PURE__*/
    function () {
      function RedeemComponent(creditsService, fb) {
        _classCallCheck(this, RedeemComponent);

        this.creditsService = creditsService;
        this.fb = fb;
      }

      _createClass(RedeemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.credits$ = this.creditsService.getCredits().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (credits) {
            _this.credits = credits;
            _this.cashOutForm = _this.fb.group({
              cashOutAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(_this.maxReemableDollars(credits.virtualAmount, credits.coinsRateConversion)), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])
            });

            _this.cashOutForm.get('cashOutAmount').valueChanges.subscribe(function (value) {
              return localStorage.setItem(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CASHOUT_REQUEST_AMOUNT"], value);
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
        }
      }, {
        key: "maxReemableDollars",
        value: function maxReemableDollars(coins, coinsRateConversion) {
          return Math.floor(coins * coinsRateConversion);
        }
      }, {
        key: "transactionFee",
        value: function transactionFee() {
          var cashout = this.cashOutForm.get('cashOutAmount').value;

          if (cashout < 35) {
            return 1;
          } else if (cashout >= 35) {
            return Math.round(2.9 * cashout) / 100;
          }

          return 0;
        }
      }, {
        key: "reedemableValue",
        value: function reedemableValue() {
          var cashout = this.cashOutForm.get('cashOutAmount').value;
          return cashout - this.transactionFee();
        }
      }, {
        key: "coinsToDeduct",
        value: function coinsToDeduct() {
          var cashout = this.cashOutForm.get('cashOutAmount').value;
          return Math.ceil(cashout / this.credits.coinsRateConversion);
        }
      }]);

      return RedeemComponent;
    }();

    RedeemComponent.ɵfac = function RedeemComponent_Factory(t) {
      return new (t || RedeemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_credits_service__WEBPACK_IMPORTED_MODULE_4__["CreditsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RedeemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RedeemComponent,
      selectors: [["duelit-redeem"]],
      decls: 7,
      vars: 4,
      consts: [[1, "flex-grow"], [1, "flex-align-center"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["head", "Cash Out Request"], [1, "form-group", 3, "formGroup"], ["type", "number", "formControlName", "cashOutAmount", "step", "1", "min", "0", 1, "form-control", "custom", 3, "max"], [4, "ngIf"], [1, "cash"], ["class", "error flex-align-center", 4, "ngIf", "ngIfElse"], ["paypal", ""], [1, "error", "flex-align-center"], ["duelitPaypal", "", 4, "ngIf"], ["duelitPaypal", ""]],
      template: function RedeemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RedeemComponent_ng_container_2_Template, 26, 30, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RedeemComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
        }

        if (rf & 2) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.credits$))("ngIfElse", _r58);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _directives_paypal_directive__WEBPACK_IMPORTED_MODULE_7__["PaypalDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".cash[_ngcontent-%COMP%] {\n  color: #4093f7;\n}\n\n[_nghost-%COMP%] {\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 15px;\n}\n\n[_nghost-%COMP%]   .flex-align-center[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.error.flex-align-center[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVkZWVtL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXHJlZGVlbVxccmVkZWVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9yZWRlZW0vRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3JlZGVlbS9yZWRlZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQ0hRO0FDRVY7O0FGSUE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRURGOztBRkdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FFREo7O0FGRUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBRUFOOztBRkdFO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRURKOztBRk1BO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FFSEYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9yZWRlZW0vcmVkZWVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmNhc2gge1xyXG4gIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBkdWVsaXQtcGFuZWwge1xyXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGl2IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmxleC1hbGlnbi1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmVycm9yLmZsZXgtYWxpZ24tY2VudGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iLCIuY2FzaCB7XG4gIGNvbG9yOiAjNDA5M2Y3O1xufVxuXG46aG9zdCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBkdWVsaXQtcGFuZWwge1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGR1ZWxpdC1wYW5lbCBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG59XG46aG9zdCAuZmxleC1hbGlnbi1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVycm9yLmZsZXgtYWxpZ24tY2VudGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-redeem',
          templateUrl: './redeem.component.html',
          styleUrls: ['./redeem.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: src_app_core_services_credits_service__WEBPACK_IMPORTED_MODULE_4__["CreditsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/redeem/redeem.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/features/redeem/redeem.module.ts ***!
    \**************************************************/

  /*! exports provided: RedeemModule */

  /***/
  function srcAppFeaturesRedeemRedeemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedeemModule", function () {
      return RedeemModule;
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


    var _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/components/panel */
    "./src/app/shared/components/panel/index.ts");
    /* harmony import */


    var _redeem_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./redeem-routing.module */
    "./src/app/features/redeem/redeem-routing.module.ts");
    /* harmony import */


    var _redeem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./redeem.component */
    "./src/app/features/redeem/redeem.component.ts");
    /* harmony import */


    var _directives_paypal_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/paypal.directive */
    "./src/app/features/redeem/directives/paypal.directive.ts");

    var RedeemModule = function RedeemModule() {
      _classCallCheck(this, RedeemModule);
    };

    RedeemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RedeemModule
    });
    RedeemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RedeemModule_Factory(t) {
        return new (t || RedeemModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _redeem_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedeemRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RedeemModule, {
        declarations: [_redeem_component__WEBPACK_IMPORTED_MODULE_5__["RedeemComponent"], _directives_paypal_directive__WEBPACK_IMPORTED_MODULE_6__["PaypalDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _redeem_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedeemRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedeemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_redeem_component__WEBPACK_IMPORTED_MODULE_5__["RedeemComponent"], _directives_paypal_directive__WEBPACK_IMPORTED_MODULE_6__["PaypalDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _redeem_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedeemRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=features-redeem-redeem-module-es5.js.map