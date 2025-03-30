const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyEmployerToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // extract the token from the header

  if (!token) {
    return res.status(401).json({ message: "Acess Denied. No token provided" });
  }

  try {
    const employer = jwt.verify(token, JWT_SECRET);
    req.user = employer;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid credentials" });
  }
};

// exports
module.exports = verifyEmployerToken;
