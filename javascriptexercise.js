/* Exercises
++++++++++++++++++++++ Loops and Iterations +++++++++++++++
In the codepen above, make the loop start at 30, and count down to 0.*/
let counter = 30;
while (counter >= 0){
  document.write(counter + " ");
  counter -= 1;
}

// Using a for loop, display a countdown from 10 to 0. You will need to write i-- in your for loop.
for (let i = 10; i >= 0; i--){
    document.write(i);
}
//1. Print the numbers 1 through 50.
for(let i=1; i<=50; i++){
  document.write(i + " ");
}
//2. If the number is divisible by 7, you must skip the next number.
for(let i=1; i<=50; i++){
  if (i % 7 === 1 && i > 1) {
    continue
  }
     document.write(i + " "); 
  }
  
//3. If the number is divisible by 10 or 15, you must print “Donkey!”.
for(let i=1; i<=50; i++){
  if(i%10 === 0 || i%15=== 0){
   document.write("Donkey! "); 
  }
}
//4. If the number is not divisible by 2 and the previous number is divisible by 10, you must print “Monkey!”.
for(let i=1; i<=50; i++){
  if(i%2 != 0 && (i-1)%10=== 0){
   document.write("Monkey! "); 
  }
}

/* ++++++++++++++++++++++ Array +++++++++++++++++++++++++

Let’s perform a few operations on the array above.
const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
1. Add two of your favorite animals to the end of the array. */
  animalArray.push("sheep", "hen");
  document.write(animalArray); 

//2.	Remove the first two elements of the array.
animalArray.splice(0, 2);
document.write(animalArray); 

//3.	Replace the last element in the array with the word “last”.
animalArray[animalArray.length-1] = "Last"
document.write(animalArray);


/* +++++ Exercise: Common Array Operations +++++ */

//ForEach Exercise
const favFood = ["Pasta", "Chicken", "Pizza", "Soup", "Steak", "Salad"];

favFood.forEach(foods => {
  if((favFood.indexOf(foods)) % 2 === 0){
    document.write(foods + " ");
    console.log(foods);
  }
});

//1.	Sum the Numbers */

let sum = 0;
const numbers = [2, 3, 6, 1, 7, 10];
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);   //29

//2.	Average the Numbers

let sum = 0;
const numbers = [1, 7, 4, 11, 16, 10];
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
let average = sum / (numbers.length);
console.log(average);   // 8.1666

//3.	Find the Largest

const numbers = [10, 16, 99, 0, 52, 41, 7];
let currentLargest = numbers[0];
for (let i=1; i < numbers.length; i++){
  if(numbers[i] > currentLargest){
    currentLargest = numbers[i];
  }
}
 console.log(currentLargest);   // 99

 /* ++++++++++++ Functions +++++++++++++++++

 1. Create a function addNumbers that takes 2 parameters and returns the sum of those parameters.
 2. Create a function subtractNumbers that takes 2 parameters and returns the difference of those parameters.
 3. Create a function multiplyNumbers that takes 2 parameters and returns the product of those parameters.
 4. Create a function divideNumbers that takes 2 parameters and returns the quotient of those parameters.
 5. Create a function calculator that takes 3 parameters. The first two parameters are the numbers. The third parameter, called operation, is the operation you will execute.
      If the operation is “addition”, you should execute the function addNumbers.
      If the operation is “subtraction”, you should execute the function subtractNumbers.
      If the operation is “multiplication”, you should execute the function multiplyNumbers.
      If the operation is “division”, you should execute the function divideNumbers. */

function addNumbers(numOne, numTwo){
  return numOne + numTwo;
}
function subtractNumbers(numOne, numTwo){
  return numOne - numTwo;
}
function multiplyNumbers(numOne, numTwo){
  return numOne * numTwo;
}
function divideNumbers(numOne, numTwo){
  return numOne / numTwo;
}

function calculator(numOne, numTwo, operation){
switch(operation){
  case "addition": return addNumbers(numOne, numTwo); break;
  case "subtraction": return subtractNumbers(numOne, numTwo); break;
  case "multiplication": return multiplyNumbers(numOne, numTwo); break;
  case "division": return divideNumbers(numOne, numTwo); break;
}
}
var result = calculator(20, 30, "multiplication");
document.write(result);