(() => {

    'use strict';

    const mongoose = require('mongoose');
    const Schema   = mongoose.Schema;

    const Product  = require('./product.js');

    const customerSchema = Schema({
        name  : String,
        eMail : String,
        code  : Number,
        orders: [
            {
                items: [
                    {
                        product: {
                            type: Schema.Types.ObjectId,
                            ref : 'Product',
                        },
                        amount : Number
                    }
                ]
            }
        ]
    });

    const Customer = mongoose.model('Customer', customerSchema);
    module.exports = Customer;

})();