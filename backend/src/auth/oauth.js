const { OAuth2Client } = require("google-auth-library");

const express = require("express");
const router = express.Router();
// Helper function to fetch user data from Google API
async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  const data = await response.json();
  console.log("data", data);
}

router.get("/", async (req, res) => {
  try {
    const code = req.query.code;
    if (!code) return res.status(400).json({ message: "Code is missing!" });
    console.log(code);

    const redirectUrl = "http://localhost:3000/api/oauth";
    const client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );

    // Exchange code for access token
    const tokenResponse = await client.getToken(code);
    console.log("Token Response:", tokenResponse.tokens);
    await client.setCredentials(tokenResponse.tokens);

    console.info("Tokens acquired.");

    const user = client.credentials;
    console.log("credentials", user);
    const userData = await getUserData(client.credentials.access_token);

    res.json({ user: userData, token: tokenResponse.tokens.access_token });
  } catch (error) {
    console.error(
      "Error signing in with Google:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({ message: "Google Sign-In failed!", error: error.message });
  }
});

module.exports = router;
