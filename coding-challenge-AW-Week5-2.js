/*2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)*/








/*function divisibleby3() {
   var arr = [1,2,3,4,5,6,7,8,9]
if(i % 3 = 0) {
    console.log(divisibleby3)
} else {
    console.log("Sorry, the numbers are not divisible by three.")
}
    
}*/

/* OKAY so the argument of a function is in the () that is where your argument is and it can be anything. You DECLARE the argument and you CALL the function. So for example below: the arg is the "argument" in the "function numberarray(arg)" Then you can write in the data of that argument by declaring it as seen below. "numberarray([1,2,3,4,5,6,7,8,9])" This declaration gives you the data you need in order to continue your function.


/* when ever you have an array of numbers, you should try to LOOP. FOR LOOP. */

function numberarray(arg) {
    var empty = []
    for(var i = 0; i < arg.length; i++)
        if(arg[i] % 3 === 0) {
            empty.push(arg[i])
        }
    console.log(empty)
   if(empty.length === 0){
        console.log("There are no numbers divisible by three.")
    }
    
}
    


numberarray([1,2,,4,5,,7,8,])

/* Create an empty array, so you can push the data through the array. You are saying..if given number is divisible by three, PUSH it through the empty array. 


else{
        console.log("None of the numbers are divisible by three.")
    }

/*
function divisibleby3(){
var arr = [1, 33, 54, 30, 11, 203, 323, 100, 9];


var divisibleby3 = arr => arr.filter(val => val % 3 == 0);


console.log(isDivisibleBy3(arr));

}

*/
