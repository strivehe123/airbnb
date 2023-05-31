const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const commonConfig = require("./webpack.common.config")
module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        clean: true
    },
    plugins: [new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: "fuck app", template: "./index.html" }),
        new DefinePlugin({
            BASE_URL: "'./'",
            codewhy: "'why'",
            counter: "123"
        })
    ]
})

// const { merge } = require('webpack-merge')
// const commonConfig = require('./webpack.common.config')
// module.exports = merge(commonConfig, {
//     mode: "development"
// })