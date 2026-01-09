const Sinopsis = require("../models/sinopsis")

// get all
const getAllSinopsis = async (req, res) => {
  try {
    const result = await Sinopsis.find()
      .populate({
        path: "novel_id",
        select: "judul tahunTerbit genre",
        populate: [
          {
            path: "penulis",
            select: "nama biografi"
          },
          {
            path: "penerbit",
            select: "namaPenerbit tahunBerdiri"
          }
        ]
      })

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get
const getSinopsisById = async (req, res) => {
  try {
    const result = await Sinopsis.findById(req.params.id)
      .populate({
        path: "novel_id",
        select: "judul tahunTerbit genre",
        populate: [
          { path: "penulis", select: "nama biografi" },
          { path: "penerbit", select: "namaPenerbit tahunBerdiri" }
        ]
      })

    if (!result) {
      return res.status(404).json({ message: "Sinopsis tidak ditemukan" })
    }

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create
const createSinopsis = async (req, res) => {
  try {
    const sinopsis = new Sinopsis({
      ringkasan: req.body.ringkasan,
      tema: req.body.tema,
      novel_id: req.body.novel_id
    })

    const hasil = await sinopsis.save()
    res.status(201).json(hasil)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// update
const updateSinopsisById = async (req, res) => {
  try {
    const result = await Sinopsis.findById(req.params.id)

    if (!result) {
      return res.status(404).json({ message: "Sinopsis tidak ditemukan" })
    }

    if (req.body.ringkasan) result.ringkasan = req.body.ringkasan
    if (req.body.tema) result.tema = req.body.tema

    await result.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// delete
const deleteSinopsisById = async (req, res) => {
  try {
    const result = await Sinopsis.findById(req.params.id)

    if (!result) {
      return res.status(404).json({ message: "Sinopsis tidak ditemukan" })
    }

    await result.deleteOne()
    res.status(200).json({ message: "Sinopsis berhasil dihapus" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// export 
module.exports = {
  getAllSinopsis,
  getSinopsisById,
  createSinopsis,
  updateSinopsisById,
  deleteSinopsisById
}
