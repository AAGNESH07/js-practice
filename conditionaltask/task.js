//task-1  even | odd
//let num = Number(prompt("enter a number"))
//if (num % 2 == 0) {
//console.log("num is Even.")
//}
//else {
//console.log("num is Odd.")
//}

// task-2 temperature alert
//let weather = Number(prompt("enter the temperature"))
//if (weather > 30) {
//console.log("temp is hot")
//} else {
//console.log("temp is cool")
//}

//task-3 number nature checker
//let input = Number(prompt("Enter a number:"));
//if (input > 0) {
//console.log("the number you entered is positive")
//} else {
//console.log("the number you entered is negativee")
//}


//Task-4 | sample grade
// Grade Checker

//let marks = Number(prompt("Enter your marks:"));

//if (marks < 0 || marks > 100) {
//console.log("Please enter valid marks between 0 and 100.");
//} else {
//if (marks > 90) {
//console.log("Grade: A");
//} else if (marks > 75) {
//console.log("Grade: B");
//} else if (marks > 60) {
//console.log("Grade: C");
//} else {
//console.log("Grade: Fail");
//}
//}


//Traffic Signal using switch
//let signal = "go"
//switch(signal){
//case "stop":
//console.log(" stop your bike");
//break;
//case "ready":
//console.log("start your bike");
//break;
//default:
//console.log("you  can go");
//}


//Nested Conditions: Number Checker



// Weekday Checker
//let day ="staturday"
//switch(day){
//case "Monday":
//console.log("its a weekday");
//break;
//case "friday":
//console.log("Almost a weekend");
//break;
//default: 
// console.log("its a weekend");
//}



//Age Category Classifier
//let age=Number(prompt("enter your age"))
//if (age < 18 )
//{
//console.log(" you are a minor")
//}else if(age <= 60)
//{
// console.log(" you are an adult")
//}else {
//console.log("you are a senior ")
//}



//Calculator using switch
//let number1 = Number(prompt("Enter the value of number1: "));
//let number2 = Number(prompt("Enter the value of number2: "));

//operator = prompt("Enter a operator ( +, -, *, / ): ");
//switch(operator) {
//case "+":
//result = number1 - number2;
//console.log(number1 + " + " + number2 + " = " + result);
//break;
//case "-":
//result = number1 - number2;
//console.log(number1 + " - " + number2 + " = " + result);
//break;
//case "*":
//result = number1 * number2;
//console.log(number1 + " * " + number2 + " = " + result);
//break;
//case "/":
//result = number1 / number2;
//console.log(number1 + " / " + number2 + " = " + result);
//break;
//default:
//console.log("Invalid operator");
//}

//Month to Season Converter
//let month = Number(prompt("Enter a month number (1-12):"));
//switch (month) {
   // case 1:
    //case 2:
    //case 3:
        //console.log("it is a winter season")
        //break;
    //case 4:
    //case 5:
    //case 6:
        //console.log("it is a spring season")
        //break;
    //case 7:
    //case 8:
    //case 9:
        //console.log("it a summer season")
        //break;
    //case 10:
    //case 11:
    //case 12:
        //console.log("it is a Fall");
        //break;
    //default:
        //console.log("it is not valid month  you entered")
//}


//Vowel or Consonant Identifier
//let char = prompt("enter a letter")
//if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
    //console.log("the letter is vowel")
//}else
//{
    //console.log("letter entered a consonant")
//}



//password strength checker
let password = prompt("Enter your password:");

if (password.length < 6) {
    console.log("Password Strength is Weak");}
    else if(!/\d/.test(password)){
    console.log("password strenght is medium");
    }
else{
        console.log("password you enter is strong")
    }



    ///Time-Based Greeting
// Time-Based Greeting

let hour = Number(prompt("Enter the hour (0–23):"));

if (hour >= 5 && hour <= 11) {
    console.log("Good Morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good Afternoon");
} else if (hour >= 18 && hour <= 21) {
    console.log("Good evening");
} else if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour < 5)) {
    console.log("Good Night");
} else {
    console.log("invalid hour u entered.");
}
