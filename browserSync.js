const beautify = require('js-beautify').html;
module.exports = {
    files: ['./src/**/*.jade', './src/**/*.scss', './src/**/*.coffee'],
    proxy: {
        target: '127.0.0.1:9000',
        proxyRes: [
            function(proxyRes, req, res) {
                if(req.originalUrl == '/') {
                    let buffer;
                    proxyRes.on('data', data => {
                        const html = beautify(data.toString());
                        buffer = new Buffer(html);
                    });
                    proxyRes.on('end', () => {
                        res.data = buffer.toString();
                        res.end();
                    });
                }
            }
        ]
    },
};
