(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-toolbars-toolbars-module"],{

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Toolbars</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-toolbar is a component used to place a toolbar in your app.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      Toolbars are usually used above a content area to display the title of the current page, and show relevant action buttons for that page.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Toolbars types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are three types of nxt-toolbar: use <span class=\"documentation-code\">ntx-toolbar</span> if you need basic toolbar, use <span class=\"documentation-code\">ntx-toolbar-back</span> if you have a page with a second level of navigation and you need a return button, and you can use <span class=\"documentation-code\">ntx-toolbar-tabs</span> if you need a toolbar with navigation tabs.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n        Keep in mind that each of these components need more components to be complete. This is the case of the options menu of the user profile or the tabs. In ntx-toolbar.module.ts file all modules needed are imported.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Customization</h1>\r\n    <p class=\"documentation-text\">\r\n      Each Netex application has it's corporate color that must be seen in the toolbar. If you need the application to have the Talent Cloud color, you have to put the <span class=\"documentation-code\">theme-talent</span> class in the body, and if you need the application to have the Content Cloud color, you have to put the <span class=\"documentation-code\">theme-content</span> class in the body.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Rvb2xiYXJzL2RvY3VtZW50YXRpb24vdG9vbGJhcnMtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarsDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsDocComponent", function() { return ToolbarsDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarsDocComponent = /** @class */ (function () {
    function ToolbarsDocComponent() {
    }
    ToolbarsDocComponent.prototype.ngOnInit = function () {
    };
    ToolbarsDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbars-doc',
            template: __webpack_require__(/*! ./toolbars-doc.component.html */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.html"),
            styles: [__webpack_require__(/*! ./toolbars-doc.component.scss */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarsDocComponent);
    return ToolbarsDocComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToolbarsExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsExamplesComponent", function() { return ToolbarsExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");



var ToolbarsExamplesComponent = /** @class */ (function () {
    function ToolbarsExamplesComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.toolbarTypes = [
            {
                label: "basic toolbar",
                selector: "<ntx-toolbar>"
            },
            {
                label: "back toolbar",
                selector: "<ntx-toolbar-back>"
            },
            {
                label: "toolbar with tabs",
                selector: "<ntx-toolbar-tabs>"
            }
        ];
    }
    ToolbarsExamplesComponent.prototype.ngOnInit = function () {
        this.apps = this.dashboardService.getDashboardApps();
    };
    ToolbarsExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbars-examples',
            template: __webpack_require__(/*! ./toolbars-examples.component.html */ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html"),
            styles: [__webpack_require__(/*! ./toolbars-examples.component.scss */ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], ToolbarsExamplesComponent);
    return ToolbarsExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbars-examples.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple *ngFor=\"let type of toolbarTypes\"\r\n      title=\"{{ type.label | uppercase }}\"\r\n      subtitle=\"{{ type.selector }}\">\r\n        <ntx-toolbar [apps]=\"apps\" *ngIf=\"type.label==='basic toolbar'\">\r\n          <ntx-list-two-lines-avatar></ntx-list-two-lines-avatar>\r\n        </ntx-toolbar>\r\n        <ntx-toolbar-back [apps]=\"apps\" *ngIf=\"type.label==='back toolbar'\">\r\n          <ntx-list-two-lines-avatar></ntx-list-two-lines-avatar>\r\n        </ntx-toolbar-back>\r\n        <ntx-toolbar-tabs [apps]=\"apps\" *ngIf=\"type.label==='toolbar with tabs'\">\r\n          <ntx-list-two-lines-avatar></ntx-list-two-lines-avatar>\r\n        </ntx-toolbar-tabs>\r\n    </ntx-card-simple>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/examples/toolbars-examples.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL3Rvb2xiYXJzL2V4YW1wbGVzL3Rvb2xiYXJzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/toolbars/toolbars-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-pages/toolbars/toolbars-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ToolbarsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsRoutingModule", function() { return ToolbarsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/toolbars-doc.component */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts");
/* harmony import */ var _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/toolbar-examples.component */ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarsExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarsDocComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var ToolbarsRoutingModule = /** @class */ (function () {
    function ToolbarsRoutingModule() {
    }
    ToolbarsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ToolbarsRoutingModule);
    return ToolbarsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/toolbars/toolbars.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-pages/toolbars/toolbars.module.ts ***!
  \******************************************************/
/*! exports provided: ToolbarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarsModule", function() { return ToolbarsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/toolbars-doc.component */ "./src/app/ui-pages/toolbars/documentation/toolbars-doc.component.ts");
/* harmony import */ var _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/toolbar-examples.component */ "./src/app/ui-pages/toolbars/examples/toolbar-examples.component.ts");
/* harmony import */ var _toolbars_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbars-routing.module */ "./src/app/ui-pages/toolbars/toolbars-routing.module.ts");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");







var ToolbarsModule = /** @class */ (function () {
    function ToolbarsModule() {
    }
    ToolbarsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxCardsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxMenusModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxListsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_6__["NtxToolbarModule"],
                _toolbars_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarsRoutingModule"]
            ],
            declarations: [
                _examples_toolbar_examples_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarsExamplesComponent"],
                _documentation_toolbars_doc_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarsDocComponent"]
            ]
        })
    ], ToolbarsModule);
    return ToolbarsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-toolbars-toolbars-module.js.map