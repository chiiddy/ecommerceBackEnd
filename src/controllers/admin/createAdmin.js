import admin from '../../models/admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const createAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password is less than 8 characters" });
  }
  try {
    bcrypt.hash(password, 10).then(async (hash) => {
      await admin.create({ email, password: hash }).then(
        (user) => {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, email },
            process.env.JWT_SECRETKEY,
            { expiresIn: maxAge }
          );
          res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ message: "User successfully created", user });
        }
      );
    });
  } catch (err) {
    res.status(400).json({
      message: "User not successfully created",
      error: err.message,
    });
  }
}


export default createAdmin;