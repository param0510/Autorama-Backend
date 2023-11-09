// Model for car
const mongoose = require('mongoose')

const schemaDefinitionObj = {
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    fuelEconomy: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bodyType: {
        type: String,
        required: true
    },
    drivetrain: {
        type: String,
        required: true
    },
    accidentHistory: {
        type: {
            count: Number,
            desc: String
        },
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    featureTags: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    visible:{
        type: Boolean,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true
    },
    offerTags: [{
        name: String,
        color: String
    }]
}

const mongooseSchema = new mongoose.Schema(schemaDefinitionObj)

module.exports = mongoose.model('Car', mongooseSchema)