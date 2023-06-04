const mongoose = require("mongoose");
const {Status} = require("../commons/payloads");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    cost: {
        purchaseCost: Number,
        deliveryCost: Number,
        customsCost: Number,
        currency: {
            type:String,
            default: "UGX"
        }
    },
    status: {
        type: String,
        default: Status.ToBuy
    },
    model:String,
    quantity: Number,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
})

module.exports = mongoose.model("Item", itemSchema);