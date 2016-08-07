const http = require("http")
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080
const staticPath = path.join(__dirname + '/')

app.use(express.static(staticPath))

app.listen(PORT, ()=>{
    console.log(`listening at 0.0.0.0 port ${PORT}`)
})