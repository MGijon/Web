/*
- ““var”” es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance,
ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificadas,
 tanto dentro como fuera de los bloques internos en una función.

- Con ““let”” por otra parte, el alcance se reduce al bloque (las llaves) en el cual
 la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada
  la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

- ““const”” al igual que ““let”” se define en el contexto o alcance de un bloque, a diferencia
 de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni
  declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables,
por lo que se debe usar let en lugar de var mientras sea posible.
*/

var jose = {
  nombre: 'jose',
  apellido: 'jimenez',
  edad: 30
}

function esMayorDeEdad(persona){
    //
    var mensaje
    let mensajeLet
    if(persona.edad >= 18){
      mensaje = 'es mayor de edad'
      mensajeLet = 'es mayor de edad'
    } else {
      mensaje = 'no es mayor de edad'
      mensajeLet = 'no es mayor de edad'
    }
    console.log(mensaje)
    console.log(mensajeLet)
}

esMayorDeEdad(jose)

for (var i=0; i < 10; i++){
  console.log(i)
}

console.log(`el valor de i (var) llegó hasta ${i}`)

for (let i=0; i < 10; i++){
  console.log(i)
}

console.log(`el valor de i (let) llegó hasta ${i}`)
