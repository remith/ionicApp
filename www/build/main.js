webpackJsonp([0],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductdetailsPage = (function () {
    function ProductdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedProduct = this.navParams.get('item');
        console.log('Data is : ' + JSON.stringify(this.selectedProduct));
        this.sliderImages = JSON.parse(this.selectedProduct.p_sliderImages);
        console.log('Slider Images: ' + JSON.stringify(this.sliderImages));
    }
    ProductdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductdetailsPage');
    };
    ProductdetailsPage.prototype.showDetails = function (id) {
        console.log('Id is :' + id);
        if (id === 'one') {
            this.data = this.selectedProduct.p_measurement;
            this.data1 = null;
            this.data2 = null;
            this.data3 = null;
            console.log('Data is ' + this.data);
        }
        else if (id === 'two') {
            var d = { data: 'Delevery within 36hrs' };
            this.data1 = d;
            console.log('Data is ' + this.data1);
            this.data = null;
            this.data2 = null;
            this.data3 = null;
        }
        else if (id === 'three') {
            var d = { name: 'Data2' };
            this.data = d;
            console.log('Data is ' + this.data);
        }
        else if (id === 'four') {
            var d = { name: 'Data3' };
            this.data = d;
            console.log('Data is ' + this.data);
        }
    };
    ProductdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productdetails',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/productdetails/productdetails.html"*/'<ion-content no-padding >\n	<ion-navbar>\n		<ion-header>\n		    <ion-title>Product Details</ion-title>\n		</ion-header>\n	</ion-navbar>\n	<ion-card style="height:50%;">\n		<ion-slides  *ngIf="sliderImages && sliderImages.length" zoom="true" autoplay="2000" loop="true" speed="2000" autoplayDisableOnInteraction = "false">\n            <ion-slide *ngFor="let image of sliderImages">\n              <img [src]="image.img"/>\n            </ion-slide>\n          </ion-slides> \n          <h1 style="text-align: center;">{{selectedProduct.p_name}}</h1>  \n		</ion-card>\n\n		<ion-card>\n			<ion-row>\n				<ion-col col-2 push-1>\n					<ion-icon (click)="showDetails(\'one\')">\n						<img src="assets/imgs/rule.png">\n					</ion-icon>\n				</ion-col>\n				<ion-col col-3 push-2 >\n					<ion-icon (click)="showDetails(\'two\')">\n						<img src="assets/imgs/delivery.png">\n					</ion-icon >\n				</ion-col>\n				<ion-col col-3 push-2>\n					<ion-icon (click)="showDetails(\'three\')">\n						<img src="assets/imgs/upload.png">\n					</ion-icon>\n				</ion-col>\n				<ion-col col-3 push-2 >\n					<ion-icon (click)="showDetails(\'four\')">\n						<img src="assets/imgs/scale.png">\n					</ion-icon>\n				</ion-col>\n			</ion-row>\n\n			<ion-row *ngIf=\'data\'>\n				<div *ngFor=\'let datas of data\'>\n					<button ion-button small round>{{datas.unit}}</button>\n				</div>\n			</ion-row>\n			<ion-row *ngIf=\'data1\'>\n				<button ion-button small round>{{data1.data}}</button>\n			</ion-row>\n			<ion-row *ngIf=\'data2\'>\n					{{data2.data}}\n			</ion-row>\n		</ion-card>\n\n		<ion-card>\n			<ion-row>\n			{{selectedProduct.p_description}}\n			</ion-row>\n		</ion-card>\n\n		<ion-card>\n			<div *ngIf="show">\n      	<ion-card>\n					<ion-row>\n						<button ion-button small outline (click)="removeFromCart(item)">\n		  		 		<ion-icon name="remove"></ion-icon>\n		       	</button>\n			      <button ion-button small outline>	             \n			      </button>\n			      <button ion-button small outline (click)="addToCart(item)">\n			        <ion-icon name="add"></ion-icon>\n			      </button>\n					</ion-row>\n				</ion-card>\n\n				<ion-card>\n					<h1>Product Details:</h1>\n\n					<p>Type	Orange drink\n						Manufacturer	PepsiCo\n						Country of origin	Spain\n						Introduced	~1959\n						Related products	Fanta\n						Pepsi\n						Sunkist (soft drink)</p>\n				</ion-card>\n			</div>\n\n			<ion-row no-padding>		        \n			  <button  ion-button round outline  color="positive" (click)="show=!show" > {{show ? \'Hide\' : \'More\'}}\n			  </button>\n      </ion-row>\n		</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/productdetails/productdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ProductdetailsPage);
    return ProductdetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationsProvider = (function () {
    function LocationsProvider(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        /*     private lat:any;
             private lng:any;*/
        this.url = "http://sitepro.shreewebs.com/Abhilasha/ecommerce/api/Products/all_Details?X-API-KEY=CODEX@123";
        console.log('Hello LocationsProvider Provider');
        /*this.getCurrentPosition();*/
    }
    LocationsProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log('database data is ' + JSON.stringify(data));
                    var position = { lat: resp.coords.latitude, lng: resp.coords.longitude };
                    //console.log('data.locations'+data);
                    _this.data = _this.applyHaversine(data, position);
                    _this.data.sort(function (locationA, locationB) {
                        return locationA.distance - locationB.distance;
                    });
                    resolve(_this.data);
                }).catch(function (error) {
                    console.log('Error getting location inside httpget', error);
                });
            });
        });
    };
    LocationsProvider.prototype.applyHaversine = function (locations, usersLocation) {
        var _this = this;
        console.log('user latitude is ' + usersLocation.lat);
        locations.map(function (location) {
            var placeLocation = {
                lat: location.s_latitude,
                lng: location.s_longitude
            };
            location.distance = _this.getDistanceBetweenPoints(usersLocation, placeLocation, 'km').toFixed(2);
        });
        return locations;
    };
    LocationsProvider.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'km'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    LocationsProvider.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    LocationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationsProvider);
    return LocationsProvider;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkout/checkout.module": [
		261
	],
	"../pages/favstore/favstore.module": [
		263
	],
	"../pages/mycart/mycart.module": [
		414
	],
	"../pages/mywishlist/mywishlist.module": [
		415
	],
	"../pages/productdetails/productdetails.module": [
		416
	],
	"../pages/productlist/productlist.module": [
		417
	],
	"../pages/profile/profile.module": [
		418
	],
	"../pages/search/search.module": [
		419
	],
	"../pages/signup/signup.module": [
		421
	],
	"../pages/storedetails/storedetails.module": [
		422
	],
	"../pages/storelist/storelist.module": [
		426
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 260;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkoutData = this.navParams.data;
        console.log('Data inside Checkout' + JSON.stringify(this.checkoutData));
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the CheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavstorePageModule", function() { return FavstorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favstore__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavstorePageModule = (function () {
    function FavstorePageModule() {
    }
    FavstorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favstore__["a" /* FavstorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favstore__["a" /* FavstorePage */]),
            ],
        })
    ], FavstorePageModule);
    return FavstorePageModule;
}());

