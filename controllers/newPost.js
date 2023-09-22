module.exports = (req, res) =>{
  if(req.session.userId) {
    return res.render('create', {
      createPost: true
    })
  }
  console.log(`UserId value: ${req.session}` );
  res.redirect('/auth/login')
}
