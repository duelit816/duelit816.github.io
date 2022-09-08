function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-edit-user-edit-module"], {
  /***/
  "./src/app/features/admin/pages/user-edit/delete-confirm-modal/delete-confirm-modal.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/features/admin/pages/user-edit/delete-confirm-modal/delete-confirm-modal.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: DeleteConfirmModalComponent */

  /***/
  function srcAppFeaturesAdminPagesUserEditDeleteConfirmModalDeleteConfirmModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteConfirmModalComponent", function () {
      return DeleteConfirmModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var DeleteConfirmModalComponent = function DeleteConfirmModalComponent(modal) {
      _classCallCheck(this, DeleteConfirmModalComponent);

      this.modal = modal;
    };

    DeleteConfirmModalComponent.ɵfac = function DeleteConfirmModalComponent_Factory(t) {
      return new (t || DeleteConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    DeleteConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteConfirmModalComponent,
      selectors: [["duelit-delete-confirm-modal"]],
      decls: 17,
      vars: 0,
      consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-primary", 3, "click"]],
      template: function DeleteConfirmModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmModalComponent_Template_button_click_3_listener() {
            return ctx.modal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You are about delete a user. This process is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "irreversible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". Are you sure you want to delete the user?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmModalComponent_Template_button_click_13_listener() {
            return ctx.modal.dismiss("cancel");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmModalComponent_Template_button_click_15_listener() {
            return ctx.modal.close("ok");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL3VzZXItZWRpdC9kZWxldGUtY29uZmlybS1tb2RhbC9kZWxldGUtY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-delete-confirm-modal',
          templateUrl: './delete-confirm-modal.component.html',
          styleUrls: ['./delete-confirm-modal.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/user-edit/user-edit-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/admin/pages/user-edit/user-edit-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: UserEditRoutingModule */

  /***/
  function srcAppFeaturesAdminPagesUserEditUserEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditRoutingModule", function () {
      return UserEditRoutingModule;
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


    var _user_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-edit.component */
    "./src/app/features/admin/pages/user-edit/user-edit.component.ts");

    var routes = [{
      path: '',
      component: _user_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserEditComponent"]
    }];

    var UserEditRoutingModule = function UserEditRoutingModule() {
      _classCallCheck(this, UserEditRoutingModule);
    };

    UserEditRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserEditRoutingModule
    });
    UserEditRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserEditRoutingModule_Factory(t) {
        return new (t || UserEditRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserEditRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditRoutingModule, [{
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
  "./src/app/features/admin/pages/user-edit/user-edit.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/admin/pages/user-edit/user-edit.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppFeaturesAdminPagesUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
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


    var _shared_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/constants/api */
    "./src/app/shared/constants/api/index.ts");
    /* harmony import */


    var _shared_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/validators */
    "./src/app/shared/validators/index.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _delete_confirm_modal_delete_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./delete-confirm-modal/delete-confirm-modal.component */
    "./src/app/features/admin/pages/user-edit/delete-confirm-modal/delete-confirm-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @core/services/toast.service */
    "./src/app/core/services/toast.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function UserEditComponent_div_13_select_17_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r211);
      }
    }

    function UserEditComponent_div_13_select_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_13_select_17_option_1_Template, 2, 2, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var countries_r209 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", countries_r209);
      }
    }

    function UserEditComponent_div_13_div_19_select_3_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r215 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r215);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r215);
      }
    }

    function UserEditComponent_div_13_div_19_select_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditComponent_div_13_div_19_select_3_option_1_Template, 2, 2, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var states_r213 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", states_r213);
      }
    }

    function UserEditComponent_div_13_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State / Province");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserEditComponent_div_13_div_19_select_3_Template, 2, 1, "select", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r204.states$))("ngIfElse", _r205);
      }
    }

    function UserEditComponent_div_13_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 46);
      }
    }

    function UserEditComponent_div_13_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ban Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserEditComponent_div_13_select_17_Template, 2, 1, "select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserEditComponent_div_13_div_19_Template, 5, 4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserEditComponent_div_13_ng_template_20_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Birthday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_13_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          return _r207.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Deactivated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Banned");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserEditComponent_div_13_div_46_Template, 4, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_13_Template_button_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r218.updateUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_13_Template_button_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r219.confirmDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r198.userDetailsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, ctx_r198.countries$))("ngIfElse", _r205);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.userDetailsForm.get("country").value === "United States");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r198.calendarIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.userDetailsForm.get("status").value === "banned");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r198.userDetailsForm.invalid || ctx_r198.isSavingUser || ctx_r198.isDeleting);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r198.isDeleting);
      }
    }

    function UserEditComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_19_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r221.updateCredits();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _userCredits_r220 = ctx.$implicit;

        var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Credits - ", _userCredits_r220.virtualAmount, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r199.userCreditsControl)("disabled", ctx_r199.isCreditsUpdating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r199.isCreditsUpdating || ctx_r199.isDeleting || ctx_r199.userCreditsControl.value < 1);
      }
    }

    function UserEditComponent_div_24_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r242 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r242.transactionId || "-", " ");
      }
    }

    function UserEditComponent_div_24_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r243 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r243.createdAt, " ");
      }
    }

    function UserEditComponent_div_24_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r244 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r244.type, " ");
      }
    }

    function UserEditComponent_div_24_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r245 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r245.gameId || "-", " ");
      }
    }

    function UserEditComponent_div_24_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r246 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r246.gameName || "-", " ");
      }
    }

    function UserEditComponent_div_24_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Product ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r247 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r247.productId || "-", " ");
      }
    }

    function UserEditComponent_div_24_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r248 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r248.amount, " ");
      }
    }

    function UserEditComponent_div_24_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 69);
      }
    }

    function UserEditComponent_div_24_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 70);
      }
    }

    function UserEditComponent_div_24_span_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_24_span_25_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r250.loadMoreCreditHistory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_24_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You've reached the end.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["transactionId", "createdAt", "type", "gameId", "gameName", "productId", "amount"];
    };

    function UserEditComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserEditComponent_div_24_th_3_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserEditComponent_div_24_td_4_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserEditComponent_div_24_th_6_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserEditComponent_div_24_td_7_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserEditComponent_div_24_th_9_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserEditComponent_div_24_td_10_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserEditComponent_div_24_th_12_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserEditComponent_div_24_td_13_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserEditComponent_div_24_th_15_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserEditComponent_div_24_td_16_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserEditComponent_div_24_th_18_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserEditComponent_div_24_td_19_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserEditComponent_div_24_th_21_Template, 2, 0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserEditComponent_div_24_td_22_Template, 2, 1, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserEditComponent_div_24_tr_23_Template, 1, 0, "tr", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserEditComponent_div_24_tr_24_Template, 1, 0, "tr", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserEditComponent_div_24_span_25_Template, 2, 0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserEditComponent_div_24_span_26_Template, 2, 0, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _userCreditsHistory_r223 = ctx.$implicit;

        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _userCreditsHistory_r223);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("matHeaderRowDefSticky", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r200.lastCreditHistoryCount === ctx_r200.creditHistoryLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r200.lastCreditHistoryCount !== ctx_r200.creditHistoryLimit);
      }
    }

    function UserEditComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserEditComponent =
    /*#__PURE__*/
    function () {
      function UserEditComponent(route, api, fb, calendar, toast, router, modalService) {
        _classCallCheck(this, UserEditComponent);

        this.route = route;
        this.api = api;
        this.fb = fb;
        this.calendar = calendar;
        this.toast = toast;
        this.router = router;
        this.modalService = modalService;
        this.creditHistoryLimit = 15;
        this.userCreditsHistory$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.calendarIcon = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendarAlt"];
        this.isSavingUser = false;
        this.isCreditsUpdating = false;
        this.isDeleting = false;
        this.isUnregistering = false;
        this.creditHistoryPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](1);
        this.lastCreditHistoryCount = this.creditHistoryLimit;
        this.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var userId = this.route.snapshot.params.userId;
          var path = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"].GetUserById, [userId]);
          this.user$ = this.api.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) {
            var _bday = moment__WEBPACK_IMPORTED_MODULE_5__(user.birthDate).toObject();

            var bdayCal = _this.calendar.getToday();

            bdayCal.day = _bday.date;
            bdayCal.month = _bday.months + 1;
            bdayCal.year = _bday.years;
            _this.userDetailsForm = _this.fb.group({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.firstName),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.lastName),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email, [_shared_validators__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.country),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.state),
              birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](bdayCal),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.status),
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.role),
              banDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.banDescription)
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this.toast.error(err.error || err.statusText || err.message);

            _this.router.navigate(['/admin/users']);

            return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
          }));
          var userCreditsPath = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["CreditsApi"].CreditsByUser, [userId]);
          this.userCredits$ = this.api.get(userCreditsPath);
          this.initCreditHistory(userId);
          this.countries$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["ValuesApi"].Countries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
            var countries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return countries.map(function (country) {
              return country.name;
            });
          }));
          this.states$ = this.api.get(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["ValuesApi"].States).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
            var countries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return countries.map(function (country) {
              return country.name;
            });
          }));
          this.userCreditsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe$.next();
          this.ngUnsubscribe$.complete();
        }
      }, {
        key: "initCreditHistory",
        value: function initCreditHistory(userId) {
          var _this2 = this;

          var userCreditsHistoryPath = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["CreditsApi"].CreditsHistoryByUser, [userId]);
          this.creditHistoryPage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (page) {
            return _this2.api.get(userCreditsHistoryPath, {
              query: {
                page: page,
                limit: _this2.creditHistoryLimit
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (result) {
              _this2.lastCreditHistoryCount = result.length;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
              _this2.toast.error(err.error || err.statusText || err.message);

              return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe$)).subscribe(function (history) {
            _this2.userCreditsHistory$.next(_this2.userCreditsHistory$.value.concat(history));
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this3 = this;

          var formValue = this.userDetailsForm.value;
          var birthday = moment__WEBPACK_IMPORTED_MODULE_5__().year(formValue.birthDate.year).month(formValue.birthDate.month - 1).date(formValue.birthDate.day).format('YYYY-MM-DD');
          var newUserValue = {
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            email: formValue.email,
            country: formValue.country,
            state: formValue.state,
            role: formValue.role,
            status: formValue.status,
            banDescription: formValue.status === 'banned' ? formValue.banDescription : '',
            birth_date: birthday
          };
          this.isSavingUser = true;
          this.api.post(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"].UpdateUser, {
            body: newUserValue,
            opts: {
              addSecurity: false
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            return _this3.isSavingUser = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this3.isSavingUser = false;

            _this3.toast.error(err.error || err.statusText || err.message);

            return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
          })).subscribe(function () {
            _this3.toast.success('Successfully updated user details.');
          });
        }
      }, {
        key: "updateCredits",
        value: function updateCredits() {
          var _this4 = this;

          this.isCreditsUpdating = true;
          var userId = this.route.snapshot.params.userId;
          var creditsToAdd = this.userCreditsControl.value;
          this.userCreditsControl.disable();
          var path = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["CreditsApi"].CreditsByUser, [userId]);
          this.api.post(path, {
            body: {
              virtual_amount: creditsToAdd
            },
            opts: {
              addSecurity: false
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            _this4.isCreditsUpdating = false;

            _this4.userCreditsControl.enable();

            _this4.userCreditsControl.setValue(0);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this4.isCreditsUpdating = false;

            _this4.userCreditsControl.enable();

            _this4.toast.error(err.error || err.statusText || err.message);

            return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
          })).subscribe(function (data) {
            _this4.userCredits$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(data);

            _this4.reloadCreditHistory();

            _this4.toast.success('Successfully updated user credits.');
          });
        }
      }, {
        key: "unregisterDevice",
        value: function unregisterDevice() {
          var _this5 = this;

          this.isUnregistering = true;
          this.api.post(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"].UnregisterDevice, {
            body: {
              email: this.userDetailsForm.value.email
            },
            opts: {
              addSecurity: false
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            return _this5.isUnregistering = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this5.isUnregistering = false;
            console.log("ERROR in unregistering", err);

            _this5.toast.error(err.error || err.statusText || err.message);

            return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
          })).subscribe(function () {
            _this5.toast.success('Successfully unregistered device.');
          });
        }
      }, {
        key: "openUserStats",
        value: function openUserStats() {
          var userId = this.route.snapshot.params.userId;
          this.router.navigate(["/admin/user", userId, 'stats']);
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          var _this6 = this;

          var deleteModalRef = this.modalService.open(_delete_confirm_modal_delete_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmModalComponent"]);
          deleteModalRef.result.then(function (action) {
            if (action === 'ok') {
              _this6.deleteUser();
            }
          }).catch(function () {
            return;
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this7 = this;

          var userId = this.route.snapshot.params.userId;
          this.isDeleting = true;
          var path = this.api.buildPath(_shared_constants_api__WEBPACK_IMPORTED_MODULE_3__["UsersApi"].DeleteUserById, [userId]);
          this.api.delete(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            if (err.status === 200) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({});
            } else {
              _this7.toast.error(err.error || err.statusText || err.message);

              _this7.isDeleting = false;
              return rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"];
            }
          })).subscribe(function () {
            _this7.toast.success("Successfully deleted user ".concat(_this7.userDetailsForm.value.email));

            _this7.router.navigate(['/admin/users']);
          });
        }
      }, {
        key: "loadMoreCreditHistory",
        value: function loadMoreCreditHistory() {
          this.creditHistoryPage$.next(this.creditHistoryPage$.value + 1);
        }
      }, {
        key: "reloadCreditHistory",
        value: function reloadCreditHistory() {
          this.userCreditsHistory$.next([]);
          this.creditHistoryPage$.next(1);
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ɵfac = function UserEditComponent_Factory(t) {
      return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]));
    };

    UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserEditComponent,
      selectors: [["duelit-user-edit"]],
      decls: 28,
      vars: 14,
      consts: [[1, "row"], ["onclick", "window.history.back()", 1, "pointer"], [1, "col-md-5"], [1, "card"], [1, "card-header", "d-flex"], [1, "btn", "btn-primary", "custom", 3, "disabled", "click"], ["class", "card-body", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "col-md-7"], [1, "card-header"], ["class", "card-body form-group", 4, "ngIf", "ngIfElse"], ["class", "card-body credit-history", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "card-body", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "email", "formControlName", "email", "readonly", "", "disabled", "", 1, "form-control"], [1, "col-6", "form-group"], ["class", "form-control", "formControlName", "country", "aria-placeholder", "Select Country", 4, "ngIf", "ngIfElse"], ["class", "col-6 form-group", 4, "ngIf"], ["loadingSelect", ""], [1, "col", "form-group"], [1, "input-group"], ["placeholder", "YYYY-MM-DD", "formControlName", "birthDate", "ngbDatepicker", "", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [3, "icon"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["value", "pending"], ["value", "deactivated"], ["value", "banned"], ["class", "form-group", 4, "ngIf"], ["formControlName", "role", 1, "form-control"], ["value", "admin"], ["value", "developer"], ["value", "player"], [1, "btn", "btn-primary", "custom", "col", 3, "disabled", "click"], [1, "btn", "btn-danger", "custom", "col", 3, "disabled", "click"], ["formControlName", "country", "aria-placeholder", "Select Country", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "form-control", "formControlName", "states", "aria-placeholder", "Select States / Province", 4, "ngIf", "ngIfElse"], ["formControlName", "states", "aria-placeholder", "Select States / Province", 1, "form-control"], ["readonly", "", "disabled", "", "type", "text", "placeholder", "Loading...", 1, "form-control-plaintext"], ["type", "text", "formControlName", "banDescription", 1, "form-control"], [1, "card-body", "form-group"], [1, "credits", "d-flex"], ["type", "number", "min", "0", 1, "form-control", "col-6", 3, "formControl", "disabled"], [1, "btn", "btn-primary", "custom", "col-5", 3, "disabled", "click"], [1, "card-body", "credit-history"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "transactionId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "createdAt"], ["matColumnDef", "type"], ["matColumnDef", "gameId"], ["matColumnDef", "gameName"], ["matColumnDef", "productId"], ["matColumnDef", "amount"], ["mat-header-row", "", "class", "named-columns", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "load-more", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", "", 1, "named-columns"], ["mat-row", ""], [1, "load-more", 3, "click"], [1, "loading-container", "d-flex"], [1, "loading"]],
      template: function UserEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "< back to users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_Template_button_click_9_listener() {
            return ctx.unregisterDevice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unregister Device");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_Template_button_click_11_listener() {
            return ctx.openUserStats();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View user stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserEditComponent_div_13_Template, 62, 10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit Credits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserEditComponent_div_19_Template, 7, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Credits History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserEditComponent_div_24_Template, 27, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserEditComponent_ng_template_26_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isUnregistering);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDeleting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.user$))("ngIfElse", _r201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 10, ctx.userCredits$))("ngIfElse", _r201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, ctx.userCreditsHistory$))("ngIfElse", _r201);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
      styles: [".card-header[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   button.custom[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n[_nghost-%COMP%]     span.loading {\n  height: 120px;\n  width: 120px;\n  background-size: 120px 120px;\n}\n[_nghost-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  min-width: 120px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: white;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .credits[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%] {\n  overflow: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 1.25em 0;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-family: Nexa;\n  width: 100%;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  padding-right: 1em;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  padding-right: 24px;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  max-width: 7.5em;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n[_nghost-%COMP%]   .credit-history[_ngcontent-%COMP%]   span.load-more[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #0069d9;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcGFnZXMvdXNlci1lZGl0L0Q6XFxnaXRcXER1ZWxpdFxcYWRtaW4tcmVkZWVtLWRhc2hib2FyZC9zcmNcXGFwcFxcZmVhdHVyZXNcXGFkbWluXFxwYWdlc1xcdXNlci1lZGl0XFx1c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURJRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRko7QURLRTtFQU1FLG1CQUFBO0FDUko7QURHSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNETjtBRE9FO0VBQ0UseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjtBRFFFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ05KO0FEUUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNOTjtBRFFNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ05SO0FEU007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDUFI7QURVTTtFQUNFLGdCQUFBO0FDUlI7QURZSTtFQUNFLGdCQUFBO0FDVk47QURZTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3BhZ2VzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBidXR0b24uY3VzdG9tIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIDo6bmctZGVlcCBzcGFuLmxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggMTIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jcmVkaXRzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3JlZGl0LWhpc3Rvcnkge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW0gMDtcclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBOZXhhO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIHRkLm1hdC1jZWxsIHtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ciB0ZDpsYXN0LWNoaWxkLCB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3LjVlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG5cclxuICAgICAgJi5sb2FkLW1vcmUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwNjlkOTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLmNhcmQtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQtaGVhZGVyIGJ1dHRvbi5jdXN0b20ge1xuICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHNwYW4ubG9hZGluZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCAxMjBweDtcbn1cbjpob3N0IC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuOmhvc3QgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLmNyZWRpdHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY3JlZGl0LWhpc3Rvcnkge1xuICBvdmVyZmxvdzogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMS4yNWVtIDA7XG59XG46aG9zdCAuY3JlZGl0LWhpc3RvcnkgdGFibGUge1xuICBmb250LWZhbWlseTogTmV4YTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY3JlZGl0LWhpc3RvcnkgdGFibGUgdGQubWF0LWNlbGwge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbjpob3N0IC5jcmVkaXQtaGlzdG9yeSB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkLCA6aG9zdCAuY3JlZGl0LWhpc3RvcnkgdGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuOmhvc3QgLmNyZWRpdC1oaXN0b3J5IHRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgbWF4LXdpZHRoOiA3LjVlbTtcbn1cbjpob3N0IC5jcmVkaXQtaGlzdG9yeSBzcGFuIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cbjpob3N0IC5jcmVkaXQtaGlzdG9yeSBzcGFuLmxvYWQtbW9yZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDY5ZDk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'duelit-user-edit',
          templateUrl: './user-edit.component.html',
          styleUrls: ['./user-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCalendar"]
        }, {
          type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/admin/pages/user-edit/user-edit.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/admin/pages/user-edit/user-edit.module.ts ***!
    \********************************************************************/

  /*! exports provided: UserEditModule */

  /***/
  function srcAppFeaturesAdminPagesUserEditUserEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditModule", function () {
      return UserEditModule;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_components_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/components/panel */
    "./src/app/shared/components/panel/index.ts");
    /* harmony import */


    var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-edit-routing.module */
    "./src/app/features/admin/pages/user-edit/user-edit-routing.module.ts");
    /* harmony import */


    var _user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-edit.component */
    "./src/app/features/admin/pages/user-edit/user-edit.component.ts");
    /* harmony import */


    var _delete_confirm_modal_delete_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./delete-confirm-modal/delete-confirm-modal.component */
    "./src/app/features/admin/pages/user-edit/delete-confirm-modal/delete-confirm-modal.component.ts");

    var UserEditModule = function UserEditModule() {
      _classCallCheck(this, UserEditModule);
    };

    UserEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UserEditModule
    });
    UserEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UserEditModule_Factory(t) {
        return new (t || UserEditModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserEditRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserEditModule, {
        declarations: [_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"], _delete_confirm_modal_delete_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteConfirmModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserEditRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"], _delete_confirm_modal_delete_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteConfirmModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserEditRoutingModule"], _shared_components_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-user-edit-user-edit-module-es5.js.map