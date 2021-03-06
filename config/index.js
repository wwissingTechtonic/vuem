'use strict'
// Template version:1.2.4
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: '',
        assetsPublicPath: (process.env.BASE_PATH || '') + '/',
        proxyTable: {},

        // Various Dev Server Settings
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // USe Eslint Loader?
        // If true, your code wil be linted during bundling and
        // Linting errors and warnings will be shown in the console
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser
        showEslintErrorsInOverlay: false,

        /**
         *  Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtoll: 'eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cachebusting: true,

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this when enabling this option.
        cssSourceMap: false,
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: (process.env.BASE_PATH || '') + '/',

        /**
         * Source Maps
         */

        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}