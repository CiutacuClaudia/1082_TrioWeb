const db = require('../models')


const Aliment = db.alimente;
const Categorie = db.categorii;
const Utilizator = db.utilizatori;

const addCategorie = async (req, res) => {

    let info = {
        id: req.body.id,
        nume: req.body.nume,
        
    }
    const categorie = await Categorie.create(info)
    res.status(200).send(categorie)
    console.log(categorie)
}

module.exports={
    addCategorie,
   
}