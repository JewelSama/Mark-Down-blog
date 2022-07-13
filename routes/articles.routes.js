const { application } = require('express')
const express = require('express')

const router = express.Router()

router.get('/', (treq, res) => {
    res.send('In articles')
})




module.exports = router;