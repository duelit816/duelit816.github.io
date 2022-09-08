(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_redeem_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/redeem.guard */ "./src/app/guards/redeem.guard.ts");






const routes = [
    { path: 'redeem', loadChildren: () => __webpack_require__.e(/*! import() | features-redeem-redeem-module */ "features-redeem-redeem-module").then(__webpack_require__.bind(null, /*! ./features/redeem/redeem.module */ "./src/app/features/redeem/redeem.module.ts")).then(m => m.RedeemModule),
        canActivate: [_guards_redeem_guard__WEBPACK_IMPORTED_MODULE_3__["RedeemGuard"]],
    },
    {
        path: 'paypal/user-data',
        loadChildren: () => __webpack_require__.e(/*! import() | features-paypal-paypal-module */ "features-paypal-paypal-module").then(__webpack_require__.bind(null, /*! ./features/paypal/paypal.module */ "./src/app/features/paypal/paypal.module.ts")).then(m => m.PaypalModule),
        canActivate: [_guards_redeem_guard__WEBPACK_IMPORTED_MODULE_3__["RedeemGuard"]]
    },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | features-admin-admin-module */ "features-admin-admin-module").then(__webpack_require__.bind(null, /*! ./features/admin/admin.module */ "./src/app/features/admin/admin.module.ts")).then(m => m.AdminModule),
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]],
    },
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./core/core.module */ "./src/app/core/core.module.ts")).then(m => m.CoreModule) },
    { path: '**', pathMatch: 'full', redirectTo: '/login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_core_container_core_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/core-container/core-container.component */ "./src/app/shared/components/core-container/core-container.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/toast-container/toast-container.component */ "./src/app/core/components/toast-container/toast-container.component.ts");





class AppComponent {
    constructor() {
        this.title = 'admin-redeem-dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["duelit-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-core-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "duelit-toast-container");
    } }, directives: [_shared_components_core_container_core_container_component__WEBPACK_IMPORTED_MODULE_1__["CoreContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_3__["ToastContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.init.ts":
/*!*****************************!*\
  !*** ./src/app/app.init.ts ***!
  \*****************************/
/*! exports provided: INIT_API_CONFIG, INIT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_API_CONFIG", function() { return INIT_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_USER", function() { return INIT_USER; });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants */ "./src/app/shared/constants/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");





function initSelectedEnvironment(api) {
    return () => {
        const preSelected = localStorage.getItem(_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["SELECTED_ENV"]);
        const defaultApiEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.find(apiEnv => apiEnv.default);
        const env = Object(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["isEvironmentApiValid"])(preSelected) &&
            src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.findIndex(apiEnv => apiEnv.environment === preSelected) >= 0 ? preSelected :
            defaultApiEnv ? defaultApiEnv.environment : _shared_constants__WEBPACK_IMPORTED_MODULE_1__["EnviromentApi"].Local;
        api.selectedEnvApi = env;
    };
}
const initUser = (loginService) => {
    return () => loginService.Init();
};
const INIT_API_CONFIG = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
    useFactory: initSelectedEnvironment,
    deps: [_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]],
    multi: true
};
const INIT_USER = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
    useFactory: initUser,
    multi: true,
    deps: [_core_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]]
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.init */ "./src/app/app.init.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _shared_components_core_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/core-container */ "./src/app/shared/components/core-container/index.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._guards__WEBPACK_IMPORTED_MODULE_11__["Guards"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
        _app_init__WEBPACK_IMPORTED_MODULE_10__["INIT_API_CONFIG"],
        _app_init__WEBPACK_IMPORTED_MODULE_10__["INIT_USER"],
        _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["INTERCEPTOR_TOKEN"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            _shared_components_core_container__WEBPACK_IMPORTED_MODULE_13__["CoreContainerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _shared_components_core_container__WEBPACK_IMPORTED_MODULE_13__["CoreContainerModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
                    _shared_components_core_container__WEBPACK_IMPORTED_MODULE_13__["CoreContainerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ],
                providers: [
                    ..._guards__WEBPACK_IMPORTED_MODULE_11__["Guards"],
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
                    _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
                    _app_init__WEBPACK_IMPORTED_MODULE_10__["INIT_API_CONFIG"],
                    _app_init__WEBPACK_IMPORTED_MODULE_10__["INIT_USER"],
                    _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["INTERCEPTOR_TOKEN"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/toast-container/toast-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/toast-container/toast-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: ToastContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerComponent", function() { return ToastContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







function ToastContainerComponent_ngb_toast_0_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastContainerComponent_ngb_toast_0_ng_template_1_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", toast_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.close);
} }
function ToastContainerComponent_ngb_toast_0_ng_template_1_ng_template_1_Template(rf, ctx) { }
function ToastContainerComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastContainerComponent_ngb_toast_0_ng_template_1_button_0_Template, 2, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastContainerComponent_ngb_toast_0_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", toast_r1.dismissible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
} }
function ToastContainerComponent_ngb_toast_0_ng_template_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastContainerComponent_ngb_toast_0_ng_template_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", toast_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.close);
} }
function ToastContainerComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastContainerComponent_ngb_toast_0_ng_template_2_button_1_Template, 2, 2, "button", 4);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", toast_r1.textOrTpl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", toast_r1.dismissible);
} }
function ToastContainerComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastContainerComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const toast_r1 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastContainerComponent_ngb_toast_0_ng_template_1_Template, 2, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastContainerComponent_ngb_toast_0_ng_template_2_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", toast_r1.header)("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
} }
class ToastContainerComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.close = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
    }
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; }
}
ToastContainerComponent.ɵfac = function ToastContainerComponent_Factory(t) { return new (t || ToastContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"])); };
ToastContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastContainerComponent, selectors: [["duelit-toast-container"]], decls: 1, vars: 1, consts: [[3, "class", "header", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "header", "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngClass", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "ngClass", "click"], [1, "fa-lg", 3, "icon"]], template: function ToastContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastContainerComponent_ngb_toast_0_Template, 4, 7, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 0.5em;\n  z-index: 1200;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0px;\n  color: white;\n}\n[_nghost-%COMP%]   button.success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n[_nghost-%COMP%]   button.danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]     fill {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3RvYXN0LWNvbnRhaW5lci9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXHRvYXN0LWNvbnRhaW5lclxcdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3RvYXN0LWNvbnRhaW5lci9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFPQSxZQUFBO0FDUEo7QURDSTtFQUNFLHlCRVhJO0FEWVY7QURDSTtFQUNFLHlCRWJHO0FEY1Q7QURJTTtFQUNFLFlBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxuICB6LWluZGV4OiAxMjAwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICAmLnN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcclxuICAgIH1cclxuICAgICYuZGFuZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlcjtcclxuICAgIH1cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgOjpuZy1kZWVwIGZpbGwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAuNWVtO1xuICB6LWluZGV4OiAxMjAwO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IGJ1dHRvbi5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cbjpob3N0IGJ1dHRvbi5kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuOmhvc3QgYnV0dG9uIGZhLWljb24gOjpuZy1kZWVwIGZpbGwge1xuICBjb2xvcjogd2hpdGU7XG59IiwiJHByaW1hcnk6ICM0MDkzZjc7XHJcbiRzdWNjZXNzOiAjMjhhNzQ1O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG5cclxuJGRlZmF1bHQtY29sb3I6ICM1ZTY5Nzc7XHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4ka2Vlbi1tZXRyaWMtYmc6ICM0OWM1YjE7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-toast-container',
                templateUrl: './toast-container.component.html',
                styleUrls: ['./toast-container.component.scss']
            }]
    }], function () { return [{ type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_login_page_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login-page.guard */ "./src/app/core/pages/login/login-page.guard.ts");





const routes = [
    { path: 'login', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/core/pages/login/login.module.ts")).then(m => m.LoginModule), canActivate: [_pages_login_login_page_guard__WEBPACK_IMPORTED_MODULE_2__["LoginPageGuard"]] },
    {
        path: 'reset-password/:token',
        loadChildren: () => Promise.all(/*! import() | pages-reset-password-reset-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/reset-password/reset-password.module */ "./src/app/core/pages/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-forgot-password-forgot-password-module */ "pages-forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./pages/forgot-password/forgot-password.module */ "./src/app/core/pages/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordModule)
    },
    { path: '**', redirectTo: '/login' }
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toast-container/toast-container.component */ "./src/app/core/components/toast-container/toast-container.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.module */ "./src/app/core/pages/login/login.module.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/login.service */ "./src/app/core/services/login.service.ts");










class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
            ]
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
            _pages_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_5__["ToastContainerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
        _pages_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_5__["ToastContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_5__["ToastContainerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
                    _pages_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
                ],
                exports: [
                    _components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_5__["ToastContainerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pages/login/login-page.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/core/pages/login/login-page.guard.ts ***!
  \******************************************************/
/*! exports provided: LoginPageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageGuard", function() { return LoginPageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/core/services/login.service.ts");



class LoginPageGuard {
    constructor(login) {
        this.login = login;
    }
    canActivate(next, state) {
        return this.login.isAuthenticated ? this.login.urlTreeForLoggedUser() : true;
    }
}
LoginPageGuard.ɵfac = function LoginPageGuard_Factory(t) { return new (t || LoginPageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
LoginPageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginPageGuard, factory: LoginPageGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pages/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/pages/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/core/pages/login/login.component.ts");





const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pages/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators */ "./src/app/shared/validators/index.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/panel/panel.component */ "./src/app/shared/components/panel/panel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function LoginComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field must be a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_3_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_3_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.loginForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.loginForm.get("email").errors.email);
} }
function LoginComponent_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_container_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can not be less than ", ctx_r29.loginForm.get("password").errors.minlength.requiredLength, " characters.");
} }
function LoginComponent_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field can be at most ", ctx_r30.loginForm.get("password").errors.maxlength.requiredLength, " characters long.");
} }
function LoginComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_5_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_container_5_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_container_5_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.loginForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.loginForm.get("password").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.loginForm.get("password").errors.maxlength);
} }
function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} }
function LoginComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Login");
} }
const _c0 = function () { return ["/forgot-password"]; };
class LoginComponent {
    constructor(fb, loginService, toast, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.toast = toast;
        this.router = router;
        this.isLoginInProgress = false;
    }
    ngOnInit() {
        // if (this.loginService.isAuthenticated) {
        //   this.loginService.navigateAuthenticatedUser();
        // }
        this.loginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    doLogin() {
        const { email, password } = this.loginForm.value;
        if (!this.isLoginInProgress) {
            this.isLoginInProgress = true;
            this.loginService.login(email, password).subscribe((user) => {
                this.isLoginInProgress = false;
                if (user) {
                    // this.loginService.navigateAuthenticatedUser();
                    this.toast.success('Successfully logged in.');
                    // this.router.navigate(this.loginService.getUrlForLoggedUser());
                }
                else {
                    this.toast.error('Provided credentials are not correct.');
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["duelit-login"]], decls: 12, vars: 8, consts: [["head", "Login"], [1, "form-group", 3, "formGroup"], ["type", "email", "placeholder", "Email", "autocomplete", "off", "formControlName", "email", 1, "form-control", "custom"], [4, "ngIf"], ["type", "password", "placeholder", "Password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "custom"], [1, "btn", "custom", "primary", 3, "disabled", "click"], ["class", "loading", 4, "ngIf", "ngIfElse"], ["login", ""], [3, "routerLink"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "loading"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_ng_container_5_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() { return ctx.doLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_ng_template_8_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").invalid && ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoginInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginInProgress)("ngIfElse", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_shared_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".form-group[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  justify-items: center;\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #4093f7;\n  cursor: pointer;\n  padding-top: 15px;\n}\n\nspan.error[_ngcontent-%COMP%] {\n  color: red;\n  cursor: unset;\n  padding-top: unset;\n  align-self: flex-start;\n  padding-bottom: 10px;\n}\n\nspan.loading[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-size: 15px 15px;\n}\n\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%] {\n  max-width: 720px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvcGFnZXMvbG9naW4vRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxjRVhRO0VGWVIsZUFBQTtFQUNBLGlCQUFBO0FDRkY7O0FESUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDSEo7O0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0xKOztBRFFBO0VBQ0UsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxuICAgIHBhZGRpbmctdG9wOiB1bnNldDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICYubG9hZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZHVlbGl0LXBhbmVsIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIi5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzQwOTNmNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbnNwYW4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHVuc2V0O1xuICBwYWRkaW5nLXRvcDogdW5zZXQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuc3Bhbi5sb2FkaW5nIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGR1ZWxpdC1wYW5lbCB7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pages/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pages/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_components_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/panel */ "./src/app/shared/components/panel/index.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/core/pages/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/core/pages/login/login.component.ts");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            src_app_shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
        src_app_shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                    src_app_shared_components_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: SELECTED_ENV, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_ENV", function() { return SELECTED_ENV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const DEFAULT_API_DETAILS = {
    query: {},
    opts: {
        addSecurity: true
    }
};
const SELECTED_ENV = 'selectedEnvironment';
class ApiService {
    constructor(http) {
        this.http = http;
    }
    set selectedEnvApi(value) {
        this._selectedEnvApi = value;
        localStorage.setItem(SELECTED_ENV, value);
        this.selectedApiConfig = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.find(config => config.environment === value);
    }
    get selectedEnvApi() {
        return this._selectedEnvApi;
    }
    get baseuri() {
        return this.selectedApiConfig.host;
    }
    get security() {
        return this.selectedApiConfig.security;
    }
    get(path, details = {
        query: {}
    }) {
        return this.http.get(this.buildRequestUrl(path, details.query));
    }
    delete(path, details = {
        query: {}
    }) {
        return this.http.delete(this.buildRequestUrl(path, details.query));
    }
    post(path, details = {
        query: {}
    }) {
        const opts = Object.assign(Object.assign({}, DEFAULT_API_DETAILS.opts), details.opts);
        const body = Object.assign({}, details.body);
        if (opts.addSecurity) {
            // tslint:disable-next-line: no-string-literal
            body['custom_uid'] = this.security.custom_uid;
            // tslint:disable-next-line: no-string-literal
            body['device_type'] = this.security.device_type;
            // tslint:disable-next-line: no-string-literal
            body['device_token'] = this.security.device_token;
        }
        return this.http.post(this.buildRequestUrl(path, details.query), body);
    }
    put(path, details = {
        query: {}
    }) {
        const opts = Object.assign(Object.assign({}, DEFAULT_API_DETAILS.opts), details.opts);
        const body = Object.assign({}, details.body);
        if (opts.addSecurity) {
            // tslint:disable-next-line: no-string-literal
            body['custom_uid'] = this.security.custom_uid;
            // tslint:disable-next-line: no-string-literal
            body['device_type'] = this.security.device_type;
            // tslint:disable-next-line: no-string-literal
            body['device_token'] = this.security.device_token;
        }
        return this.http.put(this.buildRequestUrl(path, details.query), body);
    }
    buildRequestUrl(path, query = {}) {
        const queries = Object.keys(query).map(key => {
            return `${key}=${query[key]}`;
        });
        return `${this.baseuri}${path}${queries.length > 0 ? '?' : ''}${queries.join('&')}`;
    }
    buildPath(path, params = []) {
        let _path = path;
        if (Array.isArray(params)) {
            params.forEach(param => _path = _path.replace(/:.*?:/, `${param}`));
        }
        else {
            Object.entries(params).forEach(([param, value]) => {
                _path = _path.replace(`:${param}:`, `${value}`);
            });
        }
        return _path;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants/index.ts");
/* harmony import */ var src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/constants/api */ "./src/app/shared/constants/api/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");









class LoginService {
    constructor(router, api, zone) {
        this.router = router;
        this.api = api;
        this.zone = zone;
        this.isAuthenticated = false;
        // _token: string;
        this.DUELIT_TOKEN = 'duelitToken';
        this.DUELIT_ROLE = 'duelitRole';
    }
    get token() {
        return localStorage.getItem(this.DUELIT_TOKEN);
    }
    set token(token) {
        if (token) {
            localStorage.setItem(this.DUELIT_TOKEN, token);
        }
        else {
            localStorage.removeItem(this.DUELIT_TOKEN);
            localStorage.removeItem(this.DUELIT_ROLE);
        }
    }
    Init() {
        if (!this.token) {
            this.isAuthenticated = false;
            return Promise.resolve(false);
        }
        return this.api.get(src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"].MyProfile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.isAuthenticated = !!result.email;
            this.user = Object.assign(Object.assign({}, result), { role: localStorage.getItem(this.DUELIT_ROLE), token: this.token });
            return !!result.email;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.isAuthenticated = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(isAuthenticated => {
            if (!isAuthenticated) {
                this.router.navigate(['/login']);
            }
        })).toPromise();
    }
    login(email, password) {
        return this.api.post(src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"].Login, { body: { email, password, country: 'United States' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            if (!user) {
                this.isAuthenticated = false;
                return false;
            }
            this.user = user;
            this.token = user.token;
            localStorage.setItem(this.DUELIT_ROLE, user.role);
            this.isAuthenticated = true;
            this.router.navigate(this.getUrlForLoggedUser());
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false)));
    }
    getUrlForLoggedUser() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].application === src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["EnvironmentApplication"].Redeem ? ['/redeem'] : ['/admin'];
    }
    urlTreeForLoggedUser() {
        return this.router.createUrlTree(this.getUrlForLoggedUser());
    }
    navigateToHomePage() {
        this.router.navigate(this.getUrlForLoggedUser());
    }
    setToken(token) {
        localStorage.setItem(this.DUELIT_TOKEN, token);
    }
    logout() {
        return this.api.post(src_app_shared_constants_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"].Logout, {
            body: { device_token: 'none' },
            opts: { addSecurity: false }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            localStorage.removeItem(this.DUELIT_TOKEN);
            localStorage.removeItem(this.DUELIT_ROLE);
            this.router.navigate(['/login']);
            this.isAuthenticated = false;
            this.user = null;
            this.token = null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/toast.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(toast) {
        this.toasts.push(toast);
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
    success(msg) {
        this.toasts.push({
            class: 'success',
            textOrTpl: msg
        });
    }
    error(msg) {
        this.toasts.push({
            class: 'danger',
            textOrTpl: msg
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AdminGuard {
    constructor(loginService, toast, router) {
        this.loginService = loginService;
        this.toast = toast;
        this.router = router;
    }
    canActivate(next, state) {
        const isAdmin = this.loginService.user.role === 'admin';
        if (!isAdmin) {
            this.toast.error('You have been logged out. You must be an admin to access this page.');
            this.loginService.logout().subscribe(() => { });
            return false;
        }
        return true;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: Guards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guards", function() { return Guards; });
/* harmony import */ var _redeem_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem.guard */ "./src/app/guards/redeem.guard.ts");

const Guards = [
    _redeem_guard__WEBPACK_IMPORTED_MODULE_0__["RedeemGuard"]
];


/***/ }),

/***/ "./src/app/guards/redeem.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/redeem.guard.ts ***!
  \****************************************/
/*! exports provided: RedeemGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemGuard", function() { return RedeemGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RedeemGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(next, state) {
        // return true;
        if (this.loginService.isAuthenticated) {
            return true;
        }
        return this.router.createUrlTree(['login']);
    }
}
RedeemGuard.ɵfac = function RedeemGuard_Factory(t) { return new (t || RedeemGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RedeemGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RedeemGuard, factory: RedeemGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor, INTERCEPTOR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERCEPTOR_TOKEN", function() { return INTERCEPTOR_TOKEN; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");





class TokenInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(request, next) {
        let modifiedReq = request;
        const exemptedApis = [/reset-password-request/, /api\.keen\.io/];
        const isExempted = exemptedApis.findIndex((regex) => regex.test(request.url)) >= 0;
        if (this.loginService.token && !isExempted) {
            modifiedReq = request.clone({
                headers: request.headers.set('token', this.loginService.token),
            });
        }
        return next.handle(modifiedReq);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();
const INTERCEPTOR_TOKEN = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useClass: TokenInterceptor,
    multi: true,
    deps: [_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]]
};


/***/ }),

/***/ "./src/app/shared/components/core-container/change-env-modal/change-env-modal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/core-container/change-env-modal/change-env-modal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangeEnvModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEnvModalComponent", function() { return ChangeEnvModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ChangeEnvModalComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEnvModalComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r379); const env_r377 = ctx.$implicit; const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r378.selected = env_r377; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const env_r377 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](env_r377);
} }
class ChangeEnvModalComponent {
    constructor(modal, api) {
        this.modal = modal;
        this.api = api;
    }
    ngOnInit() {
        this.selected = this.api.selectedEnvApi;
    }
    getEnvironments() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api
            .filter(config => config.environment !== this.api.selectedEnvApi)
            .map(config => config.environment);
    }
    getSelectedEnvironment() {
        return this.api.selectedEnvApi;
    }
}
ChangeEnvModalComponent.ɵfac = function ChangeEnvModalComponent_Factory(t) { return new (t || ChangeEnvModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ChangeEnvModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeEnvModalComponent, selectors: [["duelit-change-env-modal"]], decls: 29, vars: 4, consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "flex", "flex--space-between", "choice-container"], [1, "choice"], ["ngbDropdown", "", 1, "d-inline-block"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-primary", 3, "click"]], template: function ChangeEnvModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Environment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEnvModalComponent_Template_button_click_3_listener() { return ctx.modal.dismiss({ action: "cancel" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You will be logged out when you change the environment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEnvModalComponent_Template_button_click_21_listener() { return ctx.selected = ctx.getSelectedEnvironment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangeEnvModalComponent_button_23_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEnvModalComponent_Template_button_click_25_listener() { return ctx.modal.dismiss({ action: "cancel" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEnvModalComponent_Template_button_click_27_listener() { return ctx.modal.close({ action: "ok", environment: ctx.selected }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getSelectedEnvironment(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selected === ctx.getSelectedEnvironment() ? "No Change" : ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSelectedEnvironment());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getEnvironments());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".choice-container[_ngcontent-%COMP%] {\n  padding: 0px 4em;\n}\n.choice-container[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvY2hhbmdlLWVudi1tb2RhbC9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29yZS1jb250YWluZXJcXGNoYW5nZS1lbnYtbW9kYWxcXGNoYW5nZS1lbnYtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUtY29udGFpbmVyL2NoYW5nZS1lbnYtbW9kYWwvY2hhbmdlLWVudi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb3JlLWNvbnRhaW5lci9jaGFuZ2UtZW52LW1vZGFsL2NoYW5nZS1lbnYtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNob2ljZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDBweCA0ZW07XHJcblxyXG4gIC5jaG9pY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jaG9pY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDRlbTtcbn1cbi5jaG9pY2UtY29udGFpbmVyIC5jaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeEnvModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-change-env-modal',
                templateUrl: './change-env-modal.component.html',
                styleUrls: ['./change-env-modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/core-container/core-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/core-container/core-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: CoreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreContainerComponent", function() { return CoreContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants */ "./src/app/shared/constants/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/core-container/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/core-container/footer/footer.component.ts");








function CoreContainerComponent_duelit_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duelit-footer");
} }
const _c0 = ["*"];
class CoreContainerComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    get isAuthenticated() {
        return this.loginService.isAuthenticated;
    }
    doLogout() {
        this.loginService.logout().subscribe(() => { });
    }
    onLogoClick() {
        this.loginService.navigateToHomePage();
    }
    isRedeem() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].application === _shared_constants__WEBPACK_IMPORTED_MODULE_1__["EnvironmentApplication"].Redeem;
    }
}
CoreContainerComponent.ɵfac = function CoreContainerComponent_Factory(t) { return new (t || CoreContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
CoreContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreContainerComponent, selectors: [["duelit-core-container"]], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[3, "authenticated", "firstName", "logout", "logoClicked"], [1, "container"], [1, "center-container"], [4, "ngIf"]], template: function CoreContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duelit-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logout", function CoreContainerComponent_Template_duelit_header_logout_0_listener() { return ctx.doLogout(); })("logoClicked", function CoreContainerComponent_Template_duelit_header_logoClicked_0_listener() { return ctx.onLogoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoreContainerComponent_duelit_footer_4_Template, 1, 0, "duelit-footer", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authenticated", ctx.isAuthenticated)("firstName", ctx.loginService.user == null ? null : ctx.loginService.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRedeem());
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   duelit-header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 500;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   duelit-header[_ngcontent-%COMP%] {\n    min-width: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 500;\n  }\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 30px 0px;\n  background-color: #f9f9f9;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: unset;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvcmUtY29udGFpbmVyXFxjb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvY29yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQU5GO0lBT0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtFQ0VKO0FBQ0Y7QURDRTtFQUNFLGtCQUFBO0VBSUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGdCQUFBO0FDRko7QURPSTtFQWRGO0lBZUksZ0JBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvY29yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgZHVlbGl0LWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcclxuICAgICAgLy8gbWluLWhlaWdodDogY2FsYygxMDAlIC0gMjg1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBkdWVsaXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGR1ZWxpdC1oZWFkZXIge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogNTAwO1xuICB9XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-core-container',
                templateUrl: './core-container.component.html',
                styleUrls: ['./core-container.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/core-container/core-container.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/core-container/core-container.module.ts ***!
  \***************************************************************************/
/*! exports provided: CoreContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreContainerModule", function() { return CoreContainerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _core_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-container.component */ "./src/app/shared/components/core-container/core-container.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/core-container/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/core-container/header/header.component.ts");
/* harmony import */ var _change_env_modal_change_env_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-env-modal/change-env-modal.component */ "./src/app/shared/components/core-container/change-env-modal/change-env-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











class CoreContainerModule {
}
CoreContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreContainerModule });
CoreContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreContainerModule_Factory(t) { return new (t || CoreContainerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreContainerModule, { declarations: [_core_container_component__WEBPACK_IMPORTED_MODULE_5__["CoreContainerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _change_env_modal_change_env_modal_component__WEBPACK_IMPORTED_MODULE_8__["ChangeEnvModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"]], exports: [_core_container_component__WEBPACK_IMPORTED_MODULE_5__["CoreContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreContainerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_core_container_component__WEBPACK_IMPORTED_MODULE_5__["CoreContainerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _change_env_modal_change_env_modal_component__WEBPACK_IMPORTED_MODULE_8__["ChangeEnvModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
                ],
                exports: [_core_container_component__WEBPACK_IMPORTED_MODULE_5__["CoreContainerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/core-container/footer/footer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/core-container/footer/footer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class FooterComponent {
    constructor() {
        this.icons = {
            facebook: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"],
            twitter: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"],
            instagram: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"],
            email: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"]
        };
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["duelit-footer"]], decls: 22, vars: 4, consts: [[1, "duelit-links"], ["href", "https://duelit.com/terms-and-conditions/"], ["href", "https://duelit.com/privacy-policy/"], ["href", "https://duelit.com/faq/"], [1, "social-medias"], ["href", "https://bit.ly/2wPRRat", "target", "_blank"], [1, "fa-lg", 3, "icon"], ["href", "https://bit.ly/2iDzlvr", "target", "_blank"], ["href", "https://bit.ly/2vHjLjJ", "target", "_blank"], ["href", "mailto:contact@duelit.com?Subject=Website%20Feedback", "rel", "nofollow"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TERMS & CONDITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PRIVACY POLICY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A9 2020 Play & Earn Inc. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.twitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.instagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.email);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["[_nghost-%COMP%] {\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  height: 90px;\n}\n@media (max-width: 1020px) {\n  [_nghost-%COMP%] {\n    min-height: 140px;\n  }\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding: 15px;\n}\n@media (max-width: 1020px) {\n  [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%] {\n  color: #4093f7;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 33%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 10pt;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%] {\n  color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media (max-width: 1020px) {\n  [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%] {\n    -webkit-box-ordinal-group: 0;\n            order: -1;\n  }\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  width: 40px;\n  height: 40px;\n  background-color: #4093f7;\n  border-radius: 20px;\n  border: 0px solid #4093f7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]     fill {\n  color: white;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 10pt;\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin: 5px;\n}\na[_ngcontent-%COMP%]:visited {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvZm9vdGVyL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjb3JlLWNvbnRhaW5lclxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUtY29udGFpbmVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUtY29udGFpbmVyL2Zvb3Rlci9EOlxcZ2l0XFxEdWVsaXRcXGFkbWluLXJlZGVlbS1kYXNoYm9hcmQvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FESUU7RUFMRjtJQU1JLGlCQUFBO0VDREY7QUFDRjtBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLGFBQUE7QUNGSjtBREtNO0VBREY7SUFFSSxlQUFBO0VDRk47QUFDRjtBRE1JO0VBQ0UsY0UvQkk7QUQyQlY7QURNTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtBQ0pSO0FET007RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0xSO0FEU0k7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1BOO0FEU007RUFKRjtJQUtJLDRCQUFBO1lBQUEsU0FBQTtFQ05OO0FBQ0Y7QURTTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTVERTtFRjZERixtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNQUjtBRFVRO0VBQ0UsWUFBQTtBQ1JWO0FEYUk7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWE47QURpQkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNkRjtBRGdCRTtFQUNFLFlBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUtY29udGFpbmVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL21peGlucy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogOTBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gICAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIsIGZvb3RlciBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmR1ZWxpdC1saW5rcyB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1tZWRpYXMge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gICAgICAgIG9yZGVyOiAtMTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgICAgICA6Om5nLWRlZXAgZmlsbCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICB9XG59XG46aG9zdCBmb290ZXIsIDpob3N0IGZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBmb290ZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCkge1xuICA6aG9zdCBmb290ZXIgZGl2IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbjpob3N0IGZvb3RlciAuZHVlbGl0LWxpbmtzIHtcbiAgY29sb3I6ICM0MDkzZjc7XG59XG46aG9zdCBmb290ZXIgLmR1ZWxpdC1saW5rcyBzcGFuIHtcbiAgd2lkdGg6IDMzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgZm9vdGVyIC5kdWVsaXQtbGlua3MgYSB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuOmhvc3QgZm9vdGVyIC5zb2NpYWwtbWVkaWFzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcbiAgOmhvc3QgZm9vdGVyIC5zb2NpYWwtbWVkaWFzIHtcbiAgICBvcmRlcjogLTE7XG4gIH1cbn1cbjpob3N0IGZvb3RlciAuc29jaWFsLW1lZGlhcyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5M2Y3O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDBweCBzb2xpZCAjNDA5M2Y3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGZvb3RlciAuc29jaWFsLW1lZGlhcyBhIDo6bmctZGVlcCBmaWxsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgZm9vdGVyIC5jb3B5cmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xufVxuYTp2aXNpdGVkIHtcbiAgY29sb3I6IHVuc2V0O1xufSIsIiRwcmltYXJ5OiAjNDA5M2Y3O1xyXG4kc3VjY2VzczogIzI4YTc0NTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuXHJcbiRkZWZhdWx0LWNvbG9yOiAjNWU2OTc3O1xyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuJGtlZW4tbWV0cmljLWJnOiAjNDljNWIxO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/core-container/header/header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/core-container/header/header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants */ "./src/app/shared/constants/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _change_env_modal_change_env_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-env-modal/change-env-modal.component */ "./src/app/shared/components/core-container/change-env-modal/change-env-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r380.getSelectedEnv(), "]");
} }
function HeaderComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_10_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r387); const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r386.isMenuOpened = !ctx_r386.isMenuOpened; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r385.menu);
} }
function HeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_10_ng_container_1_Template, 3, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r381.authenticated);
} }
function HeaderComponent_ng_template_11_ng_container_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r397 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r397.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r397.name);
} }
const _c0 = function () { return ["/admin/profile"]; };
function HeaderComponent_ng_template_11_ng_container_0_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/admin/users/create"]; };
function HeaderComponent_ng_template_11_ng_container_0_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/admin/app-control"]; };
function HeaderComponent_ng_template_11_ng_container_0_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function HeaderComponent_ng_template_11_ng_container_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_11_ng_container_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r399); const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r398.openChangeEnv(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Env");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_11_ng_container_0_button_1_Template, 2, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ng_template_11_ng_container_0_button_7_Template, 2, 2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ng_template_11_ng_container_0_button_8_Template, 2, 2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ng_template_11_ng_container_0_button_9_Template, 2, 2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ng_template_11_ng_container_0_button_10_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_11_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r401); const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r400.doLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r388.navList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r392);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx_r388.firstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r388.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r388.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r388.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r388.isEnvironmentAdmin());
} }
const _c3 = function () { return ["/login"]; };
function HeaderComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HeaderComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ng_template_11_ng_container_0_Template, 13, 7, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_11_ng_template_1_Template, 2, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r383.authenticated)("ngIfElse", _r389);
} }
function HeaderComponent_div_13_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r413); const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r412.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r411 = ctx.$implicit;
    const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r406.isMenuOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r411.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", navItem_r411.name, " ");
} }
function HeaderComponent_div_13_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r415); const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r414.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r407.isMenuOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function HeaderComponent_div_13_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r417); const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r416.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r408.isMenuOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
function HeaderComponent_div_13_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r419); const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r418.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Application Control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r409.isMenuOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
function HeaderComponent_div_13_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r421); const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r420.isMenuOpened = false; return ctx_r420.openChangeEnv(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Change Env ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r410.isMenuOpened);
} }
function HeaderComponent_div_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_13_ng_container_2_div_1_Template, 2, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_13_ng_container_2_div_2_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_13_ng_container_2_div_3_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_13_ng_container_2_div_4_Template, 2, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_13_ng_container_2_div_5_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r423); const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r422.doLogout(); return ctx_r422.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_container_2_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r423); const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r424.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r403.navList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r403.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r403.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r403.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r403.isEnvironmentAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r403.isMenuOpened);
} }
function HeaderComponent_div_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r426); const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r425.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", !ctx_r405.isMenuOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function HeaderComponent_div_13_Template_div_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428); const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r427.isMenuOpened = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_13_ng_container_2_Template, 9, 7, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_13_ng_template_3_Template, 2, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r384.authenticated)("ngIfElse", _r404);
} }
class HeaderComponent {
    constructor(modalService, loginService, api) {
        this.modalService = modalService;
        this.loginService = loginService;
        this.api = api;
        this.authenticated = false;
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menu = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        // isMenuOpened = false;
        this.WIDE_SCREEN_LIMIT = 768;
        this._navList = [{
                name: 'Redeem',
                path: ['/redeem'],
                env: _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Redeem
            }, {
                name: 'Dashboard',
                path: ['/admin/dashboard'],
                env: _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Admin
            }, {
                name: 'Users',
                path: ['/admin/users'],
                env: _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Admin
            }, {
                name: 'Tournaments',
                path: ['/admin/tournaments'],
                env: _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Admin
            }, {
                name: 'Countries',
                path: ['/admin/countries'],
                env: _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Admin
            }];
        this.isMenuOpened = false;
    }
    get navList() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].application === _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Dev) {
            return this._navList;
        }
        return this._navList.filter(nav => nav.env === src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].application);
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set innerWidth(width) {
        if (width >= this.WIDE_SCREEN_LIMIT) {
            this.isMenuOpened = false;
        }
        this._innerWidth = width;
    }
    onResize($event) {
        this.innerWidth = window.innerWidth;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
    doLogout() {
        this.logout.emit();
    }
    isEnvironmentAdmin() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].application === _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Admin || src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].application === _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnvironmentApplication"].Dev;
    }
    openChangeEnv() {
        const modal = this.modalService.open(_change_env_modal_change_env_modal_component__WEBPACK_IMPORTED_MODULE_4__["ChangeEnvModalComponent"]);
        modal.result.then(({ action, environment: env }) => {
            if (action === 'ok' && env !== this.api.selectedEnvApi) {
                if (this.loginService.isAuthenticated) {
                    this.loginService.logout().subscribe(() => {
                        this.api.selectedEnvApi = env;
                    });
                }
                else {
                    this.api.selectedEnvApi = env;
                }
            }
        }).catch((err) => {
            console.log(err);
            return;
        });
    }
    isEnvirontmentApiProd() {
        return this.api.selectedEnvApi === _shared_constants__WEBPACK_IMPORTED_MODULE_2__["EnviromentApi"].Prod;
    }
    getSelectedEnv() {
        return this.api.selectedEnvApi;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["duelit-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened-menu", ctx.isMenuOpened);
    } }, inputs: { authenticated: "authenticated", firstName: "firstName" }, outputs: { logout: "logout", logoClicked: "logoClicked" }, decls: 14, vars: 6, consts: [[1, "container"], [1, "center-container", "flex-align-center"], [1, "title-logo-container"], ["src", "assets/img/dingding-logo.png", 1, "logo", 3, "click"], [1, "title"], ["class", "title", "style", "font-size: 1em;", 4, "ngIf"], [1, "title", 2, "font-size", "1em", "cursor", "pointer", 3, "click"], [1, "flex-align-center"], [4, "ngIf", "ngIfElse"], ["wideScreen", ""], ["class", "menu-container", "tabindex", "-1", "autofocus", "", 3, "blur", 4, "ngIf"], [1, "title", 2, "font-size", "1em"], [4, "ngIf"], [1, "welcome", 3, "click"], [1, "fa-lg", 3, "icon"], ["login", ""], ["class", "welcome", "routerLinkActive", "active-route", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "welcome", 3, "matMenuTriggerFor"], [1, "caret"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["routerLinkActive", "active-route", 1, "welcome", 3, "routerLink"], ["mat-menu-item", "", 3, "routerLink"], [1, "welcome", 3, "routerLink"], ["tabindex", "-1", "autofocus", "", 1, "menu-container", 3, "blur"], ["menuContainer", ""], ["mobileLogin", ""], ["class", "menu-item", "routerLinkActive", "active-route", 3, "opened", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "menu-item logout", 3, "opened", "routerLink", "click", 4, "ngIf"], ["class", "menu-item logout", 3, "opened", "click", 4, "ngIf"], [1, "menu-item", "logout", 3, "click"], [1, "menu-hidden", 3, "click"], ["routerLinkActive", "active-route", 1, "menu-item", 3, "routerLink", "click"], [1, "menu-item", "logout", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_3_listener() { return ctx.logoClicked.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Duelit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_7_listener() { return ctx.openChangeEnv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Change Env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ng_template_11_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 5, 2, "div", 10);
    } if (rf & 2) {
        const _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.isMenuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEnvirontmentApiProd());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerWidth < ctx.WIDE_SCREEN_LIMIT)("ngIfElse", _r382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerWidth < ctx.WIDE_SCREEN_LIMIT && ctx.isMenuOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"]], styles: [".opened-menu[_nghost-%COMP%] {\n  min-height: 100%;\n  position: fixed !important;\n}\n\nheader[_ngcontent-%COMP%] {\n  background: #358ed7;\n  max-height: 80px;\n  min-height: 75px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  max-width: unset;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n  padding-left: 10px;\n}\n\n.center-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nli[_ngcontent-%COMP%], .welcome[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  font-family: Nexa;\n  font-size: 15px;\n  color: white;\n  list-style: none;\n  padding: 15px;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%]:active, li[_ngcontent-%COMP%]:focus, li.active-route[_ngcontent-%COMP%], .welcome[_ngcontent-%COMP%]:active, .welcome[_ngcontent-%COMP%]:focus, .welcome.active-route[_ngcontent-%COMP%] {\n  background-color: #4e5866;\n  color: white;\n}\n\nli.active-route[_ngcontent-%COMP%], .welcome.active-route[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\nli[_ngcontent-%COMP%]:hover, .welcome[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: #358ed7;\n  height: 45px;\n}\n\n.title-logo-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: Nexa;\n}\n\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-80%);\n            transform: translateY(-80%);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-80%);\n            transform: translateY(-80%);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  from {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  to {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n}\n\n@keyframes slide-up {\n  from {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  to {\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  display: contents;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  -webkit-animation: slide-down 0.125s ease-in forwards;\n          animation: slide-down 0.125s ease-in forwards;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 10px;\n  border-top: 1px solid white;\n  background-color: #358ed7;\n  color: white;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-item.opened[_ngcontent-%COMP%] {\n  -webkit-animation: slide-up 0.125s ease-out forwards;\n          animation: slide-up 0.125s ease-out forwards;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover, .menu-container[_ngcontent-%COMP%]   .menu-item.active-route[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-item.logout[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-hidden[_ngcontent-%COMP%] {\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  -webkit-animation: slide-down 0.125s ease-in forwards;\n          animation: slide-down 0.125s ease-in forwards;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n  z-index: -1;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu-hidden.opened[_ngcontent-%COMP%] {\n  -webkit-animation: slide-up 0.125s ease-out forwards;\n          animation: slide-up 0.125s ease-out forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvaGVhZGVyL0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjb3JlLWNvbnRhaW5lclxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUtY29udGFpbmVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FDRko7O0FETUE7RUFDRSxtQkFWUztFQVdULGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0hGOztBRE9BO0VBQ0Usa0NBQUE7RUFBQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSkY7O0FETUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7QUNMSjs7QURRRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFVBO0VBQ0UsU0FBQTtFQUNBLHlCQS9EUztFQWdFVCxZQUFBO0FDUEY7O0FEVUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFdBQUE7RUNQRjtFRFNBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNQRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFdBQUE7RUNQRjtFRFNBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0M7SUFDQyw0QkFBQTtZQUFBLG9CQUFBO0VDUkE7RURVRDtJQUNDLDRCQUFBO1lBQUEsb0JBQUE7RUNSQTtBQUNGOztBREVBO0VBQ0M7SUFDQyw0QkFBQTtZQUFBLG9CQUFBO0VDUkE7RURVRDtJQUNDLDRCQUFBO1lBQUEsb0JBQUE7RUNSQTtBQUNGOztBRFdBO0VBRUUsaUJBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ1ZGOztBRFlFO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7RUFLQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFuSE87RUFvSFAsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ2RKOztBREVJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtBQ0FOOztBRGFJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDWE47O0FEY0k7RUFDRSw4QkFBQTtBQ1pOOztBRGdCRTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0VBTUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FDbkJKOztBRFFJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS1jb250YWluZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZy1jb2xvcjogIzM1OGVkNztcclxuXHJcbjpob3N0IHtcclxuICAmLm9wZW5lZC1tZW51IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgbWluLWhlaWdodDogNzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiB1bnNldDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5saSwgLndlbGNvbWUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBOZXhhO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsICY6Zm9jdXMsICYuYWN0aXZlLXJvdXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgODgsIDEwMik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZS1yb3V0ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4udGl0bGUtbG9nby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogTmV4YTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xyXG5cdGZyb217XHJcblx0XHR0cmFuc2Zvcm06c2NhbGVZKDEpO1xyXG5cdH1cclxuXHR0b3tcclxuXHRcdHRyYW5zZm9ybTpzY2FsZVkoMCk7XHJcblx0fVxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG5cclxuICBkaXNwbGF5OiBjb250ZW50cztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5tZW51LWl0ZW0ge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjEyNXMgZWFzZS1pbiBmb3J3YXJkcztcclxuICAgICYub3BlbmVkIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjEyNXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUtcm91dGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgICYubG9nb3V0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtaGlkZGVuIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWRvd24gMC4xMjVzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbiAgICAmLm9wZW5lZCB7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC4xMjVzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMjUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0Lm9wZW5lZC1tZW51IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzNThlZDc7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2VudGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5saSwgLndlbGNvbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgZm9udC1mYW1pbHk6IE5leGE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saTphY3RpdmUsIGxpOmZvY3VzLCBsaS5hY3RpdmUtcm91dGUsIC53ZWxjb21lOmFjdGl2ZSwgLndlbGNvbWU6Zm9jdXMsIC53ZWxjb21lLmFjdGl2ZS1yb3V0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTU4NjY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmxpLmFjdGl2ZS1yb3V0ZSwgLndlbGNvbWUuYWN0aXZlLXJvdXRlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxubGk6aG92ZXIsIC53ZWxjb21lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLndlbGNvbWUge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNThlZDc7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnRpdGxlLWxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IE5leGE7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAlKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgfVxufVxuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lbnUtY29udGFpbmVyIC5tZW51LWl0ZW0ge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlLWRvd24gMC4xMjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU4ZWQ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS1jb250YWluZXIgLm1lbnUtaXRlbS5vcGVuZWQge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuMTI1cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cbi5tZW51LWNvbnRhaW5lciAubWVudS1pdGVtOmhvdmVyLCAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbS5hY3RpdmUtcm91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1lbnUtY29udGFpbmVyIC5tZW51LWl0ZW0ubG9nb3V0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuLm1lbnUtY29udGFpbmVyIC5tZW51LWhpZGRlbiB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gIGFuaW1hdGlvbjogc2xpZGUtZG93biAwLjEyNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1lbnUtY29udGFpbmVyIC5tZW51LWhpZGRlbi5vcGVuZWQge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuMTI1cyBlYXNlLW91dCBmb3J3YXJkcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, { authenticated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], logoClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isMenuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.opened-menu']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/core-container/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/core-container/index.ts ***!
  \***********************************************************/
/*! exports provided: CoreContainerComponent, CoreContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-container.component */ "./src/app/shared/components/core-container/core-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreContainerComponent", function() { return _core_container_component__WEBPACK_IMPORTED_MODULE_0__["CoreContainerComponent"]; });

/* harmony import */ var _core_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-container.module */ "./src/app/shared/components/core-container/core-container.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreContainerModule", function() { return _core_container_module__WEBPACK_IMPORTED_MODULE_1__["CoreContainerModule"]; });





/***/ }),

