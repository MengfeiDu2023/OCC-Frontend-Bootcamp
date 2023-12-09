let score = parseInt(prompt("Enter the score:"));

let grade;
if (score >=90){
    grade = "A";
}
else if (score >= 80 ){
    grade = "B";
}
else if (score >= 70 ){
    grade = "C";
}
else if (score >= 60 ){
    grade = "D";
}
else {
    grade = "E";
}
console.log("The grade for the score "+ score +" is: "+grade);

//Unnecessary to give score >=80 && score < 90 because they screened out with the first if

//log in the last is smarter
//remember to always give an "else" in the last of the if loop