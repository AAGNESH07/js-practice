//function delecartion
function greet(name) {
  console.log("Hello, " + name );
}

greet("Aagnesh");

//function expression
let sayhello=function(){
    console.log("hello ");

}
sayhello()

//anonymous function
//setTimeout(function(){
    //console.log("iam a anonymous function for one sec");
//},2000)

//invoking function
//(function function1(){
    //console.log(" iam self invoking function");
//})();
  

//callback function
function greet1(name) {
    console.log(`Hello ${name}`);
}

function sayHello(callback) {
    let name = 'Ravi';
    callback(name); // ✅ Call the passed function with the name
}

sayHello(greet1); // ✅ Passing the function, NOT invoking it



//recursive function 
function factorial(n){
    if (n === 0 || n === 1){
        return 1;

    }
    return n * factorial(n-1);
}
console.log(factorial(5));


function countdown(n) {
  if (n < 1) return;
  console.log(n);
  countdown(n - 1);
}

countdown(10);
  

//function with return value
/* 
function add(a,b){
    return a+b;
}
let result = add(5,7);
*/

