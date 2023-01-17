const db = require("../models");

const Aliment = db.alimente;
const Categorie = db.categorii;
const Utilizator = db.utilizatori;

// update
const updateUtilizator = async (req, res) => {
  let idUtilizator = req.user.id;

  const utilizator = await Utilizator.update(req.body, {
    where: { id: idUtilizator },
  });

  res.status(200).json(utilizator);
};

// delete
const deleteUtilizator = async (req, res) => {
  let idUtilizator = req.user.id;

  await Utilizator.destroy({ where: { id: idUtilizator } });

  res.status(200).send("s-a sters Utilizatoru");
};

// toate utilizatori
const getAllUtilizatorii = async (req, res) => {
  let utilizatori = await Utilizator.findAll({ include: Aliment });
  res.status(200).json(utilizatori);
};

// un utilizator
const getUtilizator = async (req, res) => {
  let idUtilizator = req.user.id;
  let utilizator = await Utilizator.findOne({
    where: { id: idUtilizator },
    include: Aliment,
  });
  res.status(200).json(utilizator);
};

module.exports = {
  updateUtilizator,
  deleteUtilizator,
  getAllUtilizatorii,
  getUtilizator,
};
