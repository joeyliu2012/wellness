import path from 'path'
import express from 'express'
import webpack from 'webpack'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import config from './web.config'

import apiHandler from './src/server/api-handler'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use('/api', apiHandler)

app.use('/uploads', express.static('uploads'))

app.get('*', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Wellness Diary</title>
    </head>
    <body>
      <div id="main"></div>
      <script src="/static/bundle.web.js"></script>
    </body>
  </html>
  `)
})

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
