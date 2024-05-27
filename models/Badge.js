const mongoose = require("mongoose");

const BadgeSchema = new mongoose.Schema(
  {
    uid: { type: String},
    access_status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("badge", BadgeSchema);
