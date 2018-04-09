const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const loremIpsum = require('lorem-ipsum');

const timetable = require('./timetable.json');

const loremContext = {
    lorem: loremIpsum,
    lorem_words: function(n){
        return loremIpsum({ count: n, units: 'words' });
    }
};

const builddir = path.join(__dirname, 'dist');


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
            filename: path.join(builddir, 'index.html'),
            inject: false,
            showErrors: true,
            template: 'templates/index.njk',
            not_logged_in: true,
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'index2.html'),
            inject: false,
            showErrors: true,
            template: 'templates/index.njk',
            not_logged_in: false,
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'login.html'),
            meta: {'_': {
                'http-equiv': 'refresh',
                'content': '0; index2.html'
            }},
            showErrors: true,
            title: 'Iniciando sesión'
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'logout.html'),
            meta: {'_': {
                'http-equiv': 'refresh',
                'content': '0; index.html'
            }},
            showErrors: true,
            title: 'Desconectando'
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'actividades.html'),
            inject: false,
            showErrors: true,
            template: 'templates/activities.njk',
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'actividad-detail.html'),
            inject: false,
            showErrors: true,
            template: 'templates/activity-detail.njk',
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'localizacion.html'),
            inject: false,
            showErrors: true,
            template: 'templates/location.njk',
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'tecnicos.html'),
            inject: false,
            showErrors: true,
            template: 'templates/coaches.njk',
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'tecnico-detail.html'),
            inject: false,
            showErrors: true,
            template: 'templates/coach-detail.njk',
            lorem: loremContext,
            timetable: timetable
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'promociones.html'),
            inject: false,
            showErrors: true,
            template: 'templates/promotions.njk',
            lorem: loremContext
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'horario.html'),
            inject: false,
            showErrors: true,
            template: 'templates/timetable.njk',
            lorem: loremContext,
            timetable: timetable
        }),
        new HtmlWebpackPlugin({
            filename: path.join(builddir, 'registro.html'),
            inject: false,
            showErrors: true,
            template: 'templates/register.njk',
            lorem: loremContext  // don't remove (???)
        })
    ]
};
