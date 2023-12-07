let score = parseInt(prompt("Enter the score:"));

if (score >=90){
    console.log("Your grade is A");
}
else if (score >= 80 && score < 90){
    console.log("Your score is B");
}
else if (score >= 70 && score < 80){
    console.log("Your score is C");
}
else if (score >= 60 && score < 70){
    console.log("Your score is D");
}
else {
  console.log("Your grade is E. You failed.");
}