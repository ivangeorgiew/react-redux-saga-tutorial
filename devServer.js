const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const chokidar = require('chokidar')
const config = require('./webpack.config.js')

const app = express()
const compiler = webpack(config)

// webpack middleware configuration
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: true,
    hot: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
    }
}))
app.use(webpackHotMiddleware(compiler))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// add headers to each response
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// re-require routes to reload on change
app.use('/api', function(req, res, next) {
    require('./routes/rootRouter')(req, res, next)
})

// for every request that is not defined in the routes, send the index.html file
app.use('/*', function (req, res) {
    res.sendFile(path.resolve('app/', 'index.html'))
})

// logic for reloading the server files
const watcher = chokidar.watch([ './mockData', './routes' ])

watcher.on('ready', function() {
    watcher.on('all', function() {
        // eslint-disable-next-line no-console
        console.log('Updated routes and/or mockData')
        Object.keys(require.cache).forEach(function(id) {
            if (/[\/\\](routes|mockData)[\/\\]/.test(id)) delete require.cache[id]
        })
    })
})

// initiate the application
const PORT = 3000

app.listen(PORT, function (error) {
    if (error) throw error
    // eslint-disable-next-line no-console
    console.log('Express server listening on port', PORT)
})
