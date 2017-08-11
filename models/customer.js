"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new Schema({

    customerId:
        {
            type:String,
            trim:true
        },
    customerName:{
        type:String,
        trim:true
    },
    customer  
    
        
});


module.exports = mongoose.model('customers_data', customerSchema);