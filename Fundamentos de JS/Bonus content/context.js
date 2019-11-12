const sasha = {
  nombre: 'sasha',
  apellido: 'Lifszyc',
  edad: 28
}

const pepe = {
  nombre: 'pepe',
  apellido: 'gonzalez',
  edad: 32
}

function saludar(saludo = 'Hola'){
   console.log(`${saludo}, mi nombre es ${this.nombre}`) // it won't work, 'this' is refered to window
}

saludar()  // Hola, mi nombre es undefined

const saludarSasha = saludar.bind(sasha)

saludarSasha() // Hola, mi nombre es sasha

const saludarPepe = saludar.bind(pepe)

saludarPepe()  // Hola, mi nombre es pepe

setTimeout(saludar.bind(sasha), 1000) // Hola, mi nombre es sasha // it does not modify the original function
saludar() // Hola, mi nombre es undefined

setTimeout(saludar.bind(sasha, 'Adios'), 1000)  // Adios, mi nombre es sasha

// bind DOES NOT EXECUTE THE FUNCTION, it returns a new one with a different context
// otherwise call does it
console.log('call')
saludar.call(pepe) // Hola, mi nombre es pepe

console.log('apply')
// two paramethers, first the context and later an array with the paramethers of the function
saludar.apply(pepe, ['Anteayer']) // Anteayer, mi nombre es pepe
