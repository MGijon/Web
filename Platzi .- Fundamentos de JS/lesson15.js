// Facing the callback hell with promises

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true } // we indicate that the information will not be shown in this file

function getCharacter(id) {
    
    return new Promise((resolve, reject) => {
        
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        $
            .get(url, options, function(data){
            
            resolve(data)
            
            })
            .fail( () => {reject(id)} )
    })
    
    
}

// Promises is in PENDING state --(resolve)--> FULFILLED state...    .then(val => expected value)
//                              --(reject)---> REJECTED state...     .catch(err => a function)


getCharacter(1)
    .then(function(character) {
        console.log(`${character.name}`)    
    })
    .catch(function(id){
        console.log(`fatall error obtainig the character id number ${id}`)
    })