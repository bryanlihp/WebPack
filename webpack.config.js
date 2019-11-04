// __dirname is a node.js global variable, the directory of the current executing script
module.exports = {
    entry : __dirname + '/app/Main.js',
    output :{
        path : __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
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
                    loader: 'babel-loader'
                },
                exclude: /node_models/
            },
            {
                test:/\.css$/,
                use :[
                    {
                        loader: "style-loader" // so that we can add all compiled style to the generated page
                    },
                    {
                        loader: "css-loader"   // so that we can use import... and url(...) to inlcude css files
                    }
                ]
            }
        ]
    }
}