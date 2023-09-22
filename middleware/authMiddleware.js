const User = require('../models/User')

module.exports = (req, res, next) => {
  User.findById(req.session.userId)
    .then((user) => {
      console.log("bye-bye");
      console.log(req.session);
      if(!user ) { return res.redirect('/') }
      next()
    })
    .catch((error) => { 
      console.log("eNcOuNtErEd: " + error);
      return res.redirect('/') })
}
