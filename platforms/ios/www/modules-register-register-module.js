(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-register-register-module"],{

/***/ "./src/app/modules/register/pages/register/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/pages/register/index.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ "./src/app/modules/register/pages/register/register.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return _register_page__WEBPACK_IMPORTED_MODULE_0__["RegisterPage"]; });




/***/ }),

/***/ "./src/app/modules/register/pages/register/register.page.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/register/pages/register/register.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"registerationForm\">\n        <div formGroupName=\"facility\">\n            <ion-list>\n                <ion-item>\n                  <ion-label position=\"floating\"> name</ion-label>\n                  <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n                </ion-item>\n          \n                <ion-item>\n                    <ion-label position=\"floating\"> streetNumber</ion-label>\n                    <ion-input type=\"number\" formControlName=\"streetNumber\"></ion-input>\n                  </ion-item>\n    \n                  <ion-item>\n                      <ion-label position=\"floating\"> streetName</ion-label>\n                      <ion-input type=\"text\" formControlName=\"streetName\"></ion-input>\n                    </ion-item>\n    \n                    <ion-item>\n                        <ion-label position=\"floating\"> stateProvince</ion-label>\n                        <ion-input type=\"text\" formControlName=\"stateProvince\"></ion-input>\n                      </ion-item>\n    \n                      <ion-item>\n                          <ion-label position=\"floating\"> country</ion-label>\n                          <ion-input type=\"text\" formControlName=\"country\"></ion-input>\n                        </ion-item>\n    \n    \n                      <ion-item>\n                          <ion-label position=\"floating\"> phone</ion-label>\n                          <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n                        </ion-item>\n    \n                        <ion-item>\n                            <ion-label position=\"floating\"> email</ion-label>\n                            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                          </ion-item>\n    \n\n            </ion-list>\n        </div>\n\n        <div formGroupName=\"user\">\n            <ion-list>\n\n                <ion-item>\n                    <ion-label position=\"floating\">First Name </ion-label>\n                    <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label position=\"floating\">Last Name </ion-label>\n                      <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label position=\"floating\">Email </ion-label>\n                        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n                      </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Password </ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\"> Phone</ion-label>\n                  <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n                </ion-item>\n          \n                <ion-item>\n                    <ion-label position=\"floating\"> Country</ion-label>\n                    <ion-input type=\"text\" formControlName=\"country\"></ion-input>\n                  </ion-item>\n    \n                  <ion-item>\n                      <ion-label position=\"floating\"> StateProvince</ion-label>\n                      <ion-input type=\"text\" formControlName=\"stateProvince\"></ion-input>\n                    </ion-item>\n    \n                    <ion-item>\n                        <ion-label position=\"floating\"> City</ion-label>\n                        <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n                      </ion-item>\n    \n                      <ion-item>\n                          <ion-label position=\"floating\"> StreetName</ion-label>\n                          <ion-input type=\"text\" formControlName=\"streetName\"></ion-input>\n                        </ion-item>\n    \n    \n                      <ion-item>\n                          <ion-label position=\"floating\"> StreetNumber</ion-label>\n                          <ion-input type=\"text\" formControlName=\"streetNumber\"></ion-input>\n                        </ion-item>\n    \n                        <ion-item>\n                            <ion-label position=\"floating\"> PostalCode</ion-label>\n                            <ion-input type=\"text\" formControlName=\"postalCode\"></ion-input>\n                          </ion-item>\n            </ion-list>\n        </div>\n\n    </form>\n  \n  \n      <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"register()\">Register</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/register/pages/register/register.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/register/pages/register/register.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0ZXIvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/register/pages/register/register.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/register/pages/register/register.page.ts ***!
  \******************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/services/configuration.service */ "./src/app/core/services/configuration.service.ts");
/* harmony import */ var _shared_dtos_register_facility_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dtos/register-facility.dto */ "./src/app/shared/dtos/register-facility.dto.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(configurationService, authenticationService, fb) {
        this.configurationService = configurationService;
        this.authenticationService = authenticationService;
        this.fb = fb;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerationForm = this.fb.group({
            // register facility 
            facility: this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                streetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                stateProvince: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
            }),
            // register user 
            user: this.fb.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                stateProvince: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                streetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            })
        });
    };
    RegisterPage.prototype.register = function () {
        if (this.registerationForm.valid) {
            var registrationDto = new _shared_dtos_register_facility_dto__WEBPACK_IMPORTED_MODULE_5__["RegisterFacilityDto"](this.registerationForm.value);
            this.authenticationService.registerFacility(registrationDto).subscribe();
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/modules/register/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/modules/register/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/modules/register/register.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/register/register.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register */ "./src/app/modules/register/pages/register/index.ts");







var routes = [
    {
        path: '',
        component: _pages_register__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pages_register__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/shared/dtos/register-facility.dto.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/dtos/register-facility.dto.ts ***!
  \******************************************************/
/*! exports provided: RegisterFacilityDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFacilityDto", function() { return RegisterFacilityDto; });
var RegisterFacilityDto = /** @class */ (function () {
    function RegisterFacilityDto(init) {
        Object.assign(this, init);
    }
    return RegisterFacilityDto;
}());



/***/ })

}]);
//# sourceMappingURL=modules-register-register-module.js.map