const utilizatorController = require('../controllers/utilizatorController.js')

const router = require('express').Router()

router.post('/addUtilizator',utilizatorController.addUtilizator)

router.get('/AllUtilizator',utilizatorController.getAllUtilizatorii)



router.get('/:id',utilizatorController. getUtilizator)

router.put('/:id',utilizatorController.updateUtilizator)

router.delete('/:id',utilizatorController.deleteUtilizator)

module.exports=router