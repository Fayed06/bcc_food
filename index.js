require('dotenv').config()
const express = require('express')
const app = express();
const db = require('./models')
const cors = require('cors')
// const bodyParser = require('body-parser')

const errorHandler = require("./utils/errorHandler")


db.sequelize.sync({ })

//Routes
const userRoute= require('./Routes/user.routes')
const restocatRoute= require('./Routes/restocat.routes')
const restaurantRoute= require('./Routes/restaurant.routes')
const catrestocatRoute= require('./Routes/catrestocat.routes')
const restoimgRoute= require('./Routes/restoimg.routes')

//bodyparser
app.use(express.json())
app.use(express.urlencoded( { extended: false}))

app.use(cors())
app.use('/user', userRoute)
app.use('/restocat', restocatRoute)
app.use('/restaurants', restaurantRoute)
app.use('/catrestocat', catrestocatRoute)
app.use('/restoimg', restoimgRoute)

app.use(errorHandler)

app.use('/', (req, res)=> {
    res.send({
        message:"app lancar"
    })
})


const PORT = process.env.APP_PORT || 4000
app.listen(PORT, () => {
    console.log(`app jalan pada port ${PORT}`)
})