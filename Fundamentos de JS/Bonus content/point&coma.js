/*
  ; is necessary in this cases (or similar ones)
*/

// 1
// =

console.log('Hi, mdsoada');
[1, 2, 3, 4].forEach(n => console.log(n * 2))

console.log('Hi, mdsoada') // also
;[1, 2, 3, 4].forEach(n => console.log(n * 2))

// 2
// =

const nombre = 'Sasha'
console.log('hsodaa');
`${nombre} is a developer`

// 3
// =

function double(number){
  return {
    original: numero,
    doble: numero * 2
  }
}

console.log(double(30))

// after the return we must not write in a different line
function doubleNOTWORKING(number){
  return
  {
    original: numero,
    doble: numero * 2
  }
}

console.log(doubleNOTWORKING(30))
