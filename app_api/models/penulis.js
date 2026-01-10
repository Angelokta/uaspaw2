const mongoose = require('mongoose') // impor mongoose

// skema untuk collection penulis
const penulisSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        trim: true
    },
    tanggalLahir: {
        type: Date
    },
    negara: {
        type: String,
        trim: true
    },
    biografi: {
        type: String,
        trim: true
    }
})

// model Penulis
const Penulis = mongoose.model("Penulis", penulisSchema)

// export model
module.exports = Penulis
