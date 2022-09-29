const UserAnalytics = require('../models/UserAnalytics');
const Shifts = require('../models/Shift');
const User = require("../models/User");

module.exports = {
    initializeAnalytics: async (req, res) => {
        try {
            res.render('createAnalytics.ejs');
        } catch (err) { 
            console.log(err);
        }
    },
    
    createUserAnalytics: async (req, res) => {
        try {
            console.log('generating user analytics... hold tight...');
            await UserAnalytics.create({
                user: req.user.id,
                totalShiftsWorked: 0,
                hoursForPeriod: {
                    today: 0,
                    sevenDays: 0,
                    thirtyDays: 0,
                    oneYear: 0,
                  },
                  salesForPeriod: {
                    today: 0,
                    sevenDays: 0,
                    thirtyDays: 0,
                    oneYear: 0,
                  },
                  tipsForPeriod: {
                    today: 0,
                    sevenDays: 0,
                    thirtyDays: 0,
                    oneYear: 0,
                  },
                  tipPercentageForPeriod: {
                    today: 0,
                    sevenDays: 0,   
                    thirtyDays: 0,
                    oneYear: 0,
                  },
                  earningsForPeriod: {
                    today: 0,
                    sevenDays: 0,   
                    thirtyDays: 0,
                    oneYear: 0,
                  }, 
            });
            console.log('Successfully generated user analytics!')
            res.redirect('/userProfile');
        } catch (err) {
            console.log(err);
            res.redirect('/userProfile');
        }
    },

    updateAnalytics: async (req, res) => {
        try {
            const shifts = await Shifts.find({user: req.user.id})
            const analytics = await UserAnalytics.find({user: req.user.id})
            analytics.totalShiftsWorked = shifts.length
            for(let i=0; i<shifts.length; i++) {
                let createdAt = new Date(shifts[i].createdAt)
                let currentDate = new Date();
                let daysSinceCreated = Math.ceil((Math.abs(createdAt.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)))

                console.log('Shift: ' + shifts[i]._id + ' was created ' + daysSinceCreated + ' day(s) ago')


            }
            console.log(analytics.totalShiftsWorked)
            res.redirect('/dashboard');
            } catch (err) {
            console.log(err);
            res.redirect('/dashboard');
            }
        }
  };