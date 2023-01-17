const db = require("../models");

// main Model

const Aliment = db.alimente;

// 1. create aliment

const addAliment = async (req, res) => {
  let info = {
    nume: req.body.nume,
    dataExpirare: req.body.dataExpirare,
    disponibil: req.body.disponibil,
    claimedBy: req.body.claimedBy,
    id_categorie: req.body.id_categorie,
    id_utilizator: req.user.id,
  };

  const aliment = await Aliment.create(info);
  res.status(201).json(aliment);
  console.log(aliment);
};

// 2. get toate alimentele

const getAllAlimente = async (req, res) => {
  let alimente = await Aliment.findAll({});
  res.status(200).json(alimente);
};

// 3. get 1 aliment

const getAliment = async (req, res) => {
  let idAliment = req.params.id;
  let aliment = await Aliment.findOne({ where: { id: idAliment } });
  res.status(200).json(aliment);
};

// 4 update aliment

const updateAliment = async (req, res) => {
  let idAliment = req.params.id;

  const aliment = await Aliment.update(req.body, { where: { id: idAliment } });

  res.status(200).json(aliment);
};

// 5. delete 1 aliment

const deleteAliment = async (req, res) => {
  let idAliment = req.params.id;

  await Aliment.destroy({ where: { id: idAliment } });

  res.status(200).send("s-a sters alimentu");
};

// 6. toate alimentele

const getAlimenteDisponibile = async (req, res) => {
  let alimente = await Aliment.findAll({
    where: { disponibil: true },
  });

  alimtente = alimente.filter(
    (a) => new Date(a.dataValues.dataExpirare).getTime() > new Date().getTime()
  );

  res.status(200).json(alimente);
};

const rezervaAliment = async (req, res) => {
  let idAliment = req.params.id;

  const aliment = await Aliment.update(
    { disponibil: false, claimedBy: req.user.id },
    { where: { id: idAliment } }
  );

  res.status(200).json(aliment);
};

module.exports = {
  addAliment,
  getAliment,
  getAllAlimente,
  updateAliment,
  deleteAliment,
  getAlimenteDisponibile,
  rezervaAliment,
};
