const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
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

    plugins: [
        new HtmlWebpackPlugin({
            myOptions: { foo: 'bar' },
            filename: path.join(__dirname, '/index.html'),
            template: 'templates/index.njk'
        })
    ]
};
