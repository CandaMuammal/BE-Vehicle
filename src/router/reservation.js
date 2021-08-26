const express = require('express')
const router = express.Router()
const images = require('../middlewares/multer')
const reservationController = require('../controllers/reservation')

router
  .get('/', reservationController.getAllReservation)
  .get('/id', reservationController.getReservationById)
  .post('/', images.single('image'), reservationController.insertReservation)
  .put('/:id', reservationController.updateReservation)
  .delete('/:id', reservationController.deleteReservation)

module.exports = router
