const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Books = require("../models/booksform.model");
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
  Books.find({ email: req.body.email }, (err, results) => {
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
  Books.find({}, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      if (results.length > 0) res.send(results);
      else res.send("Not Found");
    }
  });
});

router.post("/createorupdate", (req, res) => {
  Books.create(
    {
      email: req.body.email,
      name: req.body.name,
      contact: req.body.contact,
      genre: req.body.data.genre,
      number_of_books: req.body.data.number_of_books,
      condition: req.body.data.condition,
    },
    (err, results) => {
      if (err) {
        res.send("error :" + err);
      } else {
        var mailOptions = {
          from: 'geolifeyouthclub@gmail.com',
          to: "geolifeyouthclubhr@gmail.com",
          subject: "Books Donations",
          text:
            "This is to inform you that a new donation is recieved. The details are as follows :\n\nName : " +
            results.name +
            "\nContact : " +
            results.contact +
            "\nEmail : " +
            results.email +
            "\nGenre : " +
            results.genre +
            "\nNumber of books : " +
            results.number_of_books +
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