//# sourceMappingURL=favstore.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavstorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavstorePage = (function () {
    function FavstorePage(navCtrl, navParams, provider, device, toastCtrl, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.device = device;
        this.toastCtrl = toastCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.user_id = this.navParams.get('id');
        console.log('Data is:' + JSON.stringify(this.user_id));
        this.getFavStore();
    }
    FavstorePage.prototype.getFavStore = function () {
        var _this = this;
        this.provider.getFavStore(this.user_id, this.device.uuid).subscribe(function (data) {
            console.log(JSON.stringify(data));
            if (!data.result) {
                _this.favStore = data;
                console.log('Data inside getFavStore' + JSON.stringify(_this.favStore));
            }
            else if (data.result == 'no favourite shops') {
                var toast = _this.toastCtrl.create({
                    message: 'Nothing in favourite store',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
        });
    };
    FavstorePage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
    };
    FavstorePage.prototype.removeFavStore = function (data) {
        var _this = this;
        this.removeStore = { user_id: this.user_id, device_id: this.device.uuid, s_id: data };
        console.log('Shop id is ' + this.favStore.s_id);
        this.provider.addFavStore(this.removeStore).subscribe(function (data) {
            if (data.result == 'shop removed') {
                var toast = _this.toastCtrl.create({
                    message: 'Shop removed from Favourite',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.getFavStore();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to remove shop as favourite',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
            }
        }, // success path
        function (// success path
            error) {
            console.log("Error inside Wishlist is" + JSON.stringify(error));
        }); // error path
    };
    FavstorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavstorePage');
    };
    FavstorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favstore',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/favstore/favstore.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>favstore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card *ngFor="let data of favStore">\n		<ion-avatar>\n\n			<img [src]="data.s_imageUrl">\n\n		</ion-avatar>\n		{{data.s_name}}\n\n		\n		<button ion-button small outline   (click)="removeFavStore(data.s_id)">\n          <ion-icon name="heart-outline"  ></ion-icon>\n        </button>\n\n	</ion-card>\n	<ion-card *ngIf="!favStore">\n\n		<h1>Nothing in FavStore</h1>\n\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/favstore/favstore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], FavstorePage);
    return FavstorePage;
}());

//# sourceMappingURL=favstore.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, modalCtrl, provider, device, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.provider = provider;
        this.device = device;
        this.superTabsCtrl = superTabsCtrl;
        this.user_data = { name: '', email: '', pswd: '', c_pswd: '' };
    }
    SignupPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            pswd: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            c_pswd: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            phone_no: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            device_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.device.uuid)
        });
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        console.log('Inside SignUp user');
        this.provider.signupUser(this.user.value).subscribe(function (data) {
            console.log('userdata from response is' + JSON.stringify(data));
            console.log("Result is " + data.result);
            console.log("Message is" + data.message);
            if (data.result == 'success') {
                alert('Data added Successfully');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
            else
                alert('Unable to create User' + data.message);
        }, function (error) {
            console.log("Error is" + JSON.stringify(error));
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/signup/signup.html"*/'<ion-content class="no-scroll getstart" padding>\n  <ion-col>\n    <img src="assets/imgs/logo.png">\n  </ion-col>\n<form novalidate  [formGroup]=" user " >\n<div class="input">\n<ion-item class=\'fields\'>\n  <ion-label>\n    <ion-icon ios="ios-contact-outline" md="md-contact" color="ibuddi">\n    </ion-icon>\n  </ion-label>\n  <ion-input type="text" placeholder="Full Name" formControlName="name">\n  </ion-input>\n</ion-item>\n\n<ion-item class=\'fields\'>\n  <ion-label>\n    <ion-icon ios="ios-mail-outline" md="md-mail" color="ibuddi">\n    </ion-icon>\n  </ion-label>\n  <ion-input type="text" placeholder="Email" formControlName="email">\n  </ion-input>\n</ion-item>\n\n<ion-item class=\'fields\'>\n  <ion-label >\n    <ion-icon ios="ios-call-outline" md="md-call" color="ibuddi">\n    </ion-icon>\n  </ion-label>\n  <ion-input type="number" placeholder="Mobile No " formControlName="phone_no"></ion-input>\n</ion-item>\n\n<ion-item class=\'fields\'>\n  <ion-label ><ion-icon ios="ios-lock-outline" md="md-lock" color="ibuddi"></ion-icon></ion-label>\n  <ion-input type="password" placeholder="Password" formControlName="pswd"></ion-input>\n</ion-item>\n\n<ion-item class=\'fields\'>\n  <ion-label >\n    <ion-icon ios="ios-lock-outline" md="md-lock" color="ibuddi">\n    </ion-icon>\n  </ion-label>\n  <ion-input type="password" placeholder="Confirm Password" formControlName="c_pswd">\n  </ion-input>\n</ion-item>\n\n</div><br>\n<ion-row padding>\n  <input type="checkbox">&nbsp;&nbsp;Agree to the &nbsp;<font color="red"> terms and Conditions</font><br>\n</ion-row><br>\n\n  <ion-row>    \n    <button ion-button type="submit" (click)=" signupUser() " color="ibuddi" full round>Create Account</button>\n  </ion-row>          \n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MycartPage = (function () {
    function MycartPage(navCtrl, navParams, provider, device, toastCtrl, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.device = device;
        this.toastCtrl = toastCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.tot_price = 0;
        this.user_id = this.navParams.get('id');
        this.viewCart();
    }
    MycartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MycartPage');
    };
    MycartPage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
    };
    MycartPage.prototype.viewCart = function () {
        var _this = this;
        console.log('user_id' + JSON.stringify(this.user_id));
        this.provider.viewCart(this.device.uuid, this.user_id)
            .subscribe(function (data) {
            if (!data.result) {
                _this.cartItems = data;
                console.log('Data inside mycart viewCart' + JSON.stringify(_this.cartItems));
                console.log('Cart Items Measurements ' + _this.cartItems[0].p_measurement);
            }
            else if (data.result == 'no products in your cart') {
                var toast = _this.toastCtrl.create({
                    message: 'Nothing in your Cart',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
            }
        }, function (err) {
            console.log('Error is' + err);
        });
    };
    MycartPage.prototype.removeFromCart = function (item) {
        var _this = this;
        var cart_item = { p_id: item.p_id, user_id: item.user_id, device_id: this.device.uuid, s_id: item.s_id };
        console.log('item is' + JSON.stringify(cart_item));
        this.provider.removeFromCart(item).subscribe(function (data) {
            console.log(' Data inside Add to cart is ' + JSON.stringify(data));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Product deleted from cart',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.viewCart();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to deleted product from cart',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside removeFromCart is" + JSON.stringify(error));
        });
    };
    MycartPage.prototype.gotoCheckout = function () {
        for (var i = 0; i < this.cartItems.length; i++) {
            /*console.log(this.cart[i].price * this.cart[i].quantity);*/
            this.tot_price = this.tot_price + this.cartItems[i].p_sellPrice * this.cartItems[i].p_quantity;
        }
        console.log('Cart Price' + this.tot_price);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], this.cartItems);
    };
    MycartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mycart',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/mycart/mycart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let item of cartItems">\n          <ion-item>\n            <ion-row>\n\n              <ion-col>\n                <img src="{{item.p_imageUrl}}">\n              </ion-col>\n              <ion-col>\n                <ion-row>\n                {{item.p_name}}\n              </ion-row>\n              <ion-row>\n                <ion-item >\n                  <select>\n                    <option >250ml</option>\n                    <option >500ml</option>\n                    <option >1-ltr</option>\n                    <option >1.25-ltr</option>\n                  </select>\n                </ion-item>\n              </ion-row>\n              </ion-col>\n            </ion-row>\n                 \n            \n            <ion-row>\n              <ion-col>\n               <button ion-button small outline (click)="removeFromCart(item)">\n                  <ion-icon name="remove" ></ion-icon>\n              </button>\n\n              <button ion-button small outline>\n                  {{item.p_quantity}}\n              </button>\n\n              <button ion-button small outline>\n                  <ion-icon name="add"></ion-icon>\n              </button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n      </ion-card>\n\n      <div *ngIf="cartItems">\n      <ion-col col-9 push-3>    \n      <button ion-button round outline (click)="gotoCheckout()">Checkout</button>\n      </ion-col>\n      </div>\n\n    <ion-card *ngIf="!cartItems">\n      <ion-item>\n        Nothing in Cart\n      </ion-item>\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/mycart/mycart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], MycartPage);
    return MycartPage;
}());

