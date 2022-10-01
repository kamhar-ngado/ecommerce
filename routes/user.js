const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is succesful");
});

router.post("/userpostest", (req, res) => {
  const username = req.body.username;
  // console.log(username);send to console
  res.send("your username is: " + username)
});

module.exports = router;
