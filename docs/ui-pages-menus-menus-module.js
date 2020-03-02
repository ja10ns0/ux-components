(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-menus-menus-module"],{

/***/ "./src/app/ui-pages/menus/documentation/menus-doc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/menus/documentation/menus-doc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Menus</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-menu is a floating panel containing a list of options.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Menus types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are three types of nxt-menu to use:\r\n    </p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Use <span class=\"documentation-code\">ntx-menu-options</span> for menus that need to show the list of options for that item.</li>\r\n      <li>Use <span class=\"documentation-code\">ntx-menu-toolbar-profile</span> for menus that show the user's information and are displayed in the toolbar application.</li>\r\n      <li>Use <span class=\"documentation-code\">ntx-menu-toolbar-dashboard</span> for menus that show a grid of elements.</li>\r\n    </ul>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Dashboard menu (failback) v4.1.x</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Added failback template to component</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-menus/menu-toolbar-dashboard/menu-toolbar-dashboard.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code2 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">User toolbar options menu v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Design changes</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-menus/menu-toolbar-profile/menu-toolbar-profile.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-menus/menu-toolbar-profile/menu-toolbar-profile.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/menus/documentation/menus-doc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/menus/documentation/menus-doc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL21lbnVzL2RvY3VtZW50YXRpb24vbWVudXMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/menus/documentation/menus-doc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/menus/documentation/menus-doc.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenusDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusDocComponent", function() { return MenusDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenusDocComponent = /** @class */ (function () {
    function MenusDocComponent() {
        this.code1 = "\n    <mat-menu #menuOptions=\"matMenu\" [overlapTrigger]=\"false\" class=\"mat-menu-options mat-menu-toolbar-profile\">\n\n      <mat-list class=\"mat-menu-options__user-info\">\n        <mat-list-item *ngFor=\"let text of texts\" class=\"mat-menu-options__user-info--item\">\n          <div matListAvatar class=\"mat-menu-options__user-info--logo\">\n            <img class=\"utils--vertical-align\" src=\"assets/images/icon-netex.png\" alt=\"Logo netex\">\n          </div>\n          <h4 mat-line class=\"mat-menu-options__user-info--title\">{{text.title}}</h4>\n          <p mat-line class=\"mat-menu-options__user-info--subtitle\"> {{text.subtitle}} </p>\n          <a matLine href=\"...\" class=\"mat-menu-options__user-info--link\">{{text.link}}</a>\n          <div class=\"mat-menu-options__user-info--image\">\n            <img class=\"utils--vertical-align\" src=\"assets/images/perfil.jpg\" alt=\"user image\">\n          </div>\n        </mat-list-item>\n      </mat-list>\n\n      <button mat-menu-item class=\"mat-menu-options__custom-app\">\n        <span class=\"mat-menu-options__custom-app--text\">Use as administrator</span>\n        <div class=\"mat-menu-options__custom-app--image\">\n          <img class=\"utils--vertical-align\" src=\"assets/images/administrator-banner.png\" alt=\"Use as administrator\">\n        </div>\n      </button>\n\n      <button mat-menu-item class=\"mat-menu-options__menu-item\">\n        <span class=\"mat-menu-options__text-item\"\n              matBadgeOverlap=\"false\"\n              [matBadge]=\"29\"\n              [matBadgeHidden]=\"false\"\n              matBadgeSize=\"small\">Notificaciones</span>\n      </button>\n      <button mat-menu-item class=\"mat-menu-options__menu-item\">\n        <span class=\"mat-menu-options__text-item\">Novedades</span>\n      </button>\n      <button mat-menu-item class=\"mat-menu-options__menu-item\">\n        <span class=\"mat-menu-options__text-item\">Manuales</span>\n      </button>\n      <button mat-menu-item class=\"mat-menu-options__menu-item\">\n        <span class=\"mat-menu-options__text-item\">Netex Community</span>\n      </button>\n\n      <mat-divider></mat-divider>\n\n      <button mat-menu-item class=\"mat-menu-options__menu-item\">\n        <span class=\"mat-menu-options__text-item\">Salir</span>\n      </button>\n    </mat-menu>\n  ";
        this.code2 = "\n    <button mat-icon-button class=\"dashboard-menu menu-options-button\" [matMenuTriggerFor]=\"menuOptions\">\n      <mat-icon class=\"icon-netex icon-dashboard\"></mat-icon>\n    </button>\n    <mat-menu #menuOptions=\"matMenu\" [overlapTrigger]=\"false\" class=\"dashboard\">\n      <div class=\"dashboard__grid\" *ngIf=\"apps.length; else failback\">\n        <mat-grid-list cols=\"3\" rowHeight=\"116px\">\n          <mat-grid-tile *ngFor=\"let app of apps\">\n            <a href=\"{{app.link}}\">\n              <img src=\"{{app.icon}}\">\n              <span class=\"utils--margin-top-12 utils--text-12 utils--truncate\" matTooltip=\"{{app.name}}\">\n                {{app.name}}\n              </span>\n            </a>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n      <ng-template #failback>\n        <div class=\"utils--basic-text utils--align-center-text utils--padding-16\">\n          <p>\n            <mat-icon class=\"icon-netex icon-warning icon-big utils--text-error\"></mat-icon>\n          </p>\n          <p class=\"utils--text-grey-900 utils--bold-text\">Oups!</p>\n          <p class=\"utils--text-14 utils--text-grey-700\">{{failbackMsg}}</p>\n        </div>\n      </ng-template>\n    </mat-menu>";
    }
    MenusDocComponent.prototype.ngOnInit = function () { };
    MenusDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menus-doc',
            template: __webpack_require__(/*! ./menus-doc.component.html */ "./src/app/ui-pages/menus/documentation/menus-doc.component.html"),
            styles: [__webpack_require__(/*! ./menus-doc.component.scss */ "./src/app/ui-pages/menus/documentation/menus-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenusDocComponent);
    return MenusDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/menus/examples/menus-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/menus/examples/menus-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Simple options menu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-menu-options-simple>' }}\">\r\n        <ntx-menu-options-simple></ntx-menu-options-simple>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Options menu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-menu-options>' }}\">\r\n        <ntx-menu-options></ntx-menu-options>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'User toolbar options menu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-menu-toolbar-profile>' }}\">\r\n        <ntx-menu-toolbar-profile></ntx-menu-toolbar-profile>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Dashboard menu' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-menu-toolbar-dashboard>' }}\">\r\n      <ntx-menu-toolbar-dashboard [apps]=\"apps\"></ntx-menu-toolbar-dashboard>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple\r\n      title=\"{{'Dashboard menu (failback)' | uppercase }}\"\r\n      subtitle=\"{{ '<ntx-menu-toolbar-dashboard>' }}\">\r\n      <ntx-menu-toolbar-dashboard [apps]=\"{}\"></ntx-menu-toolbar-dashboard>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/menus/examples/menus-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-pages/menus/examples/menus-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL21lbnVzL2V4YW1wbGVzL21lbnVzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/menus/examples/menus-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-pages/menus/examples/menus-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenusExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusExamplesComponent", function() { return MenusExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");



var MenusExamplesComponent = /** @class */ (function () {
    function MenusExamplesComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    MenusExamplesComponent.prototype.ngOnInit = function () {
        this.apps = this.dashboardService.getDashboardApps();
    };
    MenusExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menus-examples',
            template: __webpack_require__(/*! ./menus-examples.component.html */ "./src/app/ui-pages/menus/examples/menus-examples.component.html"),
            styles: [__webpack_require__(/*! ./menus-examples.component.scss */ "./src/app/ui-pages/menus/examples/menus-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], MenusExamplesComponent);
    return MenusExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/menus/menus-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/menus/menus-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MenusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusRoutingModule", function() { return MenusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_menus_doc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/menus-doc.component */ "./src/app/ui-pages/menus/documentation/menus-doc.component.ts");
/* harmony import */ var _examples_menus_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/menus-examples.component */ "./src/app/ui-pages/menus/examples/menus-examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_menus_examples_component__WEBPACK_IMPORTED_MODULE_4__["MenusExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_menus_doc_component__WEBPACK_IMPORTED_MODULE_3__["MenusDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var MenusRoutingModule = /** @class */ (function () {
    function MenusRoutingModule() {
    }
    MenusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MenusRoutingModule);
    return MenusRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/menus/menus.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/menus/menus.module.ts ***!
  \************************************************/
/*! exports provided: MenusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusModule", function() { return MenusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _documentation_menus_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/menus-doc.component */ "./src/app/ui-pages/menus/documentation/menus-doc.component.ts");
/* harmony import */ var _examples_menus_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/menus-examples.component */ "./src/app/ui-pages/menus/examples/menus-examples.component.ts");
/* harmony import */ var _menus_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus-routing.module */ "./src/app/ui-pages/menus/menus-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MenusModule = /** @class */ (function () {
    function MenusModule() {
    }
    MenusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxMenusModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_3__["NtxListsModule"],
                _menus_routing_module__WEBPACK_IMPORTED_MODULE_6__["MenusRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
            ],
            declarations: [
                _examples_menus_examples_component__WEBPACK_IMPORTED_MODULE_5__["MenusExamplesComponent"],
                _documentation_menus_doc_component__WEBPACK_IMPORTED_MODULE_4__["MenusDocComponent"]
            ]
        })
    ], MenusModule);
    return MenusModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-menus-menus-module.js.map