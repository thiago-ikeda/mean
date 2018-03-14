module.exports = (connectionString, opts) => {

    'use strict';

    const mongoose = require('mongoose');

    if (!connectionString){
        throw new Error('Property \'connectionString\' not found');
    }

    mongoose.connect(connectionString, opts);
    
}