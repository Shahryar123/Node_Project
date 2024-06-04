const asyncHandler = require("express-async-handler")

const getAllContacts = asyncHandler((req,res)=>{
    res.send("Get All Contacts")
})

const createNewContact = asyncHandler((req,res)=>{
    if(req.body.Name == null || req.body.Email == null){
        res.status(400)
        throw new Error("Name and Email are required")
    }

    console.log(req.body)
    res.send("Create New Contacts")
})

const updateContact = asyncHandler((req,res)=>{
    res.send(`Update Contact with Id ${req.params.id}`)
})

const deleteContact = asyncHandler((req,res)=>{
    res.send(`Delete Contact with Id ${req.params.id}`)
})

const getContacts = asyncHandler((req,res)=>{
    res.send(`Get Contact of Id ${req.params.id}`)
})


module.exports = {getAllContacts,createNewContact,updateContact,deleteContact,getContacts}