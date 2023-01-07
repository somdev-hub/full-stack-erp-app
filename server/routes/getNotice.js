const router = require("express").Router();
const { MainNotices } = require("../models/mainNotices");

router.get("/:id", async (req, res) => {
  try {
    // const id = req.body.id;
    const mainNotice = await MainNotices.findOne({ _id: req.params.id });
    if (!mainNotice) return res.status(404).send("Notice not found");
    res.status(200).send(mainNotice);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
