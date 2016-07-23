const http = require("http")
const express = require('express')
const app = express()
const path = require('path')
const Port = 8080
const staticPath = path.join(__dirname + '/')

app.use(express.static(staticPath))

app.listen(Port, ()=>{
    console.log(`listening at 0.0.0.0 port ${Port}`)
})