const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleRedirection,
  handleAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirection);
router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
