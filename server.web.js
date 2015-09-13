import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './web.config'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})