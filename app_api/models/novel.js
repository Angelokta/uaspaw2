const mongoose = require('mongoose') // impor mongoose

// skema untuk collection novel
const novelSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
        trim: true
    },
    penulis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Penulis",
        required: true
    },
    penerbit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Penerbit",
        required: true
    },
    tahunTerbit: {
        type: Number
    },
    genre: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// model Novel
const Novel = mongoose.model("Novel", novelSchema)

// export model Novel
module.exports = Novel
