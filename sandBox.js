// function countdown(n) {
//     while (n > 0) {
//         n -= 1
//         console.log(n)
//     }
// }
// countdown(8);

// function sumOfEvens(arr) {
//     let sum = 0; //init sum of evens
//     let i = 0; //value for the arr index
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//         i++;
//     }

//     return sum;
// }

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8]));
//////////af

// function findMax(arr) { //init arr variable to hold array of integers
//     let max = arr[0]; // initialize max to the first element in the array
//     let i = 1; // start looping from the second element (index 1)
//     while (i < arr.length) { //continue looping as long as 1 is less than the length of the array
//         if (arr[i] > max) { //if the current elemnt is greater than the current max
//             max = arr[i] // update max to the current element
//         }
//         i++ // move to the next element
//     }
//     return max; //Return the largest value found
// }
// console.log(findMax([3, 5, 7, 2, 8, -1, 4, 10, 12]));

////////////

// function sumEvenNumbers(arr) {
//     let i = 0; //start loop at the first index in the array
//     let sum = 0; //initialize the sum of evens
//     while (i < arr.length) { //while current index is less than the array length
//         if (arr[i] % 2 === 0) { //check if the number at arr[i] index is divisable by 2
//             sum += arr[i] //if even add the number value to the sum
//         }
//         i++ //next index in the array
//     }
//     return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

// function countVowels(string) {
//     let i = 0; //start the loop at index 0 of the string
//     let total = 0; //init variable to keep track of total
//     const vowels = 'aeiouAEIOU'; //include lower and uppercase
//     while(i < string.length) {
//         if (vowels.includes(string[i])) { //check if character at position 1 is a vowel
//             total += 1 //increment the vowel total
//         }
//         i++
//     }
//     return total;
// }

// console.log(countVowels('Shakespeare'));

// function reverseString(string) {
//     let reversed = ""; //init an empty string to hold the reversed result
//     let i = string.length - 1; // start at the last character of the string

//     while (i >= 0) { //loop backward through the string
//         reversed += string[i]; // add each character to the reversed string
//         i--; // move to the prev character
//     }

//     return reversed; //return the reversed string
// }

// console.log(reverseString('Kristy'));

//////for loop/////

// let sum = 0;
// let num;

// for (let counter = 1; counter <= 3; counter += 1) {
//     num = prompt("type a number ", 1);
//     sum += Number(num);

// }
// console.log("The total of your numbers is : " + sum);

/////

// let sum = 0;
// for (let counter = 1; counter < 4; counter += 1) {
//     let num;
//     let ordinal;

//     switch (counter) {
//         case 1:
//             ordinal= "first";
//             break;
//         case 2:
//             ordinal = "second";
//             break;
//         case 3:
//             ordinal ="third";
//     }
//     num = prompt("enter the  " + ordinal + " number:", 1);
//     sum += Number(num)
// }
// console.log("The average is " + sum / 3);

///

// for (let i = 3; i >= 1; i -= 1) {
//     let ordinal;
//     let color;

//     switch (i) {
//         case 1:
//             ordinal = 'first';
//             break;
//         case 2:
//             ordinal = 'second';
//             break;
//         case 3:
//             ordinal = 'third';
//     }
//     color = prompt("Enter your " + ordinal + " color", '')
//     console.log(i + '. ' + color)

//     }

////do...while//

//in the code below the user can opt out of answering from the very first prompt

// let sum = 0;
// let num = prompt("type a number or click Cancel:", 1);
// while (num != null) {
//     sum += Number(num);
//     num = prompt("type a number or click cancel: ", 1);
// }

///

//in the code below sum and num are init to 0 and the while loop ensures that the prompt runs at least once
//evenn if the user clicks cancel the th value is at 0 instead of null; however the do while speciaalizes in that instead

// let sum = 0;
// let num = 0;
// while (num !== null || sum === 0) {
//     num = prompt("type a number; when youre done, click cancel", 1);
//     sum += Number(num);
// }
// console.log("total is " + sum);

//
// let sum = 0;
// let num;

// do {
//     num = prompt("type a number; when you're done, click Cancel: ", 1)
//     sum += Number(num);
// }
// while (num !== null || sum === 0);
// console.log( 'the total number of your number are ' + sum);

//for loop practice/////////////////

// function sumOfSquares(arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i] * arr[i];
//     }
//     return sum;
// }

// console.log(sumOfSquares([1, 2, 4]));

//////////

// function countDivisibleByThree(arr) {
//     sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 ===0) {
//             sum++
//         }
//     }
//     return sum;
// }

// console.log(countDivisibleByThree([1, 2, 3, 4, 5, 6]));

////do...while practice////

