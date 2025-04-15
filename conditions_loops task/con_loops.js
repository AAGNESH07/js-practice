//print 1 to 10 numbers

//for (let i = 1; i <= 10; i++) {
    //console.log(i);
//}


//even number from 1 to 20
//let num = 2;

//while (num <= 20) {
    //console.log(num);
    //num += 2;
//}


//Sum of First 10 Natural Numbers
//let sum = 0;

//for (let i = 1; i <= 10; i++) {
    //sum += i;
//}

//console.log("Sum of first 10 natural numbers is:", sum);



//Countdown from 10 to 1
//let count = 10;

//while (count >= 1) {
    //console.log(count);
    //count--;
//}



//check even r odd
//for (let i = 1; i <= 10; i++) {
    //if (i % 2 === 0) {
        //console.log(i + " is even");
    //} else {
        //console.log(i + " is odd");
    //}
//}




//5 table
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


//sum even number from 1 to 50
let num = 1;
let sum = 0;

while (num <= 50) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}

console.log("Sum of even numbers from 1 to 50 is:", sum);



//number divisible 3 and 5 (1 to 100)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


//Print First 10 Odd NumbersUse a while loop to print the first 10 odd number
let count = 0;
let number = 1;

while (count < 10) {
    if (number % 2 !== 0) {
        console.log(number);
        count++;
    }
    number++;
}



//. Reverse String Using LoopAsk user for input and reverse the string using a for loop.
let input = prompt("Enter a string to reverse:");
let reversed = "";

for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
}

alert("Reversed string: " + reversed);
