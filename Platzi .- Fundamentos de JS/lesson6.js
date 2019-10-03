// CONTROL STRUCTURES //
// ================== //

var marc = {
    name: 'marc',
    surname: 'smith',
    age: '28', 
    programmer: true,
    cocks: false, 
    singer: false,
    dj: false,
    guitarrist: true, 
    dron_pilot: true
}

function print_characteristics_dumb(person) {
    console.log(`${person.name} is:`)
    if (person.programmer){
        // only if the condiction is true
        console.log('programmer')
    } else {
        console.log('not a programmer')
    }
    // ... and continue like this, not very smart
}

print_characteristics_dumb(marc)

function legalAge(person){
    //
    if (person.age >= 18){
        console.log(`${person.name} is 18 years or more`)
    } else {
        console.log(`${person.name} is less than 18 years`)
    }
}

legalAge(marc)

// second version of the previous function

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.age >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    // 
    if (esMayorDeEdad(persona)){
        console.log('Sí, lo es')
    } else {
        console.log('No, no lo es')
    }
}

imprimirSiEsMayorDeEdad(marc)