const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.use(
  cors({
    origin: " http://localhost:5173",
    credentials: true,
  })
);

// route
const jobRoutes = require("./src/job/jobRoute");
const authRoute = require("./src/auth/authRoute");
const oauthRoute = require("./src/auth/oauth");
const employerRoute = require("./src/employer/employerRoute");

app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoute);
app.use("/api/employer", employerRoute);
app.use("/api/oauth", oauthRoute);

// root route
app.get("/", (req, res) => {
  res.send("Job portal is running!");
});

// MongoDB connection
(async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected succesfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    process.exit(1);
  }
})();

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
