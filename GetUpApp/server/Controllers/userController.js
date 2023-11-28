const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user)
      return res.status(400).json("User with given email already exists");
    //validations below
    if (!firstname || !lastname || !email || !password)
      return res.status(400).json("All form fields are required");

    if (!validator.isEmail(email))
      return res.status(400).json("Wrong email format. Must be a valid email");

    if (!validator.isStrongPassword(password))
      return res
        .status(400)
        .json(
          "Only strong passwords required. \n Password must have: \n - at least 1 lowercase letter \n - at least 1 uppercase letter \n - at least 1 number \n - at least 1 special character"
        );

    //creation of user based on these fields
    user = new userModel({ firstname, lastname, email, password });

    //salt is a random string of characters to help security - less possibility of decoding
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //generate a token
    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, firstname, lastname, email, token });
  } catch (error) {
    console.log("Server failed to post data", error);
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) return res.status(400).json("Invalid email or password");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(400).json("Invalid email or password");

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log("Server failed to request", error);
    res.status(500).json(error);
  }
};

//to get a user / all users
const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, findUser, getUsers };
