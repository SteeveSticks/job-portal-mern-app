const jwt = require("jsonwebtoken");
const User = require("./authModel");
const { OAuth2Client } = require("google-auth-library");

// controller function to register a user
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExits = await User.findOne({ email });

    if (userExits) {
      return res.status(400).json({ message: "User alredy exists!" });
    }

    const user = await User.create({ email, password });
    await user.save();
    res
      .status(201)
      .json({ message: "User resgistered succesfully", user: user });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Error registering a user" });
  }
};

// controller function to login a user
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "All fields are required!" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Ensure the password is a string and compare it
    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ message: " Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1hr" }
    );

    return res.status(201).json({
      message: "Login succesfull",
      token,
      user: {
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Error logging in a user" });
  }
};

// controller function to google sign in a user
const googleSignin = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = "http://localhost:3000/api/oauth";
  const client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile  openid ",
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
};

// controller function to get job by email
// const getJobByEmail = async (req, res) => {
//   try {
//     const { email } = req.params; // get the email of the user
//     const user = await User.find({ email }).sort({ createdAt: -1 });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     res.status(201).json({ message: "User found by email", user });
//   } catch (error) {
//     console.log("Error :", error);
//     res.status(500).json("Failed to get user by email");
//   }
// };

module.exports = {
  register,
  logIn,
  googleSignin,
};
