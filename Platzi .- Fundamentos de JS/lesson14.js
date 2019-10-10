const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const options = { crossDomain: true } // we indicate that the information will not be shown in this file

// jQuery method to request from an API
//$.get(lukeUrl, options, function(){
//    console.log(arguments)
//}) 

$.get(lukeUrl, options, function(data_luke){
    console.log(`Hi, my name is ${data_luke.name}.`)
})

$.get(lukeUrl, options, function(){
    console.log(arguments)
})

// Multiple requests

const name = function(person){
    console.log(`Hi, my name is ${person.name}.`)
}

function getCharacter(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, name)
}

// not know the order of the information arrive
getCharacter(2)
getCharacter(3)
getCharacter(4)

console.log('Now we study the callbacks')
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// CALLBACKS //
// ========= //

function getCharacterCB(id, callback) {
    
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    //$.get(url, options, function(person){
    //    console.log(`Hi, my name is ${person.name}.`)
    //})
    //if (callback){
    //    callback()
    //}
    
    //$.get(url, options, callback)
    
    $.get(url, options, callback).fail(function(){
        // this will be executed only if something fails
        console.log('Something has happend... :(')
    })
    
}

//getCharacterCB(7, getCharacter(8)) // does not work because both functions executes at the same time

//getCharacterCB(6, function(){
//    getCharacterCB(7, function(){
//        getCharacterCB(8, function(){
//            getCharacterCB(9, function(){
//                getCharacterCB(10)
//            })                              // This is known as CALLBACKS' HELL
//        })
//    })
//})


getCharacter(1, function(person){
    console.log(`${person.name}`)
    getCharacter(2, function(person){
        console.log(`${person.name}`)
        getCharacter(3, function(person){
            console.log(`${person.name}`)
            getCharacter(4, function(person){
                console.log(`${person.name}`)
            })
        })
    })
})
