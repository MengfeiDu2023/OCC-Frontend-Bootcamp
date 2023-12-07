//Conditional statements
let age = 20;

//if
if (age >=18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

//if, if-else else
let temperature =1;

if (temperature < 0){
    console.log("It is freezing");
} 
else if (temperature >= 0 && temperature < 20){
    console.log("It is cool outside");
}
else {
    console.log("It is a warm day!");
}

//Conditional : Switch statement
let day = "Monday";
 
switch (day){
    case "Monday": 
        console.log("It is the start of the week");
        break;
    case "Friday":
        console.log("It is the end of the week.");
        break;
    default:
        console.log("It is a regular day.");
        break;
}