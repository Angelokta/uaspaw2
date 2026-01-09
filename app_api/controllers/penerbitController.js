const Penerbit = require("../models/penerbit")

// GET all
const getAllPenerbit = async (req, res) => {
  try {
    const result = await Penerbit.find()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET by ID
const getPenerbitById = async (req, res) => {
  try {
    const result = await Penerbit.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penerbit tidak ditemukan" })
    }
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CREATE
const createPenerbit = async (req, res) => {
  try {
    const penerbit = new Penerbit({
      namaPenerbit: req.body.namaPenerbit,
      alamat: req.body.alamat,
      tahunBerdiri: req.body.tahunBerdiri
    })

    const hasil = await penerbit.save()
    res.status(201).json(hasil)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// UPDATE
const updatePenerbitById = async (req, res) => {
  try {
    const result = await Penerbit.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penerbit tidak ditemukan" })
    }

    if (req.body.namaPenerbit) result.namaPenerbit = req.body.namaPenerbit
    if (req.body.alamat) result.alamat = req.body.alamat
    if (req.body.tahunBerdiri) result.tahunBerdiri = req.body.tahunBerdiri

    await result.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
const deletePenerbitById = async (req, res) => {
  try {
    const result = await Penerbit.findById(req.params.id)
    if (!result) {
      return res.status(404).json({ message: "Penerbit tidak ditemukan" })
    }

    await result.deleteOne()
    res.status(200).json({ message: "Penerbit berhasil dihapus" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllPenerbit,
  getPenerbitById,
  createPenerbit,
  updatePenerbitById,
  deletePenerbitById
}
