// __dirname is a node.js global variable, the directory of the current executing script
module.exports = {
    devtool: 'eval-source-map',
    entry : __dirname + '/app/Main.js',
    output :{
        path : __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline:true
    },
    module :{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                exclude: /node_models/
            }
        ]
    }
}