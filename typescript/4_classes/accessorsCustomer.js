var CustomerA = /** @class */ (function () {
    function CustomerA(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerA.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerA.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerA;
}());
console.log("Below customer is created using constructor : ");
var customer5 = new CustomerA("HariRam", "VyaasJi");
console.log(customer5.firstName);
console.log(customer5.lastName);
