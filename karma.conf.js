module.exports = function(config) {
    config.set({
        basePath:'',
        frameworks: ['jasmine'],
        files: [
            'source/*.js',
        ],
        preprocessors: {
            'source/*.spec.js':['coverage']
        },
        reporters: ['progress'],
        port:9876,
        colors:true,
        logLevel:config.LOG_DEBUG,
        browsers: ['PhantomJS']
    })
}