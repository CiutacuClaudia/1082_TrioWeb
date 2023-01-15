const db = require('../models')


const Aliment = db.alimente;
const Categorie = db.categorii;
const Utilizator = db.utilizatori;

// add
const addUtilizator = async (req, res) => {

    let info = {
        id: req.body.id,
        nume: req.body.nume,
        email: req.body.email,
        adresa: req.body.adresa 
        
    }
    const utilizator = await Utilizator.create(info)
    res.status(200).send(utilizator)
    console.log(utilizator)
}
// update
const updateUtilizator = async (req, res) => {

    let idUtilizator = req.params.id

    const utilizator = await Utilizator.update(req.body, { where: { id: idUtilizator } })

    res.status(200).send(utilizator)
}

// delete
const deleteUtilizator = async (req, res) => {

    let idUtilizator = req.params.id

    await Utilizator.destroy({ where: { id: idUtilizator } })

    res.status(200).send('s-a sters Utilizatoru')
}

// toate utilizatori 
const getAllUtilizatorii = async (req, res) => {

    let utilizatori = await Utilizator.findAll({})
    res.status(200).send(utilizatori)
}

// un utilizator 
const getUtilizator = async (req, res) => {

    let idUtilizator = req.params.id
    let utilizator = await Utilizator.findOne({ where: { id: idUtilizator } })
    res.status(200).send(utilizator)
}


module.exports={
    addUtilizator,
    updateUtilizator,
    deleteUtilizator,
    getAllUtilizatorii,
    getUtilizator

   
}