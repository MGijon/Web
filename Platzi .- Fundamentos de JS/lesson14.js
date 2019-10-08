const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const options = { crossDomain: true } // we indicate that the information will not be shown in this file

// jQuery method to request from an API
$.get(lukeUrl, options, function(){
    console.log(arguments)
}) 