(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DASHBOARDAPPS, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARDAPPS", function() { return DASHBOARDAPPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DASHBOARDAPPS = [
    {
        name: 'Administrator',
        link: '',
        icon: 'assets/images/app-administrator.png'
    },
    {
        name: 'Anders Pink Reports',
        link: '',
        icon: 'assets/images/app-anders.png'
    },
    {
        name: 'Catalogue',
        link: '',
        icon: 'assets/images/app-catalogue.png'
    },
    {
        name: 'Your community',
        link: '',
        icon: 'assets/images/app-community.png'
    },
    {
        name: 'Library (Student)',
        link: '',
        icon: 'assets/images/app-library-student.png'
    },
    {
        name: 'Notifications',
        link: '',
        icon: 'assets/images/app-notifications.png'
    },
    {
        name: 'OpenSesame',
        link: '',
        icon: 'assets/images/app-opensesame.png'
    },
    {
        name: 'Learning Play',
        link: '',
        icon: 'assets/images/app-play.png'
    },
    {
        name: 'Record',
        link: '',
        icon: 'assets/images/app-record.png'
    },
    {
        name: 'Reports',
        link: '',
        icon: 'assets/images/app-reports.png'
    }
];
var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getDashboardApps = function () {
        return DASHBOARDAPPS;
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map