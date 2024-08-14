"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportImportCustomer = void 0;
var exportImportCustomer = /** @class */ (function () {
    function exportImportCustomer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(exportImportCustomer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(exportImportCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return exportImportCustomer;
}());
exports.exportImportCustomer = exportImportCustomer;
console.log("Below customer is created using constructor : ");
