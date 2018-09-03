'use strict'

const Schema = use('Schema')

class CinemaSchema extends Schema {
  up () {
    this.create('cinemas', (table) => {
      table.increments()   /* crea un campo de identificación único denominado 'id' */
      table.string('cinema_name', 100);   /* nombre del cine */
      table.string('cinema_screenshot', 120);   /* imágen del cine */
      table.string('cinema_adress', 100);   /* dirección del cine en cuestión */
      table.string('cinema_phone', 14);   /* número del cine */
      table.integer('cinema_seat_capacity');   /* campo para guardar la capacidad del cine */
      table.text('cinema_details');
    })
  }

  down () {
    this.drop('cinemas')
  }
}

module.exports = CinemaSchema
