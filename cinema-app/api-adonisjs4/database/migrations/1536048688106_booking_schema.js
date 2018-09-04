'use strict'

const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments();
      table.integer('customer_id').unsigned();
      table.foreign('customer_id').references('customers.id');
      table.integer('movie_showing_time_id').unsigned().comment('película que verá');
      table.foreign('movie_showing_time_id').references('movie_showing_times.id');
      table.dateTime('booking_made_date').comment('cuando se ha realizaod la reserva');
      table.integer('booking_seat_count').comment('número de asientos reservados');
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema

/* este nos permitirá hacer las reservas */