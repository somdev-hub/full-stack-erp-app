const router = require("express").Router();
const { MainNotices } = require("../models/mainNotices");

router.get("/", async (req, res) => {
    try {
        const mainNotice = await MainNotices.find({});
        res.status(200).send(mainNotice);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

module.exports = router;