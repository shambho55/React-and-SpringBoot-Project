"use strict";
class CustomerL {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
console.log("Below customer is created using constructor : ");
let customer9 = new CustomerL("HariRam", "VyaasJi");
console.log(customer9.firstName);
console.log(customer9.lastName);
