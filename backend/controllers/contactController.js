const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all Contacts
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    console.log(contacts);
    if(!contacts){
        return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json(contacts);
});


//@desc Create Contacts
//@route POST /api/contacts
//@access private
/*const createContact =asyncHandler(async(req, res) => {
    console.log(req.body);
    const{name,email,phone}=req.body;
    if(!name||!email||!phone){
        return res.status(400).json({message: "Please enter all fields"});
    }
    const contactFields = {
        name,
        email,
        phone,
        user_id: req.user.id,
    };

    const contact = await Contact.create(contactFields);
    res.status(201).json(contact);
});*/
const createContact = asyncHandler(async(req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        const contactFields = {
            name,
            email,
            phone,
            user_id:req.user.id
        };

        const contact = await Contact.create(contactFields);
        res.status(201).json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


//@desc Get single Contact
//@route GET /api/contacts/:id
//@access private
const getSingleContact =asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        return res.status(400).json({message: "Contact not found"});
    }
    res.status(200).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        return res.status(400).json({message: "Contact not found"});
    }

    if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User doesnt have authorization");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        return res.status(400).json({message: "Contact not found"});
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesnt have authorization");
    }
    await contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});

module.exports = {getContact, createContact, getSingleContact, updateContact, deleteContact}