// function findFirstNegative(arr) {
//     let i = 0; //initialze index;
//     let firstNegative = null; //initialize variable to store the first negative #
//     do {
//         if (arr[i] < 0) { //check if the current number is negative
//             firstNegative = arr[i]//store the first negative #
//             break;//exit the loop once the first negative # is found
//         }
//         i++; //increment index
//  } while (i < arr.length); //continue looping while there are elements in the array
//     return firstNegative;//return the first negative # or null if none is found
// }

// console.log(findFirstNegative([-1, 3, 5]))

////////

// function calculateTip(preTip, tipPercent) {
//     const tipResult = preTip * tipPercent;
//     return tipResult;
// }
// const preTipTotal = 100.00;
// const tipPercentge = 0.15;
// const tipCost = calculateTip(preTipTotal, tipPercentge);
// const totalBill = preTipTotal + tipCost;
// document.write("<br>" + "total bill is: $" + totalBill)
//using anonymous function instead
//     const preTipTotal = 100.00;
//     const tipPercentage = 0.15;

//     const tipCost = function(preTip, tipPercent) {
//         const tipResult = preTip * tipPercent;
//         return (tipResult);
//     }

//     const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
//     document.write("<br>" + "Your total Bill $" + totalBill);

// ////////////////

// function makeBodyBlue() {
//     document.body.style.backgroundColor = 'blue'
//     console.log("the backgroud is now blue")
// }
// function makeBodyPink() {
//     document.body.style.backgroundColor = 'hotpink'
// }

// function changeColors(back, text) {
//   document.body.style.backgroundColor = back;
//   document.body.style.color = text;
// }
/////////////////////

///////flatten example///////
// imagine a big box of toys with lots of toys. some of them are visible as
// soon as you open the box, the other are nested within other smaller boxes
// the objective of 'flatten' is to take all the toys in the main box and the
// subboxes and line them up in one line so everything is visible/in the same array
// the 'toys' can be numbers, strings, or other simple things that are inside the
// objects or arrays i.e the main box and the nested boxes.

//the value can be a toy, a box of toys, or a collection of boxes inside more boxes
//we don't know yet so we use the flatten function.

function flatten(value) {
  //first check.
  //is the value given already a 'toy' you are able to see?
  //ex. a number 5 or a word like 'hello'?
  if (typeof value !== "object" || value === null) {
    //if so just return it as is.
    return value;
  }

  //second check.
  //'is this value an array? a box withing the bigger box?
  if (Array.isArray(value)) {
    //if so, run the flattenArray() function that will be defined below.
    return flattenArray(value);
  }

  //otherwise the value must be an object so return/run the flattenObject() function that will be defined below.
  return flattenObject(value);
}

//the flattenArray() function
// in order to open the 'boxes'/arrays within the main box/array.
// the reduce method goes through each toy/box one by one putting them all
// into a single pile by using the concatination.
// for every item in the array:
// the function checks if its a simple toy(i.e number or string) or another
// box using the flatten(curr0 to open the box)
//finally putting them all into one array/one pile

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

//the flattenObject() function
// this checks for objects which are another type of 'box'.
//instead of 'toys' this box has labels for each toy such as "name: Teddy Bear
// or "color: red".
// start by init an empty object where the items will be put after flattening.
// go through each compartment in the box using a for loop.
//if there is another box in the subbox open it using flatten(value) and look for more things.
//if its just a simple 'toy' like a number or string we put it in the intit obj.
//if the item was in another box we put everything from that box into the
//big box (flattenObj) using Object.assign
//if it was just simple 'toy' we put it directly into the box and label it
//(flattnedObj[key] = flattenedValue).

function flattenObject(object) {
  const flattenedObj = {};

  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);

    if (valueIsObject) {
      Object.assign(flattenedObj, flattenedValue);
    } else {
      flattenedObj[key] = flattenedValue;
    }
  }
  return flattenedObj;
}
//test 1
console.log("test 1: flatten a flat object");
console.log(flatten({ name: "Alice", age: 25 }));

//test 2
console.log("test 2: tlatten a nested object");
console.log(
  flatten({ name: "alice", details: { age: 25, city: "wonderland" } })
);

//test 3
console.log("test 3: flatten a nested array");
console.log(flatten([1, [2, [3, 4]], 5]));

//test 4
console.log("test 4: flatten an object with arrays");
console.log(flatten({ numbers: [1, 2, [3, 4]], name: "alice" }));

//test 5
console.log("test 5: flatten a primitive value");
console.log(flatten(42));

//summary
// the 'flatten()' function decides what to do with each item
// do i need to open this box, or is this just a 'toy'?

//the 'flattenArray()' function opens boxes (arrays) full of toys and gather
//everything in one place.

//the 'flattenObject()' function opens boxes (objects) that have labeled compartments
//making sure to not miss aything hidin in smaller boxes inside
