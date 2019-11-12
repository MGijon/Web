// LOOPS //
// ===== //

var pepe = {
    name: 'Pepe',
    surname: 'Gonzalez',
    weight: 75,
    age: 28
}

var pepe2 = {
    ...pepe
}

// FOR
// ---

console.log(`${pepe.name}'s weight at the begining of the year (Kgs): ${pepe.weight}`)

const INCREMENT_LOSS = 0.2
const DAYS_PER_YEAR = 365

const wIncreases = person => person.weight += INCREMENT_LOSS
const WLoss = person => person.weight -= INCREMENT_LOSS

for (var i = 1; i <= DAYS_PER_YEAR; i++) {
    
    var random = Math.random()
    
    if (random <= 0.25) {
        // weight increases
        wIncreases(pepe)
        
    } else if (random <= 0.5) {
        // weights decreases
        WLoss(pepe)
    } 
    
}
     
console.log(`${pepe.name}'s weight at the end of the year (Kgs): ${pepe.weight.toFixed(3)}`)

// WHILE
// -----

console.log(`${pepe2.name}'s weight at the begining of the year (Kgs): ${pepe2.weight}`)

var days_until_goal = 0

const WEIGHT_GOAL = pepe2.weight - 2
const eatsALot = () => Math.random() < 0.3
const doSport = () => Math.random() < 0.4

console.log(pepe2.weight)
console.log(WEIGHT_GOAL)

while (pepe2.weight > WEIGHT_GOAL) {
//    debugger
    if (eatsALot()){
        // weight increases  
        wIncreases(pepe2)
    }
    
    if (doSport()){
        // weight decreases
        WLoss(pepe2)
    }
    days_until_goal += 1
}

console.log(`${pepe2.name}'s weight at the end of the year (Kgs): ${pepe2.weight.toFixed(3)}`)

console.log(`${days_until_goal} days until this person loss ${WEIGHT_GOAL}`)


// DO WHILE
// --------

var counter = 0
const raining = () => Math.random() < 0.25

do {
    counter ++
} while (!raining())
    
console.log(counter)

// SWITCH
// ------

var color = prompt('What is your favourite colour?') // Ask the user, null if no answer

switch (color){
    case 'red':
    case 'rojo': // both cases
        console.log('is red')
        break
    case 'blue':
        // ...
        break
    default:
        console.log('your color is not allowed')
        break
}