import express from 'express'
//import session from 'express-session'
//import MongoStore from 'connect-mongo'
//import handlebars from 'express-handlebars'
//import mongoose from 'mongoose'
//import productRouter from './routes/product.router.js'

//import cartRouter from './routes/cart.router.js'

//import sessionRouter from './routes/session.router.js'

import viewsRouter from './routers/views.router.js'

//import cookieParser from 'cookie-parser'
//import passport from 'passport'
//import jwtRouter from './routes/jwt.router.js'
//import initializePassport from './config/passport.config.js'

//import ProductManager from './DAO/files/product.manager.js'

//import __dirname from './utils.js'

//import jwtRouter from './routes/jwt.router.js'

const app = express()
//mongoose.set('strictQuery', false)
//const uri = 'mongodb+srv://gerlian:1234@clusterger.mgws5uk.mongodb.net/'
//const dbName = 'Login2'

//const dbName = 'eccommerce'


// CONFIGURACION HANDLEBARS
/*app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars') */



// Configuracion para usar JSON en el post
app.use(express.json())
app.use(express.urlencoded({extended: true}))
/*app.use(cookieParser())
app.use('/jwt', jwtRouter)  */


// CONFIGURACION MONGO SESSIONS
/*app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 15
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/session', sessionRouter)
app.get('/health', (req, res) => res.send(`<h1>OK</h1>`)) */
app.use('/', viewsRouter)
app.listen(8080)
//app.use('/', sessionRouter)


// static files
/*app.use(express.static(__dirname + "/public"))

mongoose.connect(uri, {dbName})
    .then(() => {
        console.log('Connected')
        app.listen(8080, () => console.log('Listeing...'))
    })
    .catch(e => console.error(e))
    */

