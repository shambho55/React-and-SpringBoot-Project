class Customer8{

    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){

        this.firstName = theFirst;
        this.lastName = theLast;

    }

}

/*
let customer1 = new Customer();

customer1.firstName = "HariRam";
customer1.lastName = "VyaasJi";

console.log(customer1.firstName);
console.log(customer1.lastName);
*/

console.log("Below customer is created using constructor : ");

let customer1 = new CustomerB("HariRam","VyaasJi");
console.log(customer1.firstName);
console.log(customer1.lastName);