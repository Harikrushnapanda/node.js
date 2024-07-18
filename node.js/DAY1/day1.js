console.log("Hari");
// node.js is a run time environment for the java script.
// beforly we are running the js codes over the browser i.e, we are running this things in externally. 
// so to run the js code in terminal we are using the node js .
// we can normally run a js file over terminal in node js by writing :- node filename.js
// If we will use the npm then 
// 1. first we have to initialize the npm by writing (npm init) in the terminal.
// 2. After that all package name ,version  and all other things will be displayed and we have to give the proper description .
// 3. after that a json file will create within that file all those datas are going to present.


// Modules

// modular programming : we are spliting the code into many parts that is known as modular programming.

function add(a,b){
    return a+b;
}
console.log(add(2,5)); 
// if we will run this code then we will get the value 7.but in js there may be lots of functions so we have to create a another file to run this all modules.
// so we have created a file math,js to run the function file.
// when we will run this code we will get the error because our code is there in math.js but the print part is in day1.js .
// when ever we need to use the module in main file we  will use the (Require function).
/*const math = require('./math.js');
console.log("math value is ",math);*/ 
// If we will run this then we will get the output but we will get an empty object(like:-{})
// whenever we are making a function then we have to export it to get the output(in that private file i.e, math.js) because it is in private.
/* const math = require('./math.js');
console.log("math value is ",math(2,5));*/

//const math = require('./math.js');
//console.log("math value is ",math.sub(2,5));
// if will run this then we will get the output.here we call call both the add and sub function.

