const connection = require('../configs/db')

const getAllReservation = (start, limit) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM reservation LIMIT ${start}, ${limit}`, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

const getReservationById = (idUser) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM reservation WHERE idUser = ?', idUser, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

const insertReservation = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO reservation SET ?', data, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

const updateReservation = (id, data) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE reservation SET ? WHERE id = ?', [data, id], (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

const deleteReservation = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM reservation WHERE id = ?', id, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

module.exports = {
  getAllReservation,
  getReservationById,
  insertReservation,
  updateReservation,
  deleteReservation
}
