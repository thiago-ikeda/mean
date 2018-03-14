(() => {

    'use strict';

    const mongoose = require('mongoose');
    const Schema   = mongoose.Schema;

    const productSchema = Schema({
        description: String
    });

    const Product  = mongoose.model('Product', productSchema);
    module.exports = Product;

})();