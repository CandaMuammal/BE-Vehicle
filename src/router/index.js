const express = require('express')
const router = express.Router()
const productRouter = require('./product')
const reservationRouter = require('./reservation')
const historyRouter = require('./history')
const userRouter = require('./user')
const multer = require('../middlewares/multer')
// app.use('/products', productRouter)
// app.use('/users', userRouter)
router
  .use('/product', productRouter)
  .use('/user', userRouter)
  .use('/history', historyRouter)
  .use('/reservation', reservationRouter)

module.exports = router
