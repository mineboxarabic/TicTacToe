const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlLoader = require('html-loader')
module.exports = 
{
    mode : 'development',
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename : "[name].js"
    },
    module: 
    {
        rules: [{
            test: /\.html/, use: 'html-loader'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'}
    )],

}