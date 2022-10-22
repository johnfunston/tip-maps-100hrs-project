const Shift = require('../models/Shift');


module.exports = {
    getDashboard: async (req, res) => {
        try {
            const shifts = await Shift.find({createdByUser: req.user.id});
              res.render("dashboard2.ejs", {ejsUser: req.user, ejsShifts: shifts, user: JSON.stringify(req.user), shifts: JSON.stringify(shifts)});
            } catch (err) {
              console.log(err);
            }
      }      
  };