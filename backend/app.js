const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
require("dotenv").config();
require("./db/connection.db");

//importing routes
const authRoutes = require("./src/routes/auth.route");

const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/v1/auth", authRoutes);

// error handler middleware
app.use((error, _req, res, _next) => {
  res
    .status(error.status ? error.status : 400)
    .json({ status: "error", message: error.message, data: null });
});

// server configuration
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
