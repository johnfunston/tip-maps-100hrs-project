const Shift = require('../models/Shift');
const { shift } = require('../routes/main'); 

module.exports = {
    getShiftSubmit: async (req, res) => {
        try {
          res.render("shiftSubmit.ejs", {user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      submitShift: async (req, res) => {
        try {
            await Shift.create({
              user: req.user.id,
              dateWorked: req.body.dateWorked,
              hoursWorked: req.body.hoursWorked,
              positionWorked: req.body.position,
              totalSales: req.body.sales,
              tips: req.body.tips,
              tipout: req.body.tipout,
              wage: req.body.baseWage,
              section: req.body.section,
              createdAt: req.params.createdAt,
              break: req.body.break,
            });
            console.log("Shift data logged successfully");
            res.redirect("/profile");
          } catch (err) {
            console.log(err);
          }
        },
      };