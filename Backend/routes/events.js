const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Events = require("../models/booksform.model");
const Path = require("path");
const fileUpload = require("express-fileupload");
const fs = require("fs");

async function exists(path) {
  return fs.promises
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use(
  fileUpload({
    debug: true,
  })
);

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get("/getall", (req, res) => {
  Events.find({}, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      res.send(results);
    }
  });
});

router.post("/createorupdate", async (req, res) => {
  if (req.files === null) {
    res.send("No files found");
  }
  const file = req.files.file;

  const path = Path.join(__dirname, `../../public/uploads/${file.name}`);

  var rep = false;

  if (await exists(path).then(res => res) === true) {
    rep = true;
  } else {
    file.mv(
      Path.join(__dirname, `../../public/uploads/${file.name}`),
      (err) => {
        if (err) {
          console.log("err occ : ", err);
          res.send("error :");
        }
      }
    );
  }

  res.json({
    fileName: file.name,
    filePath: `/uploads/${file.name}`,
    repeated: rep,
  });
});

router.post("/delete", async (req, res) => {
  const file = req.body.fileName;
  const path = Path.join(__dirname, `../../public/uploads/${file}`);

  if (await exists(path).then(res => res) === true) {
    await fs.unlink(path, (err) => {
      if (err) {
        console.log("err occ : ", err);
        res.send("ERROR");
      }
    });
    res.send("SUCCESS");
  }
  else {
    res.send("FILE DOESNT EXIST");
  }
});


module.exports = router;
