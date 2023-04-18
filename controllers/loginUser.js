import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/user.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      email,
    });
    if (!existingUser) {
      res.status(400).json({
        status: "fail",
        message: "User does not exist",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        user: existingUser,
        token,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

export default loginUser;
