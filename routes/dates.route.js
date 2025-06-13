const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const datesController = require('../controllers/dates.controller');


router.get('/', (req, res) => {
    datesController.getDates(req, res)
});

router.get('/laboga', (req, res) => {
    datesController.getDatesLaBoga(req, res)
});

router.get('/laboga/nextMatchs', (req, res) => {
    datesController.getProximosPartidosLaBoga(req, res)
});

module.exports = router;
