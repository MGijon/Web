

// console.log("hello world")  // print 'hello world' in the console

var name = 'sasha', surname = 'Jimenez'; // two variabels declared

var capitalName = name.toLocaleUpperCase(); 
var regularSurname = surname.toLocaleLowerCase();

var firstLetter = name.charAt(0);

var amounLetters = name.length;  // this is not a method

var completeName = name + ' ' + surname;

var str = name.substr(1, 3) // from position 1 takes 3 characters
    
// interpolation of text:
// ----------------------
// print JS code, ths is an example
var completeNameInterpolated = `${name} ${surname.toUpperCase()}`
