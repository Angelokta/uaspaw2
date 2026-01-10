const Novel = require("../models/novel");

// get all
const getAllNovel = async (req, res) => {
  try {
    const result = await Novel.find()
      .populate("penulis", "nama biografi")
      .populate("penerbit", "namaPenerbit")

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get
const getNovelById = async (req, res) => {
  try {
    const result = await Novel.findById(req.params.id)
      .populate("penulis", "nama biografi")
      .populate("penerbit", "namaPenerbit tahunBerdiri")

    if (!result) {
      return res.status(404).json({ message: "Novel tidak ditemukan" })
    }

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create
const createNovel = async (req, res) => {
  try {
    const novel = new Novel({
      judul: req.body.judul,
      penulis: req.body.penulis,   // ObjectId Penulis
      penerbit: req.body.penerbit, // ObjectId Penerbit
      tahunTerbit: req.body.tahunTerbit,
      genre: req.body.genre,
      deskripsi: req.body.deskripsi
    })

    const hasil = await novel.save()
    res.status(201).json(hasil)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// update
const updateNovelById = async (req, res) => {
  try {
    const result = await Novel.findById(req.params.id)

    if (!result) {
      return res.status(404).json({ message: "Novel tidak ditemukan" })
    }

    if (req.body.judul) result.judul = req.body.judul
    if (req.body.penulis) result.penulis = req.body.penulis
    if (req.body.penerbit) result.penerbit = req.body.penerbit
    if (req.body.tahunTerbit) result.tahunTerbit = req.body.tahunTerbit
    if (req.body.genre) result.genre = req.body.genre
    if (req.body.deskripsi) result.deskripsi = req.body.deskripsi

    await result.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// delete
const deleteNovelById = async (req, res) => {
  try {
    const result = await Novel.findById(req.params.id)

    if (!result) {
      return res.status(404).json({ message: "Novel tidak ditemukan" })
    }

    await result.deleteOne()
    res.status(200).json({ message: "Novel berhasil dihapus" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//export
module.exports = {
  getAllNovel,
  getNovelById,
  createNovel,
  updateNovelById,
  deleteNovelById
}
