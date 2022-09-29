const Shift = require('../models/Shift');

module.exports = {
    getDashboard: async (req, res) => {
        try {
            const shifts = await Shift.find({user: req.user.id});
              res.render("dashboard.ejs", {user: req.user, shifts: shifts });
            } catch (err) {
              console.log(err);
            }
      },
      
  };