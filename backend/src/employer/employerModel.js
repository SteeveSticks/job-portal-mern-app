const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "employer"], // enum is ensure that the field can only have specific values like this role!
    default: "employer",
  },
});

// hash the employer password before saving
employerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Employer = mongoose.model("Employer", employerSchema);

// export
module.exports = Employer;
