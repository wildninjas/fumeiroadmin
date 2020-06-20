'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static boot () {
    super.boot()
  }

  image () {
    return this.belongsTo('App/Models/Image')
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }

  items () {
    return this.belongsToMany('App/Models/OrderItem')
  }
}

module.exports = Product
