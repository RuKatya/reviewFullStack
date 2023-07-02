"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var products_1 = require("../products");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var routeParams = this.route.snapshot.paramMap;
        var productIdFromRoute = Number(routeParams.get('productId'));
        this.product = products_1.products.find(function (product) { return product.id === productIdFromRoute; });
    };
    ProductDetailsComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
