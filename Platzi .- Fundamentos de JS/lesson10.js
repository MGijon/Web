// PROTOTYPES //
// ========== //

function Person(name, surname, height){
    // 
    
    this.name = name
    this.surname = surname
    this.height = height
}

// We can not write this as a arrow function, in these 'this' is Window
Person.prototype.Hi = function(){
    //
    console.log(`Hi, my name is ${this.name} ${this.surname}.`)
}

// We can not write this as a arrow function, in these 'this' is Window
Person.prototype.Tall = function(){
    // 
    if (this.height > 1.8){
        console.log('I am tall')
    } else {
        console.log('I am short')
    }
}

var pepe = new Person('Pepe', 'Mujica', 1.60)
var dart = new Person('Dart', 'Vader', 2)

pepe.Hi()
dart.Hi()

pepe.Tall()
dart.Tall()


function Developer(name, surname, height){
    //
    
    this.name = name
    this.surname = surname
    this.height = height
}

Developer.prototype.Hi = function(){
    //
    
    console.log('Hi, I am a developer!!')
}

