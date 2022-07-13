const express = require('express')
const articleRouter = require('./routes/articles.routes')



const PORT = process.env.PORT || 5000
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    res.render('index')
} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))