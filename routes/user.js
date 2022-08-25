const express = require('express');
const router = express.Router();
const connection = require('../dbConfig')

router.get('/', (req, res) => {
    res.json({ message: "User Route" })
})

router.get('/userData', (req, res) => {
    console.log('started');
    connection.query('SELECT * from userdata', (err, rows) => {
        if (err) console.log(err)
        // else res.json({ message: rows })
        else res.json(rows);

    })
    console.log('ended');
})

router.post('/getUserPuzzleId', (req, res) => {
    connection.query('SELECT puzzleId from userdata where email = ?', [req.body.email], (err, rows) => {
        if (err) console.log(err)
        else res.json({ message: rows })
    })
})

router.post('/addUserData', (req, res) => {
    connection.query('INSERT into userdata (userName, email, puzzleId) values (?, ?, ?)', [req.body.userName, req.body.email, req.body.puzzleId], (err, rows) => {
        if (err) console.log(err)
        else res.json({ message: "Data inserted" })
    })
})

module.exports = router


