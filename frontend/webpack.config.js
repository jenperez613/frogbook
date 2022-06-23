import webpack from 'webpack'

export const override =(config) => {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "fs": require.resolve('fs'),
        "buffer": require.resolve('buffer'),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.ignoreWarnings = [/Failed to parse source map/];
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
}
