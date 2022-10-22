module.exports = {
    getIndex: (req, res) => {
      if(!req.user) {
        res.redirect("/login")
      } else {
        res.render("home.ejs", {user: req.user});
      }
    },
  };