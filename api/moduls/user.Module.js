const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true, default: "Lod" },
    zipCode: { type: String, required: true },
    country: { type: String, required: true, default: "Israel" }
});

const UserModule = mongoose.Schema({
    name: { type: String, required: true, maxLength: 25, minLength: 3 },
    phone: { type: String, required: true, unique: true },
    address: [addressSchema],
    history: { type: [], default: [] },
})

const USER_MODULE = mongoose.model('new-user', UserModule)
module.exports = USER_MODULE
