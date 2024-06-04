
const getAllContacts = ((req,res)=>{
    res.send("Get All Contacts")
})

const createNewContact = ((req,res)=>{
    res.send("Create New Contacts")
})

const updateContact = ((req,res)=>{
    res.send(`Update Contact with Id ${req.params.id}`)
})

const deleteContact = ((req,res)=>{
    res.send(`Delete Contact with Id ${req.params.id}`)
})

const getContacts = ((req,res)=>{
    res.send(`Get Contact of Id ${req.params.id}`)
})


module.exports = {getAllContacts,createNewContact,updateContact,deleteContact,getContacts}