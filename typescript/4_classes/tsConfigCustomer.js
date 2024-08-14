"use strict";
class CustomerB {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
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
let customer7 = new CustomerB("HariRam", "VyaasJi");
console.log(customer7.firstName);
console.log(customer7.lastName);
