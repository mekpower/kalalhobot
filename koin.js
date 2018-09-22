const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
    userID:String,
    serverID: String,
    coin: Number
})

module.exports = mongoose.model("Coin", coinSchema);