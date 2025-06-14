import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }
    const newUser = new User({ username, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).json({
        message: "Email or password is not correct",
        success: false,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(409).json({
        message: "Email or password is not correct",
        success: false,
      });
    }

    let token=jwt.sign({ email: user.email, _id: user._id }, process.env.JSON_SECRET, {
      expiresIn: "24h",
    });
    return res.status(200).json({
      message: "Login successful",
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return jwt,res.status(500).json({ message: "Internal server error" });
  }
};
