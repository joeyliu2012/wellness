import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models'

const SALT_LENGTH = 10

const UsersController = new Router()

UsersController.post('', (req, res) => {
  const { fullName, email, password, passwordConfirmation } = req.body
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

UsersController.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

export default UsersController
