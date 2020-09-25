const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const fs = require("fs");
const pdf = require("html-pdf");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("./uploads"));

app.use(cors());
app.use(fileUpload());

const port = 3005;

app.get("/pdf", (req, res) => {
  try {
    const html = fs.readFileSync(
      "/Users/daryamarkova/WebProjects/resume-editor/backend/src/test.html",
      "utf-8"
    );

    pdf.create(html, {}).toFile("./test.pdf", function (err, response) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.download("./test.pdf");
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// just test script
// https://www.npmjs.com/package/html-pdf
app.post("/pdf", (req, res) => {
  try {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Resume</title></head><body>${req.body.content}</body></html>`;
    pdf.create(html, {}).toFile("./resume.pdf", function (err, response) {
      if (err) {
        return res.status(500).json(err);
      }

      res.download("./resume.pdf");
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  try {
    const uploadedFile = req.files.file;
    // const extension = path.extname(uploadedFile.name);
    uploadedFile.mv(`./uploads/avatar.jpg`, function (err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.status(201).send();
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// add remove method for file here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
