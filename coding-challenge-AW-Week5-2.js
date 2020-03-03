/*2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)*/








/*function divisibleby3() {
   var arr = [1,2,3,4,5,6,7,8,9]
if(i % 3 = 0) {
    console.log(divisibleby3)
} else {
    console.log("Sorry, the numbers are not divisible by three.")
}
    
}*/

function divisibleby3(){
var arr = [1, 33, 54, 30, 11, 203, 323, 100, 9];


var divisibleby3 = arr => arr.filter(val => val % 3 == 0);


console.log(isDivisibleBy3(arr));

}