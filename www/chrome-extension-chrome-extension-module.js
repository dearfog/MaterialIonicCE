(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chrome-extension-chrome-extension-module"],{

/***/ "./src/app/chrome-extension/chrome-extension-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/chrome-extension/chrome-extension-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChromeExtensionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeExtensionRoutingModule", function() { return ChromeExtensionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/chrome-extension/shared/layout/layout.component.ts");
/* harmony import */ var _components_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extraction/extraction.component */ "./src/app/chrome-extension/components/extraction/extraction.component.ts");
/* harmony import */ var _components_download_downloading_downloading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/download/downloading/downloading.component */ "./src/app/chrome-extension/components/download/downloading/downloading.component.ts");
/* harmony import */ var _components_download_downloaded_downloaded_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/download/downloaded/downloaded.component */ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: 'extraction', component: _components_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_3__["ExtractionComponent"] },
            { path: 'downloading', component: _components_download_downloading_downloading_component__WEBPACK_IMPORTED_MODULE_4__["DownloadingComponent"] },
            { path: 'downloaded', component: _components_download_downloaded_downloaded_component__WEBPACK_IMPORTED_MODULE_5__["DownloadedComponent"] },
            { path: '**', redirectTo: "extraction" },
            { path: '', pathMatch: 'full', redirectTo: 'extraction' }
        ]
    }
];
var ChromeExtensionRoutingModule = /** @class */ (function () {
    function ChromeExtensionRoutingModule() {
    }
    ChromeExtensionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChromeExtensionRoutingModule);
    return ChromeExtensionRoutingModule;
}());



/***/ }),

/***/ "./src/app/chrome-extension/chrome-extension.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/chrome-extension/chrome-extension.module.ts ***!
  \*************************************************************/
/*! exports provided: ChromeExtensionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeExtensionModule", function() { return ChromeExtensionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chrome_extension_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chrome-extension-routing.module */ "./src/app/chrome-extension/chrome-extension-routing.module.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/chrome-extension/shared/layout/layout.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/extraction/extraction.component */ "./src/app/chrome-extension/components/extraction/extraction.component.ts");
/* harmony import */ var _components_download_downloading_downloading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/download/downloading/downloading.component */ "./src/app/chrome-extension/components/download/downloading/downloading.component.ts");
/* harmony import */ var _components_download_downloaded_downloaded_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/download/downloaded/downloaded.component */ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChromeExtensionModule = /** @class */ (function () {
    function ChromeExtensionModule() {
    }
    ChromeExtensionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _components_extraction_extraction_component__WEBPACK_IMPORTED_MODULE_6__["ExtractionComponent"], _components_download_downloading_downloading_component__WEBPACK_IMPORTED_MODULE_7__["DownloadingComponent"], _components_download_downloaded_downloaded_component__WEBPACK_IMPORTED_MODULE_8__["DownloadedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chrome_extension_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChromeExtensionRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]
            ]
        })
    ], ChromeExtensionModule);
    return ChromeExtensionModule;
}());



/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloaded/downloaded.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  downloaded works!\n</p>\n"

/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloaded/downloaded.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nocm9tZS1leHRlbnNpb24vY29tcG9uZW50cy9kb3dubG9hZC9kb3dubG9hZGVkL2Rvd25sb2FkZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloaded/downloaded.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DownloadedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadedComponent", function() { return DownloadedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadedComponent = /** @class */ (function () {
    function DownloadedComponent() {
    }
    DownloadedComponent.prototype.ngOnInit = function () {
    };
    DownloadedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloaded',
            template: __webpack_require__(/*! ./downloaded.component.html */ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.html"),
            styles: [__webpack_require__(/*! ./downloaded.component.scss */ "./src/app/chrome-extension/components/download/downloaded/downloaded.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadedComponent);
    return DownloadedComponent;
}());



/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloading/downloading.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloading/downloading.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  downloading works!\n</p>\n"

/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloading/downloading.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloading/downloading.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nocm9tZS1leHRlbnNpb24vY29tcG9uZW50cy9kb3dubG9hZC9kb3dubG9hZGluZy9kb3dubG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chrome-extension/components/download/downloading/downloading.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/chrome-extension/components/download/downloading/downloading.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DownloadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadingComponent", function() { return DownloadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadingComponent = /** @class */ (function () {
    function DownloadingComponent() {
    }
    DownloadingComponent.prototype.ngOnInit = function () {
    };
    DownloadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloading',
            template: __webpack_require__(/*! ./downloading.component.html */ "./src/app/chrome-extension/components/download/downloading/downloading.component.html"),
            styles: [__webpack_require__(/*! ./downloading.component.scss */ "./src/app/chrome-extension/components/download/downloading/downloading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadingComponent);
    return DownloadingComponent;
}());



/***/ }),

