import { Router } from 'express'
import { compareSync } from 'bcryptjs'
import uid from 'uid2'
import { User, Token } from '../models'

const TOKEN_LENGTH = 16
const AuthController = new Router()

AuthController.post('', (req, res) => {
  const { email, password } = req.body
  User.findOne({where: { email }})
    .then((user) => {
      if (compareSync(password, user.passwordDigest)) {
        const value = uid(TOKEN_LENGTH)
        Token.create({value})
          .then((token) => {
            token.setUser(user)
            res.json(token)
          })
          .catch((err) => {
            console.error(err)
            res.json(err)
          })
      }
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

AuthController.delete('', (req, res) => {
  const value = req.headers['x-auth-token'] || req.body.token
  Token.findOne({where: { value }})
    .then((token) => token.destory())
    .then(() => {
      res.status(204)
      res.send()
    })
})

export default AuthController
