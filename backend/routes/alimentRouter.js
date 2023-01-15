const alimentController = require('../controllers/alimentController.js')

const router = require('express').Router()


router.post('/addAliment',alimentController.addAliment)

router.get('/allAlimente',alimentController.getAllAlimente)

router.get('/alimenteDisponibile',alimentController.getAlimenteDisponibile)



router.get('/:id',alimentController.getAliment)

router.put('/:id',alimentController.updateAliment)

router.delete('/:id',alimentController.deleteAliment)


module.exports =router