//# sourceMappingURL=mycart.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MywishlistPage = (function () {
    function MywishlistPage(navCtrl, navParams, device, provider, toastCtrl, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.provider = provider;
        this.toastCtrl = toastCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.user_id = this.navParams.get('id');
        this.viewMyWishlist();
    }
    MywishlistPage.prototype.viewMyWishlist = function () {
        var _this = this;
        this.provider.viewWishlist(this.device.uuid, this.user_id).subscribe(function (data) {
            console.log(JSON.stringify(data));
            if (!data.result) {
                _this.wishlistItems = data;
                console.log('Data inside my wishlist' + JSON.stringify(_this.wishlistItems));
                console.log('Data results' + data.result);
            }
            else if (data.result == 'no products in your wishlist') {
                var toast = _this.toastCtrl.create({
                    message: 'Nothing in wishlist',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
        });
    };
    MywishlistPage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
    };
    MywishlistPage.prototype.removeFromWishlist = function (item) {
        var _this = this;
        this.removeitem = { p_id: item.p_id, device_id: this.device.uuid, u_id: this.user_id, s_id: item.s_id };
        console.log('Data remove ' + JSON.stringify(this.removeitem));
        this.provider.addToWishlist(this.removeitem)
            .subscribe(function (data) {
            console.log('Data inside Add to wishlist ' + JSON.stringify(data));
            if (data.result == 'product removed') {
                var toast = _this.toastCtrl.create({
                    message: 'Product deleted from wishlist',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                _this.viewMyWishlist();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to add product into wishlist',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }, // success path
        function (// success path
            error) {
            console.log("Error inside Wishlist is" + JSON.stringify(error));
        }); // error path
    };
    MywishlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywishlistPage');
    };
    MywishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mywishlist',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/mywishlist/mywishlist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>mywishlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-card *ngFor="let item of wishlistItems">\n          <ion-item>\n            <ion-row>\n              <ion-col>\n                {{item.p_name}}\n              </ion-col>            \n            </ion-row>\n          </ion-item>\n          <button ion-button small outline >\n              <ion-icon name="heart-outline"  (click)="removeFromWishlist(item)"></ion-icon>\n          </button>\n      </ion-card>\n\n\n    <ion-card *ngIf="!wishlistItems">\n    	<ion-item>\n    		Nothing in Wishlist\n    	</ion-item>\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/mywishlist/mywishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], MywishlistPage);
    return MywishlistPage;
}());

//# sourceMappingURL=mywishlist.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartPageModule", function() { return MycartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycart__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MycartPageModule = (function () {
    function MycartPageModule() {
    }
    MycartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mycart__["a" /* MycartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mycart__["a" /* MycartPage */]),
            ],
        })
    ], MycartPageModule);
    return MycartPageModule;
}());

//# sourceMappingURL=mycart.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywishlistPageModule", function() { return MywishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mywishlist__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MywishlistPageModule = (function () {
    function MywishlistPageModule() {
    }
    MywishlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mywishlist__["a" /* MywishlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mywishlist__["a" /* MywishlistPage */]),
            ],
        })
    ], MywishlistPageModule);
    return MywishlistPageModule;
}());

//# sourceMappingURL=mywishlist.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function() { return ProductdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetails__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductdetailsPageModule = (function () {
    function ProductdetailsPageModule() {
    }
    ProductdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */]),
            ],
        })
    ], ProductdetailsPageModule);
    return ProductdetailsPageModule;
}());

//# sourceMappingURL=productdetails.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductlistPageModule = (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */]),
            ],
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());

//# sourceMappingURL=productlist.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Keyboard

var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        /*this.search.setFocus();*/
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
        /*setTimeout(()=>{this.input.setFocus();},500)*/
        /*    setInterval(()=>{
              this.input.setFocus();
              
            },150);*/
        //this.input.setFocus();
        //this.input.setFocus();
        /*this.kb.show();*/
    };
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.input.setFocus(); }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Searchbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Searchbar */])
    ], SearchPage.prototype, "input", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-searchbar #input type="text" placeholder="your search text here" no-padding></ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredetailsPageModule", function() { return StoredetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storedetails__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoredetailsPageModule = (function () {
    function StoredetailsPageModule() {
    }
    StoredetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__storedetails__["a" /* StoredetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__storedetails__["a" /* StoredetailsPage */]),
            ],
        })
    ], StoredetailsPageModule);
    return StoredetailsPageModule;
}());

