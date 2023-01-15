const db = require('../models')

// main Model

const Aliment = db.alimente;
const Categorie = db.categorii;
const Utilizator = db.utilizatori;

// 1. create aliment 

const addAliment = async (req, res) => {

    let info = {
        id: req.body.id,
        nume: req.body.nume,
        dataExpirare: req.body.dataExpirare,
        disponibil: req.body.disponibil,
        claimed: req.body.claimed
    }

    const aliment = await Aliment.create(info)
    res.status(200).send(aliment)
    console.log(aliment)
}

// 2. get toate alimentele

const getAllAlimente = async (req, res) => {

    let alimente = await Aliment.findAll({})
    res.status(200).send(alimente)
}

// 3. get 1 aliment

const getAliment = async (req, res) => {

    let idAliment = req.params.id
    let aliment = await Aliment.findOne({ where: { id: idAliment } })
    res.status(200).send(aliment)
}

// 4 update aliment 

const updateAliment = async (req, res) => {

    let idAliment = req.params.id

    const aliment = await Aliment.update(req.body, { where: { id: idAliment } })

    res.status(200).send(aliment)
}

// 5. delete 1 aliment

const deleteAliment = async (req, res) => {

    let idAliment = req.params.id

    await Aliment.destroy({ where: { id: idAliment } })

    res.status(200).send('s-a sters alimentu')
}

// 6. toate alimentele 

const getAlimenteDisponibile= async (req,res) => {
    let alimente = await Aliment.findAll({ 
        where: { disponibil : true}
    })
    res.status(200).send(alimente)
}



module.exports={
    addAliment,
    getAliment,
    getAllAlimente,
    updateAliment,
    deleteAliment,
    getAlimenteDisponibile
}
