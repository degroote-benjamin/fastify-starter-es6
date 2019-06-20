import UserController from '../controllers/UserController'

export default (fastify, opts, next) => {

  fastify.post('/login', UserController.login)

  next()
}

// optional
export const autoPrefix = '/users'
