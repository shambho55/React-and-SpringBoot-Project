var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
/*
let customer1 = new Customer();

customer1.firstName = "HariRam";
customer1.lastName = "VyaasJi";

console.log(customer1.firstName);
console.log(customer1.lastName);
*/
console.log("Below customer is created using constructor : ");
var customer2 = new Customer("HariRam", "VyaasJi");
console.log(customer2.firstName);
console.log(customer2.lastName);
