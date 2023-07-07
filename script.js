// 1. printName function: Create a function named printName which logs a
// name to the console.

function printName(name){
    console.log(name);
}
printName("Jeremiah Paredes");



// 2. greetUser function: Create a function named greetUser that accepts a
// string as an argument representing a username, and returns a greeting in
// the form of a string.

function greetUser(greetUser){
    console.log("welcome " + greetUser)
}
greetUser("jeremiah");


// 3. buyCoffee function: Create a function named buyCoffee that accepts a
// number representing dollars, subtracts a constant representing the price of
// a coffee, and returns the remainder as a number.

function buyCoffee(dollars) {
    const coffeePrice = 3.5;
    return dollars - coffeePrice;
  }
   
buyCoffee(8);


// 4. checkWeather function: Create a function named checkWeather that
// accepts a string representing a weather condition and a number representing
// temperature. The function should return a string suggesting what to wear
// based on the weather condition and temperature.


function checkWeather(weatherCondition, temperature) {
    if (weatherCondition === "sunny" && temperature > 25) {
      return "Wear light clothing.";
    } else if (weatherCondition === "rainy" && temperature > 15) {
      return "Take an umbrella";
    } else {
      return "Check the local weather forecast for more info";
    }
  }
checkWeather("sunny", 40);




// 5. areaOfTriangle function: Create a function named areaOfTriangle that
// accepts two numbers representing the base and height of a triangle, and
// returns the area as a number.

function areaOfTriangle(base, height) {
    return (base * height) / 2;
  }
areaOfTriangle(5,8);


// 6. diceRoller function: Create a function named diceRoller that simulates
// a dice roll and logs the result to the console.

function diceRoller() {
    return Math.floor(Math.random() * 6) + 1;
  }
  console.log(diceRoller);


// 7. helloAliyahOrHakeem function: Create a function named helloAliya-
// hOrHakeem that prompts the user for their username using the prompt
// function and logs a greeting to the console if their username is either
// “aliyah” or “hakeem”.





// 8. getInitials function: Create a function named getInitials that accepts a
// string representing a full name, and returns the initials as a string.





// 9. myHobbies function: Create a function named myHobbies that accepts
// an array of strings representing hobbies, and logs the array to the console.

const hobbies = ["video games", "eating","sports","tech"]

function myHobbies(hobbies) {
    console.log(hobbies);
  }
myHobbies(hobbies)


// 10. containedInStringArray function: Create a function named con-
// tainedInStringArray that accepts an array of strings and a string. The
// function should return a boolean value indicating whether the given string
// is contained in the array.






// 11. wordsInString function: Create a function named wordsInString that
// accepts a string and returns the count of words in it.

// 12. vowelsInString function: Create a function named vowelsInString that
// accepts a string and returns the count of vowels in it.
// 1

// 13. firstElementInStringArray function: Create a function named firstEle-
// mentInStringArray that accepts an array of strings and returns the first
// element in the array.

// 14. lastElementInStringArray function: Create a function named lastEle-
// mentInStringArray that accepts an array of strings and returns the last
// element in the array.

// 15. secondToLastElementInStringArray function: Create a function
// named secondToLastElementInStringArray that accepts an array of strings
// and returns the second to last element in the array.

// 16. swapFirstElementWithLastElementInStringArray function: Cre-
// ate a function named swapFirstElementWithLastElementInStringArray
// that accepts an array of strings, swaps the first and last elements, and
// returns the modified array.

// 17. lastIndexInStringArray function: Create a function named lastIndex-
// InStringArray that accepts an array of strings and returns the index of the
// last element.

// 18. secondToLastIndexInStringArray function: Create a function named
// secondToLastIndexInStringArray that accepts an array of strings and re-
// turns the index of the second to last element.

// 19. indexByStringArrayElement function: Create a function named in-
// dexByStringArrayElement that accepts an array of strings and a string,
// and returns the index of the string in the array.

// 20. sumOfIntArray function: Create a function named sumOfIntArray
// that accepts an array of integers and returns the sum of all integers in the
// array.

// 21. averageOfIntArray function: Create a function named averageOfIntAr-
// ray that accepts an array of integers and returns the average of all integers
// in the array.

// 22. oddNumbersInIntArray function: Create a function named oddNum-
// bersInIntArray that accepts an array of integers and returns a new array
// containing only the odd numbers.

// 23. evenNumbersInIntArray function: Create a function named even-
// NumbersInIntArray that accepts an array of integers and returns a new
// array containing only the even numbers.

// 24. oddNumbersInRange function: Create a function named oddNum-
// bersInRange that accepts two integers representing a range, and returns
// an array of all odd numbers within that range.

// 25. createStringOfFibonacciUpToMax function: Create a function
// named createStringOfFibonacciUpToMax that accepts an integer and
// returns an array of Fibonacci numbers up to that integer.
// 2

// 26. printGivenStringTimesNumberGiven function: Create a function
// named printGivenStringTimesNumberGiven that accepts a string and an
// integer, and logs the string to the console the given number of times.

// 27. repeatFirstThreeLetters function: Create a function named repeat-
// FirstThreeLetters that accepts a string and an integer, and returns a string
// with the first three letters of the input string repeated the given number
// of times.

// 28. replaceCharacters function: Create a function named replaceCharacters
// that accepts a string and returns a new string where certain characters are
// replaced according to the following rules:
// •Replace ‘a’ or ‘A’ with ‘@’
// •Replace ‘f’ or ‘F’ with ‘7’
// •Replace ‘s’ or ‘S’ with ‘$’
// •Replace ‘1’ with ‘!’





// const names  = ["bob","king","luke"];

// function getLastIndex(array) {
//     console.log(array.length - 1)
// }
// getLastIndex(names);




// function getSecondToLastElement(array){
//     console.log(array[array.length - 2])
// }
// getSecondToLastElement(names);




// function loopThroughArray(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//       }
// }
// loopThroughArray(names);



