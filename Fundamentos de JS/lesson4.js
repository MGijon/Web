// PARAMETHERS PER VALUE AND REFERENCE //
// =================================== //

var person1 = {
    name: 'jose',
    age: 12
}

// It affects the value of the global variable <- THE OBJECTS ARE PASSED BY REFERENCE
function birthday(person) {
    person.age += 1 // == person.age = person.age + 1
}

console.log(person1) // {name: "jose", age: 12}

birthday(person1)

console.log(person1) // {name: "jose", age: 13}

// This way not, passing the attribute of the object 
function birthday2(age){
    age += 1
}

// We can keep the original gloabl varible 
function birthday_new(persona){
    // Returns a new object, a copy of the passed one but changing the value of one atributte
    return {
        ...persona,
        age: persona.age + 1 
    }
}

var new_person = birthday_new(person1)

console.log(new_person) // {name: "jose", age: 14}