const { questions } = require('../data')
let rigthAnswer = 0
exports.getData = async (req, res) => {
    res.send({ ok: true, questions })
}

exports.checkAnswer = async (req, res) => {
    console.log(req.body)
    const { correct } = req.body

    if (correct) {
        rigthAnswer += 1
        res.send({ ok: true, rigthAnswer })
    } else {
        res.send({ ok: false })
    }
}