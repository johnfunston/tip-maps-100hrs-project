const express = require("express");
const router = express.Router();
const shiftsController = require("../controllers/shifts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, shiftsController.getShiftSubmit)
router.post("/addshift", ensureAuth, shiftsController.addshift);

module.exports = router;