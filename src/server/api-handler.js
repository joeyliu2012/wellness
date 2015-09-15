import { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import logger from './logger'


const apiHandler = new Router()
apiHandler.use(json())
apiHandler.use(urlencoded({extended: true}))
apiHandler.use(logger)

apiHandler.use('/test', (req, res) => {
  res.json({hello: 'world'})
})

export default apiHandler
