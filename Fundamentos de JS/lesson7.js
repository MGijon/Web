// ANONYMOUS AND ARROW FUNCTIONS //
// ============================= //

var pepe = {
    nombre: 'pepe',
    edad: 32
}

const MAYORIA_DE_EDAD = 18

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

// ANONYMOUS FUNCTIONS: In JS we can save as a variable a function 
// --------------------

var esMayorDeEdadANONYMOUS = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

// ARROW FUNCTIONS
// ---------------

const esMayorDeEdadARROW = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

// when we have only one variable we can skip the ()
const esMayorDeEdadARROW_2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}

// If the function only returns somethig, we can use this shortcut
const esMayorDeEdadARROW_3 = persona => persona.edad >= MAYORIA_DE_EDAD

// We are interested in just one paramether, we can go forward with the shortcut
const esMayorDeEdadARROW_4 = ({ edad }) => edad >= MAYORIA_DE_EDAD

/////////////

console.log(esMayorEdad(pepe))
console.log(esMayorDeEdadANONYMOUS(pepe))
console.log(esMayorDeEdadARROW(pepe))
console.log(esMayorDeEdadARROW_2(pepe))
console.log(esMayorDeEdadARROW_3(pepe))
console.log(esMayorDeEdadARROW_4(pepe))