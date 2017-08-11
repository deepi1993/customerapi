"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var timeSchema = new Schema({

    serviceName:
    {
        type: String,
        trim: true
    },
    startTime:
    {
        type: String
    },
    endTime: {
        type: String,
    },
    leadTime: {
        type: Number,
    },
    interval: {
        type: Number
    }
});

module.exports = mongoose.model('time_slot_definition', timeSchema);