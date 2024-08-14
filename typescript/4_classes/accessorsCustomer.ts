class CustomerA{

    private _firstName:string;
    private _lastName: string;
   

    constructor(theFirst:string,theLast:string){

        this._firstName = theFirst;
        this._lastName = theLast;

    }

    public get firstName():string{
        return this._firstName;
    }
    
    public set firstName(value:string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

console.log("Below customer is created using constructor : ");

let customer5 = new CustomerA("HariRam","VyaasJi");
console.log(customer5.firstName);
console.log(customer5.lastName);    