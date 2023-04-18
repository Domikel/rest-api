import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

const createUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      userName,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export default createUser;