//# sourceMappingURL=storedetails.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoredetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__productdetails_productdetails__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoredetailsPage = (function () {
    function StoredetailsPage(navCtrl, navParams, callNumber, launchNavigator, geolocation, provider, storage, device, toastCtrl, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.provider = provider;
        this.storage = storage;
        this.device = device;
        this.toastCtrl = toastCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.categories = [];
        this.products = [];
        this.pmeasurement1 = [];
        this.img = [];
        this.merge = [];
        this.flag = true;
        this.buttonDisabled = true;
        this.selectedItem = navParams.get('item');
        console.log('this.selectedItem.s_sliderImages is ' + this.selectedItem.s_imageUrl);
        this.sliderImage = JSON.parse(this.selectedItem.s_sliderImages);
    }
    StoredetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
        this.storage.get('userProfile').then(function (data) {
            _this.userProfile = data;
            console.log('UserProfile storage' + JSON.stringify(_this.userProfile));
        });
    };
    StoredetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoredetailsPage');
        //console.log('Selected Item'+JSON.stringify(this.selectedItem));
        console.log(this.selectedItem.category.length);
    };
    StoredetailsPage.prototype.gotoProductDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__productdetails_productdetails__["a" /* ProductdetailsPage */], { item: item });
    };
    StoredetailsPage.prototype.addToCart = function (item) {
        var _this = this;
        var cartItems = { p_id: item.p_id, p_name: item.p_name, p_quantity: ++item.p_quantity, s_id: this.selectedItem.s_id, device_id: this.device.uuid, u_id: this.userProfile.id };
        this.provider.addToCart(cartItems).subscribe(function (data) {
            console.log('Data inside Add to cart is ' + JSON.stringify(data));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Product added to cart successfully',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to add product in cart',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside Addtocart is" + JSON.stringify(error));
        });
    };
    StoredetailsPage.prototype.addToWishlist = function (item) {
        var _this = this;
        var wishlistItems = { p_id: item.p_id, s_id: this.selectedItem.s_id, device_id: this.device.uuid, u_id: this.userProfile.id };
        this.provider.addToWishlist(wishlistItems).subscribe(function (data) {
            console.log('Data inside Add to wishlist ' + JSON.stringify(data));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Product added to wishlist',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else if (data.result == 'product removed') {
                var toast = _this.toastCtrl.create({
                    message: 'Product deleted from wishlist',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to add product into wishlist',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside Wishlist is" + JSON.stringify(error));
        });
    };
    StoredetailsPage.prototype.addFavStore = function () {
        var _this = this;
        var fav_store = { user_id: this.userProfile.id, device_id: this.device.uuid, s_id: this.selectedItem.s_id };
        this.provider.addFavStore(fav_store).subscribe(function (data) {
            console.log('Data inside Add to fav store ' + JSON.stringify(data.result));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Store added as favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else if (data.result == 'shop removed') {
                var toast = _this.toastCtrl.create({
                    message: 'Shop removed from Favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to add shop as favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside Wishlist is" + JSON.stringify(error));
        });
    };
    StoredetailsPage.prototype.removeFromCart = function (item) {
        var _this = this;
        --item.p_quantity;
        var r_item = { p_id: item.p_id, s_id: this.selectedItem.s_id, device_id: this.device.uuid, user_id: this.userProfile.id };
        this.provider.removeFromCart(r_item).subscribe(function (data) {
            console.log(' Data inside Add to cart is ' + JSON.stringify(data));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Product deleted from cart',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to deleted product from cart',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside removeFromCart is" + JSON.stringify(error));
        });
    };
    StoredetailsPage.prototype.showDirection = function () {
        var _this = this;
        console.log('latitude ' + this.selectedItem.s_latitude);
        console.log('lngitude ' + this.selectedItem.s_longitude);
        this.geolocation.getCurrentPosition().then(function (resp) {
            var dest = [_this.selectedItem.s_latitude, _this.selectedItem.s_longitude];
            var options = {
                start: ""
            };
            _this.launchNavigator.navigate(dest, options)
                .then(function (success) { return console.log('Launched navigator'); }, function (error) { return alert('Error launching navigator' + error); });
        }).catch(function (error) {
            alert('Error getting location' + error);
        });
    };
    StoredetailsPage.prototype.dialer = function () {
        this.callNumber.callNumber(this.selectedItem.s_contact, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    StoredetailsPage.prototype.getProducts = function (item) {
        this.content.scrollTo(0, 350);
        //console.log('ITEM'+JSON.stringify(item));
        this.catName = item.categoryName;
        this.items = item;
        this.products = item.products;
        //console.log('PRODUCTS'+JSON.stringify(this.products));
    };
    StoredetailsPage.prototype.changeSlide = function () {
        this.flag = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], StoredetailsPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], StoredetailsPage.prototype, "content", void 0);
    StoredetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storedetails',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/storedetails/storedetails.html"*/'\n<ion-content >\n  <div *ngIf="selectedItem">\n  	<ion-card no-padding>\n      	<ion-slides *ngIf="sliderImage && sliderImage.length" zoom="true" pager="true" autoplay="2000" loop="true" speed="2000" autoplayDisableOnInteraction = "false">\n          <ion-slide *ngFor="let image of sliderImage">\n            <img [src]="image.img"/>\n          </ion-slide>\n        </ion-slides>\n          <ion-row>\n            <ion-col>\n              <p> {{selectedItem.s_name}}  </p>      \n            </ion-col>\n            <ion-col col-2 push-1>\n              <ion-icon name="md-heart-outline" (click)="addFavStore()" color="primary"> </ion-icon> \n            </ion-col>\n          </ion-row>   \n    </ion-card>\n\n    <ion-card>\n       <!-- <ion-card-header><b>Categories</b></ion-card-header>  -->\n        <ion-slides slidesPerView="6" spaceBetween="2">\n          <ion-slide *ngFor="let item of selectedItem?.category"\n          (ionSlideDidChange)="changeSlide()">\n            \n              <ion-avatar (click)="getProducts(item)" class="catimg">\n                <img [src]="item.categoryIcon"/>\n              </ion-avatar>\n            \n            <p class="cattext">{{item.categoryName}}</p>\n          </ion-slide>\n        </ion-slides>\n        <ion-row class="delivery" text-center>\n			    <ion-col>\n			        Delivery day : Tomorrow\n			    </ion-col>\n			    <hr>\n			    <ion-col>\n			        Free delivery above : Rs 500\n			    </ion-col>\n  			</ion-row>\n    </ion-card>\n  </div>\n  	<p text-center><b>{{catName}}</b></p>\n   	<ion-list>\n   		<div *ngFor="let item of items?.products">\n   			<ion-item>\n   				<ion-row>\n            <ion-col class="colavatar" no-padding>\n	   				<ion-avatar item-start>\n	   					<img src="{{item.p_imageUrl}}">\n	   				</ion-avatar></ion-col>\n	   				<ion-col (click)="gotoProductDetails(item)" no-padding>\n		   				<p>{{item.p_name}}</p>\n              <div class="select">\n		   				<ion-item no-lines no-padding>\n				      	<ion-select>\n				       		<ion-option *ngFor="let i of item?.p_measurement" value="{{i.unit}}"\n                  [selected]="i.unit">\n                  {{i.unit}}\n                  </ion-option>\n				       	</ion-select>\n			      	</ion-item>\n            </div>\n	   				</ion-col>\n            <ion-col no-padding>\n              <ion-icon class="icheart" name="md-heart-outline" color="primary" (click)="addToWishlist(item)"></ion-icon>\n            </ion-col>\n	   				\n            <div class="iccart" no-padding>\n   						<button ion-button small outline class="butstyle"\n                  [disabled]="item?.p_quantity < 1" (click)="removeFromCart(item)">\n                <ion-icon name="remove"></ion-icon>\n              </button>\n\n							<button ion-button small outline class="butstyle" disabled="true"  >{{item.p_quantity}}</button>\n\n 							<button ion-button small outline class="butstyle" (click)="addToCart(item)">\n	                <ion-icon name="add"></ion-icon>\n              </button>\n            </div>\n	                <!-- <img src="assets/icon/add.png" (click)="addToCart(item)" /> -->\n\n	   				\n	   			</ion-row>\n			</ion-item>\n		</div>\n    </ion-list>\n\n\n<!--*Saajid*-->\n  <p id="more-details" (click)="show=!show" > {{show ? \'hide\' : \'more\'}}</p>\n\n  <div *ngIf="show">\n    <ion-card>\n\n       <ion-row>\n         <ion-col col-1>\n              <ion-icon name="md-pin" ></ion-icon>\n         </ion-col>\n\n        <ion-col col-11>\n            <p>{{selectedItem.s_address}}</p>\n        </ion-col >\n       </ion-row>\n      \n       <ion-row (click)="dialer()">\n            <ion-col col-1>\n              <ion-icon name="md-call" ></ion-icon>\n            <!-- <h3><b>Mob:</b></h3> -->\n            </ion-col>\n\n            <ion-col col-5>\n            <p>{{selectedItem.s_contact}}</p>\n           </ion-col >\n       </ion-row>\n\n       <ion-row (click)="showDirection()">\n           <ion-col col-1>\n              <ion-icon name="md-navigate" ></ion-icon>\n           </ion-col>\n\n           <ion-col col-5>\n              <p>Navigate Route</p>\n           </ion-col >\n       </ion-row>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/storedetails/storedetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], StoredetailsPage);
    return StoredetailsPage;
}());

//# sourceMappingURL=storedetails.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorelistPageModule", function() { return StorelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storelist__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StorelistPageModule = (function () {
    function StorelistPageModule() {
    }
    StorelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__storelist__["a" /* StorelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__storelist__["a" /* StorelistPage */]),
            ],
        })
    ], StorelistPageModule);
    return StorelistPageModule;
}());

