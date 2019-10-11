function createGrettings(finalDeFrase){
  /*
  */
  return function(nombre){
    console.log(`hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = createGrettings('che')
const saludoMejicano = createGrettings('gey')
const saludoColombiano = createGrettings('amigo')

saludoArgentino('pepe')
saludoMejicano('pepe')
saludoColombiano('pepe')
