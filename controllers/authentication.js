const jwt = require(`jwt-simple`);
const User = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  console.log(`${JSON.stringify(req.user)}`);
  res.send({
    token: tokenForUser(req.user),
    user: { ...req.user._doc, password: "lol" }
  });
};

exports.signup = function(req, res, next) {
  const email = req.body.formProps.email;
  const password = req.body.formProps.password;
  const name = req.body.formProps.name;
  const dob = req.body.formProps.dob;
  const city = req.body.formProps.city;
  const country = req.body.formProps.country;
  const createdAt = new Date().getTime();

  console.log(
    `email n password n body: ${JSON.stringify(
      req.body
    )} ${email} / ${password}`
  );

  if (!email || !password) {
    console.log(`but y`);
    return res.status(422).send({ error: "You must all entreis" });
  }
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      console.log(`no way`);
      return res.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      email: email,
      dateOfBirth: dob,
      name,
      city,
      country,
      password: password,
      createdAt
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.json({
          token: tokenForUser(user),
          user: { ...user._doc, password: "lol" }
        });
      }
    });
  });
};
