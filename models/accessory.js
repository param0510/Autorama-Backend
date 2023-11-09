// Model for car tire
const mongoose = require('mongoose')

const schemaDefinitionObj = {

    brand: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    modelNumber: {
        type: String,
        required: true
    },
    stockQty: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    rating: Number,
    ratingUserCount: Number,
    offerTags: [{
        name: String,
        color: String
    }],
    features: String,
    imageUrl: {
        type: String,
        required: false
    } 
}

const mongooseSchema = new mongoose.Schema(schemaDefinitionObj)

module.exports = mongoose.model('Accessory', mongooseSchema)