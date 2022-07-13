const express = require('express')
const articleRouter = require('./routes/articles.routes')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/blog')


const PORT = process.env.PORT || 5000
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test Article2',
            createdAt: new Date(),
            description: 'Test description 2'
        },
        {
            title: 'Test Article 3',
            createdAt: new Date(),
            description: 'Test description 3'
        },
]

    res.render('articles/index', { articles: articles })
} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))