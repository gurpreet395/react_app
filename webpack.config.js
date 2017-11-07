var config = {
    entry: './index.js',

    output: {
        path:'/',
        filename: 'index.bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,  // a regular expression that catches .js files
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;