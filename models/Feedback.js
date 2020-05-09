const mongoose = require('mongoose');
const feedbackSchema = mongoose.Schema(
    {
        lighting: {
            type : String,
            required : true
        },
        ranking: {
            type: String,
            required : true,
            unique:false
        },
        remark: {
            type : String,
            required : true
        },
        routesWithStreetName: [{
            type: String
        }],
        sentiment: {
            type: Number
        }
        
    }
);
module.exports = mongoose.model('feedback',feedbackSchema);