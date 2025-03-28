const jwt = require("jsonwebtoken");
const Employer = require("./employerModel");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const EmployerLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const employer = await Employer.findOne({ username });

    if (!employer) {
      return res.status(404).json({ message: "Employer not found!" });
    }

    if (employer.password !== password) {
      return res.status(401).send({ message: " Invalid password" });
    }

    const token = jwt.sign(
      { id: employer._id, username: employer.username, role: employer.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Employer Login succesfull",
      token: token,
      employer: {
        username: employer.username,
        role: employer.role,
      },
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Employer Log-In Failed!" });
  }
};

module.exports = {
  EmployerLogin,
};
