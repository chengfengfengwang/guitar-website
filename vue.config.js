const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-guitar-tool/'
        : '/',
    devServer: {
        port: 5588,     // 端口
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 16,
                        propList: ['*', '!background']
                    })
                ]
            }
        }
    },
    chainWebpack: config => {
        // const imgRule = config.module.rule('images');
        // if (process.env.NODE_ENV === 'production') {
        //     imgRule.use('image-webpack-loader')
        //         .loader('image-webpack-loader');
        // }
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options =>
                Object.assign(options, {
                    transformAssetUrls: {
                        audio: "src"
                    }
                })
            );
    },
    // configureWebpack: {
    //     plugins: [
    //         new PrerenderSPAPlugin({
    //             staticDir: path.join(__dirname, 'dist'),
    //             routes: ['/login'],
    //             renderer: new Renderer({
    //                 inject: {
    //                     foo: 'bar'
    //                 },
    //                 headless: false,
    //                 renderAfterDocumentEvent: 'render-event',
    //                 //renderAfterTime: 5000,
    //                 //renderAfterElementExists: 'my-app-element'
    //             }),
    //         })
    //     ]
    // }
}