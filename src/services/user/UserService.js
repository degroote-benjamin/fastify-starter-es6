/**
 * The UserService
 * @class UserService
 */
export default class UserService {

  /**
   * Get the password and username for create a token
   * @param {string} username the username
   * @param {string} password from user
   * @returns {string} Return basic token
   */
  static createBasicToken(username, password) {
    return Buffer.from(`${username}:${password}`).toString('base64')
  }

}

