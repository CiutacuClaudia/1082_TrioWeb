const categorieController = require('../controllers/categorieController.js')

const router = require('express').Router()

router.post('/addCategorie',categorieController.addCategorie)


module.exports=router