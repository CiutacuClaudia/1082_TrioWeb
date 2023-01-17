module.exports = (sequelize, DataTypes) => {
  const Grup = sequelize.define("grup", {
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

  return Grup;
};
