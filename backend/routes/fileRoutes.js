// routes/fileRoutes.js
const express = require("express");
const fileController = require("../controllers/fileController");
const fileRouter = express.Router();

fileRouter.post("/upload", fileController.fileUpload);

module.exports = fileRouter;
