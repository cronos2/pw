const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const loremIpsum = require('lorem-ipsum');

const loremContext = {
    lorem: loremIpsum,
    lorem_words: function(n){
        return loremIpsum({ count: n, units: 'words' });
    }
};


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
            filename: path.join(__dirname, '/index.html'),
            inject: false,
            showErrors: true,
            template: 'templates/index.njk',
            logged_in: false,
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '/index2.html'),
            inject: false,
            showErrors: true,
            template: 'templates/index.njk',
            logged_in: true,
            lorem: loremContext
        }),
        // new HtmlWebpackPlugin({
        //     filename: path.join(__dirname, '/login.html'),
        //     template: 'templates/login.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.join(__dirname, '/logout.html'),
        //     template: 'templates/logout.html'
        // }),
        // new HtmlWebpackPlugin({
        //     context: defaultContext,
        //     filename: path.join(__dirname, '/register.html'),
        //     template: 'templates/register.njk'
        // }),
    ]
};
