const express = require("express")
const customerrorHandler = require("./Middleware/errorHandler")
const dotenv = require("dotenv").config()
const connectDB = require("./Config/dbConnection")

//Connect to Database
connectDB()

const app = express()
app.use(express.json())//TO ACCEPT JSON DATA


const port = process.env.PORT || 5000

//******************THIS WILL BE DONE NOW BY ROUTING
// app.get("/api/contacts" ,(req,res)=> {
//     res.status(200).json({message:"Get All Contacts with Status and Json"})
//     //res.send("Get All Contacts")
//     //res.json({message:"Get All Contacts with Json"})
// })

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/user",require("./routes/userRoutes.js"))
//After route we use custom error handler
app.use(customerrorHandler)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})

