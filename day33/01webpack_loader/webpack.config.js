const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                // use 中的loader 的使用顺序是栈的使用方式
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, {
                        loader: "postcss-loader"
                            // options: {
                            //     postcssOptions: {
                            //         plugins: ["autoprefixer"]
                            //     }
                            // }

                    }]
                    // 简写方式一 只有一个loader
                    // loader:"css-loader"
                    // 简写方式二  多个loader 没有别的属性
                    // use:["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }, { loader: 'postcss-loader' }]
            }
        ]
    }

}