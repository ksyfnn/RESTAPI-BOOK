import express from 'express'
import createError from 'http-errors'
import dotenv from 'dotenv'

dotenv.config()

// initialize express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
// import routes from './routes/index.js'

// app.use(routes)


// 404 notfound
app.use((req, res, next) => {
    next(createError(404, 'Not Found'))
})

// error handling
app.use((req, res, next, err) => {
    err.statusCode = err.status || 500;
    res.status(err.statusCode)
    return res.send({
        error: {
            status: err.statusCode,
            message: err.message,
            payload: 0
        }
    })
})

// create http server
import http from 'http'
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT);
server.on('error', e => console.log(`Error on : ${e.message}`))
server.on('listening', onListening)

function onListening() {
    console.log(`Server listening on http://localhost:${server.address().port}`)
}