const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Events = require("../models/events.model");
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
router.use(fileUpload());

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get("/getall", (req, res) => {
  Events.find({}, (err, results) => {
    if (err) {
      res.send("error :");
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

router.post("/eventupload", (req, res) => {
  Events.create(
    {
      imagename: req.body.imagename,
      title: req.body.title,
      description: req.body.description,
    },
    (err, result) => {
      if (err) {
        res.json({report : "ERROR"});
        console.log("events err : ", err);
      } else {
        res.json({report : "SUCCESS", imagename: result.imagename});
      }
    }
  );
});

router.post("/imageupload", async (req, res) => {
  if (req.files === null) {
    res.send("No files found");
  }
  const file = req.files.file;

  const path = Path.join(__dirname, `../../public/uploads/${file.name}`);

  var rep = false;

  if ((await exists(path).then((res) => res)) === true) {
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

router.post("/deleteevent", (req, res) => {
  Events.findOneAndDelete({ _id: req.body.id }, (err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
      res.json({report : "ERROR"});
    } else res.send({report : "SUCCESS", imagename : results.imagename});
  });
});

router.post("/deleteimage", async (req, res) => {
  const file = req.body.fileName;
  const path = Path.join(__dirname, `../../public/uploads/${file}`);

  if ((await exists(path).then((res) => res)) === true) {
    await fs.unlink(path, (err) => {
      if (err) {
        console.log("err occ : ", err);
        res.send("ERROR");
      }
    });
    res.send("SUCCESS");
  } else {
    res.send("FILE DOESNT EXIST");
  }
});

router.post("/updateevent", async (req, res) => {
  Events.findOneAndUpdate(
    { _id: req.body.id },
    {
      imagename: req.body.imagename,
      title: req.body.title,
      description: req.body.description,
    },
    null,
    (err, results) => {
      if (err) {
        console.log(err);
        res.json({ report: "ERROR" });
      } else res.json({ report: "SUCCESS", imagename: results.imagename });
    }
  );
});

module.exports = router;







// e.preventDefault();

    // if (this.state.eventTitle === "" || this.state.eventDescription === "") {
    //   alert("Event title / description should not be empty");
    //   return;
    // }

    // if (this.state.fileName === "" || this.state.file === "") {
    //   alert("Please select a file to upload");
    //   return;
    // }

    // if (!this.checkIfAFileISImage(this.state.file.name)) {
    //   alert("Please upload a valid image file");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("file", this.state.file);