//# sourceMappingURL=storelist.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorelistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_locations_locations__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storedetails_storedetails__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StorelistPage = (function () {
    function StorelistPage(navCtrl, diagnostic, navParams, locations, locationAccuracy, loadingCtrl, superTabsCtrl, slice, device, storage, toastCtrl, provider) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.navParams = navParams;
        this.locations = locations;
        this.locationAccuracy = locationAccuracy;
        this.loadingCtrl = loadingCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.slice = slice;
        this.device = device;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.provider = provider;
    }
    StorelistPage.prototype.locationcheck = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        /*alert("check location  is CALLED:");*/
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (!isAvailable) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.location = JSON.stringify(_this.locations.load());
                    _this.loading.dismiss();
                }, function (error) { return alert('Error requesting location permissions' + error); });
            }
            else {
                _this.location = JSON.stringify(_this.locations.load());
                _this.loading.dismiss();
                // alert('location already enable ');
            }
        }).catch(function (e) {
            console.log(e);
            alert('Enable location ' + JSON.stringify(e));
        });
    };
    StorelistPage.prototype.ionViewDidLoad = function () {
        this.locationcheck();
        this.location = JSON.stringify(this.locations.load());
        this.loading.dismiss();
        /*development purpose. Remove or comment when deploying or building to device*/
        console.log('ionViewDidLoad ListPage');
        console.log(this.location);
    };
    StorelistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.superTabsCtrl.showToolbar(true);
        this.superTabsCtrl.enableTabsSwipe(true);
        this.storage.get('userProfile').then(function (data) {
            _this.userProfile = data;
            console.log('UserProfile storage' + JSON.stringify(_this.userProfile));
        });
    };
    StorelistPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__storedetails_storedetails__["a" /* StoredetailsPage */], {
            item: item
        });
    };
    StorelistPage.prototype.opnMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */]);
    };
    StorelistPage.prototype.favStore = function (store) {
        var _this = this;
        var fav_store = { user_id: this.userProfile.id, device_id: this.device.uuid, s_id: store.s_id };
        this.provider.addFavStore(fav_store).subscribe(function (data) {
            console.log('Data inside Add to fav store ' + JSON.stringify(data.result));
            if (data.result == 'success') {
                var toast = _this.toastCtrl.create({
                    message: 'Store added as favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else if (data.result == 'shop removed') {
                var toast = _this.toastCtrl.create({
                    message: 'Shop removed from Favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Unable to add shop as favourite',
                    duration: 2000,
                    position: 'bottom',
                    cssClass: 'normalToast'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error inside Wishlist is" + JSON.stringify(error));
        });
    };
    StorelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storelist',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/storelist/storelist.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let store of locations.data" >\n      <ion-avatar item-start>\n        <img src="{{store.s_imageUrl}}">\n      </ion-avatar>\n      <h2 (click)="itemTapped($event, store)">{{store.s_name | slice: 0:21}}{{store.s_name.length > 21 ? \'..\' : \'\'}} </h2>\n      <ion-icon item-right  name="heart-outline" color="primary" (click)="favStore(store)"></ion-icon>\n      <p>{{store.distance}} kms</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab color="lighter" (click)=opnMap()><img src="assets/icon/map1.1.png"></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/storelist/storelist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_locations_locations__["a" /* LocationsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_locations_locations__["a" /* LocationsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__["a" /* SuperTabsController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__["a" /* SuperTabsController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["i" /* SlicePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["i" /* SlicePipe */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]) === "function" && _m || Object])
    ], StorelistPage);
    return StorelistPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=storelist.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_locations_locations__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = (function () {
    function MapPage(geolocation, locations, loadingCtrl, superTabsCtrl) {
        this.geolocation = geolocation;
        this.locations = locations;
        this.loadingCtrl = loadingCtrl;
        this.superTabsCtrl = superTabsCtrl;
    }
    MapPage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(false);
        this.superTabsCtrl.enableTabsSwipe(false);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.loadGoogleMap();
        loading.dismiss();
    };
    /*  addCircle(location,map){
        this.map.addCircle({
        'center': location,
        'radius': 1000,
        'strokeColor' : '#9b0101',
        'strokeWidth': 1,
        'fillColor' : 'rgb(235,35,35,0.25)'
        })
      }*/
    MapPage.prototype.loadGoogleMap = function () {
        var _this = this;
        //alert('Inside load google map()');
        this.geolocation.getCurrentPosition().then(function (pos) {
            var location = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["d" /* LatLng */](pos.coords.latitude, pos.coords.longitude);
            _this.map = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* GoogleMap */]('map', {
                controls: {
                    compass: true,
                    myLocationButton: true,
                    indoorPicker: true,
                    zoom: true,
                    mapToolbar: true
                },
                gestures: {
                    scroll: true,
                    tilt: true,
                    rotate: true,
                    zoom: true
                },
                camera: {
                    target: location,
                    zoom: 15,
                    tilt: 30
                }
            });
            _this.map.on(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
                _this.map.setMyLocationEnabled(true);
                //this.map.setAllGesturesEnabled(true);
                //this.addCircle(location,this.map);
                /*alert('Map is ready');*/
                _this.getMarkers();
            }, function (err) {
                alert('Error');
            });
        }).catch(function (err) {
            alert('Location not enabled, Check your location settings');
        });
    };
    MapPage.prototype.getMarkers = function () {
        var _this = this;
        this.locations.load().then(function (store) {
            var slide = store;
            for (var _i = 0, store_1 = store; _i < store_1.length; _i++) {
                var location_1 = store_1[_i];
                _this.map.addMarker({
                    title: location_1.s_name,
                    position: {
                        lat: location_1.s_latitude,
                        lng: location_1.s_longitude
                    },
                    icon: { url: "./assets/icon/icon.png" }
                }).then(function (marker) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (data) {
                        _this.slide = store;
                        var markers = data[1];
                        markers.setTitle(markers.get("name"));
                        markers.setSnippet(markers.get("address"));
                        markers.showInfoWindow();
                        _this.showSlide(marker, slide);
                    }, function (err) {
                        alert('Hard Luck' + err);
                    });
                }).catch(function (err) {
                    alert('Error' + err);
                });
            }
        }).catch(function (err) {
            alert(err);
        });
    };
    MapPage.prototype.showSlide = function (marker, slide) {
        this.slide = slide;
        for (var _i = 0, slide_1 = slide; _i < slide_1.length; _i++) {
            var loc = slide_1[_i];
            if (((marker[0].lat) == (loc.s_latitude)) && ((marker[0].lng) == (loc.s_longitude))) {
                alert(loc.s_name + 'clicked');
            }
        }
    };
    MapPage.prototype.swipe = function (ldata) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core___["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core___["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core___["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Slides */])
    ], MapPage.prototype, "slides", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core___["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/map/map.html"*/'\n<ion-content padding>\n <!-- <ion-spinner icon="spiral" class="spinner-energized"></ion-spinner> -->\n  <div #map id="map"></div>\n    <ion-slides loop="true" no-padding>\n      <ion-slide *ngFor="let ldata of slide" (ionSlideDidChange)="swipe(ldata)">\n        <ion-card>\n            <ion-card-title text-center color="ibuddi">\n                    {{ldata.s_name}}\n            </ion-card-title>\n          <ion-row>\n            <ion-col>\n              <img src="{{ldata.s_imageUrl}}">\n            </ion-col>\n            <ion-col>\n              <p>{{ldata.s_address}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n       </ion-slide>\n     </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_locations_locations__["a" /* LocationsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], MapPage);
    return MapPage;
}());

