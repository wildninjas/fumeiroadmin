/* eslint-disable camelcase */
'use strict'

const Analise = use('App/Models/Analise')

class AnaliseController {
  async index ({ response, request, auth }) {
    const order_id= request.input('order_id')
    const user = await auth.getUser()

    const query = Analise.query()
      .where('order_id', order_id)

    try {
      const analise = await query.fetch()

      return response.status(200).send(analise)
    } catch (err) {
      console.log(err)
      return response.status(400).send({ message: 'Erro ao listar analise' })
    }
  }

  async store ({ request, response, auth }) {
    const data = request.only([
      'analise',
      'order_id',
    ])

    const user = await auth.getUser()

    try {

      let analise = await Analise.create({ ...data, user_id: user.id })

      analise = await Analise.find(analise.id)

      return response.status(201).send(analise)
    } catch (err) {
      console.log(err)

      return response.status(400).send({ message: 'Erro ao criar analise' })
    }
  }

  async show ({ response, params, auth }) {
    const user = await auth.getUser()

    try {
      const analise = await Analise.query()
        .where({ user_id: user.id, id: params.id })
        .firstOrFail()


      return response.status(200).send(analise)
    } catch (err) {
      console.log(err)

      return response.status(400).send({ message: 'Erro ao exibir pedido' })
    }
  }
}

module.exports = AnaliseController
