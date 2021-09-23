const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const images = require('../middlewares/multer')
const auth = require('../middlewares/auth')
const redisCache = require('../middlewares/redis')
const role = require('../middlewares/role')

router
// .get('/products', productController.getAllProductByName)
  .get('/', productController.getAllProduct)
  .get('/:type', productController.getProductByType)
  .get('/products/:id', productController.getProductById)
  .post('/', images.single('image'), productController.insertProduct)
  // .post('/', auth.verifyAccess, images.single('image'), productController.insertProduct)
  .put('/:id',  images.single('image'), productController.updateProduct)
  // .put('/:id', auth.verifyAccess, images.single('image'), productController.updateProduct)
  .delete('/:id', productController.deleteProduct)

module.exports = router
