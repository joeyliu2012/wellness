import { Router } from 'express'
import multer from 'multer'

const upload = multer({
  dest: 'uploads/',
})

const PhotosController = new Router()

PhotosController.post('', upload.single('file'), (req, res) => {
  res.json(req.file)
})

export default PhotosController
