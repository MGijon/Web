// CLASSES //
// ======= //

class Person {
    //
    constructor(name, surname, height){
        this.name = name
        this.surname = surname
        this.height = height
    }
    
    hi(){
        console.log(`Hi, my name is ${this.name} ${this.surname}`)
    }
    
    tall(){
        if (this.height > 1.8){
            return true
        } else {
            return false
        }
    }
}

var pepe = new Person('Pepe', 'Mujica', 1.60)
var dart = new Person('Dart', 'Vader', 2)

class Developer extends Person{
    //
    constructor(name, surname, height){
        super(name, surname, height)
    }
    
    hi(){
        console.log('Hi, I am a happy developer!!')
    }
}

var jose = new Developer('pepe', 'botella', '1.6')

pepe.hi()
jose.hi()