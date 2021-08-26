const reservationModel = require('../models/reservation')
const helpers = require('../helpers/helper')
const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid')

const getAllReservation = (req, res, next) => {
  const page = req.query.page || 1
  const limit = req.query.limit || 5
  const start = (page - 1) * limit
  reservationModel.getAllReservation(start, limit)
    .then((result) => {
      const reservation = result
      helpers.responseGet(res, reservation, 200, null, page)
    })
    .catch((error) => {
      const err = new createError.InternalServerError()
      next(err)
    })
}

const getReservationById = (req, res, next) => {
  const idReservation = req.params.id
  reservationModel.getReservationById(idReservation)
    .then((result) => {
      const reservation = result
      helpers.responseGet(res, reservation, 200, null)
    })
    .catch((error) => {
      const err = new createError.InternalServerError()
      next(err)
    })
}

const insertReservation = (req, res, next) => {
  const { name, price, image, qty, location, code, time } = req.body
  const data = { 
    name: name,
    price: price,
    code: uuidv4(),
    // image: '',
    image: image,
    qty: qty,
    // description,
    location,
    time,
    createdAt: new Date()
  }

  reservationModel.insertReservation(data)
    .then((result) => {
      const Reservation = result
      helpers.responseInsert(res, Reservation, 200, null)
    })
    .catch((error) => {
      const err = new createError.InternalServerError()
      next(err)
    })
}

const updateReservation = (req, res) => {
  const id = req.params.id
  const { name, price, type, image, stock, description, location } = req.body
  const data = { 
    name: name,
    price: price,
    // type,
    // image: `http://localhost:4000/file/${req.file.filename}`,
    // // image: image,
    // stock: stock,
    // description,
    // location,
    // createdAt: new Date()
  }
  reservationModel.updateReservation(id, data)
    .then((result) => {
      const reservation = result
      helpers.responseUpdate(res, reservation, 200, null)
    })
    .catch((error) => {
      const err = new createError.InternalServerError()
      next(err)
    })
}

const deleteReservation = (req, res) => {
  const id = req.params.id
  reservationModel.deleteReservation(id)
    .then((result) => {
      const reservation = result
      helpers.responseDelete(res, reservation, 200, null)
    })
    .catch((error) => {
      const err = new createError.InternalServerError()
      next(err)
    })
}
module.exports = {
  getAllReservation,
  getReservationById,
  insertReservation,
  updateReservation,
  deleteReservation
}
