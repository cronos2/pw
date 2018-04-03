const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    context: __dirname,
    entry: './assets/js/app.js',
    module: {
        rules: [
            // Nunjucks - HTML
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'nunjucks-isomorphic-loader',
                        query: {
                            root: [path.resolve(__dirname, 'templates')]
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },

    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            context: { title: 'Titulete' },
            filename: path.join(__dirname, '/index.html'),
            template: 'templates/index.njk'
        })
    ]
};
