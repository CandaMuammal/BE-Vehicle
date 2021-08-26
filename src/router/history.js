const express = require('express')
const router = express.Router()
const historyController = require('../controllers/history')
const images = require('../middlewares/multer')


router
  .get('/', historyController.getAllHistory)
  .get('/:id', historyController.getHistoryById)
  .post('/', images.single('image'), historyController.insertHistory)
  .put('/:id', historyController.updateHistory)
  .delete('/:id', historyController.deleteHistory)

module.exports = router
