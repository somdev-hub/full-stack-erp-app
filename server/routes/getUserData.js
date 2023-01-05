const router = require("express").Router();
const { UserData } = require("../models/userData");

router.get("/:email", async (req, res) => {
    try {
        const userData = await UserData.findOne({ email: req.params.email });
        res.status(200).send(userData);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
})

module.exports = router;