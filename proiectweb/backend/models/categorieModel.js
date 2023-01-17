const Aliment = require("./alimentModel");

module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define("categorie", {
    id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nume: {
      type: DataTypes.STRING,
    },
  });

  return Categorie;
};
