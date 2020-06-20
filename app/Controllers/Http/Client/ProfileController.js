/* eslint-disable camelcase */
'use strict'

const User = use('App/Models/Order')

class ProfileController {
  async show ({ response, auth }) {
    const user = await auth.getUser()

    try {
      

      return response.status(200).send(user)
    } catch (err) {
      console.log(err)
      return response.status(400).send({ message: 'Erro ao listar pedidos' })
    }
  }
}

module.exports = ProfileController
