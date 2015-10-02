import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { User, Token } from '../models'
import { generateAuthToken } from './auth-controller'
import requireAuth from '../middleware/require-auth'

const SALT_LENGTH = 10

const UsersController = new Router()

UsersController.post('', (req, res) => {
  const { fullName, email, password } = req.body
  const passwordDigest = bcrypt.hashSync(password, SALT_LENGTH)
  User.create({ fullName, email, passwordDigest })
      .then((user) => {
        Token.create({value: generateAuthToken()})
             .then((token) => token.setUser(user))
             .then((token) => {
               res.json({
                 user,
                 token,
               })
             })
             .catch((err) => {
               res.status(500).json(err)
             })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
})

UsersController.use('/*', requireAuth)
UsersController.get('/me', (req, res) => {
  res.json({user: req.currentUser})
})

UsersController.put('/me', (req, res) => {
  const { email, fullName, password } = req.body
  const unsavedUser = req.currentUser

  if (email) unsavedUser.set('email', email)
  if (fullName) unsavedUser.set('fullName', fullName)
  if (password) unsavedUser.set('passwordDigest', bcrypt.hashSync(password, SALT_LENGTH))

  unsavedUser.save()
             .then((user) => res.json({user}))
})

export default UsersController
