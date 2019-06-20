export default (fastify, opts, next) => {

  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  next()
}

// optional
export const autoPrefix = '/'
