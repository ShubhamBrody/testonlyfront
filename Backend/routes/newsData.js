const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const News = require("../models/news.model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/get", (req, res) => {
  News.find({ header: req.body.header }, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      console.log(results);
      if (results.length > 0) res.send(results[0]);
      else res.send("Not Found");
    }
  });
  //   res.send('Not Found');
});

router.post("/update", (req, res) => {
  News.findOneAndUpdate(
    { header: req.body.header },
    { date: req.body.date, news: req.body.news },
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

router.post("/create", (req, res) => {
  new News({
    header: req.body.header,
    date: req.body.date,
    news: req.body.news,
  })
    .save()
    .then((resp) => {
      res.send("News Created / Updated");
    });
});

module.exports = router;
