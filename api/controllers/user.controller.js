const USER_MODULE = require("../moduls/user.Module");

  const createUser = async (req, res) => {
    try {
      const { name, phone } = req.body;
      const user = await USER_MODULE.create({ name, phone });
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  };


  const findUser = (req, res) => {
    USER_MODULE.findOne({ username: req.body.username })
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((e) => {
        res.status(500).json({ message: "Error finding user" });
      });
  };

  const login = async (req, res) => {
    const { phone, password } = req.body
    try {
      const user = await USER_MODULE.findOne({
        phone: phone,
      

      })
      res.status(200).json({
        success: true,
        message: "user Logod in",
        data: user
      })
    }
    catch (error) {
      res.status(400).json({
        success: false,
        error: error.name,
        message: error.message,
      })
    }
  };


  module.exports = {
    findUser,
    createUser,
    login,
  }
