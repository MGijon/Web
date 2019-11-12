function daysBetweenDates(date1, date2){
  //

  const diff = Math.abs(date1 - date2) // returns a result in miliseconds
  const oneDay = 1000 * 60 * 60 * 24 // miliseconds in one day

  return Math.floor(diff/oneDay)
}

const today = new Date()
const birth = new Date(1994, 3, 4) // the monts starts in 0 (january === 0)!

console.log(`birth : ${birth}`)

res = daysBetweenDates(today, birth)

console.log(`Days since my birth: ${res}`)
console.log(`Years since my birth ${res/365.4}`)
