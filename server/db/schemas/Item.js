const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: Number,
    deliveryCost: Number,
    customsCost: Number,
    status: String,
    createdAt: Date
})

module.exports = mongoose.model("Item", itemSchema);