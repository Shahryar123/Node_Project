const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("Get All Contacts")
})
router.post("/",(req,res)=>{
    res.send("Create New Contacts")
})
router.put("/:id",(req,res)=>{
    res.send(`Update Contact with Id ${req.params.id}`)
})
router.delete("/:id",(req,res)=>{
    res.send(`Delete Contact with Id ${req.params.id}`)
})
router.get("/:id",(req,res)=>{
    res.send(`Get Contact of Id ${req.params.id}`)
})

module.exports = router