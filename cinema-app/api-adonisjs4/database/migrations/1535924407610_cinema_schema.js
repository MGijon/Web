'use strict'

const Schema = use('Schema')

class CinemaSchema extends Schema {
  up () {
    this.create('cinemas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cinemas')
  }
}

module.exports = CinemaSchema
