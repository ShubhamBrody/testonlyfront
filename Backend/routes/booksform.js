const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Books = require("../models/booksform.model");

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
      console.log(results);
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
      console.log(results);
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
        res.send("CREATED THE DATA!!!");
      }
    }
  );
});

module.exports = router;
