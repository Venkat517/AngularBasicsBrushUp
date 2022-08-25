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


