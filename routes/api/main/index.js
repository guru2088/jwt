const router = require('express').Router()
const controller = require('./controller')

router.post('/token', controller.token)
router.get('/about', controller.about)


module.exports = router
