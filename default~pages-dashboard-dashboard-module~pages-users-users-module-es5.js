function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-users-users-module"], {
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
  "./src/app/shared/components/date-picker-range/date-picker-range.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/components/date-picker-range/date-picker-range.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DatePickerRangeComponent */

  /***/
  function srcAppSharedComponentsDatePickerRangeDatePickerRangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerRangeComponent", function () {
      return DatePickerRangeComponent;
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


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/functions/date.util */
    "./src/app/shared/functions/date.util.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function DatePickerRangeComponent_ng_container_6_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerRangeComponent_ng_container_6_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.setPreSelectedDate(item_r77.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r78.isPreSelectedItemSelected(item_r77));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r77.label, " ");
      }
    }

    function DatePickerRangeComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatePickerRangeComponent_ng_container_6_button_1_Template, 2, 3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r77 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r77.hidden);
      }
    }

    function DatePickerRangeComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatePickerRangeComponent_ng_template_11_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var date_r83 = ctx.$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.hoveredDate = date_r83;
        })("mouseleave", function DatePickerRangeComponent_ng_template_11_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r83 = ctx.$implicit;
        var focused_r84 = ctx.focused;

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r84)("range", ctx_r74.isRange(date_r83))("faded", ctx_r74.isHovered(date_r83) || ctx_r74.isInside(date_r83))("disabled", ctx_r74.isDisabled(date_r83));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r83.day, " ");
      }
    }

    var CUSTOM_DATE = -1;
    var ALL_TIME = -2;

    var DatePickerRangeComponent =
    /*#__PURE__*/
    function () {
      function DatePickerRangeComponent(calendar, formatter) {
        _classCallCheck(this, DatePickerRangeComponent);

        this.calendar = calendar;
        this.formatter = formatter;
        this.allTimeMinDate = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["momentToNgbDate"])(moment__WEBPACK_IMPORTED_MODULE_5__('2010-01-01'));
        this.preSelectedDates = [{
          label: 'Today',
          value: 0
        }, {
          label: 'This week',
          value: 'week'
        }, {
          label: 'This month',
          value: 'month'
        }, {
          label: 'This quarter',
          value: 'quarter'
        }, {
          label: 'This year',
          value: 'year'
        }, {
          label: '2 days ago',
          value: 1
        }, {
          label: '3 days ago',
          value: 2
        }, {
          label: '5 days ago',
          value: 4
        }, {
          label: '7 days ago',
          value: 6
        }, {
          label: 'All time',
          value: ALL_TIME
        }, {
          label: 'Custom',
          value: CUSTOM_DATE,
          hidden: true
        }];
        this.preSelectedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](-1);
        this.maxDate = null;
        this.minDate = null;
        this.calendarIcon = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendarAlt"];
        this.hoveredDate = null;

        this.onChange = function () {};

        this.onTouch = function () {};

        this.maxDate = calendar.getToday();
        this.minDate = calendar.getToday();
        this.minDate.year = 2010;
        this.minDate.month = 1;
        this.minDate.day = 1; // this.toDate = calendar.getToday();
        // this.fromDate = calendar.getPrev(calendar.getToday(), 'd', 6);
      }

      _createClass(DatePickerRangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            return _this.setInitValueOfPresetDate();
          }, 0);
        }
      }, {
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }

          this.preSelectedDate.setValue(CUSTOM_DATE);
        }
      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
        }
      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(date) {
          return date.after(this.maxDate) || date.before(this.minDate);
        }
      }, {
        key: "validateInput",
        value: function validateInput(currentValue, input) {
          var parsed = this.formatter.parse(input);
          return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed) : currentValue;
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.fromDate = value.from;
          this.toDate = value.to;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouch = fn;
        }
      }, {
        key: "setPreSelectedDate",
        value: function setPreSelectedDate(value) {
          this.preSelectedDate.setValue(value);
          this._to = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["momentToNgbDate"])(moment__WEBPACK_IMPORTED_MODULE_5__());

          if (value === ALL_TIME) {
            this._from = this.allTimeMinDate;
          } else {
            if (typeof value === 'number') {
              this._from = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["momentToNgbDate"])(moment__WEBPACK_IMPORTED_MODULE_5__().subtract(value, 'days'));
            } else {
              this._from = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["momentToNgbDate"])(moment__WEBPACK_IMPORTED_MODULE_5__().startOf(value));
            }
          }

          this.onChange({
            from: this.fromDate,
            to: this.toDate
          });
        }
      }, {
        key: "getPreSelectedDateLabel",
        value: function getPreSelectedDateLabel() {
          var _this2 = this;

          return this.preSelectedDates.find(function (item) {
            return item.value === _this2.preSelectedDate.value;
          }).label;
        }
      }, {
        key: "isPreSelectedItemSelected",
        value: function isPreSelectedItemSelected(item) {
          return this.preSelectedDate.value === item.value;
        }
      }, {
        key: "setInitValueOfPresetDate",
        value: function setInitValueOfPresetDate() {
          var _this3 = this;

          var from = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(this.fromDate);
          var to = Object(_shared_functions_date_util__WEBPACK_IMPORTED_MODULE_4__["ngbDateToMoment"])(this.toDate);
          var diff = to.diff(from, 'days');
          var presetIndex = this.preSelectedDates.findIndex(function (preset) {
            return preset.value === diff;
          });

          if (presetIndex >= 0) {
            this.preSelectedDate.setValue(diff);
            return;
          }

          ['year', 'quarter', 'month', 'week'].forEach(function (preset) {
            if (to.diff(moment__WEBPACK_IMPORTED_MODULE_5__().startOf(preset), 'days') === diff) {
              _this3.preSelectedDate.setValue(preset);
            }
          });
        }
      }, {
        key: "fromDate",
        get: function get() {
          return this._from;
        },
        set: function set(date) {
          var _this4 = this;

          if (date && !date.equals(this._from)) {
            setTimeout(function () {
              _this4.preSelectedDate.setValue(CUSTOM_DATE);
            }, 0);
          }

          this._from = date;
          this.onChange({
            from: date,
            to: this.toDate
          });
        }
      }, {
        key: "toDate",
        get: function get() {
          return this._to;
        },
        set: function set(date) {
          var _this5 = this;

          if (date && !date.equals(this._to)) {
            setTimeout(function () {
              _this5.preSelectedDate.setValue(CUSTOM_DATE);
            }, 0);
          }

          this._to = date;
          this.onChange({
            from: this.fromDate,
            to: date
          });
        }
      }]);

      return DatePickerRangeComponent;
    }();

    DatePickerRangeComponent.ɵfac = function DatePickerRangeComponent_Factory(t) {
      return new (t || DatePickerRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"]));
    };

    DatePickerRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatePickerRangeComponent,
      selectors: [["duelit-date-picker-range"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return DatePickerRangeComponent;
        }),
        multi: true
      }])],
      decls: 31,
      vars: 10,
      consts: [[1, "flex"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [4, "ngFor", "ngForOf"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", "hidden", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "form-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [3, "icon"], [1, "form-group", "ml-2"], [1, "to"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], ["ngbDropdownItem", "", 3, "selected", "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "custom-day", 3, "mouseenter", "mouseleave"]],
      template: function DatePickerRangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatePickerRangeComponent_ng_container_6_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DatePickerRangeComponent_Template_input_dateSelect_9_listener($event) {
            return ctx.onDateSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DatePickerRangeComponent_ng_template_11_Template, 2, 9, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "From: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatePickerRangeComponent_Template_input_input_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r75.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerRangeComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return _r72.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatePickerRangeComponent_Template_input_input_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            return ctx.toDate = ctx.validateInput(ctx.toDate, _r76.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerRangeComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return _r72.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPreSelectedDateLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preSelectedDates);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r73)("startDate", ctx.fromDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.fromDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.calendarIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.toDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.calendarIcon);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbInputDatepicker"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"]],
      styles: [".custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.custom-day.disabled[_ngcontent-%COMP%], .custom-day.disabled[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background-color: unset;\n  color: unset;\n}\n.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 0px;\n}\n.form-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.form-group[_ngcontent-%COMP%]   span.to[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.flex[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItcmFuZ2UvRDpcXGdpdFxcRHVlbGl0XFxhZG1pbi1yZWRlZW0tZGFzaGJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRhdGUtcGlja2VyLXJhbmdlXFxkYXRlLXBpY2tlci1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItcmFuZ2UvZGF0ZS1waWNrZXItcmFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtBQ0NKO0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0Usd0NBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRko7QURNQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNIRjtBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURJRTtFQUNFLGlCQUFBO0FDRko7QURJSTtFQUNFLGdCQUFBO0FDRk47QURPQTtFQUNFLGVBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGUtcGlja2VyLXJhbmdlL2RhdGUtcGlja2VyLXJhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcblxyXG4gICYuZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgJi5yYW5nZSwgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJi5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgJi5kaXNhYmxlZCwgJi5kaXNhYmxlZDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGNvbG9yOiB1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAmLnRvIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIiwiLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuLmN1c3RvbS1kYXkuZGlzYWJsZWQsIC5jdXN0b20tZGF5LmRpc2FibGVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG4uaGlkZGVuIHtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5mb3JtLWdyb3VwIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi5mb3JtLWdyb3VwIHNwYW4udG8ge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uZmxleCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-date-picker-range',
          templateUrl: './date-picker-range.component.html',
          styleUrls: ['./date-picker-range.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return DatePickerRangeComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/date-picker-range/date-picker-range.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/components/date-picker-range/date-picker-range.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: DatePickerRangeModule */

  /***/
  function srcAppSharedComponentsDatePickerRangeDatePickerRangeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerRangeModule", function () {
      return DatePickerRangeModule;
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


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _date_picker_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./date-picker-range.component */
    "./src/app/shared/components/date-picker-range/date-picker-range.component.ts");

    var DatePickerRangeModule = function DatePickerRangeModule() {
      _classCallCheck(this, DatePickerRangeModule);
    };

    DatePickerRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DatePickerRangeModule
    });
    DatePickerRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DatePickerRangeModule_Factory(t) {
        return new (t || DatePickerRangeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DatePickerRangeModule, {
        declarations: [_date_picker_range_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]],
        exports: [_date_picker_range_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePickerRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_date_picker_range_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]],
          exports: [_date_picker_range_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerRangeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/functions/date.util.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/functions/date.util.ts ***!
    \***********************************************/

  /*! exports provided: ngbDateToMoment, momentToNgbDate */

  /***/
  function srcAppSharedFunctionsDateUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ngbDateToMoment", function () {
      return ngbDateToMoment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "momentToNgbDate", function () {
      return momentToNgbDate;
    });
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    function ngbDateToMoment(date) {
      return moment__WEBPACK_IMPORTED_MODULE_1__().year(date.year).month(date.month - 1).date(date.day);
    }

    function momentToNgbDate(date) {
      return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year(), date.month() + 1, date.date());
    }
    /***/

  }
}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-users-users-module-es5.js.map