/***/ "./src/app/shared/components/panel/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/panel/index.ts ***!
  \**************************************************/
/*! exports provided: PanelComponent, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.component */ "./src/app/shared/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _panel_component__WEBPACK_IMPORTED_MODULE_0__["PanelComponent"]; });

/* harmony import */ var _panel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.module */ "./src/app/shared/components/panel/panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _panel_module__WEBPACK_IMPORTED_MODULE_1__["PanelModule"]; });





/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/panel/panel.component.ts ***!
  \************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PanelComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.head, " ");
} }
const _c0 = ["*"];
class PanelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["duelit-panel"]], inputs: { head: "head" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[4, "ngIf"], [1, "panel-body"], [1, "panel-heading"], [1, "divider"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.head);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%], [_nghost-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  text-align: center;\n  font-weight: bold;\n}\n.divider[_ngcontent-%COMP%] {\n  border: 1px solid #ebf0f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFuZWwvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhbmVsXFxwYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FERUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREtBO0VBQ0UseUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJmMGY1O1xyXG4gIC8vIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5wYW5lbC1oZWFkaW5nLCA6aG9zdCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG46aG9zdCAucGFuZWwtaGVhZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmYwZjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss']
            }]
    }], function () { return []; }, { head: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/panel/panel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/panel/panel.module.ts ***!
  \*********************************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.component */ "./src/app/shared/components/panel/panel.component.ts");




