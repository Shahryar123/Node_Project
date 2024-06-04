const asyncHandler = require("express-async-handler")
const Contacts = require("../Models/contactModels")


//GET ALL CONTACTS
const getAllContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contacts.find()
    res.status(200).json(contacts)
})

//GET SINGLE CONTACT
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

//CREATE NEW CONTACT
const createNewContact = asyncHandler(async(req,res)=>{
    console.log(req.body)

    if(req.body.name == null || req.body.email == null){
        res.status(400)
        throw new Error("Name and Email are required")
    }
    const {name,email,phone} = req.body
    const contact = await Contacts.create({
        name,
        email,
        phone
    })
    //OR ALTERNATIVE
    // const contact = await Contacts.create(Name:req.body.Name,Email:req.body.Email,Phone:req.body.Phone)
    res.status(201).json(contact)
})

//UPDATE CONTACT
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    // {new:true} will return the updated document after the update operation
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedContact)
})

const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not Found")
    }
    await Contacts.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
})




module.exports = {getAllContacts,createNewContact,updateContact,deleteContact,getContacts}