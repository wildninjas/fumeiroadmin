'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Analise extends Model {
  static boot () {
    super.boot()
  }

  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }

  order () {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')
  }
}

module.exports = Analise
