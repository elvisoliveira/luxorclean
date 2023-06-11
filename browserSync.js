const beautify = require('js-beautify').html;
const config = require('./.beautify.json');
module.exports = {
    files: ['./src/**/*.jade', './src/**/*.scss', './src/**/*.coffee'],
    proxy: {
        target: '127.0.0.1:9000',
        proxyRes: [
            function(proxyRes, req, res) {
                if(req.originalUrl == '/') {
                    let html;
                    proxyRes.on('data', data => {
                        html = beautify(data.toString(), config);
                    });
                    proxyRes.on('end', () => {
                        res.data = html;
                    });
                }
            }
        ]
    },
};
