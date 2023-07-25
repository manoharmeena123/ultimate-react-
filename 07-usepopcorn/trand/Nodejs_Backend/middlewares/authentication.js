const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const authenticate = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, "masai", (err, decode) => {
      if (err) {
        console.log(err);
        res.json({ msg: "Invalid token" });
      } else {
        const userId = decode.UserId;
        req.body.userId = userId;
        next();
      }
    });
  } else {
    res.json({ msg: "Please Login..!" });
  }
};

module.exports = {
  authenticate,
};
