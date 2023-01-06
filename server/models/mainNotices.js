const mongoose = require("mongoose");

const mainNoticesSchema = new mongoose.Schema({
  noticeDate: {
    date: Number,
    month: String
  },
  heading: String,
  description: String,
  from: String,
  to: String,
  attachment_type: String,
  attachment: String
});

const MainNotices = mongoose.model("MainNotices", mainNoticesSchema);

module.exports = { MainNotices };
