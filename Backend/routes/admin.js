const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../models/admin.model");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/find", (req, res) => {
  Admin.find({ username: req.body.username }, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      console.log(results);
      if (results.length > 0) res.send("Found");
      else res.send("Not Found");
    }
  });
  //   res.send('Not Found');
});

//bcrypt compare password
router.post("/login", (req, res) => {
  Admin.findOne({ username: req.body.username }, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      console.log(results);
      if (results) {
        if (bcrypt.compareSync(req.body.password, results.password)) {
          res.send("PassMatched!!");
        } else {
          res.send("PassNotMatched!!");
        }
      } else {
        res.send("Not Found");
      }
    }
  });
});

router.post("/updatepassword", (req, res) => {
  Admin.findOneAndUpdate(
    { username: req.body.username },
    { password: bcrypt.hashSync(req.body.password, salt) },
    null,
    (err, results) => {
      if (err) {
        res.send("error :" + err);
      } else {
        res.send("DONE THE CHANGES!!!");
      }
    }
  );
  //   res.send("admin/add was called");
});

router.post("/securitykeyvalidation", (req, res) => {
  Admin.findOne({}, (err, result) => {
    if (err) {
      res.send("error :");
    } else {
      if (bcrypt.compareSync(req.body.securitykey, result.securitykey)) {
        res.send("SecurityKeyMatched");
      } else {
        res.send("SecurityKeyNotMatched");
      }
    }
  });
});

// function checkEmailAddress(email)
// {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

router.post("/add", (req, res) => {
  Admin.find({}, (err, results) => {
    if (err) {
      console.log("error :");
      return false;
    } else {
      if (results.length === 0) {
        if (req.body.username.includes(" ")) {
          res.send("UsernameWrong");
        } else {
          new Admin({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, salt),
            securitykey: bcrypt.hashSync(req.body.securitykey, salt),
          })
            .save()
            .then((resp) => {
              res.send("Admin Created / Updated");
            });
        }
      } else {
        res.send("Admin Already Exists");
      }
    }
  });
});

module.exports = router;
