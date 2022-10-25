const Shift = require('../models/Shift');
const User = require('../models/User');

module.exports = {
    getShiftSubmit: async (req, res) => {
        try {
          res.render("addShift.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      addshift: async (req, res) => {
        try {
            await Shift.create({
              createdByUser: req.user.id,
              atWorkplace: req.body.atWorkplace,
              dateWorked: req.body.dateWorked,
              startTime: req.body.startTime,
              endTime: req.body.endTime,
              hoursWorked: req.body.hoursWorked,
              positionWorked: req.body.positionWorked,
              totalSales: req.body.totalSales,
              tips: req.body.tips,
              tipout: req.body.tipout,
              wage: req.body.baseWage,
              section: req.body.section,
              createdAt: req.params.createdAt,
              break: req.body.break,
              rating: req.body.shiftRating,
              comment: req.body.comment,
            });
            res.redirect("/dashboard/" + req.user.id)
          } catch (err) {
            console.log(err);
          }
        },
      };