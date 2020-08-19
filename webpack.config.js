/**
 * @author: 徐家波
 * @create: 2020/8/19 13:39
 * @version: 1.0
 * @email: xujp@oceansoft.com
 */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist
        port: 8888, //端口
        host: 'localhost', //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取
        open: true, // 自动打开浏览器
        inline: true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot: true,
        compress: true,//压缩
        proxy: { // 配置跨域
            '/apis': {
                target: 'https://124.162.217.89/apis',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            titel: 'react app',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve('src'),// 这也是为懒人服务的,import HelloWorld from '@/components/HelloWorld'这里的@其实就是代表src这个目录
        }
    },
};


