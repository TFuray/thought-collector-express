const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')


const app = express()


// Handlebars 
app.engine(
    'handlebars',
    engine({
        extname:'hbs',
        layoutsDir: './views/layouts',
        defaultLayout: 'main',
    })
)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())