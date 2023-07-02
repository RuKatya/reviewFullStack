const { Router } = require('express')
const { getData, checkAnswer } = require('../controllers')
const router = Router()

router
    .get('/get-all-questions', getData)
    .post('/check-answer', checkAnswer)

module.exports = router