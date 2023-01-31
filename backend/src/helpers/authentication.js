const { jwtVerify } = require("./jwt");

const authentication = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).send("Access denied");
  }

  const data = jwtVerify(token);
  req.user = data.id;
  req.firstname = data.firstname;
  req.lastname = data.lastname;
  req.email = data.email;

  return next();
};

module.exports = authentication;
