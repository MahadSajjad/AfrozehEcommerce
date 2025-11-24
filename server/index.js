const express = require('express')
const dotevn = require('dotenv')
dotevn.config()
const connectDb = require('./config/db')
const cors = require('cors')
require('colors')
const authRoutes = require("./routes/auth")

// rest objects 
const app = express()
connectDb()
// middlwares
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))// routes
app.use('/api/auth', authRoutes)
const PORT = process.env.PORT || 8000
// Start server
app.get('/', (req, res) => {
    res.send("<h1>Hello from server Ecommerce<h1/>")
})
// Listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan)
})