const { array } = require("../middleware/multer");
const User = require("../models/User");

module.exports = {
    getProfile: async (req, res) => {
        try {
          res.render("profile.ejs", {user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      getUserDataForm: async (req, res) => {
      try {
        res.render("userInfo.ejs", {user: req.user})
      } catch (err) {
        console.log(err);
      }
    },
    updateUserProfile: async (req, res) => {
        try {
            await User.findOneAndUpdate(
                { _id: req.user.id },
                {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                location: 
                {
                    city: req.body.city,
                    country: req.body.country,
                    region: req.body.region,   
                    },
                workplace: {
                    address: req.body.workplaceAddress,
                    name: req.body.workplaceName,
                    },
                baseWage: req.body.baseWage,
                savingsGoal: req.body.savingsGoal,
                },
                
              );
              res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  }, 
};