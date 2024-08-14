"use strict";
var CustomerL = /** @class */ (function () {
    function CustomerL(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerL.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerL.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerL;
}());
console.log("Below customer is created using constructor : ");
var customer9 = new CustomerL("HariRam", "VyaasJi");
console.log(customer9.firstName);
console.log(customer9.lastName);
