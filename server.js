import AutoLoad from 'fastify-autoload'
import fastify from 'fastify'
import path from 'path'

const server = fastify()

// Load custom plugins including models
server.register(AutoLoad, {
  dir: path.join(__dirname, 'src/routes'),
})


// Add user context to request object
// fastify.addHook('preHandler', async request => {
//   request.userContext = { currentUser: {} };
//   await fastify.loadUserContext(request, fastify.Models.AccessToken);
// });

server.listen(4025, (err, address) => {
  if (err) {
    throw err
  }
  console.log(`server listening on ${address}`)
})

