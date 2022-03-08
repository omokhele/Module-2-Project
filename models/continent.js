const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Continent = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true}  
    },
    {timestamps: true},
)

module.exports = mongoose.model('continents', Continent)

