const path = require('path');

const authRouter = require('./auth/routes');

module.exports = function (app) {
    app.use('/auth', authRouter);

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('client/index.html'));
    });
};