const express = require('express');
const router = express.Router();
const connection = require('../dbConfig')

router.get('/', (req, res) => {
    res.json({ message: "Dev Route" })
})


module.exports = router