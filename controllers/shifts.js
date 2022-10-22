const Shift = require('../models/Shift');
const User = require('../models/User');

module.exports = {
    getShiftSubmit: async (req, res) => {
        try {
          res.render("shiftSubmit.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      submitShift: async (req, res) => {
        try {
            await Shift.create({
              createdByUser: req.user.id,
              atWorkplace: req.body.workplace,
              dateWorked: req.body.dateWorked,
              hoursWorked: ((req.body.hoursWorked + req.body.minutesWorked) / 60),
              positionWorked: req.body.positionTitle,
              totalSales: req.body.sales,
              tips: req.body.tips,
              tipout: req.body.tipout,
              wage: req.body.baseWage,
              section: req.body.section,
              createdAt: req.params.createdAt,
              break: req.body.break,
            });
            res.redirect("/dashboard/" + req.user.id)
          } catch (err) {
            console.log(err);
          }
        },
      };