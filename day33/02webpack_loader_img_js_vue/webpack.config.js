const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    // 自动添加后缀名
    resolve: {
        // 自动添加文件的后缀名
        extensions: [".js", ".json", ".wasm", ".vue", ".jsx", ".ts", ".tsx"],
        // 自动添加文件夹得后缀文件查找
        // 别名
        alias: {
            utils: path.resolve(__dirname, './src/utils')
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                // use 中的loader 的使用顺序是栈的使用方式
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "postcss-loader" }]
            },
            {
                test: /\.less$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }, { loader: 'postcss-loader' }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset",

                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024
                    }
                },
                generator: {
                    filename: "img/[name]_[hash:8][ext]"
                }
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    // options: {
                    //     plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-block-scoping"]
                    // }
                }]
            },
            {
                test: /\.vue$/,
                use: [{ loader: "vue-loader" }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}