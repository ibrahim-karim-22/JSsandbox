
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu 
   
  // function footballPoints(wins, draws, losses) {
  //   let points = (wins * 3) + (draws * 1) + (losses * 0);
  //   return points;
  // }

  // console.log(footballPoints(3, 2, 3));
/////////////////////////

//https://edabit.com/challenge/FipbQSYquQLPZ8QXG
// function isSeven(x) {
// 	return x === 7 ? true : false;
// }
// console.log(isSeven(7));
// console.log(isSeven(8)); 
////////////////////////////////////////

//https://edabit.com/challenge/KSTkFSnaYBJdo6PHx
// function boolToString(flag) {
//   return flag.toString();
// }
// console.log(boolToString(true));
// console.log(boolToString(false));

// //https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG

// function sumPolygon(n) {
//   return (
//     (n - 2) * 180
//     )
// }
// console.log(sumPolygon(7));
//////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
// function checkEquality(a, b) {
//   if (a === b) {
// 		return true;
// 	} else return false;
// }
// console.log(checkEquality(true, 1));
// console.log(checkEquality(1, '1'));
// console.log(checkEquality(1, 1));
/////////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
// function maxNum(n1, n2) {
// 	if (n1 > n2) {
// 	  return n1
// 	} else if (n1 < n2) {
// 		return n2
// 	}
// }
// console.log(maxNum(2, 1));
// console.log(maxNum(1, 2));

///////////////////////////////////
// https://edabit.com/challenge/RMZiERz2cbjmbXruY
// function triangle(n) {
// 	const value = n * (n + 1) / 2;
// 	return value;
// }
// console.log(triangle(6));

///////////////////////////
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

// function capMe(arr) {
//   return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }

// console.log(capMe(['olivia', 'emily']))


/////////////////////////////////
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// function countTrue(arr) {
// 	let trueCounter = 0;
// 	if (arr.length === 0) {
// 		return 0;
// 	} else {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] === true) {
// 				trueCounter++;
// 			}
// 	}
// }
// 	return trueCounter;
// }

// console.log(countTrue([true, false, true, true, true]));

/////////////////////////////////////
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

// function arrayOfMultiples (num, length) {
// 	let len = [];
// 	for (let i = 1; i <= length; i++) {
// 		let	number = num * i;
// 		len.push(number)
// }
// 	return len;
// 	}
	
//   console.log(arrayOfMultiples(7, 5));
///////////////////////////
// https://edabit.com/challenge/EMuszDzF66k9J73HG
// function jazzify(arr) {
//   let result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i].endsWith('7')) {
//           result.push(arr[i]);
//       } else {
//           result.push(arr[i] + '7');
//       }
//   }
  
//   return result;
// }

// console.log(jazzify(['F', 'E', 'A', 'Ab7', 'Gm7', 'C7']))
/////////////////////////////


// https://edabit.com/challenge/erFxBbqzZPSegMwnc

// function changeEnough(change, amountDue) {
// 	const values = [0.25, 0.10, 0.05, 0.01];
// 	let total = 0;
	
// 	for (let i = 0; i < change.length; i++) {
// 		total += change[i] * values[i];		
// 	}
// 	 return total >= amountDue;
// }

// console.log(changeEnough([25, 20, 5, 0], 4.25)); // true
// console.log(changeEnough([2, 100, 0, 0], 14.11)); // false



////////////////////////////
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// function toArray(obj) {
//   return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 })); 


// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

// function concat(...args) {
//   return args.reduce((acc, curr) => acc.concat(curr), []);
// }


// console.log(concat([1, 2, 3], [4, 5], [6, 7]));


///////////////////////////////////////
// https://edabit.com/challenge/4gzDuDkompAqujpRi

// function addUp(num) {
// 	let result = 0;
// 	for (let i = 1; i <= num; i++) {
// 	 result += i;
// 	}
// 	return result;
// }

// console.log(addUp(4));
////////////////////////

// https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

// function splitBunches(fruits) {
//   const result = [];

//   fruits.forEach(fruit => {
//     for (let i = 0; i < fruit.quantity; i++) {
//       result.push({ name: fruit.name, quantity: 1 });
//     }
//   });

//   return result;
// }

// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]));


/////////////////////////////////////
// sumEvenNumbers([10, 15, 20, 25, 30]);

// function sumEvenNumbers (numbers) {
//   let sum = 0;
  
//   numbers.forEach(element => {
//     console.log(element);
//     if (element % 2 === 0) {
//       sum += element;
//       console.log(element);
//     }
//   });
//   console.log('the sum of all the even numbers is: ', sum);
// }

///////////////////////////////////////////

// const names = ['alice', 'bob', 'christopher', 'david', 'eleanor'];

// function countLongNames (names) {
//   result = [];

//   names.forEach(element => {
//     if (element.length > 5) {
//       result.push(element) 
//     }
//   });
//   return result;
// }
// console.log(countLongNames(names));
 //////////////////////////////////////////////////////

 const people = [
  { name: 'rebbecca', age: 25 },
  { name: 'johnny', age: 30 },
  { name: 'kristin', age: 35 },
  { name: 'dave', age: 28 },
 ];

 function findOldestPerson (people) {
  let oldestPerson = null;
  let maxAge = 0;

  people.forEach(person => {
    if (person.age > maxAge) {
      maxAge = person.age;
      oldestPerson = person.name
    }
    console.log('the oldest pesron is: ', oldestPerson);
    return oldestPerson;
  });
 }
