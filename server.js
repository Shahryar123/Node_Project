const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const port = process.env.PORT || 5000

//******************THIS WILL BE DONE NOW BY ROUTING
// app.get("/api/contacts" ,(req,res)=> {
//     res.status(200).json({message:"Get All Contacts with Status and Json"})
//     //res.send("Get All Contacts")
//     //res.json({message:"Get All Contacts with Json"})
// })

app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})

