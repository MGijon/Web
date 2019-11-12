// Objects //
// ======= //

var person1 = {
    // this is an object in JS
    name: 'Albert',
    surname: 'Einstein',
    age: 34
}

var person2 = {
    // another object in JS
    name: 'jose',
    surname: 'sad',
    age: 13
}

// First way, passing an atributte
function capital(name){
    n = name.toUpperCase()
    console.log(n)
}

capital(person1.name)
capital(person2.name)

// Second: passing a object and taken its atributtes inside the function
function capital_2(person){
    var name = person.name.toLocaleUpperCase()
    console.log(name)
}

capital_2(person1)
capital_2(person2)

// Third way
function capital_3({ name }){
    console.log(name.toUpperCase())
}

capital_3({ name: 'Tetuán' })
//capital_3({ surname: 'Maritnez'}) // it wont work because the given object has no 'name' atribute

// Four variation
function capital_4(person){
    //
    var { name } = person // == var name = person.name
    console.log(name.toUpperCase())
}

capital_4(person1)
capital_4(person2)


//// Challenge

function saysHi(person){
    // print something like 'hi! name, your age is xx years :
    var {name} = person // == var name = person.name
    var {age} = person  // == var age = person.age
    greetings = `Hi! ${name}, your age is ${age} years old... :)`
    
    console.log(greetings)
}


saysHi(person1)
saysHi(person2)