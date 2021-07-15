const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../models/admin.model");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);


router.post("/find", (req, res) => {
  Admin.find({username: req.body.username}, (err, results) => {
      if(err)
      {
          res.send('error :');
      }
      else
      {
          console.log(results);
          if(results.length > 0)
          res.send('Found');
          else
          res.send('Not Found');
      }
  });
//   res.send('Not Found');
});

router.post("/updatepassword", (req, res) => {
    Admin.findOneAndUpdate({username: req.body.username}, {password: req.body.password}, null, (err, results) => {
        if(err)
        {
            res.send('error :' + err);
        }
        else
        {
            res.send('DONE THE CHANGES!!!');
        }
    });
//   res.send("admin/add was called");
});

router.post('/add', (req, res) => {
    new Admin({
        username: req.body.username,
        password: req.body.password,
    }).save().then(resp => {res.send('Admin Created / Updated')});
})

module.exports = router;
