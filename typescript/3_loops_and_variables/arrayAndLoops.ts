const books:string[] = ['one man punch','rich dad poor dad','through channel',"it's my life"];

for(let book of books){

    if(book == 'rich dad poor dad'){
        console.log(`${book} >> to read first.`);
    }
    else{
        console.log(book);
    }

}

const numbers:number[] = [4,7,8,9,6,5];

let total = 0;

console.log("Iterating through number array");

for(let i = 0;i < numbers.length;i++){

        console.log(numbers[i]);
        total += numbers[i];
        console.log("total after adding " + numbers[i] + " is " + total);

}

let average = total / numbers.length;

console.log(`Average of above number of elements of array are : ${average}` );

console.log("Pushing elements in both Above arrays");

books.push("Cracking the Coding Interview.");
books.push("Head First Java");

for(let book of books){
    if(book == 'Head First Java'){
        console.log("My favorite programming book is " + book);
    }
    else{
    console.log(book);
    }
}

numbers.push(99);
numbers.push(55);

console.log("New numbers added : ");
for(let i = numbers.length - 2;i < numbers.length;i++){
    console.log(numbers[i]);
}
