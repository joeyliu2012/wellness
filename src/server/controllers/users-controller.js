import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models'
import requireAuth from '../middleware/require-auth'

const SALT_LENGTH = 10

const UsersController = new Router()

UsersController.post('', (req, res) => {
  const { fullName, email, password } = req.body
  const passwordDigest = bcrypt.hashSync(password, SALT_LENGTH)
  User.create({ fullName, email, passwordDigest })
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
})

UsersController.use('/*', requireAuth)
UsersController.get('/me', (req, res) => {
  res.json(req.currentUser)
})

UsersController.put('/me', (req, res) => {
  const { email, fullName, password } = req.body
  const unsavedUser = req.currentUser

  if (email) unsavedUser.set('email', email)
  if (fullName) unsavedUser.set('fullName', fullName)
  if (password) unsavedUser.set('passwordDigest', bcrypt.hashSync(password, SALT_LENGTH))

  unsavedUser.save()
             .then((user) => res.json(user))
})

export default UsersController
