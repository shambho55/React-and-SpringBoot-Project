"use strict";
var CustomerP = /** @class */ (function () {
    function CustomerP(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerP.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerP.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerP;
}());
console.log("Below customer is created using constructor : ");
var customer4 = new CustomerP("HariRam", "VyaasJi");
console.log(customer4.firstName);
console.log(customer4.lastName);
