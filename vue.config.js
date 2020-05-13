const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
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
        config.resolve.alias
            .set('components', resolve('src/components'))
    }
}