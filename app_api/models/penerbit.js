const mongoose = require('mongoose') // impor mongoose

// skema untuk collection penerbit
const penerbitSchema = new mongoose.Schema({
    namaPenerbit: {
        type: String,
        required: true,
        trim: true
    },
    alamat: {
        type: String,
        trim: true
    },
    tahunBerdiri: {
        type: Number
    }
})

// model Penerbit
const Penerbit = mongoose.model("Penerbit", penerbitSchema)

// export model
module.exports = Penerbit
