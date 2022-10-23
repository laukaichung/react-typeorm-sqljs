const webpack = require("webpack")

module.exports = function override(config, env) {
    config.experiments = {
        asyncWebAssembly: true,
    };

    config.resolve.fallback = {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
    };

    if(!config.plugins){
        config.plugins = []
    }
    config.plugins = config.plugins.concat([
        new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
            result.request = result.request.replace(/typeorm/, "typeorm/browser");
        }),
        new webpack.ProvidePlugin({
            'window.SQL': 'sql.js/dist/sql-wasm.js'
        })
        ]
    )

    return config;
};