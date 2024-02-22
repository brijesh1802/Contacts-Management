const express = require('express');
const router = express.Router();
const {getContact,createContact,getSingleContact,updateContact,deleteContact} = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);

router.route('/').get(getContact);

router.route('/').post(createContact);

router.route('/:id').get(getSingleContact).put(updateContact).delete(deleteContact);


module.exports = router;