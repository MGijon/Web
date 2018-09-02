'use strict'

const Schema = use('Schema')

class CinemaSchema extends Schema {
  up () {
    this.create('cinemas', (table) => {
      table.increments()   /* crea un campo de identificación único denominado 'id' */
      table.string('cinema_name', 100);   /* nombre del cine */
      table.string('cinema_screenshot', 120);   /* imágen del cine */

    })
  }

  down () {
    this.drop('cinemas')
  }
}

module.exports = CinemaSchema
