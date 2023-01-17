const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log("s-a conectat ...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.utilizatori = require("./utilizatorModel")(sequelize, DataTypes);
db.alimente = require("./alimentModel")(sequelize, DataTypes);
db.categorii = require("./categorieModel")(sequelize, DataTypes);
db.grup = require("./grupModel")(sequelize, DataTypes);

db.categorii.hasMany(db.alimente, {
  foreignKey: "id_categorie",
  onDelete: "CASCADE",
});

db.utilizatori.hasMany(db.alimente, {
  foreignKey: "id_utilizator",
  onDelete: "CASCADE",
});

db.utilizatori.belongsToMany(db.grup, { through: "User_grup" });
db.grup.belongsToMany(db.utilizatori, { through: "User_grup" });

db.sequelize
  .sync({ force: false, alter: false }) // sa nu pierdem datele
  .then(() => {
    console.log("s-a facut re-sync ul");
  });

module.exports = db;
