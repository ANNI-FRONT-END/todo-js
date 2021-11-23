const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");//copiar o mover recursos,imgpdf png, etc

module.exports = {
    mode:'development',

    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test:/\.html$/,
                loader:'html-loader',
                options: {
                    sources: false,
                    minimize:false
                },
            },
            {
                test:/\.css$/,
                exclude:/style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webpack App',
            template: './src/index.html',
            filename: 'index.html',

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                { from: 'src/assets', to: 'assets/' },
            ]
        }
              
        )
    ]


}

 