// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  //console.log("🧠 checkAuthentication → session:", req.session);
  const { userId } = req.session;
  if (!userId) {
    console.log("⛔ No userId in session.");
    return res
      .sendStatus(401)
      .send({ message: "unauthorized, please log in to perform this action." });
  }
  //console.log("✅ User authenticated:", req.session.userId);
  return next();
};

module.exports = checkAuthentication;
