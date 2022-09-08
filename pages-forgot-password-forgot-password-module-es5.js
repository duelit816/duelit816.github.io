function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"], {
  /***/
  "./src/app/core/pages/forgot-password/forgot-password-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/core/pages/forgot-password/forgot-password-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ForgotPasswordRoutingModule */

  /***/
  function srcAppCorePagesForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function () {
      return ForgotPasswordRoutingModule;
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


    var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forgot-password.component */
    "./src/app/core/pages/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: '',
      component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }];

    var ForgotPasswordRoutingModule = function ForgotPasswordRoutingModule() {
      _classCallCheck(this, ForgotPasswordRoutingModule);
    };

    ForgotPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ForgotPasswordRoutingModule
    });
    ForgotPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ForgotPasswordRoutingModule_Factory(t) {
        return new (t || ForgotPasswordRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordRoutingModule, [{
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
  "./src/app/core/pages/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/core/pages/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppCorePagesForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
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


    var _shared_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/validators */
    "./src/app/shared/validators/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services/toast.service */
    "./src/app/core/services/toast.service.ts");
    /* harmony import */


    var _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/panel/panel.component */
    "./src/app/shared/components/panel/panel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ForgotPasswordComponent_ng_container_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_ng_container_3_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field must be a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_ng_container_3_span_1_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_ng_container_3_span_2_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.email.errors.email);
      }
    }

    function ForgotPasswordComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
      }
    }

    function ForgotPasswordComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Send Request");
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(api, toast) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.api = api;
        this.toast = toast;
        this.isSendingEmailDetails = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_shared_validators__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
      }, {
        key: "sendEmailDetails",
        value: function sendEmailDetails() {
          var _this = this;

          this.isSendingEmailDetails = true;
          this.api.put(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].ResetPasswordRequest, {
            opts: {
              addSecurity: false
            },
            body: {
              email: this.email.value,
              viewUrl: "".concat(location.origin, "/reset-password")
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            if (err.status === 200) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err);
            }

            _this.isSendingEmailDetails = false;

            _this.toast.error(err.error || JSON.stringify(err));

            return rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"];
          })).subscribe(function (results) {
            _this.isSendingEmailDetails = false;

            _this.toast.success('Further instructions will be send to your email');
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["duelit-forgot-password"]],
      decls: 10,
      vars: 7,
      consts: [["head", "Forgot Password"], [1, "form-group"], ["type", "email", "placeholder", "Email", "autocomplete", "off", 1, "form-control", "custom", 3, "formControl"], [4, "ngIf"], [1, "btn", "custom", "primary", 3, "disabled", "click"], ["class", "loading", 4, "ngIf", "ngIfElse"], ["login", ""], [3, "routerLink"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "loading"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_ng_container_3_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_4_listener() {
            return ctx.sendEmailDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_span_5_Template, 1, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.email.invalid || ctx.isSendingEmailDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSendingEmailDetails)("ngIfElse", _r53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      },
      directives: [_shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */", ".form-group[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  justify-items: center;\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #4093f7;\n  cursor: pointer;\n  padding-top: 15px;\n}\n\nspan.error[_ngcontent-%COMP%] {\n  color: red;\n  cursor: unset;\n  padding-top: unset;\n  align-self: flex-start;\n  padding-bottom: 10px;\n}\n\nspan.loading[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-size: 15px 15px;\n}\n\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%] {\n  max-width: 720px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxjRVhRO0VGWVIsZUFBQTtFQUNBLGlCQUFBO0FDRkY7O0FESUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDSEo7O0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0xKOztBRFFBO0VBQ0UsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxuICAgIHBhZGRpbmctdG9wOiB1bnNldDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICYubG9hZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZHVlbGl0LXBhbmVsIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIi5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzQwOTNmNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbnNwYW4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHVuc2V0O1xuICBwYWRkaW5nLXRvcDogdW5zZXQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuc3Bhbi5sb2FkaW5nIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGR1ZWxpdC1wYW5lbCB7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss', '../login/login.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/pages/forgot-password/forgot-password.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/pages/forgot-password/forgot-password.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ForgotPasswordModule */

  /***/
  function srcAppCorePagesForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function () {
      return ForgotPasswordModule;
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


    var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password-routing.module */
    "./src/app/core/pages/forgot-password/forgot-password-routing.module.ts");
    /* harmony import */


    var _forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-password.component */
    "./src/app/core/pages/forgot-password/forgot-password.component.ts");

    var ForgotPasswordModule = function ForgotPasswordModule() {
      _classCallCheck(this, ForgotPasswordModule);
    };

    ForgotPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ForgotPasswordModule
    });
    ForgotPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ForgotPasswordModule_Factory(t) {
        return new (t || ForgotPasswordModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordModule, {
        declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForgotPasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es5.js.map