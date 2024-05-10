const mongoose = require("mongoose");

const LedSchema = new mongoose.Schema(
  {
    led: { type: Number},
    state: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("led", LedSchema);
