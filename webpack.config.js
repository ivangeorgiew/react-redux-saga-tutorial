/* eslint no-console: 0 */
const webpack = require('webpack')
const HappyPack = require('happypack')
const path = require('path')
const fs = require('fs')
const HOST_URL = '/'
const API_URL = 'http://localhost:3000/api'

// add aliases - instead of importing '../../../someFile.js' you can do 'someFolder/someFile.js'
const getDirAliases = dir => fs.readdirSync(dir).reduce((result, subDir) => {
    if (subDir.match(/^\w+$/)) {
        result[subDir] = path.resolve(path.join(__dirname, dir, subDir))
    }

    return result
}, {})

module.exports = {
    devtool: 'eval',
    context: __dirname,
    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client?overlay=false',
            path.join(__dirname, './app/js/index.js')
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    stats: {
        colors: true,
        reasons: false,
        chunks: false
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.css', '.scss' ],
        alias: getDirAliases('./app/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'happypack/loader?id=js',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: 'happypack/loader?id=css'
            },
            {
                test: /\.scss$/,
                use: 'happypack/loader?id=scss'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                use: 'file-loader?name=fonts/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_URL: JSON.stringify(API_URL),
                HOST_URL: JSON.stringify(HOST_URL)
            }
        }),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader']
        }),
        new HappyPack({
            id: 'css',
            loaders: [
                'style-loader',
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'resolve-url-loader', options: { sourceMap: true } }
            ]
        }),
        new HappyPack({
            id: 'scss',
            loaders: [
                'style-loader',
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'resolve-url-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { relativeUrls: true, sourceMap: true } }
            ]
        })
    ]
}