class PanelModule {
}
PanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PanelModule });
PanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PanelModule_Factory(t) { return new (t || PanelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelModule, { declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/constants/api/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/api/index.ts ***!
  \***********************************************/
/*! exports provided: UsersApi, CreditsApi, TournamentsApi, ValuesApi, CountriesApi, AdminFunctionsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsApi", function() { return CreditsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentsApi", function() { return TournamentsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesApi", function() { return ValuesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesApi", function() { return CountriesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFunctionsApi", function() { return AdminFunctionsApi; });
var UsersApi;
(function (UsersApi) {
    UsersApi["ValidateToken"] = "/api/v1/users/validate-token/:token:";
    UsersApi["MyProfile"] = "/api/v1/users/me";
    UsersApi["Login"] = "/api/v1/users/login";
    UsersApi["Logout"] = "/api/v1/users/logout";
    UsersApi["GetPaypalUserInfo"] = "/api/v1/users/login/paypal";
    UsersApi["ResetPasswordRequest"] = "/api/v1/users/reset-password-request";
    UsersApi["ResetPassword"] = "/api/v1/users/reset-password";
    UsersApi["UsersCountByStatus"] = "/api/v1/admin/users-by-status/:userStatus:/count";
    UsersApi["UsersByStatus"] = "/api/v1/admin/users-by-status/:userStatus:";
    UsersApi["UsersByTransaction"] = "/api/v1/admin/users-by-transaction/:transactionType:";
    UsersApi["UsersByConverted"] = "/api/v1/admin/users-by-converted/:convertedType:";
    UsersApi["GetUserById"] = "/api/v1/users/:userId:";
    UsersApi["UpdateUser"] = "/api/v1/users/update-user";
    UsersApi["DeleteUserById"] = "/api/v1/admin/users/:userId:";
    UsersApi["UserStats"] = "/api/v1/users/stats/:userId:";
    UsersApi["SignupType"] = "/api/v1/users/stats/signup-type";
    UsersApi["SignupCount"] = "/api/v1/users/stats/signup-count";
    UsersApi["ActiveUsersStats"] = "/api/v1/users/stats/active-users";
    UsersApi["CreateUser"] = "/api/v1/users/create-by-admin";
    UsersApi["UnregisterDevice"] = "/api/v1/users/unregister-apple-device";
})(UsersApi || (UsersApi = {}));
var CreditsApi;
(function (CreditsApi) {
    CreditsApi["Credits"] = "/api/v1/credits";
    CreditsApi["CreditsByUser"] = "/api/v1/credits/:userId:";
    CreditsApi["CreditsHistoryByUser"] = "/api/v1/credits/history/:userId:";
    CreditsApi["CashoutRequest"] = "/api/v1/transactions/redeem-coins";
    CreditsApi["RedeemedCoins"] = "/api/v1/transactions/redeemedCoinsData";
    CreditsApi["TotalCredits"] = "/api/v1/credits/total";
    CreditsApi["PurchasedCoins"] = "/api/v1/credits/purchasedCoinsData";
})(CreditsApi || (CreditsApi = {}));
var TournamentsApi;
(function (TournamentsApi) {
    TournamentsApi["GetOccupiedOpenTournaments"] = "/api/v1/tournament/open/occupied";
    TournamentsApi["GetOccupiedPublicTournaments"] = "/api/v1/tournament/public/occupied";
    TournamentsApi["CreateTournament"] = "/api/v1/tournament/create";
    TournamentsApi["ChallengeStats"] = "/api/v1/tournament/stats/challenge-stats";
    TournamentsApi["TournamentPerHrStats"] = "/api/v1/tournament/stats/tournament-per-hour";
    TournamentsApi["TournamentCountPerType"] = "/api/v1/tournament/stats/count-per-type";
})(TournamentsApi || (TournamentsApi = {}));
var ValuesApi;
(function (ValuesApi) {
    ValuesApi["Countries"] = "/api/v1/countries";
    ValuesApi["States"] = "/api/v1/states";
    ValuesApi["Games"] = "/api/v1/games";
})(ValuesApi || (ValuesApi = {}));
var CountriesApi;
(function (CountriesApi) {
    CountriesApi["CountriesPaginated"] = "/api/v1/countries/:page:/:limit:/:order:";
    CountriesApi["UpdateCountry"] = "/api/v1/country/update";
})(CountriesApi || (CountriesApi = {}));
var AdminFunctionsApi;
(function (AdminFunctionsApi) {
    AdminFunctionsApi["MaintenanceStatus"] = "/api/v1/maintenance";
    AdminFunctionsApi["RevenueStats"] = "/api/v1/revenueStats";
})(AdminFunctionsApi || (AdminFunctionsApi = {}));


/***/ }),

/***/ "./src/app/shared/constants/environment-api.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/environment-api.enum.ts ***!
  \**********************************************************/
/*! exports provided: EnviromentApi, isEvironmentApiValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviromentApi", function() { return EnviromentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvironmentApiValid", function() { return isEvironmentApiValid; });
var EnviromentApi;
(function (EnviromentApi) {
    EnviromentApi["Dev"] = "Development";
    EnviromentApi["Prod"] = "Production";
    EnviromentApi["Local"] = "Local";
})(EnviromentApi || (EnviromentApi = {}));
function isEvironmentApiValid(env) {
    return Object.keys(EnviromentApi).findIndex(key => EnviromentApi[key] === env) >= 0;
}


/***/ }),

