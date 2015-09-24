import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models'
import requireAuth from '../helpers/require-auth'

const SALT_LENGTH = 10

const UsersController = new Router()

UsersController.post('', (req, res) => {
  const { fullName, email, password } = req.body
  const passwordDigest = bcrypt.hashSync(password, SALT_LENGTH)
  User.create({
    fullName,
    email,
    passwordDigest
  })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

UsersController.use('/*', requireAuth)
UsersController.get('/me', (req, res) => {
  res.json(req.currentUser)
})

UsersController.put('/me', (req, res) => {
  const { email, fullName, password } = req.body
  const user = req.currentUser

  if (email) user.set('email', email)
  if (fullName) user.set('fullName', fullName)
  if (password) user.set('passwordDigest', bcrypt.hashSync(password, SALT_LENGTH))

  user.save()
      .then((user) => res.json(user))
})

export default UsersController
