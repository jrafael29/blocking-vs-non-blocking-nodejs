const mongoose = require('../config/mongoose')

const userSchema = new mongoose.Schema(
    {
        nome: String
    },
    { collection: "usuarios" }
);
module.exports = mongoose.model("User", userSchema);