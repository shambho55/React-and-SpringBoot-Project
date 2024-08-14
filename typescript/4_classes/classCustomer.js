"use strict";
var Customer8 = /** @class */ (function () {
    function Customer8(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer8;
}());
/*
let customer1 = new Customer();

customer1.firstName = "HariRam";
customer1.lastName = "VyaasJi";

console.log(customer1.firstName);
console.log(customer1.lastName);
*/
console.log("Below customer is created using constructor : ");
var customer1 = new CustomerB("HariRam", "VyaasJi");
console.log(customer1.firstName);
console.log(customer1.lastName);
