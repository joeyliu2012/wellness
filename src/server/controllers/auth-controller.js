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
        const unsavedToken = Token.build({value})
        unsavedToken.setUser(user)
        unsavedToken.save()
                    .then((token) => {
                      res.json(token)
                    })
      } else {
        res.status(401).json({
          error: {
            message: 'Unauthorized',
          },
        })
      }
    })
    .catch((err) => {
      throw new Error(err)
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
