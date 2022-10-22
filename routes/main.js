const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const shiftsController = require("../controllers/shifts");
const profileController = require("../controllers/profile");
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
/*
router.get("/profile", ensureAuth, profileController.getProfile);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);
router.get("/map", ensureAuth, mapController.getMap);
router.get("/shifts", ensureAuth, shiftsController.getShifts);
*/

router.get("/dashboard/:id", ensureAuth, dashboardController.getDashboard)
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, profileController.getProfile);
router.put("/updateUserProfile", ensureAuth, profileController.updateUserProfile)
router.put("/updateUserEmployment", ensureAuth, profileController.updateUserEmployment)
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
