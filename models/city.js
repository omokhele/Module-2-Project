const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
    {
        largestCity: {type: String, required: true},
        cCapital: {type: String, required: true},
        
    },
    {timestamps: true},
)

module.exports = mongoose.model('cities', City)