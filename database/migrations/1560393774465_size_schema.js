'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnaliseSchema extends Schema {
  up () {
    this.create('analises', table => {
      table.increments()
      table.string('analise').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('analises')
  }
}

module.exports = AnaliseSchema
