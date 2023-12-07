//Introduction to Arrays

let superheros = ["Superman","Aquaman","Joker","Batman","Iron Man"];

// console.log("Hero 1 is ", superheros[0]);
// console.log("Hero 5 is ", superheros[4]);
// superheros[2]="Doctor Strange";

// //Push method (means to add one to the last)
// superheros.push("Deadpool");
// console.log(superheros);

// //Pop method (means to remove the last one)
// superheros.pop();

// //Array Iteration
// for (let i=0;i <= 4; i++){
//     console.log("Hero",i+1, "is",superheros[i]);
// }

// //forEach method
// superheros.forEach(function(hero){
//     console.log("Hero is ",hero);
// });

//Array Method
console.log("Array length is", superheros.length);
console.log("Index of Iron Man is:", superheros.indexOf("Iron Man"));
console.log("Joined Array:",superheros.join("-"));

let slicedArray = superheros.slice(1,4);
console.log(slicedArray);