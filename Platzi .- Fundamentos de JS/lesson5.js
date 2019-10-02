// COMPARATIONS //
// ============ //

// Variables
// ---------

var x = 4, y = '4'

// == 
// turs both into one single type of data in order to compare
console.log(x == y) // true

// ===
// true if the are the same type of data and keep the same value
console.log(x === y) // false

// Objects
// -------

var person1 = {
    name: 'jose'
}

var person2 = {
    name: 'jose'
}

var person3 = person1 // both variables point to the SAME POINT in RAM memory
                      // modify person3 means modify person1!!

console.log(person1 == person1) // false
console.log(person1 === person2) // false

console.log(person1 == person3) // true
console.log(person1 === person3) // true


var person4 = {
    ...person1
}

console.log(person1 == person4) // false
console.log(person1 === person4) // false