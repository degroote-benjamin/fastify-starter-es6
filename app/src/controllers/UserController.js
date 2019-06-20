import { HTTP_201_CREATED } from '../config/constant'
import UserService from '../services/user/UserService'

/**
 * The UserController
 * @class UserController
 */
export default class UserController {

  /**
   * Get the password and username for create a token
   * @param {object} request the username
   * @param {object} reply from user
   * @returns {object} Return basic token
   */
  static login(request, reply) {
    try {
      const { username, password } = request.body
      const token = UserService.createBasicToken(username, password)

      reply.code(HTTP_201_CREATED).send({
        token,
      })
    } catch (err) {
      throw err
    }
  }

}

