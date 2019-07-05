const express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/conversionApi',controller.redirectApi);



module.exports = router;

