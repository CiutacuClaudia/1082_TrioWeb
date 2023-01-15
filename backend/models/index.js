const dbConfig = require('../config/dbConfig.js')


const {Sequelize, DataTypes} =require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,


        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)


sequelize.authenticate()
.then(() => {
    console.log('s-a conectat ...')
})
.catch(err=>{
    console.log('Error'+err)
})


const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.utilizatori = require('./utilizatorModel')(sequelize, DataTypes)
db.alimente = require('./alimentModel')(sequelize, DataTypes)
db.categorii = require('./categorieModel')(sequelize, DataTypes)

db.sequelize.sync({force: false})  // sa nu pierdem datele 
.then(() => {
    console.log('s-a facut re-sync ul')
})


module.exports = db 
