const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
    {
        name: {type: String, required: true},
        continent: {type: String, ref:'continents'},
        president: {type: String, ref:'presidents'},
        flag: {type: String, required: true},
        population: {type: Number, ref: 'populations'},
        capital: {type: String, ref: 'capitals'},
        created: {type: Date, required: true},
        gdp: {type: String, required: true},
        private: {type: Boolean, required: false}
    },
    {timestamps: true},
)

module.exports = mongoose.model('countries', Country)