/***/ "./src/app/shared/constants/environment-application.enum.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/constants/environment-application.enum.ts ***!
  \******************************************************************/
/*! exports provided: EnvironmentApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentApplication", function() { return EnvironmentApplication; });
var EnvironmentApplication;
(function (EnvironmentApplication) {
    EnvironmentApplication["Redeem"] = "redeem";
    EnvironmentApplication["Admin"] = "admin";
    EnvironmentApplication["Dev"] = "local";
})(EnvironmentApplication || (EnvironmentApplication = {}));


/***/ }),

/***/ "./src/app/shared/constants/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: EnvironmentApplication, EnviromentApi, isEvironmentApiValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment_application_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment-application.enum */ "./src/app/shared/constants/environment-application.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentApplication", function() { return _environment_application_enum__WEBPACK_IMPORTED_MODULE_0__["EnvironmentApplication"]; });

/* harmony import */ var _environment_api_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment-api.enum */ "./src/app/shared/constants/environment-api.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnviromentApi", function() { return _environment_api_enum__WEBPACK_IMPORTED_MODULE_1__["EnviromentApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvironmentApiValid", function() { return _environment_api_enum__WEBPACK_IMPORTED_MODULE_1__["isEvironmentApiValid"]; });





/***/ }),

