const { Sequelize } = require("sequelize")

/*
module.exports={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'baza_date_proiect',
    dialect: 'mysql',


    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
}
*/

module.exports={
  dialect: 'sqlite',
  storage: 'database.sqlite'
}