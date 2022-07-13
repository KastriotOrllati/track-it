const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function auth(req, res, next) {
  const token = req.headers.token;

  try {
    if (!token) {
      return res.status(400).json({ message: "log in" });
    }

    if (token) {
      jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: "Log in to continue" });
        }
        if (decoded) {
          req.userId = decoded.id;

          next();
        } else {
          console.log(err);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  auth,
};
