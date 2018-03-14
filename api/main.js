module.exports = (app, express) => {

    'use strict';

    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    
    const apiCustomer = require('../api/customer.js')(app, express);
    const apiProduct  = require('../api/product.js' )(app, express);
    const apiOrder    = require('../api/order.js'   )(app, express);

    app.use(apiCustomer);
    app.use(apiProduct );
    app.use(apiOrder   );

}