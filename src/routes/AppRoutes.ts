const express = require("express");
const router = express.Router();

const { getAllJobs, getAllJobsTesting, Temp } = require("../controllers/Jobs");

router.route("/").get(getAllJobs);
router.route("/testing").get(getAllJobsTesting);
router.route("/temp").get(Temp);

module.exports = router;
