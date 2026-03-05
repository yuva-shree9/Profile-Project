
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Profile = require("./models/Profile");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/profileDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/profile", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

app.put("/profile", async (req, res) => {
  const updated = await Profile.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true
  });
  res.json(updated);
});

app.listen(5000, () => console.log("Server running on port 5000"));
