'use strict'

const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments()
      table.integer('cinema_id').unsigned();
      table.foreign('cinema_id').references('cinemas_id');
      table.integer('room_rows');
      table.integer('room_seats');
      table.integer('room_number');
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema



/* he parado el tutorial en 07:15 */