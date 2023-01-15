const express=require('express')
const cors = require('cors')

const app = express()

var corOptions={
    origin:'http://localhost:3000'
}



//middleware 
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))
 

//routers



const alimentRouter = require('./routes/alimentRouter.js')
app.use('/api/alimente',alimentRouter)


const categorieRouter = require('./routes/categorieRouter.js')
app.use('/api/categorii',categorieRouter)

const utilizatorRouter = require('./routes/utilizatorRouter.js')
app.use('/api/utilizatori',utilizatorRouter)


//test api 

app.get('/',(req,res)=>{
    res.json({message: 'salut api'})
})

//port 

const PORT = process.env.PORT || 8080

//server

app.listen(PORT,() =>{
    console.log(`serveru' merge pe ${PORT}`)
})