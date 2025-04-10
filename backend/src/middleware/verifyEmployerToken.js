const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyEmployerToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; //  make sure this is where you're attaching the user data
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// exports
module.exports = verifyEmployerToken;
