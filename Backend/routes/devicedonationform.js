const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Device = require("../models/devicedonationform.model");
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
  Device.find({ email: req.body.email }, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      if (results.length > 0) res.send(results);
      else res.send("Not Found");
    }
  });
});

router.get("/getall", (req, res) => {
  Device.find({}, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      if (results.length > 0) res.send(results);
      else res.send("Not Found");
    }
  });
});

router.post("/createorupdate", (req, res) => {
  Device.create(
    {
      email: req.body.email,
      name: req.body.name,
      contact: req.body.contact,
      address: req.body.address,
      laptop: req.body.laptop,
      tablet: req.body.tablet,
      smartphone: req.body.smartphone,
      model: req.body.model,
      number_of_devices: req.body.number_of_devices,
      age: req.body.age,
      condition: req.body.condition,
    },
    (err, results) => {
      if (err) {
        res.send("error :" + err);
      } else {
        var mailOptions = {
          from: 'geolifeyouthclub@gmail.com',
          to: "geolifeyouthclubhr@gmail.com",
          subject: "Device Donations",
          text:
            "This is to inform you that a new fund raising request is recieved. The details are as follows :\n\nName : " +
            results.name +
            "\nContact : " +
            results.contact +
            "\nEmail : " +
            results.email +
            "\nAddress : Rs." +
            results.address +
            "\nSmartphone : " + 
            results.smartphone ? "Yes" : "No" +
            "\nLaptop : " + 
            results.laptop ? "Yes" : "No" +
            "\nTablet : " + 
            results.tablet ? "Yes" : "No" +
            "\nModel : " + 
            results.model +
            "\nNumber of Devices : " +
            results.number_of_devices +
            "\nAge : " +
            results.age +
            "\nCondition : " +
            results.condition +
            "\n\nThank You\n\n(This is an automated message no need to reply.)",
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
