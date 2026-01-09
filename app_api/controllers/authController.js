const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


// REGISTER
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  // validasi sederhana
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Username, email, dan password wajib diisi"
    });
  }

  try {
    // cek user sudah ada
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User sudah terdaftar"
      });
    }

    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    // buat token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Register berhasil",
      token
    });

  } catch (error) {
     console.error("ERROR REGISTER:", error); 
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email dan password wajib diisi"
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email atau password salah"
      });
    }

    // bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Email atau password salah"
      });
    }

    const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET
  );


    res.json({
      message: "Login berhasil",
      token
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({
      message: "Terjadi kesalahan pada server"
    });
  }
};
