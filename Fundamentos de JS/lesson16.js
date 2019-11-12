// ASYNC-AWAIT //
// =========== //

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

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

function onError(id){
    console.log(`Error , id : ${id}`)
}

// we need the try/cathc block and the 'async' in order to be able to use the 'await' resorce
async function severalPromisesParalell(){
    
    var ids = [6, 7, 8, 9, 10]
    var promises = ids.map(id => getCharacter(id)) 
    
    try{
        var characters = await Promise.all(promises) 
        console.log(characters)
    } catch(id){
        onError(id)
    }
    
}

severalPromisesParalell()