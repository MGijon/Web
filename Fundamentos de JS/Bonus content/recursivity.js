function divisionEntera(dividendo, divisor){
  /*
  */

  // Base case
  if (dividendo < divisor){
    return 0
  }

  // General case
  return 1 + divisionEntera(dividendo - divisor, divisor)

}


console.log(divisionEntera(13, 4))

console.log(divisionEntera(30, 10))
