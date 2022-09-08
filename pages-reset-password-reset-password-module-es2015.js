(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./src/app/core/pages/reset-password/reset-password-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/pages/reset-password/reset-password-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function() { return ResetPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/core/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _valid_token_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid-token.resolver */ "./src/app/core/pages/reset-password/valid-token.resolver.ts");






const routes = [{
        path: '',
        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        resolve: {
            data: _valid_token_resolver__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenResolver"]
        }
    }];
class ResetPasswordRoutingModule {
}
ResetPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResetPasswordRoutingModule });
ResetPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResetPasswordRoutingModule_Factory(t) { return new (t || ResetPasswordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pages/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/api */ "./src/app/shared/constants/api/index.ts");
/* harmony import */ var _shared_functions_timer_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions/timer.function */ "./src/app/shared/functions/timer.function.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/panel/panel.component */ "./src/app/shared/components/panel/panel.component.ts");













function ResetPasswordComponent_ng_container_0_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_container_0_ng_container_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can not be less than ", ctx_r41.resetPasswordForm.get("password").errors.minlength.requiredLength, " characters.");
} }
function ResetPasswordComponent_ng_container_0_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can be at most ", ctx_r42.resetPasswordForm.get("password").errors.maxlength.requiredLength, " characters long.");
} }
function ResetPasswordComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_0_ng_container_8_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_0_ng_container_8_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_ng_container_0_ng_container_8_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.resetPasswordForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.resetPasswordForm.get("password").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.resetPasswordForm.get("password").errors.maxlength);
} }
function ResetPasswordComponent_ng_container_0_ng_container_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_ng_container_0_ng_container_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can not be less than ", ctx_r44.resetPasswordForm.get("confirm").errors.minlength.requiredLength, " characters.");
} }
function ResetPasswordComponent_ng_container_0_ng_container_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can be at most ", ctx_r45.resetPasswordForm.get("confirm").errors.maxlength.requiredLength, " characters long.");
} }
function ResetPasswordComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_0_ng_container_10_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_0_ng_container_10_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_ng_container_0_ng_container_10_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.resetPasswordForm.get("confirm").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.resetPasswordForm.get("confirm").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.resetPasswordForm.get("confirm").errors.maxlength);
} }
function ResetPasswordComponent_ng_container_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} }
function ResetPasswordComponent_ng_container_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Send Request");
} }
function ResetPasswordComponent_ng_container_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password are not the same.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
function ResetPasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "duelit-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your new password below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_ng_container_0_ng_container_8_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetPasswordComponent_ng_container_0_ng_container_10_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResetPasswordComponent_ng_container_0_span_12_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_ng_container_0_ng_template_13_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_ng_container_0_span_15_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back to Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx_r31.isPasswordSame() && ctx_r31.isControlsTouched());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.resetPasswordForm.get("password").invalid && ctx_r31.resetPasswordForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx_r31.isPasswordSame() && ctx_r31.isControlsTouched());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.resetPasswordForm.get("confirm").invalid && ctx_r31.resetPasswordForm.get("confirm").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r31.resetPasswordForm.invalid || !ctx_r31.isPasswordSame() || ctx_r31.isResettingPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isResettingPassword)("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.isPasswordSame() && ctx_r31.isControlsTouched());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
} }
function ResetPasswordComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your password was successfully changed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go back to Login.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting you to Login in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r48.timer$), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
const _c1 = function () { return ["/forgot-password"]; };
function ResetPasswordComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your link seems to be invalid, please request a new forgot password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go back to Forgot Password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting you to Forgot password page in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r50.timer$), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
function ResetPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_ng_container_1_Template, 8, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_template_1_ng_template_2_Template, 7, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.resetPasswordFinished)("ngIfElse", _r49);
} }
class ResetPasswordComponent {
    constructor(router, route, toast, fb, api) {
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.fb = fb;
        this.api = api;
        this.countdown = 10;
        this.timer$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.countdown);
        this.isResettingPassword = false;
        this.resetPasswordFinished = false;
    }
    ngOnInit() {
        this.valid = this.route.snapshot.data.data.valid;
        this.email = this.route.snapshot.data.data.email;
        this.token = this.route.snapshot.params.token;
        if (!this.valid) {
            this.toast.error('Your link to reset your password seems to be invalid. Please make a new request');
            Object(_shared_functions_timer_function__WEBPACK_IMPORTED_MODULE_3__["countDown"])(this.countdown).subscribe((t) => {
                this.timer$.next(t);
                if (t <= 0) {
                    this.timer$.complete();
                    this.router.navigate(['/forgot-password']);
                }
            });
            return;
        }
        this.resetPasswordForm = this.fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    resetPassword() {
        this.isResettingPassword = true;
        if (this.isPasswordSame()) {
            this.api.post(_shared_constants_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"].ResetPassword, {
                opts: { addSecurity: false },
                body: {
                    token: this.token,
                    password: this.resetPasswordForm.get('confirm').value,
                    email: this.email
                }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
                if (err.status === 200) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('successful');
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err);
            })).subscribe((result) => {
                this.isResettingPassword = false;
                if (result === 'successful') {
                    this.toast.success('Reset password successful');
                    this.resetPasswordFinished = true;
                    Object(_shared_functions_timer_function__WEBPACK_IMPORTED_MODULE_3__["countDown"])(this.countdown).subscribe((t) => {
                        this.timer$.next(t);
                        if (t <= 0) {
                            this.timer$.complete();
                            this.router.navigate(['/login']);
                        }
                    });
                }
                else {
                    this.toast.error(result.error.text || JSON.stringify(result.error));
                }
            });
        }
        else {
            this.toast.error('Passwords do not match');
            this.isResettingPassword = false;
        }
    }
    isPasswordSame() {
        const passwordControl = this.resetPasswordForm.get('password');
        const confirmControl = this.resetPasswordForm.get('confirm');
        return confirmControl.value === passwordControl.value;
    }
    isControlsTouched() {
        const passwordControl = this.resetPasswordForm.get('password');
        const confirmControl = this.resetPasswordForm.get('confirm');
        return passwordControl.touched && confirmControl.touched;
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["duelit-reset-password"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["invalid", ""], [1, "form-group", 3, "formGroup"], ["type", "password", "placeholder", "New password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "custom"], [4, "ngIf"], ["type", "password", "placeholder", "Repeat new password", "autocomplete", "off", "formControlName", "confirm", 1, "form-control", "custom"], [1, "btn", "custom", "primary", 3, "disabled", "click"], ["class", "loading", 4, "ngIf", "ngIfElse"], ["reset", ""], ["class", "error", 4, "ngIf"], [3, "routerLink"], [1, "error"], [1, "loading"], [1, "invalid-msg"], ["invalidLink", ""], [1, "link", 3, "routerLink"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResetPasswordComponent_ng_container_0_Template, 18, 13, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valid && !ctx.resetPasswordFinished)("ngIfElse", _r32);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_10__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".link[_ngcontent-%COMP%] {\n  color: #4093f7;\n  cursor: pointer;\n}\n\n.invalid-msg[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9yZXNldC1wYXNzd29yZC9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2VzXFxyZXNldC1wYXNzd29yZFxccmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvcmVzZXQtcGFzc3dvcmQvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQ0hRO0VESVIsZUFBQTtBRURGOztBRklBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogJGxpbmstY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW52YWxpZC1tc2cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iLCIubGluayB7XG4gIGNvbG9yOiAjNDA5M2Y3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnZhbGlkLW1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */", ".form-group[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  justify-items: center;\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #4093f7;\n  cursor: pointer;\n  padding-top: 15px;\n}\n\nspan.error[_ngcontent-%COMP%] {\n  color: red;\n  cursor: unset;\n  padding-top: unset;\n  align-self: flex-start;\n  padding-bottom: 10px;\n}\n\nspan.loading[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-size: 15px 15px;\n}\n\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%] {\n  max-width: 720px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxjRVhRO0VGWVIsZUFBQTtFQUNBLGlCQUFBO0FDRkY7O0FESUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDSEo7O0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0xKOztBRFFBO0VBQ0UsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxuICAgIHBhZGRpbmctdG9wOiB1bnNldDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICYubG9hZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZHVlbGl0LXBhbmVsIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIi5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzQwOTNmNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbnNwYW4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHVuc2V0O1xuICBwYWRkaW5nLXRvcDogdW5zZXQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuc3Bhbi5sb2FkaW5nIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGR1ZWxpdC1wYW5lbCB7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.scss', '../login/login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pages/reset-password/reset-password.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/pages/reset-password/reset-password.module.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/panel */ "./src/app/shared/components/panel/index.ts");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/core/pages/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/core/pages/reset-password/reset-password.component.ts");







class ResetPasswordModule {
}
ResetPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResetPasswordModule });
ResetPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ResetPasswordModule_Factory(t) { return new (t || ResetPasswordModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordRoutingModule"],
            _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordModule, { declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordRoutingModule"],
        _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResetPasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordRoutingModule"],
                    _shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pages/reset-password/valid-token.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/reset-password/valid-token.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: ValidateTokenResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTokenResolver", function() { return ValidateTokenResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/api */ "./src/app/shared/constants/api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api.service */ "./src/app/core/services/api.service.ts");






class ValidateTokenResolver {
    constructor(api) {
        this.api = api;
    }
    resolve(route, state) {
        const path = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_1__["UsersApi"].ValidateToken, { token: route.paramMap.get('token') });
        return this.api.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 200) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error.text);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            return {
                valid: !!result,
                email: result
            };
        }));
    }
}
ValidateTokenResolver.ɵfac = function ValidateTokenResolver_Factory(t) { return new (t || ValidateTokenResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ValidateTokenResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidateTokenResolver, factory: ValidateTokenResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTokenResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-reset-password-reset-password-module-es2015.js.map