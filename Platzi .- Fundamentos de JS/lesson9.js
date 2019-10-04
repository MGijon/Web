// ARRAYS //
// ====== //

var person_1 = {
    name: 'name 1',
    surname: 'surname 1',
    age: 1
}

var person_2 = {
    name: 'name 2',
    surname: 'surname 2',
    age: 2
}

var person_3 = {
    name: 'name 3',
    surname: 'surname 3',
    age: 3
}

var person_4 = {
    name: 'name 4',
    surname: 'surname 4',
    age: 4
}


// create an array
var people = [person_1, person_2, person_3, person_4]

// access to the first one
console.log(people[0])
console.log(people[0].name)
console.log(people[0]['name'])

// Moving through the array
for (var i = 0; i < people.length; i++){
    console.log(`${people[i].name} is ${people[i].age} years old.`)
}

// Filtering

const isOld = (person) => {
    return person.age > 2
}

const isOld_shorterVersion = person => person.age > 2
const isOld_otherVersion = ({ age }) => age > 2

var olderThanTwo = people.filter(isOld)

console.log(olderThanTwo)

// other way, with anonymoys functions
var olderThenTwo_2 = people.filter(function (person){
    return person.age > 2
})

//////////////////////////////////////////////////////////////////////////////////////////

const yearsToDays = person =>{
    
    return{
        ...person,
        age: person.age * 365
    }
}

const yearsToDays_second_version = person => ({
    ...person,
    age: person.age * 365
})

var personDays = people.map(yearsToDays) // map always return a new object

console.log(people)
console.log(personDays)

//////////////////////////////////////////////////////////////////////////////////////////


var totalLivedYears = 0
for (var i = 0; i < people.length; i++){
    totalLivedYears += people[i].age
}

console.log(totalLivedYears)

var acum = 0
const reducer = (acum, persona) => acum + persona.age
const reducer_2 = (acum, { age }) => acum + age

var totalLivedYears_smart = people.reduce(reducer, 0) // function and the initial value of the reducer

console.log(totalLivedYears_smart)