"use strict";
var CustomerB = /** @class */ (function () {
    function CustomerB(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerB.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerB.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerB;
}());
console.log("Below customer is created using constructor : ");
var customer7 = new CustomerB("HariRam", "VyaasJi");
console.log(customer7.firstName);
console.log(customer7.lastName);
