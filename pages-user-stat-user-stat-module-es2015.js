(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-stat-user-stat-module"],{

/***/ "./src/app/features/admin/pages/user-stat/user-stat-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/pages/user-stat/user-stat-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserStatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatRoutingModule", function() { return UserStatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-stat.component */ "./src/app/features/admin/pages/user-stat/user-stat.component.ts");





const routes = [{ path: '', component: _user_stat_component__WEBPACK_IMPORTED_MODULE_2__["UserStatComponent"] }];
class UserStatRoutingModule {
}
UserStatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserStatRoutingModule });
UserStatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserStatRoutingModule_Factory(t) { return new (t || UserStatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserStatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/pages/user-stat/user-stat.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/admin/pages/user-stat/user-stat.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserStatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatComponent", function() { return UserStatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/api */ "./src/app/shared/constants/api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/metric/metric.component */ "./src/app/features/admin/components/metric/metric.component.ts");
/* harmony import */ var _components_keen_api_keen_api_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/keen-api/keen-api.component */ "./src/app/features/admin/components/keen-api/keen-api.component.ts");











function UserStatComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "< back to users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game Stat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "duelit-metric", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "duelit-metric", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "duelit-metric", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "duelit-metric", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Challenge Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "duelit-keen-api", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "duelit-keen-api", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Redeem Stat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "duelit-metric", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "duelit-metric", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "duelit-metric", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Purchase Stat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "duelit-metric", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "duelit-metric", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "duelit-metric", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stats_r197 = ctx.$implicit;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Wins", "Count - Games Won", stats_r197.games.wins));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Losts", "Count - Games Losts", stats_r197.games.lost));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Played", "Count - Games Played", stats_r197.games.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Win Rate", "Win Percentage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 12, stats_r197.games.win_percentage * 100, ".0-2")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", ctx_r194.createdChallengeStats$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keenApiInput", ctx_r194.playedChallengeStats$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Redeems", "Count - Redeems", stats_r197.redeemed.count));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getCoinDollarMetric("Total", "Total - Redeems", stats_r197.redeemed.coins, stats_r197.redeemed.dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getCoinDollarMetric("Average", "Average - Redeems", stats_r197.redeemed.average.coins, stats_r197.redeemed.average.dollar, true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getMetric("Purchases", "Count - Purchases", stats_r197.topup.count));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getCoinDollarMetric("Total", "Total - Purchases", stats_r197.topup.coins, stats_r197.topup.dollar));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("metric", ctx_r194.getCoinDollarMetric("Average", "Average - Purchases", stats_r197.topup.average.coins, stats_r197.topup.average.dollar, true));
} }
function UserStatComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserStatComponent {
    constructor(api, route, toast, numberPipe) {
        this.api = api;
        this.route = route;
        this.toast = toast;
        this.numberPipe = numberPipe;
        this.createdChallengeStats$ = {
            title: "Challenge Sent",
            classSelector: "challenge-sent",
            viewType: "line",
            xAxisLabel: "Hour of day (in UTC)",
            yAxisLabel: "Count",
        };
        this.playedChallengeStats$ = {
            title: "Challenge Played",
            classSelector: "challenge-played",
            viewType: "line",
            xAxisLabel: "Hour of day (in UTC)",
            yAxisLabel: "Count",
        };
    }
    ngOnInit() {
        const userId = this.route.snapshot.params.userId;
        const userStatsPath = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_1__["UsersApi"].UserStats, [userId]);
        this.stats$ = this.api.get(userStatsPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.toast.error(err.error || err.statusText || err.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                games: {
                    completed: 0,
                    wins: 0,
                    lost: 0,
                    win_percentage: 0
                },
                redeemed: {
                    count: 0,
                    coins: 0,
                    dollar: 0,
                    average: {
                        coins: 0,
                        dollar: 0
                    }
                }
            });
        }));
        this.getChallengeStats();
    }
    getMetric(title, subTitle, data) {
        return {
            title,
            subTitle,
            data
        };
    }
    getCoinDollarMetric(title, subTitle, coins, dollar, isAverage = false) {
        const dollarFormat = isAverage ? '.3-3' : '0.0';
        const data = `$${this.numberPipe.transform(dollar, dollarFormat)}<br>${this.numberPipe.transform(coins, '.2-2')} coins`;
        return this.getMetric(title, subTitle, data);
    }
    getChallengeStats() {
        this.stats$.subscribe(userStats => {
            const createdChallengeVsHours = userStats["createdChallengeVsHours"];
            const createdData = [];
            if (createdChallengeVsHours) {
                for (let i = 0; i < 24; i++) {
                    createdData.push({ type: i, count: createdChallengeVsHours[i] || 0 });
                }
            }
            this.createdChallengeStats$.data = createdData;
            const playedChallengeVsHours = userStats["playedChallengeVsHours"];
            const playedData = [];
            if (playedChallengeVsHours) {
                for (let i = 0; i < 24; i++) {
                    playedData.push({ type: i, count: playedChallengeVsHours[i] || 0 });
                }
            }
            this.playedChallengeStats$.data = playedData;
        });
    }
}
UserStatComponent.ɵfac = function UserStatComponent_Factory(t) { return new (t || UserStatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
UserStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserStatComponent, selectors: [["duelit-user-stat"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["onclick", "window.history.back()", 1, "pointer"], [1, "row", "container"], [1, "col-3", 3, "metric"], [1, "col-12", 3, "keenApiInput"], [1, "col-4", 3, "metric"], [1, "col-4", "coin-dollar-metric", 3, "metric"], [1, "col", "col-loading"], [1, "metric", "loading"]], template: function UserStatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserStatComponent_ng_container_0_Template, 29, 15, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserStatComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.stats$))("ngIfElse", _r195);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_metric_metric_component__WEBPACK_IMPORTED_MODULE_8__["MetricComponent"], _components_keen_api_keen_api_component__WEBPACK_IMPORTED_MODULE_9__["KeenApiComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["[_nghost-%COMP%]   span.metric.loading[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n[_nghost-%COMP%]   .col-loading[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvdXNlci1zdGF0L0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcdXNlci1zdGF0XFx1c2VyLXN0YXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL3VzZXItc3RhdC91c2VyLXN0YXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQUo7QURFRTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL3VzZXItc3RhdC91c2VyLXN0YXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgc3Bhbi5tZXRyaWMubG9hZGluZyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcclxuICB9XHJcbiAgLmNvbC1sb2FkaW5nIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBzcGFuLm1ldHJpYy5sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IDEyMHB4O1xufVxuOmhvc3QgLmNvbC1sb2FkaW5nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'duelit-user-stat',
                templateUrl: './user-stat.component.html',
                styleUrls: ['./user-stat.component.scss']
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/pages/user-stat/user-stat.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/admin/pages/user-stat/user-stat.module.ts ***!
  \********************************************************************/
/*! exports provided: UserStatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatModule", function() { return UserStatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/metric/metric.module */ "./src/app/features/admin/components/metric/metric.module.ts");
/* harmony import */ var _user_stat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-stat-routing.module */ "./src/app/features/admin/pages/user-stat/user-stat-routing.module.ts");
/* harmony import */ var _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/keen-api/keen-api.module */ "./src/app/features/admin/components/keen-api/keen-api.module.ts");
/* harmony import */ var _user_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-stat.component */ "./src/app/features/admin/pages/user-stat/user-stat.component.ts");







class UserStatModule {
}
UserStatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserStatModule });
UserStatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserStatModule_Factory(t) { return new (t || UserStatModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _user_stat_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserStatRoutingModule"],
            _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_2__["MetricModule"],
            _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_4__["KeenApiModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserStatModule, { declarations: [_user_stat_component__WEBPACK_IMPORTED_MODULE_5__["UserStatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _user_stat_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserStatRoutingModule"],
        _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_2__["MetricModule"],
        _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_4__["KeenApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserStatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_user_stat_component__WEBPACK_IMPORTED_MODULE_5__["UserStatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _user_stat_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserStatRoutingModule"],
                    _components_metric_metric_module__WEBPACK_IMPORTED_MODULE_2__["MetricModule"],
                    _components_keen_api_keen_api_module__WEBPACK_IMPORTED_MODULE_4__["KeenApiModule"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-user-stat-user-stat-module-es2015.js.map