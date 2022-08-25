// creating arrays
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array)
// o/p (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array1 = ['sandeep', 'sandy', 2, [], null, undefined, ['a', 'b'], 0.3]
console.log(array1);
// o/p (8) ["sandeep", "sandy", 2, Array(0), nu...]

//to find out the length
console.log('Array length : ' + array.length)
// o/p Array length : 11

//Accessing and modifying arrays
console.log(array1[6])
  (2)["a", "b"]

let modifiedArray1 = array1[8] = [0, 1, 2]
console.log(modifiedArray1); // modified array
(3)[0, 1, 2]

console.log(array1); // original array

// finding item or indexes in an array
let indexedArray = ['apple', 'bat', '0', 0, 'snake'];
console.log('Arrya index ' + indexedArray.indexOf(0))
// o/p Arrya index 3

console.log('Arrya index ' + indexedArray.indexOf('car'))
// o/p Arrya index -1

// If you know the index of an item, you can remove it from the array using splice():

const cities = ['ABC', 'DEF', 'GHI', 'LMN'];
const index = cities.indexOf('DEF');
if (index !== -1) {
  cities.splice(index, 1)
}
console.log(cities);

// (3) ["ABC", "GHI", "LMN"]

//In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed

// Accessing every item in the array
const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}
Parrot
Falcon
Owl

// using MAP operator

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);

(4)[10, 4, 14, 12]

//We give a function to the map(), and map() calls the function once for each item in the array, passing in the item.
//It then adds the return value from each function call to a new array, and finally returns the new array.


