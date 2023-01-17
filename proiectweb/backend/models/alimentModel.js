module.exports = (sequelize, DataTypes) => {
  const Aliment = sequelize.define("aliment", {
    id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nume: {
      type: DataTypes.STRING,
    },
    dataExpirare: {
      type: DataTypes.DATE,
    },
    disponibil: {
      type: DataTypes.BOOLEAN,
    },
    claimedBy: {
      type: DataTypes.INTEGER,
    },
  });

  return Aliment;
};
