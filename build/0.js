webpackJsonp([0],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = (function () {
    function ProductPageModule() {
    }
    return ProductPageModule;
}());
ProductPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
        ],
    })
], ProductPageModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPage = (function () {
    function ProductPage(navCtrl, navParams, productProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        this.tagId = this.navParams.get('id');
        this.getProduct(this.tagId);
    };
    ProductPage.prototype.getProduct = function (id) {
        //this.product = this.productProvider.getProductById(id);
    };
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        segment: 'product/:id'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"C:\Ionic\ionic2\lew2\src\pages\product\product.html"*/'<ion-content class="card-background-page">\n  <ion-card class="home-card">\n    <ion-slides pager>\n\n      <ion-slide>\n        <div class="card-title">Gold Earing Pair</div>\n        <!--<div class="card-subtitle">{{(product | async)?.product.name}}</div>-->\n        <div class="card-subtitle">CMR Jwellers Tribal Pattern Earings .. LIMITED EDITION</div>\n        <img class="home-card-image" src="../assets/img/jwel1.jpg" />\n      </ion-slide>\n      <ion-slide>\n        <img class="home-card-image" src="../assets/img/jwel2.jpg" />\n      </ion-slide>\n\n      <ion-slide>\n        <img class="home-card-image" src="../assets/img/jwel4.jpg" />\n      </ion-slide>\n\n    </ion-slides>\n    <!--<img class="home-card-image" src="../assets/img/shoe.png" />-->\n\n    <div class="card-title">{{(product | async)?.company}}</div>\n    <!--<div class="card-title">REEBOK</div>-->\n    <!--<div class="card-subtitle">{{(product | async)?.product.name}}</div>-->\n    <img class="original-icon" src="../assets/img/original.png" />\n  </ion-card>\n  <div class="product-description" text-center>\n    <h2 style="color: #9fa8a3;">\n      <!--<i>{{(product | async)?.product.description.title}}</i>-->\n      <!--<i>Show Your Dark Style</i>-->\n      <i>Elegance is your new style..</i>\n\n    </h2>\n    <!--<p>\n      {{(product | async)?.product.description.content}}\n    </p>-->\n    <p style="color: #9fa8a3;">This pair of 18KT yellow gold drop earrings features thirty-four round brilliant cut diamonds of SI2 clarity and G-H\n      colour range. Each earring displays a triangular base stud, displaying diamonds, secured in rhodium-plated shared prong\n      settings. A rolo chain dangler, S-like element at its tip. Adorned with diamonds, secured in shared prong settings,\n      the S-patterns on these earrings are designed differently. These earrings are safe and comfortable to wear as they\n      are fitted with screw posts and Bombay screw closures. They are a perfect complement to your elegant ethnic and Westerns\n      attire..\n    </p>\n  </div>\n  <div text-center style="color: #fff">\n    <!--<h5 *ngFor="let info of (product | async)?.buildInformation">\n      {{info.name}}:\n      <small class="text-muted"> {{info.value}}</small>\n    </h5>-->\n    <h5>\n      GW in Gms:\n      <small class="text-muted"> 3.630</small>\n    </h5>\n    <h5>\n      Net weight:\n      <small class="text-muted"> 3.300</small>\n    </h5>\n    <h5>\n      Gold Rate:\n      <small class="text-muted"> 22k</small>\n    </h5>\n    <h5>\n      Gold Value:\n      <small class="text-muted"> 9259.00</small>\n    </h5>\n    <h5>\n      Setting charges:\n      <small class="text-muted"> 2805.00</small>\n    </h5>\n    <h5>\n      Wastage:\n      <small class="text-muted"> 0.00</small>\n    </h5>\n    <h5>\n      Stone charges:\n      <small class="text-muted"> 2270.00</small>\n    </h5>\n  </div>\n  <ion-card style="background: #c5d5cb; color:#9fa8a3">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>Stone</ion-col>\n        <ion-col col-3>Carat</ion-col>\n        <ion-col col-3>No.</ion-col>\n        <ion-col col-3>Value</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>PRBY</ion-col>\n        <ion-col col-3>1.600</ion-col>\n        <ion-col col-3>1</ion-col>\n        <ion-col col-3>2,240.00/-</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card>\n    <!--<ion-list>\n      <ion-item class="user-market-list">\n        <ion-icon name="thumbs-up" class="user-market" item-start></ion-icon>\n        Followers\n        <ion-badge item-end>{{(product | async)?.product.description.followers}}</ion-badge>\n      </ion-item>\n      <ion-item class="user-market-list">\n        <ion-icon name="people" class="user-market" item-start></ion-icon>\n        Review\n        <ion-badge item-end>{{(product | async)?.product.description.review}}</ion-badge>\n      </ion-item>\n    </ion-list>-->\n    <ion-list>\n      <ion-item class="user-market-list">\n        <ion-icon name="thumbs-up" class="user-market" item-start></ion-icon>\n        Followers\n        <ion-badge item-end>2k</ion-badge>\n      </ion-item>\n      <ion-item class="user-market-list">\n        <ion-icon name="people" class="user-market" item-start></ion-icon>\n        Review\n        <ion-badge item-end>15k</ion-badge>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <div>\n    <button ion-button full>Get 10% eCash</button>\n  </div>\n  <ion-fab right bottom>\n    <button ion-fab color="primary"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Ionic\ionic2\lew2\src\pages\product\product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=0.js.map