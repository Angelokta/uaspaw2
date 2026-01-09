const mongoose = require('mongoose') // impor mongoose

// skema untuk collection sinopsis
const sinopsisSchema = new mongoose.Schema({
    ringkasan: {
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    tema: {
        type: String,
        trim: true
    },
    novel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Novel",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// sertakan skema sinopsis ke dalam model Sinopsis
const Sinopsis = mongoose.model("Sinopsis", sinopsisSchema)

// export model Sinopsis
module.exports = Sinopsis
