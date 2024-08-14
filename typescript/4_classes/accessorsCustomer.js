"use strict";
class CustomerP {
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
let customer4 = new CustomerP("HariRam", "VyaasJi");
console.log(customer4.firstName);
console.log(customer4.lastName);