/***/ "./src/app/shared/validators/email.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/validators/email.validator.ts ***!
  \******************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
function EmailValidator(control) {
    if (control.value.length === 0) {
        return null;
    }
    if (!emailRegex.test(control.value)) {
        return {
            email: true
        };
    }
    return null;
}


/***/ }),

/***/ "./src/app/shared/validators/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/validators/index.ts ***!
  \********************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.validator */ "./src/app/shared/validators/email.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return _email_validator__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"]; });




/***/ }),

/***/ "./src/environments/environment.default.ts":
/*!*************************************************!*\
  !*** ./src/environments/environment.default.ts ***!
  \*************************************************/
/*! exports provided: DEFAULT_SECURITY, environmentDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SECURITY", function() { return DEFAULT_SECURITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentDefault", function() { return environmentDefault; });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants/index.ts");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const DEFAULT_SECURITY = {
    custom_uid: 'f6d28b7a-407f-4c11-aca4-56e6a2b72900',
    device_type: 'site',
    device_token: 'none'
};
const environmentDefault = {
    production: false,
    application: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["EnvironmentApplication"].Dev,
    api: [{
            environment: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["EnviromentApi"].Local,
            host: 'http://localhost:3000',
            security: DEFAULT_SECURITY
        }, {
            default: true,
            environment: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["EnviromentApi"].Dev,
            host: 'https://dev.api.duelit.com',
            security: DEFAULT_SECURITY
        }, {
            environment: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["EnviromentApi"].Prod,
            host: 'https://api-dot-duelit-1288.appspot.com',
            // host: 'https://api.duelit.com'
            security: DEFAULT_SECURITY
        }],
    paypal: {
        returnUrl: 'http://127.0.0.1:4200/paypal/user-data',
        apiId: 'Ac-2xq8OnqwFgZ4wJp7BUOADkOTCwHItSeJ4iTfZep7O8PHfiDFj4eW587SgxCpoGbsGi7dA0QXsuYHb',
        environment: 'sandbox'
    },
    keenio: {
        projectId: '576d9e9c07271955aad3c825',
        // tslint:disable-next-line: max-line-length
        readKey: '4801d9d377f9ea0aa63b7a72639c2a08aee27a5bf8a068bcc2c8df3b5538fcfac6b27f05709930eab29d2985336214f436548b58c538cfaa493fe2def65a56dc71771cce0ceaa5ab8f2a171337a8b9a4e702325afcec519b2bfbe6330c7f82bc',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants/index.ts");
/* harmony import */ var _environment_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.default */ "./src/environments/environment.default.ts");


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = Object.assign(Object.assign({}, _environment_default__WEBPACK_IMPORTED_MODULE_1__["environmentDefault"]), { production: false, application: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["EnvironmentApplication"].Admin });
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\Duelit\admin-redeem-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map