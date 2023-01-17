const db = require("../models");

const Aliment = db.alimente;
const Categorie = db.categorii;
const Utilizator = db.utilizatori;

const addCategorie = async (req, res) => {
  let info = {
    id: req.body.id,
    nume: req.body.nume,
  };
  const categorie = await Categorie.create(info);
  res.status(200).json(categorie);
  console.log(categorie);
};

const getCategorie = async (req, res) => {
  const categorie = await Categorie.findByPk(req.params.id, {
    include: Aliment,
  });
  res.status(200).json(categorie);
};

const getAllCategories = async (req, res) => {
  const categorii = await Categorie.findAll({ include: Aliment });
  res.status(200).json(categorii);
};

module.exports = {
  addCategorie,
  getCategorie,
  getAllCategories,
};
