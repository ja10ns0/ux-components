(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-chips-chips-module"],{

/***/ "./src/app/ui-pages/chips/chips-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/chips/chips-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChipsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsRoutingModule", function() { return ChipsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/chips/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/chips/documentation/documentation.component.ts");





var routes = [
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponent"]
    },
    {
        path: 'documentation',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
var ChipsRoutingModule = /** @class */ (function () {
    function ChipsRoutingModule() {
    }
    ChipsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChipsRoutingModule);
    return ChipsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/chips.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/chips/chips.module.ts ***!
  \************************************************/
/*! exports provided: ChipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsModule", function() { return ChipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _chips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chips-routing.module */ "./src/app/ui-pages/chips/chips-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/chips/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/chips/examples/examples.component.ts");








var ChipsModule = /** @class */ (function () {
    function ChipsModule() {
    }
    ChipsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxChipsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _chips_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChipsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"]
            ]
        })
    ], ChipsModule);
    return ChipsModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chips</h1>\r\n    <p class=\"documentation-text\">\r\n      ntx-chip is a component for building lists of strings or objects. The list items are displayed as 'chips'.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chips types</h1>\r\n    <p class=\"documentation-text\">\r\n      There are four types of nxt-chips: use <span class=\"documentation-code\">ntx-image-chip</span> if you need chip with images, use <span class=\"documentation-code\">ntx-category-chip</span> if you need to specify the category of the content, use <span class=\"documentation-code\">ntx-basic-chip</span> for basic chips, and use <span class=\"documentation-code\">ntx-filter-chip</span> for chips that are used like radiobutton an only one of them can be selected.\r\n    </p>\r\n\r\n    <h1 class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</h1>\r\n    <p class=\"documentation-text\">\r\n      Color and disabled attributes can be configured in each type of chip, just by adding the atribute <span class=\"documentation-code\">[color]</span> or <span class=\"documentation-code\">[disabled]</span> in the html tag. In .ts file we have added these variables as strings so they can be configured.\r\n    </p>\r\n\r\n    <p class=\"documentation-text\">\r\n      In .ts file of each component, we have added an array to repeat x times the items and have a better perception of it's final look&feel. Feel free of configure this file as you wish.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with image v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-chip/image-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with image and subtitle v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/image-subtitle-chip/image-subtitle-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Basic chip v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/basic-chip/basic-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with categories v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/category-chip/category-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Chip with filters v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Minor css changes.</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-chips/filter-chip/filter-chip.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NoaXBzL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/chips/documentation/documentation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/chips/documentation/documentation.component.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/chips/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/chips/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n    <ntx-card-simple title=\"{{'Chip with image' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-image-chip>' }}\">\r\n      <ntx-image-chip [color]=\"'primary'\"></ntx-image-chip>\r\n      <ntx-image-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-image-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with image and subtitle' | uppercase }}\"\r\n          subtitle=\"{{ '<ntx-image-subtitle-chip>' }}\">\r\n      <ntx-image-subtitle-chip [color]=\"'primary'\"></ntx-image-subtitle-chip>\r\n      <ntx-image-subtitle-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-image-subtitle-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Basic chip' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-basic-chip>' }}\">\r\n      <ntx-basic-chip [color]=\"'primary'\"></ntx-basic-chip>\r\n      <ntx-basic-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-basic-chip>\r\n      <ntx-basic-chip [color]=\"'accent'\"></ntx-basic-chip>\r\n      <ntx-basic-chip [color]=\"'accent'\"  [disabled]=\"'true'\"></ntx-basic-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with categories' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-category-chip>' }}\">\r\n      <ntx-category-chip [color]=\"'primary'\"></ntx-category-chip>\r\n      <ntx-category-chip [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-category-chip>\r\n      <ntx-category-chip [color]=\"'accent'\"></ntx-category-chip>\r\n      <ntx-category-chip [color]=\"'accent'\"  [disabled]=\"'true'\"></ntx-category-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Chip with filters' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-filter-chip>' }}\">\r\n      <ntx-filter-chip></ntx-filter-chip>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Autocomplete chip' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-autocomplete-chip>' }}\">\r\n      <ntx-autocomplete-chip [color]=\"'primary'\"></ntx-autocomplete-chip>\r\n    </ntx-card-simple>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2NoaXBzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui-pages/chips/examples/examples.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-pages/chips/examples/examples.component.ts ***!
  \***************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/chips/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/chips/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-chips-chips-module.js.map