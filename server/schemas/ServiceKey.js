const mongoose = require("mongoose");
const {Status} = require("../commons/payloads");

const ServiceKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    expiresAt: {
        type: Date,
        required: true
    },
})

module.exports = mongoose.model("Item", ServiceKeySchema);