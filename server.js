const express = require('express')
const articleRouter = require('./routes/articles.routes')
const mongoose = require('mongoose')
const Article = require('./models/article.models')
const methodOverride = require('method-override')


mongoose.connect('mongodb+srv://JewelSama:Flabagasted@cluster0.8peafx4.mongodb.net/?retryWrites=true&w=majority')


const PORT = process.env.PORT || 5000
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    
    res.render('articles/index', { articles: articles })
} )

app.use('/articles', articleRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))