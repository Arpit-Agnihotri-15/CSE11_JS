let collection = [
    {name: "Arpit", age: 15},
    [1,2,3,4,5],
    true,
    "Arpit",
    15,
    undefined,
    null,
    new Date(),
    new String("Hello"),

]
console.log(collection);
collection['teacher Name'] = "John";
collection.phoneNo = 6394716649;
console.log(collection);

// Indexing

console.log(collection[0]);
console.log(collection.length);
console.log(collection[collection.length-1]);           
console.log(collection[0].type);