/*  swipe(marker, store){
     //alert('inside slider function');
     for (let loc of store){
       if(((marker[0].lat) == (loc.s_latitude)) && ((marker[0].lng)==(loc.s_longitude))){
        // alert(loc.s_name+ 'clicked');
         this.slide = store;
         this.slide.push(loc);
       }
     }
  }*/ 
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storelist_storelist__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__storelist_storelist__["a" /* StorelistPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/tabs/tabs.html"*/'\n<super-tabs>\n  <super-tab [root]="tab1Root" title="Home" tabIcon="home"></super-tab>\n  <super-tab [root]="tab2Root" title="Stores" tabIcon="map"></super-tab>\n  <super-tab [root]="tab3Root" title="Profile" tabIcon="people"></super-tab>\n</super-tabs>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, provider, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.superTabsCtrl = superTabsCtrl;
        this.splash = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
        this.getImages();
    };
    HomePage.prototype.opnPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(true);
        this.superTabsCtrl.enableTabsSwipe(true);
    };
    HomePage.prototype.getImages = function () {
        var _this = this;
        this.provider.homeSlider()
            .subscribe(function (data) {
            console.log(data[0].homeImage);
            _this.sliderImg = JSON.parse(data[0].homeImage);
            //console.log('sliderImg '+JSON.stringify(this.sliderImg.homeImage));
            console.log(_this.sliderImg);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/home/home.html"*/'<ion-content class="getstart">\n  <ion-card>     \n    <ion-slides  *ngIf="sliderImg && sliderImg.length" zoom="true"\n    pager="true" autoplay="2000" loop="true" speed="2000" autoplayDisableOnInteraction = "false">\n      <ion-slide  *ngFor=" let image of sliderImg">\n            <img src="{{image.img1}}"/>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-card>\n    <ion-row>\n      <ion-col padding>\n        <p>Ibuddi is a online grocery shopping.It help us to easily buy grocery. </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col><button ><img src="assets/imgs/fashion.jpg"></button></ion-col>\n        <ion-col><button ><img src="assets/imgs/woman1.jpg"></button></ion-col>\n    </ion-row>\n      \n    <ion-row>    \n      <ion-card>     \n          <ion-slides  *ngIf="sliderImg && sliderImg.length" zoom="true" effect="coverflow" autoplay="2000" loop="true" speed="2000" autoplayDisableOnInteraction = "false">\n            <ion-slide  *ngFor=" let image of sliderImg">\n               <img src="{{image.img2}}"/>\n           </ion-slide>\n          </ion-slides>\n      </ion-card>  \n    </ion-row>\n  </ion-card>\n\n  <ion-fab right bottom padding>\n      <button ion-fab color="lighter" (click)="opnPage()" edge>\n        <ion-icon md="md-search" name="search" ios="ios-search-outline"> </ion-icon>\n      </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(481);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_productlist_productlist_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_productdetails_productdetails_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mycart_mycart_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mywishlist_mywishlist_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_favstore_favstore_module__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_storedetails_storedetails_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_map_map_module__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_storelist_storelist_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_locations_locations__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_global__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_maps__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_location_accuracy__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_diagnostic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_google_plus__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_facebook__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_launch_navigator__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //supertabs













/*Saajid */



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favstore/favstore.module#FavstorePageModule', name: 'FavstorePage', segment: 'favstore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycart/mycart.module#MycartPageModule', name: 'MycartPage', segment: 'mycart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywishlist/mywishlist.module#MywishlistPageModule', name: 'MywishlistPage', segment: 'mywishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetails/productdetails.module#ProductdetailsPageModule', name: 'ProductdetailsPage', segment: 'productdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/storedetails/storedetails.module#StoredetailsPageModule', name: 'StoredetailsPage', segment: 'storedetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/storelist/storelist.module#StorelistPageModule', name: 'StorelistPage', segment: 'storelist', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_storelist_storelist_module__["StorelistPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_map_map_module__["a" /* MapPageModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_storedetails_storedetails_module__["StoredetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_productlist_productlist_module__["ProductlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_productdetails_productdetails_module__["ProductdetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_mycart_mycart_module__["MycartPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_mywishlist_mywishlist_module__["MywishlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_favstore_favstore_module__["FavstorePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout_module__["CheckoutPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_23__providers_locations_locations__["a" /* LocationsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__app_global__["a" /* AppState */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_maps__["b" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_36__angular_common__["i" /* SlicePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //, retry
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-KEY': 'CODEX@123',
        'username': 'admin',
        'password': '1234',
        'Response-Type': 'text'
    })
};
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.url = "http://sitepro.shreewebs.com/Abhilasha/ecommerce/api/Accounts";
        this.url2 = "http://sitepro.shreewebs.com/Abhilasha/ecommerce/api/Products";
        this.homeUrl = "http://sitepro.shreewebs.com/Abhilasha/ecommerce/api/Home/home_images";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.homeSlider = function () {
        return this.http.get(this.homeUrl, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.signupUser = function (data) {
        return this.http.post(this.url + '/user', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.login = function (data) {
        return this.http.post(this.url + '/login', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.fbSignupData = function (data) {
        //alert('Data inside fbSignupData' + JSON.stringify(data));
        return this.http.post(this.url + '/fbuser', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.addToCart = function (data) {
        console.log("Data inside rest Cartitems" + JSON.stringify(data));
        return this.http.post(this.url2 + '/cart', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.removeFromCart = function (data) {
        console.log("Data inside rest remove from cart" + JSON.stringify(data));
        return this.http.post(this.url2 + '/cart_delete', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.addToWishlist = function (data) {
        console.log("Data inside rest remove from cart" + JSON.stringify(data));
        return this.http.post(this.url2 + '/wishlist', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.viewCart = function (device_id, user_id) {
        var data = { device_id: device_id, user_id: user_id };
        return this.http.post(this.url2 + '/user_cart', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.getFavStore = function (user_id, dev_id) {
        console.log("Device id is" + dev_id);
        var data = { user_id: user_id, device_id: dev_id };
        return this.http.post(this.url2 + '/get_fav_shop', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.viewWishlist = function (device_id, user_id) {
        var data = { device_id: device_id, user_id: user_id };
        return this.http.post(this.url2 + '/user_wishlist', JSON.stringify(data), httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.addFavStore = function (data) {
        console.log('Data inside rest addFavStore' + JSON.stringify(data));
        return this.http.post(this.url2 + '/fav_store', JSON.stringify(data), httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res;
        console.log('res is' + res);
        console.log('body is' + body);
        return body || [];
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_global__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mycart_mycart__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mywishlist_mywishlist__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favstore_favstore__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_super_tabs__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, global, provider, storage, device, googlePlus, facebook, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.provider = provider;
        this.storage = storage;
        this.device = device;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.superTabsCtrl = superTabsCtrl;
        this.isLoggedIn = false;
        this.userProfile = null;
        this.getStorage();
        //this.fbLoginStatus();
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.getStorage = function () {
        var _this = this;
        this.storage.get('userProfile').then(function (data) {
            _this.userProfile = data;
            console.log('Storage Data' + _this.userProfile);
        }).catch(function (err) {
            alert('Error is ' + err);
        });
        this.checkLoggedIn();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.superTabsCtrl.showToolbar(true);
        this.superTabsCtrl.enableTabsSwipe(true);
    };
    ProfilePage.prototype.checkLoggedIn = function () {
        var _this = this;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]({});
        __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.userProfile = user;
            }
            else {
                _this.userProfile = null;
            }
        }, function (err) {
            alert('constructor' + err);
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
            pswd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(10)])
        });
    };
    ProfilePage.prototype.login = function () {
        var _this = this;
        this.provider.login(this.user.value)
            .subscribe(function (data) {
            console.log('user data is' + JSON.stringify(data.userdata));
            if (data.result == "true") {
                if (data.userdata.roleId === "3") {
                    _this.userProfile = { id: data.userdata.user_id, name: data.userdata.name, picture: data.userdata.imageUrl, email: data.userdata.email, provider: 'ibuddi', role: 'admin' };
                    _this.storage.set('userProfile', _this.userProfile);
                    console.log('userProfile' + JSON.stringify(_this.userProfile));
                }
                else if (data.userdata.roleId === "4") {
                    _this.userProfile = { id: data.userdata.user_id, name: data.userdata.name, picture: data.userdata.imageUrl, email: data.userdata.email, provider: 'ibuddi', role: 'seller' };
                    _this.storage.set('userProfile', _this.userProfile);
                }
                else if (data.userdata.roleId === "5") {
                    _this.userProfile = { id: data.userdata.user_id, name: data.userdata.name, picture: data.userdata.imageUrl, email: data.userdata.email, provider: 'ibuddi', role: 'user' };
                    _this.storage.set('userProfile', _this.userProfile);
                }
            }
            else {
                alert(data.message);
                console.log('Role Id' + data.userdata);
            }
        }, function (error) {
            console.log("Error is" + JSON.stringify(error));
        }); // error path
    };
    ProfilePage.prototype.openSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    ProfilePage.prototype.gotoMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mycart_mycart__["a" /* MycartPage */], { id: this.userProfile.id });
    };
    ProfilePage.prototype.gotoCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mycart_mycart__["a" /* MycartPage */], { id: this.device.uuid });
    };
    ProfilePage.prototype.gotoMywishlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__mywishlist_mywishlist__["a" /* MywishlistPage */], { id: this.userProfile.id });
    };
    ProfilePage.prototype.gotoMyFavStore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__favstore_favstore__["a" /* FavstorePage */], { id: this.userProfile.id });
    };
    ProfilePage.prototype.changeTheme = function (theme) {
        this.global.set('theme', theme);
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        if (this.userProfile.provider == 'facebook') {
            this.facebook.logout().then(function (res) {
                _this.isLoggedIn = false;
                _this.storage.remove('userProfile');
                _this.navCtrl.setRoot(ProfilePage_1);
            }).catch(function (e) {
                _this.storage.remove('userProfile');
                _this.navCtrl.setRoot(ProfilePage_1);
            });
        }
        else if (this.userProfile.provider == 'ibuddi') {
            this.storage.remove('userProfile');
            this.navCtrl.setRoot(ProfilePage_1);
        }
    };
    ProfilePage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '223194861213-3q74vc07j1t50g76lfr7341anbdsldk1.apps.googleusercontent.com'
        }).then(function (res) {
            /*alert('Inside googleLogin res'+JSON.stringify(res));*/
            __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken))
                .then(function (data) {
                alert("Firebase success: " + JSON.stringify(data));
                _this.userProfile = { id: data.uid, name: data.displayName, picture: data.photoURL, email: data.email, provider: 'facebook', role: 'user' };
            }).catch(function (error) { return alert("Firebase failure: " + JSON.stringify(error)); });
        }).catch(function (err) { return alert('Error is' + err); });
    };
    ProfilePage.prototype.googleLogout = function () {
        __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth().signOut().then(function (data) {
            console.log('signout Successful');
        }).catch(function (err) {
            console.log('Error is ' + JSON.stringify(err));
        });
    };
    ProfilePage.prototype.facebookLogin = function () {
        var _this = this;
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (data) {
                _this.userProfile = { id: data.uid, name: data.displayName, picture: data.photoURL, email: data.email, provider: 'facebook', role: 'user' };
                _this.storage.set('userProfile', _this.userProfile);
                //alert("Firebase success: " + JSON.stringify(data)); 
            });
        }).catch(function (error) { alert('Error is' + error); });
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/profile/profile.html"*/'<ion-content padding>\n  <div *ngIf="!userProfile">\n    <div class="content">\n      <img src="assets/imgs/logo.png" />\n    </div>\n      <form no-validate [formGroup]="user" >\n        <ion-item>\n          <ion-label><ion-icon ios="ios-mail-outline" md="md-mail" color="primary"></ion-icon></ion-label>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon ios="ios-key-outline" md="md-key" color="primary"></ion-icon></ion-label>\n          <ion-input type="password" placeholder="Password" formControlName="pswd"></ion-input>\n        </ion-item>\n\n        <ion-item no-lines>\n        <ion-row>\n          <ion-col>           \n                <button ion-button type="submit" (click)= "login()" full round>Login</button>\n          </ion-col>\n          <ion-col>           \n                <button ion-button type="reset" full round>Reset!</button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      \n          <button ion-button round outline block (click)="facebookLogin()" color="facebook">Facebook</button>\n \n\n\n\n          <button ion-button round outline block (click)="openSignup()">Register</button>\n\n\n\n<!--  <ion-row>\n        <ion-col>\n          <button ion-button round outline block (click)="facebookLogin()" color="facebook">Facebook</button>\n        </ion-col>\n       -->\n<!--         <ion-col>\n          <button ion-button round outline block (click)="googleLogin()" color="facebook">Google</button>\n        </ion-col> \n      </ion-row>-->\n      \n\n          <button ion-button round outline block (click)="gotoCart()">MY Cart</button>\n\n      </form>\n  </div>\n \n  <div *ngIf="userProfile">\n    <ion-card>\n      <p padding float-right (click)="logout()">\n        <ion-icon name="log-out" ></ion-icon>Logout</p>\n      <ion-card-header>{{userProfile.name}}</ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img [src]="userProfile.picture"/>\n            </ion-col>\n            <ion-col>\n              <p *ngIf="userProfile.email">{{userProfile.email}}</p>\n              <p *ngIf="userProfile.gender">{{userProfile.gender}}</p>\n              <p *ngIf="userProfile.role">Role: {{userProfile.role}}</p>\n              <p *ngIf="userProfile.provider">\n              Auth Provider:{{userProfile.provider}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <!-- <ion-row>\n      <ion-col>\n        <button ion-button round outline block dark (click)="changeTheme(\'theme-dark\')">Dark</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round outline block (click)="changeTheme(\'\')">Default</button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n        <button ion-button round outline block dark  (click)="gotoMyCart()">Cart</button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button round outline block dark  (click)="gotoMywishlist()">Wishlist</button>\n      </ion-col>\n    </ion-row>\n      <button ion-button round outline block dark  (click)="gotoMyFavStore()">Favourites</button>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_14_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//facebook
/*  facebookLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.isLoggedIn = true;
        this.fbUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => {
        console.log('Error logging into Facebook', e);
        //alert('Error inside facebookLogin'+JSON.stringify(e));
      });
  }

  facebookLogout(){
    this.fb.logout().then( res => {
      this.isLoggedIn = false;
      this.storage.remove('userProfile');
      this.navCtrl.setRoot(ProfilePage);

    }).catch( e => {
      console.log('Error logout from Facebook', e);
      alert('Error in logout'+ e);
    });
  }
  fbUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      

      this.userProfile={id:res.id, name:res.name, device_id:this.device.uuid, picture:res.picture.data.url, email:res.email, gender: res.gender, provider:'facebook', role:'fbuser', status:res.status}
      this.storage.set('userProfile',this.userProfile);
      this.provider.fbSignupData(this.userProfile).subscribe(data => {
        if(data.result == 'success'){
          alert('Data added Successfully');
        }
        else
          alert('Unable to create User'+data.message);
        },
        err=>{
          alert('Error is'+err);
        });
      }).catch(e => {
        alert('Try again later '+e);
    });
  }*/
/*
logout(){
    if(this.userProfile.provider=='facebook'){
      this.fb.logout().then( res => {
        this.isLoggedIn = false;
        this.navCtrl.setRoot(ProfilePage);
        this.storage.remove('userProfile');
      }).catch( e => {
        console.log('Error logging out from Facebook', e);
        alert('Error in logout'+ e);
      });
    }
    else if(this.userProfile.provider == 'ibuddi'){
      this.navCtrl.setRoot(ProfilePage);
      this.storage.remove('userProfile');
    }
  }
*/ 
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetails_productdetails__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedProduct = navParams.get('item');
        this.items = [{ title: "Beer", price: 150, icon: "beer", img: "/assets/imgs/beer.jpg", desc: "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer" },
            { title: "Cider", price: 180, icon: "beer", img: "/assets/imgs/cider.jpg", desc: "Cider, hard apple cider, or hard cider in the US, is an alcoholic beverage made from the fermented juice of apples. Cider is popular in the United Kingdom, especially in the West Country, and widely available. The UK has the world's highest per capita consumption, as well as its largest cider-producing companies. Cider is also popular in many Commonwealth countries, such as Canada, Australia,and New Zealand." },
            { title: "Liquor", price: 200, icon: "beer", img: "assets/imgs/liquor", desc: "" }, { title: "Hard Soda", price: 250, icon: "beer", img: "", desc: "" },
            { title: "Wine", price: 350, icon: "beer", img: "", desc: "" }, { title: "Barley", price: 450, icon: "beer", img: "", desc: "" },
            { title: "Hot Drinks", price: 850, icon: "beer", img: "", desc: "" }, { title: "Mixed Drinks", price: 550, icon: "beer", img: "", desc: "" },
            { title: "Caffeinated", price: 150, icon: "beer", img: "", desc: "" }, { title: "Vodka", price: 450, icon: "beer", img: "", desc: "" },
            { title: "Soft Drinks", price: 550, icon: "beer", img: "", desc: "" }];
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productdetails_productdetails__["a" /* ProductdetailsPage */], {
            item: item
        });
    };
    ProductlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productlist',template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/pages/productlist/productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n	<ion-list *ngFor="let item of items" (click)="itemSelected(item)">\n		{{item.title}}\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/pages/productlist/productlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ProductlistPage);
    return ProductlistPage;
}());

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, global, toastCtrl) {
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        this.counter = 0;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCrXXcnFZyOHi8f2P6qntDqzCX-PFEfbpQ",
            authDomain: "ibuddi-662be.firebaseapp.com",
            databaseURL: "https://ibuddi-662be.firebaseio.com",
            projectId: "ibuddi-662be",
            storageBucket: "ibuddi-662be.appspot.com",
            messagingSenderId: "223194861213"
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            /*      platform.registerBackButtonAction(()=>{
                    if(this.counter == 0){
                      this.counter++;
                      this.presentToast();
                      setTimeout(()=>{this.counter = 0},3000)
                    }else{
                      platform.exitApp();
                    }
                  },0);*/
        });
    }
    MyApp.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shreewebs/Documents/13.04.18/src/app/app.html"*/'<div class="{{global.state[\'theme\']}}">\n<ion-nav [root]="rootPage"></ion-nav>\n</div>'/*ion-inline-end:"/home/shreewebs/Documents/13.04.18/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

/*

    firebase.initializeApp({
      apiKey: "AIzaSyCrXXcnFZyOHi8f2P6qntDqzCX-PFEfbpQ",
      authDomain: "ibuddi-662be.firebaseapp.com",
      databaseURL: "https://ibuddi-662be.firebaseio.com",
      projectId: "ibuddi-662be",
      storageBucket: "ibuddi-662be.appspot.com",
      messagingSenderId: "223194861213"

    });

*/ 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.js.map