(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-pages-forms-forms-module"],{

/***/ "./src/app/ui-pages/forms/documentation/documentation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/forms/documentation/documentation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container documentation\">\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Forms</p>\r\n    <p class=\"documentation-text\">\r\n      All of the attributes that can be used in a form will be part of ntx-form.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Forms types</p>\r\n    <p class=\"documentation-text\">\r\n      These are all the types of nxt-list: <span class=\"documentation-code\">ntx-form-input</span>, <span class=\"documentation-code\">ntx-form-input-no-label</span>, <span class=\"documentation-code\">ntx-form-textarea</span>, <span class=\"documentation-code\">ntx-form-select</span>, <span class=\"documentation-code\">ntx-form-select-no-border</span>, <span class=\"documentation-code\">ntx-form-select-button</span>, <span class=\"documentation-code\">ntx-form-select-border-button</span>, <span class=\"documentation-code\">ntx-form-select-thin</span>, <span class=\"documentation-code\">ntx-form-datepicker</span>, <span class=\"documentation-code\">ntx-form-checkbox</span>, <span class=\"documentation-code\">ntx-form-checkbox-circle</span>, <span class=\"documentation-code\">ntx-form-radiobutton</span>, <span class=\"documentation-code\">ntx-form-slidetoggle</span>, <span class=\"documentation-code\">ntx-form-slider</span>, <span class=\"documentation-code\">ntx-form-searchbox</span> y <span class=\"documentation-code\">ntx-form-searchbox-background</span>.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Configuration</p>\r\n    <p class=\"documentation-text\">\r\n      The configuration of each ntx-form is being shown in its own .ts file.\r\n    </p>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Searchbox v4.1.0</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Bind <span class=\"documentation-code\">click</span> event to the element's <span class=\"documentation-code\">active</span> property.</li>\r\n      <li>Delegate component width to parent container, avoiding defining it in scss file component.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-forms/form-searchbox/form-searchbox.component.html\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">\r\n              <code> {{ code8 }} </code>\r\n            </pre>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                ux-components/src/lib/ntx-forms/form-searchbox/form-searchbox.component.ts\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <pre class=\"documentation-pre\">\r\n              <code> {{code9 }} </code>\r\n            </pre>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  ux-components/src/lib/ntx-forms/form-searchbox/form-searchbox.component.scss\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <pre class=\"documentation-pre\">\r\n                <code> {{code10 }} </code>\r\n              </pre>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Checkbox v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Bind the expression <span class=\"documentation-code\">color</span> to the input element's <span class=\"documentation-code\">color</span> property.</li>\r\n      <li>Define an <span class=\"documentation-code\">output(@Output)</span> element's <span class=\"documentation-code\">checkboxChange</span> property.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-checkbox/form-checkbox.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code1 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-checkbox/form-checkbox.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{code2 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Checkbox circle v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Bind the expression <span class=\"documentation-code\">color</span> to the input element's <span class=\"documentation-code\">color</span> property.</li>\r\n      <li>Define an <span class=\"documentation-code\">output(@Output)</span> element's <span class=\"documentation-code\">checkboxChange</span> property.</li>\r\n      <li>Bind the implicit event <span class=\"documentation-code\">change</span> to element's <span class=\"documentation-code\">onChangeCheckbox</span> method.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-checkbox-circle/form-checkbox-circle.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code3 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-checkbox-circle/form-checkbox-circle.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{code4 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Form select border button v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Fix <span class=\"documentation-code\">.cdk-overlay-pane</span> selector anidation to avoid overlaying styles of select panel</li>\r\n    </ul>\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-select-border-button/form-select-border-button.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code5 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <p class=\"utils--text-32 utils--margin-top-60 utils--margin-bottom-0\">Form select thin v4.0.1</p>\r\n    <ul class=\"documentation-text\">\r\n      <li>Use structural directive <span class=\"documentation-code\">*ngFor</span> to avoid hardcoding list options in html file.</li>\r\n      <li>Use <span class=\"documentation-code\">ngClass</span> directive to bind class name to component's <span class=\"documentation-code\">selected</span> property.</li>\r\n      <li>Use <span class=\"documentation-code\">panelClass</span> property to avoid overlaying styles of select panel.</li>\r\n    </ul>\r\n\r\n    <div class=\"documentation-wrapper-pre\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-select-thin/form-select-thin.component.html\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code6 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-select-thin/form-select-thin.component.ts\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">\r\n            <code> {{ code7 }} </code>\r\n          </pre>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              ux-components/src/lib/ntx-forms/form-select-thin/form-select-thin.component.scss\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <pre class=\"documentation-pre\">/* No code summary available. Get entire code from repository*/</pre>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pages/forms/documentation/documentation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/ui-pages/forms/documentation/documentation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLXBhZ2VzL2Zvcm1zL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui-pages/forms/documentation/documentation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-pages/forms/documentation/documentation.component.ts ***!
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
        this.code1 = "\n  <mat-checkbox\n      class=\"checkbox-circle\"\n      [color]=\"color\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"onChangeCheckbox($event)\">\n    <span [hidden]=\"hidden\">I'm a circle checkbox</span>\n  </mat-checkbox>";
        this.code2 = "\n  @Component({ ... })\n  export class FormCheckboxCircleComponent implements OnInit {\n    ...\n    @Input() color: string;\n    ...\n    @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();\n    ...\n    onChangeCheckbox(event: MatCheckboxChange) {\n      this.checkboxChange.emit(event);\n    }\n  }";
        this.code3 = "\n  <mat-checkbox\n      [color]=\"color\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\">\n    <span [hidden]=\"hidden\">I'm a circle checkbox</span>\n  </mat-checkbox>";
        this.code4 = "\n  @Component({ ... })\n  export class FormCheckboxComponent implements OnInit {\n    ...\n    @Input() color: string;\n    ...\n    @Output() checkboxChange = new EventEmitter<MatCheckboxChange>();\n    ...\n    onChangeCheckbox(event: MatCheckboxChange) {\n      this.checkboxChange.emit(event);\n    }\n  }";
        this.code5 = "\n  $block: \"form-container\";\n  .#{$block}{\n    ...\n    .#{$block}__form{\n      .cdk-overlay-pane{\n        ...\n      }\n    }\n    ...\n  }";
        this.code6 = "\n  <mat-form-field class=\"form-select-thin\"\n                [ngClass]=\"{'selected': selected.value}\">\n    <mat-select [formControl]=\"selected\"\n                (selectionChange)=\"onSelectChange($event)\">\n      <mat-option class=\"form-select-thin__option\" \n                  [value]=\"firstOption.value\">\n        <mat-radio-button class=\"form-select-thin__option--radio-button\" \n                          color=\"primary\">\n          {{ firstOption.label }}\n        </mat-radio-button>\n      </mat-option>\n      <mat-divider></mat-divider> \n      <mat-option class=\"form-select-thin__option\" \n                  *ngFor=\"let option of options | slice:1\" \n                  [value]=\"option.value\">\n        <mat-radio-button class=\"form-select-thin__option--radio-button\" \n                          color=\"primary\">\n          {{ option.label }}\n        </mat-radio-button>\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  ";
        this.code7 = "\n  export interface Option {\n    value: number;\n    label: string;\n  }\n  @Component({ ... })\n  export class FormSelectThinComponent implements OnInit {\n    ...\n    options: Option[] = [\n      {label: 'No level assigned', value: 0},\n      {label: 'Does not apply', value: 1},\n      {label: 'Bad', value: 2},\n      {label: 'Good', value: 3},\n      {label: 'Excellent', value: 4},\n    ];\n    firstOption: Option = this.options[0];\n    selected = new FormControl(this.firstOption.value);\n    ...\n    }";
        this.code8 = "\n  <mat-form-field class=\"form-searchbox\"\n                  floatLabel=\"never\"\n                  [ngClass]=\"{'active': active }\">\n    <button mat-icon-button\n            (click)=\"active = true\">\n      <mat-icon matPrefix\n                class=\"icon-netex icon-search\"></mat-icon>\n    </button>\n    <input matInput [(ngModel)]=\"searchTerm\">\n    <button mat-icon-button\n            *ngIf=\"searchTerm\"\n            (click) = \"active = false; searchTerm = ''\">\n      <mat-icon matSuffix\n                class=\"icon-netex icon-cross\"></mat-icon>\n    </button>\n  </mat-form-field>";
        this.code9 = "\n\n  @Component({ ... })\n  export class FormSearchboxComponent implements OnInit {\n\n    searchTerm: string;\n    active: boolean;\n\n    constructor() { }\n\n    ngOnInit() { }\n\n  }";
        this.code10 = "\n  @import \"././projects/netex/ux-components/src/styles/app/utils\";\n\n  $block: \"form-searchbox\";\n\n  .#{$block}.mat-form-field {\n    width: 48px;\n    .mat-form-field-underline{\n      visibility: hidden;\n    }\n    .mat-form-field-infix {\n      display: flex;\n      padding-bottom: 0;\n      .mat-input-element {\n        visibility: hidden;\n      }\n      .mat-icon-button:hover {\n        background: $icon-button-hover;\n      }\n    }\n    &.active.mat-form-field {\n      width: 100%;\n      .mat-form-field-infix {\n        visibility: visible;\n        .mat-input-element {\n          visibility: visible;\n        }\n        .mat-icon-button:first-of-type:hover {\n          background: none;\n        }\n      }\n      .mat-form-field-underline{\n        visibility: visible;\n        height: 0;\n        -webkit-transition: height .6s;\n        transition: height .6s;\n      }\n    }\n  }";
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/ui-pages/forms/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/ui-pages/forms/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/forms/examples/examples.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/forms/examples/examples.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\r\n  <div class=\"page-container\">\r\n\r\n    <ntx-card-simple title=\"{{'Input form' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-input>' }}\">\r\n      <ntx-form-input></ntx-form-input>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Input form autocomplete' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-input-autocomplete>' }}\">\r\n      <ntx-form-input-autocomplete></ntx-form-input-autocomplete>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Input form without label' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-input-no-label>' }}\">\r\n      <ntx-form-input-no-label></ntx-form-input-no-label>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Input form' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-input>' }}\">\r\n      <ntx-form-input-autocomplete></ntx-form-input-autocomplete>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Textarea' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-textarea>' }}\">\r\n      <ntx-form-textarea></ntx-form-textarea>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Select' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-select>' }}\">\r\n      <ntx-form-select></ntx-form-select>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Select without border' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-select-no-border>' }}\">\r\n      <ntx-form-select-no-border></ntx-form-select-no-border>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Select button' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-select-button>' }}\">\r\n      <ntx-form-select-button></ntx-form-select-button>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Select border button' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-select-border-button>' }}\"\r\n                      class=\"white-content\">\r\n      <ntx-form-select-border-button></ntx-form-select-border-button>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Select border thin' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-select-thin>' }}\">\r\n      <ntx-form-select-thin></ntx-form-select-thin>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Datepicker' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-datepicker>' }}\">\r\n      <ntx-form-datepicker></ntx-form-datepicker>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Checkbox' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-checkbox>' }}\">\r\n      <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"'true'\"></ntx-form-checkbox>\r\n      <ntx-form-checkbox [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-form-checkbox>\r\n      <ntx-form-checkbox [color]=\"'primary'\" [checked]=\"'true'\" [hidden]=\"'true'\"></ntx-form-checkbox>\r\n      <ntx-form-checkbox [color]=\"'primary'\" [disabled]=\"'true'\" [hidden]=\"'true'\"></ntx-form-checkbox>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Checkbox redondo' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-checkbox-circle>' }}\">\r\n      <ntx-form-checkbox-circle [color]=\"'primary'\" [checked]=\"'true'\"></ntx-form-checkbox-circle>\r\n      <ntx-form-checkbox-circle [color]=\"'primary'\" [disabled]=\"'true'\"></ntx-form-checkbox-circle>\r\n      <ntx-form-checkbox-circle [color]=\"'primary'\" [checked]=\"'true'\" [hidden]=\"'true'\"></ntx-form-checkbox-circle>\r\n      <ntx-form-checkbox-circle [color]=\"'primary'\" [disabled]=\"'true'\" [hidden]=\"'true'\"></ntx-form-checkbox-circle>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Radio button' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-radiobutton>' }}\">\r\n      <ntx-form-radiobutton [color]=\"'primary'\"></ntx-form-radiobutton>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Slide toggle' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-slidetoggle>' }}\">\r\n      <ntx-form-slidetoggle [color]=\"'primary'\"></ntx-form-slidetoggle>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Slider' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-slider>' }}\">\r\n      <ntx-form-slider></ntx-form-slider>\r\n      <ntx-form-slider [disabled]=\"'true'\"></ntx-form-slider>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Searchbox' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-searchbox>' }}\">\r\n      <div class=\"ntxformsearchbox-container\">\r\n        <ntx-form-searchbox></ntx-form-searchbox>\r\n      </div>\r\n    </ntx-card-simple>\r\n\r\n    <ntx-card-simple title=\"{{'Searchbox with background' | uppercase }}\"\r\n                      subtitle=\"{{ '<ntx-form-searchbox-background>' }}\">\r\n      <ntx-form-searchbox-background></ntx-form-searchbox-background>\r\n    </ntx-card-simple>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pages/forms/examples/examples.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-pages/forms/examples/examples.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ntxformsearchbox-container {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktcGFnZXMvZm9ybXMvZXhhbXBsZXMvQzpcXHByb3llY3Rvc1xcdXgtY29tcG9uZW50cy1wcnVlYmEvc3JjXFxhcHBcXHVpLXBhZ2VzXFxmb3Jtc1xcZXhhbXBsZXNcXGV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdWktcGFnZXMvZm9ybXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnR4Zm9ybXNlYXJjaGJveC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui-pages/forms/examples/examples.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-pages/forms/examples/examples.component.ts ***!
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
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/ui-pages/forms/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/ui-pages/forms/examples/examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/ui-pages/forms/forms-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-pages/forms/forms-routing.module.ts ***!
  \********************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/forms/examples/examples.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/forms/documentation/documentation.component.ts");





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
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui-pages/forms/forms.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui-pages/forms/forms.module.ts ***!
  \************************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @netex/ux-components */ "./dist/netex/ux-components/fesm5/netex-ux-components.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/ui-pages/forms/forms-routing.module.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/ui-pages/forms/documentation/documentation.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/ui-pages/forms/examples/examples.component.ts");








var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxFormsModule"],
                _netex_ux_components__WEBPACK_IMPORTED_MODULE_4__["NtxCardsModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsRoutingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: [
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"]
            ]
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-pages-forms-forms-module.js.map