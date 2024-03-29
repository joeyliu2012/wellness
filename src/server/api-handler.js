import { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import logger from './middleware/logger'
import errorHandler from './middleware/error-handler'

import UsersController from './controllers/users-controller'
import AuthController from './controllers/auth-controller'

const APIHandler = new Router()

APIHandler.use(logger)
APIHandler.use(json())
APIHandler.use(urlencoded({extended: true}))
APIHandler.use(errorHandler)

APIHandler.use('/users', UsersController)
APIHandler.use('/auth', AuthController)

export default APIHandler
