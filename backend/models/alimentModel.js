module.exports =(sequelize, DataTypes) => {

    const Aliment = sequelize.define("aliment", {
           id: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            primaryKey: true
           },
           nume: {
            type: DataTypes.STRING
           },
           dataExpirare: {
            type: DataTypes.DATE
           },
           disponibil: {
            type: DataTypes.BOOLEAN
           },
           claimed: {
            type: DataTypes.BOOLEAN
           }

    })

    return Aliment
}