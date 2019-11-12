function factorial(n){
  /*
  */

  if (!this.cache){
    this.cache = {}
  }

  debugger
  if (this.cache[n]){
    return this.cache[n]
  }

  // Base case
  if (n === 1){
    return 1
  }

  // General case
  this.cache[n] = n * factorial(n - 1)
  debugger
  return this.cache[n]
}

factorial(6)
