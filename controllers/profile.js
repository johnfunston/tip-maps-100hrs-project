const { array } = require("../middleware/multer");
const { modelName } = require("../models/User");
const User = require("../models/User");

module.exports = {
    getProfile: async (req, res) => {
        try {
          res.render("profile.ejs", {stringifiedUser: JSON.stringify(req.user), user: req.user});
        } catch (err) {
          console.log(err);
        }
      },

    updateUserEmployment: async (req, res) => {
      try {
        await User.findOneAndUpdate(
            { _id: req.user.id },
            {
                employment: {  
                  workplaces: {
                    name: req.body.workplaceName,
                      location: {
                        address: req.body.workplaceAddress,
                        zippostal: req.body.workplaceZippostal,
                        city: req.body.workplaceCity,
                        region: req.body.workplaceRegion,
                        country: req.body.workplaceCountry,
                      },
                      positions: 
                        {
                          title: req.body.positionTitle,
                          baseWage: req.body.positionBaseWage,
                          tipout: req.body.positionTipout,
                        }
                    }
                  }
                });  
      res.redirect("/profile");
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
                savingsGoal: req.body.savingsGoal,
                },
              );
              res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  }, 
};