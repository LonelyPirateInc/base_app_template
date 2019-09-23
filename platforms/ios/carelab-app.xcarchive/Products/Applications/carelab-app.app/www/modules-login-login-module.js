(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login */ "./src/app/modules/login/pages/login/index.ts");







var routes = [
    {
        path: '',
        component: _pages_login__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pages_login__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/modules/login/pages/login/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/login/pages/login/index.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ "./src/app/modules/login/pages/login/login.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return _login_page__WEBPACK_IMPORTED_MODULE_0__["LoginPage"]; });




/***/ }),

/***/ "./src/app/modules/login/pages/login/login.page.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginForm\">\n      <ion-list>\n          <ion-item>\n            <ion-label position=\"floating\"> Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"floating\">Password </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n      </ion-list>\n  </form>\n\n\n    <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">  Login</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/login/pages/login/login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/login/pages/login/login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.page.ts ***!
  \*********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dtos_login_user_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/dtos/login-user.dto */ "./src/app/shared/dtos/login-user.dto.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/configuration.service */ "./src/app/core/services/configuration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(configurationService, authenticationService, fb) {
        this.configurationService = configurationService;
        this.authenticationService = authenticationService;
        this.fb = fb;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    };
    LoginPage.prototype.login = function () {
        if (this.loginForm.valid) {
            var loginDto = new _shared_dtos_login_user_dto__WEBPACK_IMPORTED_MODULE_1__["LoginUserDto"](this.loginForm.value);
            this.authenticationService.login(loginDto)
                .subscribe();
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/modules/login/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/modules/login/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/shared/dtos/login-user.dto.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/dtos/login-user.dto.ts ***!
  \***********************************************/
/*! exports provided: LoginUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserDto", function() { return LoginUserDto; });
var LoginUserDto = /** @class */ (function () {
    function LoginUserDto(init) {
        Object.assign(this, init);
    }
    return LoginUserDto;
}());



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.js.map