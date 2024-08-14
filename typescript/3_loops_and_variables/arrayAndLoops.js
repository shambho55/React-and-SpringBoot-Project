var books = ['one man punch', 'rich dad poor dad', 'through channel', "it's my life"];
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    if (book == 'rich dad poor dad') {
        console.log("".concat(book, " >> to read first."));
    }
    else {
        console.log(book);
    }
}
var numbers = [4, 7, 8, 9, 6, 5];
var total = 0;
console.log("Iterating through number array");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    total += numbers[i];
    console.log("total after adding " + numbers[i] + " is " + total);
}
var average = total / numbers.length;
console.log("Average of above number of elements of array are : ".concat(average));
console.log("Pushing elements in both Above arrays");
books.push("Cracking the Coding Interview.");
books.push("Head First Java");
for (var _a = 0, books_2 = books; _a < books_2.length; _a++) {
    var book = books_2[_a];
    if (book == 'Head First Java') {
        console.log("My favorite programming book is " + book);
    }
    else {
        console.log(book);
    }
}
numbers.push(99);
numbers.push(55);
console.log("New numbers added : ");
for (var i = numbers.length - 2; i < numbers.length; i++) {
    console.log(numbers[i]);
}
