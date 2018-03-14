(() => {

    'use strict';

    const express  = require('express');
    const app      = express();

    const config   = require('./config.js'  );
    const api      = require('./api/main.js')(app, express);
    const routes   = require('./routes.js'  )(app, express, config);

    const options  = require('./libs/options.js' )(config);
    const mongoose = require('./libs/mongoose.js')(config.mongoDB.connectionString, options.mongoose);

    app.listen(config.server.port);

    console.log('Listening on port ' + config.server.port);

})();