module.exports = {
    getIndex: (req, res) => {
      if(!req.user) {
        res.redirect("/login")
      } else {
        res.redirect("/dashboard/" + req.user.id);
      }
    },
  };