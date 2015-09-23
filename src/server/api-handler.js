import { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import logger from './logger'
import authRequired from './authRequired'

import UsersController from './controllers/users-controller'
import AuthController from './controllers/auth-controller'

const APIHandler = new Router()
APIHandler.use(json())
APIHandler.use(urlencoded({extended: true}))
APIHandler.use(logger)

APIHandler.use('/users', UsersController)
APIHandler.use('/auth', AuthController)

APIHandler.use('/test', authRequired)
APIHandler.get('/test', (req, res) => {
  res.json(req.currentUser)
})

export default APIHandler
