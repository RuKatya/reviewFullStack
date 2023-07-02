const Router = require('express')
const router = Router();
const { getData, postData, deleteData } = require('../controllers/index')

router
    .get('/get-data', getData)
    .post('/post-data', postData)
    .delete('/delete-data', deleteData)

module.exports = router