module.exports =(sequelize, DataTypes) => {

    const Utilizator = sequelize.define("utilizator", {
           id: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            primaryKey: true
           },
           nume: {
            type: DataTypes.STRING
           },
           email: {
            type: DataTypes.STRING
           },
           adresa: {
            type: DataTypes.TEXT
           }
    })

    return Utilizator
}