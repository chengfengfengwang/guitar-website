const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
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
        const imgRule = config.module.rule('images');
        if (process.env.NODE_ENV === 'production') {
            imgRule.use('image-webpack-loader')
                .loader('image-webpack-loader');
        }
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
    }
}