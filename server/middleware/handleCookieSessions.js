// const cookieSession = require('cookie-session');
// const handleCookieSessions = cookieSession({
//   name: 'session', // this creates a req.session property holding the cookie
//   secret: process.env.SESSION_SECRET, // this secret is used to hash the cookie
// });

// module.exports = handleCookieSessions;

//josh changes//
const cookieSession = require("cookie-session");

const handleCookieSessions = cookieSession({
  name: "session", // this creates req.session
  keys: [process.env.SESSION_SECRET || "fallbackSecretKey"], // ✅ array of keys required
  maxAge: 24 * 60 * 60 * 1000, // optional: 24 hours
});

module.exports = handleCookieSessions;
