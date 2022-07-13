const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function authorization(role) {
  return (req, res, next) => {
    const token = req.headers.token;
    try {
      if (!token) {
        return res.status(400).json({ message: "Log in" });
      }
      if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
          if (err) {
            console.log(err);
            return res.status(400).json({ message: "Something went wrong" });
          }
          if (decoded) {
            req.userRole = decoded.role;
            if (decoded.role !== role) {
              return res.status(403).json({ message: "Not allowed" });
            }

            next();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = {
  authorization,
};
