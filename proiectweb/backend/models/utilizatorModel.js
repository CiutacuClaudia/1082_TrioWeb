module.exports = (sequelize, DataTypes) => {
  const Utilizator = sequelize.define("utilizator", {
    id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    parola: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresa: {
      type: DataTypes.TEXT,
    },
    numarTelefon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 10,
      },
    },
  });

  return Utilizator;
};
