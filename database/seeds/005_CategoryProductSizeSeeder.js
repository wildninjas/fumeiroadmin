'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Category = use('App/Models/Category')

class CategoryProductSizeSeeder {
  async run () {
    const categories = await Category.createMany([
      {
        name: 'Pizzas',
        description:
          'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome',
        image_id: 1
      },
      {
        name: 'Massas',
        description:
          '10 tipos de massas com diferentes molhos para te satisfazer',
        image_id: 2
      }
    ])

    const pizzas = await categories[0].products().createMany([
      {
        name: 'Pizza Bacon',
        base_price: 25,
        image_id: 7,
        category_id: 1
      },
      {
        name: 'Pizza Frango Frito',
        base_price: 25,
        image_id: 8,
        category_id: 1
      },
      {
        name: 'Pizza Margherita',
        base_price: 27,
        image_id: 9,
        category_id: 1
      },
      {
        name: 'Pizza Napolitana',
        base_price: 28.5,
        image_id: 10,
        category_id: 1
      },
      {
        name: 'Pizza Portuguesa',
        base_price: 28.5,
        image_id: 11,
        category_id: 1
      }
    ])

    const massas = await categories[1].products().createMany([
      {
        name: 'Macarrão à Carbonara',
        base_price: 22,
        image_id: 7,
        category_id: 2
      },
      {
        name: 'Macarrão Bolonhesa',
        base_price: 25,
        image_id: 8,
        category_id: 2
      },
      {
        name: 'Macarrão Alho e Óleo',
        base_price: 24.75,
        image_id: 9,
        category_id: 2
      },
      {
        name: 'Macarrão ao Molho de Camarão',
        base_price: 27,
        image_id: 10,
        category_id: 2
      },
      {
        name: 'Macarrão ao Molho Branco',
        base_price: 28.5,
        image_id: 11,
        category_id: 2
      }
    ])
  }
}

module.exports = CategoryProductSizeSeeder
