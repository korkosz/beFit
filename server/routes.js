const path = require('path');

const authRouter = require('./auth/routes');
const apiRoutes = require('./api/routes')

module.exports = function (app) {
    app.use('/auth', authRouter);
    app.use('/api', apiRoutes);
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('client/index.html'));
    });
};