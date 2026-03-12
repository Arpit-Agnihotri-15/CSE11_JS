// ===============================
// 1. ARRAY WITH DIFFERENT DATA TYPES
// ===============================

let collection = [
    {name: "Arpit", age: 15},     // object
    [1,2,3,4,5],                  // array
    true,                         // boolean
    "Arpit",                      // string
    15,                           // number
    undefined,                    // undefined
    null,                         // null
    new Date(),                   // date object
    new String("Hello")           // string object
];

console.log("Original Array:");
console.log(collection);


// ===============================
// 2. ADDING PROPERTIES TO ARRAY
// ===============================

collection["teacherName"] = "John";
collection.phoneNo = 6394716649;

console.log("Array After Adding Properties:");
console.log(collection);


// ===============================
// 3. INDEXING IN ARRAY
// ===============================

console.log("First Element:");
console.log(collection[0]);

console.log("Array Length:");
console.log(collection.length);

console.log("Last Element:");
console.log(collection[collection.length - 1]);

console.log("Access Object Property:");
console.log(collection[0].name);
console.log(collection[0].age);


// ===============================
// 4. NORMAL ARRAYS
// ===============================

var myinfo = ["sachin", "mumbai", 34, "cricket"];
var myinfo1 = ["mahi", "mumbai", 34, "cricket"];

console.log("Array Example:");
console.log(myinfo, myinfo1);


// ===============================
// 5. OBJECT WITH FUNCTION (METHOD)
// ===============================

let collections = {
    name: "sachin",
    city: "mumbai",
    age: 34,
    profession: "cricket",

    display: function(){
        console.log("Hello World");
    }
};

console.log("Object with Method:");
console.log(collections);

collections.display();


// ===============================
// 6. ADDING NEW PROPERTIES TO OBJECT
// ===============================

collections.teachername = "sachin";
collections.phonenumber = 1234567890;

console.log("Object After Adding Properties:");
console.log(collections);


// ===============================
// 7. OBJECT LITERAL EXAMPLE
// ===============================

let trainerinfo = {
    name: "Vijay",
    city: "Pune",
    age: 30,
    profession: "Trainer"
};

trainerinfo.contact = 1234567890;

console.log("Trainer Info Object:");
console.log(trainerinfo);