/***/ "./src/app/chrome-extension/components/extraction/extraction.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/chrome-extension/components/extraction/extraction.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n    <h3 mat-subheader>Folders</h3>\n    <mat-list-item *ngFor=\"let link of links; let i = index\">\n        <mat-icon mat-list-icon>folder</mat-icon>\n        <h4 mat-line>{{i}}</h4>\n        <p mat-line> {{link}} </p>\n        <mat-divider></mat-divider>    \n        <button mat-fab (click)=\"download(i)\"><mat-icon>arrow_downward</mat-icon></button>\n    </mat-list-item>\n</mat-list>"

/***/ }),

/***/ "./src/app/chrome-extension/components/extraction/extraction.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/chrome-extension/components/extraction/extraction.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nocm9tZS1leHRlbnNpb24vY29tcG9uZW50cy9leHRyYWN0aW9uL2V4dHJhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chrome-extension/components/extraction/extraction.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/chrome-extension/components/extraction/extraction.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExtractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractionComponent", function() { return ExtractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtractionComponent = /** @class */ (function () {
    function ExtractionComponent() {
        this.links = [];
    }
    ExtractionComponent.prototype.ngOnInit = function () {
        this.getCurrentTabPage();
    };
    ExtractionComponent.prototype.getCurrentTabPage = function () {
        var that = this;
        chrome.tabs.executeScript({
            file: 'assets/js/background.js'
        }, function (doc) {
            console.log(doc);
            that.links = doc[0];
        });
    };
    ExtractionComponent.prototype.download = function (index) {
        chrome.downloads.download({
            url: this.links[index],
        });
    };
    ExtractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extraction',
            template: __webpack_require__(/*! ./extraction.component.html */ "./src/app/chrome-extension/components/extraction/extraction.component.html"),
            styles: [__webpack_require__(/*! ./extraction.component.scss */ "./src/app/chrome-extension/components/extraction/extraction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtractionComponent);
    return ExtractionComponent;
}());



/***/ }),

/***/ "./src/app/chrome-extension/shared/layout/layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chrome-extension/shared/layout/layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/extraction']\" routerLinkActive=\"active\"  >Link 1</a>\n      <a mat-list-item [routerLink]=\"['/downloading']\" routerLinkActive=\"active\"  >Link 2</a>\n      <a mat-list-item [routerLink]=\"['/downloaded']\" routerLinkActive=\"active\"  >Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>app</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>    \n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/chrome-extension/shared/layout/layout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chrome-extension/shared/layout/layout.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hc2lydWRkaW4vRGVza3RvcC9EZWMtMTgvbXVzaWNTZW5zZS9zcmMvYXBwL2Nocm9tZS1leHRlbnNpb24vc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBZ0I7RUFBaEIsaUJBQWdCO0VBQ2hCLE9BQU07RUFDTixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9jaHJvbWUtZXh0ZW5zaW9uL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chrome-extension/shared/layout/layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chrome-extension/shared/layout/layout.component.ts ***!
  \********************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/chrome-extension/shared/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/chrome-extension/shared/layout/layout.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chrome-extension-chrome-extension-module.js.map