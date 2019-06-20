import { expect } from 'chai'
import UserService from './UserService'

describe('User service', () => {

  it('createBasicToken', () => {
    const username = 'admin'
    const password = 'password'
    const token = Buffer.from(`${username}:${password}`).toString('base64')
    const response = UserService.createBasicToken(username, password)

    expect(response).to.be.eql(token)
  })
})
