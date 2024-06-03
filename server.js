const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const port = process.env.PORT || 3000
app.use(express.static("public"))
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})