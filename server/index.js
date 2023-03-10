require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const getUserData = require("./routes/getUserData");
const getMainNotice = require("./routes/getMainNotice");
const getNotice=require("./routes/getNotice");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

//db connection
connection();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/getUserData", getUserData);
app.use("/api/getMainNotice", getMainNotice);
app.use("/api/getNotice",getNotice);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
