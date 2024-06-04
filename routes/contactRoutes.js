const express = require("express")
const { getAllContacts, createNewContact, updateContact, deleteContact, getContacts } = require("../Controllers/contactController")
const router = express.Router()


// router.get("/",getAllContacts)
// router.post("/",createNewContact)
// router.put("/:id",updateContact)
// router.delete("/:id",deleteContact)
// router.get("/:id",getContacts)

// ALTERNATIVE WAY OF ROUTING ABOVE CODE
router.route("/").get(getAllContacts).post(createNewContact)
router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact)    

module.exports = router