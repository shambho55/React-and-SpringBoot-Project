class CustomerL{
   

    constructor(private _firstName:string,private _lastName:string){
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

let customer9 = new CustomerL("HariRam","VyaasJi");
console.log(customer9.firstName);
console.log(customer9.lastName);    