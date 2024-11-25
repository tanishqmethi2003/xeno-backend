const express = require("express");
const router = express.Router();
const metricController = require("../controllers/metricController")

router.get("/get", metricController.calculateMetrics);

module.exports = router;