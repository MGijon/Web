// FUNCTIONS AS PARAMETERS //
// ======================= //

class Person {
    //
    constructor(name, surname, height){
        this.name = name
        this.surname = surname
        this.height = height
    }
    
    hi(fn){
        console.log(`Hi, my name is ${this.name} ${this.surname}`)
        if (fn){
            // if we have passed a function, if not is undefinide, which is evaluated as false
            fn(this.name, this.surname, null) // null is evaluated as false
        }
    }
    
    tall(){
        if (this.height > 1.8){
            return true
        } else {
            return false
        }
    }
}

class Developer extends Person{
    //
    constructor(name, surname, height){
        super(name, surname, height)
    }
    
    hi(fn){
        console.log('Hi, I am a happy developer!!')
        if (fn){
            fn(this.name, this.surname, true)
        }
    }
}

function HiBack = (name, surname, isDev) {
    console.log(`Hi you, ${name} ${surname}, too! Have a nice day.`)
    if(isDev){
        console.log('I did not know you were a developer too')
    }
}

var pepe = new Person('Pepe', 'Mujica', 1.60)
var dart = new Person('Dart', 'Vader', 2)
var jose = new Developer('pepe', 'botella', '1.6')

pepe.hi()
dart.hi(HiBack)
jose.hi(HiBack)