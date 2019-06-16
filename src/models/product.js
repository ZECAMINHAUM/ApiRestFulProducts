const mongo = require('mongoose');

const ProductSchema = new mongo.Schema({
    tittle: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url: { 
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
});

mongo.model('Product', ProductSchema);
