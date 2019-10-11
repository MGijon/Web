const sasha = {
  nombre: 'sasha',
  apellido: 'Lifszyc',
  edad: 28
}

const cumpleanos = persona => persona.edad++

const cumpleanosInmutalbe = persona => ({
  ...persona,
  edad: persona.edad + 1
})
