const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Capital = new Schema(
    {
        countryCapital: {type: String, ref: 'cities'}
    },
    {timestamps: true},
)

module.exports = mongoose.model('capital', Capital)