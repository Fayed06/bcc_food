require('dotenv').config()
const express = require('express')
const app = express();
const db = require('./models')
const cors = require('cors')

// const errorHandler = require("./utils/errorHandler")


db.sequelize.sync({ })

//Routes
const userRoute= require('./Routes/user.routes')
const categoriesRoute= require('./Routes/categories.routes')

app.use(express.json())
app.use(express.urlencoded( { extended: false}))

app.use(cors())
app.use('/user', userRoute)
app.use('/category', categoriesRoute)

// app.use(errorHandler)

app.use('/', (req, res)=> {
    res.send({
        message:"app lancar"
    })
})


const PORT = process.env.APP_PORT || 4000
app.listen(PORT, () => {
    console.log(`app jalan pada port ${PORT}`)
})