const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fs = require("fs");
const pdf = require("html-pdf");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

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
        console.log(err);
        return res.status(500).json(err);
      }

      res.download("./resume.pdf");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
