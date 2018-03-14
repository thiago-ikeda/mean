module.exports = (app, express, config) => {

    'use strict';

    const path = require('path');

    const serverPath      = path.join(__dirname, config.server.publicFolder     );
    const nodeModulesPath = path.join(__dirname, config.server.nodeModulesFolder);

    const router = express.Router();

    router.use(express.static(serverPath));
    router.use(path.join('/', config.server.nodeModulesFolder), express.static(nodeModulesPath));

    router.get('*', (req, res) => {
        res.sendFile(path.join(serverPath, 'index.html'));
    });

    app.use(router);

}