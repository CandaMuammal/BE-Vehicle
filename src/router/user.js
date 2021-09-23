const express = require('express')
const router = express.Router()
const images = require('../middlewares/multer')
const userController = require('../controllers/user')

router
  .get('/', userController.getAllUser)
  .get('/:id', userController.getUserById)
  // .post('/', userController.insertUser)
  .put('/:id', images.single('image'), userController.updateUser)
  // .delete('/:id', userController.deleteUser)
  .post('/register', userController.register)
  .post('/login', userController.login)

module.exports = router
