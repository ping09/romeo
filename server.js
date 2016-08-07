const http = require("http")
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

app.listen(PORT,function () {
    console.log("http://0.0.0.0:"+PORT)
})
app.use(express.static("./"))

