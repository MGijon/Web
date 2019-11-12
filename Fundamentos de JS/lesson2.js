// Functions //
// ========= //

var name='Test', age=40

// Function with no arguments
function print_age(){
    // print enviroment variable age, function with no arguments
    console.log(`${name} is ${age} years old.`)
}

print_age()

// function with arguments
function print_age_arguments(n, a){
    // print name and age, variables recived as arguments
    console.log(`${n} is ${a} years old.`)
}

print_age_arguments(n='NoTest', a=14)
