const Penulis = require("../models/penulis")

// GET all
const getAllPenulis = async (req, res) => {
  try {
    const result = await Penulis.find().sort({ nama: 1 })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET by ID
const getPenulisById = async (req, res) => {
  try {
    const result = await Penulis.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penulis tidak ditemukan" })
    }
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CREATE
const createPenulis = async (req, res) => {
  try {
    const penulis = new Penulis({
      nama: req.body.nama,
      tanggalLahir: req.body.tanggalLahir,
      negara: req.body.negara,
      biografi: req.body.biografi
    })

    const hasil = await penulis.save()
    res.status(201).json(hasil)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// UPDATE
const updatePenulisById = async (req, res) => {
  try {
    const result = await Penulis.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penulis tidak ditemukan" })
    }

    if (req.body.nama) result.nama = req.body.nama
    if (req.body.tanggalLahir) result.tanggalLahir = req.body.tanggalLahir
    if (req.body.negara) result.negara = req.body.negara
    if (req.body.biografi) result.biografi = req.body.biografi

    await result.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
const deletePenulisById = async (req, res) => {
  try {
    const result = await Penulis.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penulis tidak ditemukan" })
    }

    await result.deleteOne()
    res.status(200).json({ message: "Penulis berhasil dihapus" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllPenulis,
  getPenulisById,
  createPenulis,
  updatePenulisById,
  deletePenulisById
}
