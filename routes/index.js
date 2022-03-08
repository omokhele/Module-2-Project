const {Router} = require('express')
const controller = require('../controller')
const router = Router();

router.get('/', (req, res) => {
    res.send('this is the root!')
})

router.post('/countries', controller.createCountry)

router.get('/countries', controller.getCountries)

router.get('/countries/:id', controller.getCountrybyId)

router.put('/countries/:id', controller.updateCountry)

router.delete('/countries/:id', controller.deleteCountry)

module.exports = router;
