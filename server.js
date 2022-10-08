const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/connection')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'))

//db connection
connectDB()

//load routes
const userRouter = require('./routes/users')
const companyRouter = require('./routes/company')
const routeRouter = require('./routes/route')
const laneRouter = require('./routes/lane')

app.use('/api/users', userRouter)
app.use('/api/company', companyRouter)
app.use('/api/routes', routeRouter)
app.use('/api/lanes', laneRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`)
})