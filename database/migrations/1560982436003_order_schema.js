'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', table => {
      table.increments()
      table.decimal('total', 12, 2).defaultTo(0.0)
      table.text('observations')
      table.string('zip_code')
      table.string('district')
      table.string('street')
      table
        .enu('status', [
          'pendente',
          'cancelado',
          'enviado',
          'pago',
          'finalizado'
        ])
        .defaultTo('pendente')
      table.integer('number')
      table.string('pagamento')
      table.string('entrega')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
