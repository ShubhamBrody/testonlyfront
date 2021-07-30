const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Fund = require("../models/fundraisingform.model");
const nodemailer = require("nodemailer");

require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/get", (req, res) => {
  Fund.find({ email: req.body.email }, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      if (results.length > 0) res.send(results);
      else res.send("Not Found");
    }
  });
  //   res.send('Not Found');
});

router.get("/getall", (req, res) => {
  Fund.find({}, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      if (results.length > 0) res.send(results);
      else res.send("Not Found");
    }
  });
});

router.post("/createorupdate", (req, res) => {
  Fund.create(
    {
      email: req.body.email,
      name: req.body.name,
      contact: req.body.contact,
      amount: req.body.amount,
    },
    (err, results) => {
      if (err) {
        res.send("error :" + err);
      } else {
        var mailOptions = {
          from: "st8896464352@gmail.com",
          to: "st8896464352@outlook.com",
          subject: "Fund Raising",
          text:
            "This is to inform you that a new fund raising request is recieved. The details are as follows :\n\nName : " +
            results.name +
            "\nContact : " +
            results.contact +
            "\nEmail : " +
            results.email +
            "\nAmount : Rs." +
            results.amount +
            "/-",
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        console.log("The res after creating : ", results);
        res.send("CREATED THE DATA!!!");
      }
    }
  );
});

module.exports = router;
