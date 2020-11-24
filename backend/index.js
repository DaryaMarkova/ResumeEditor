const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const fs = require("fs");
const pdf = require("html-pdf");
const ejs = require("ejs");

const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("./uploads"));
app.use(express.static("./public"));

app.use(cors());
app.use(fileUpload());

app.set("views", "./src/views");
app.set("view engine", "ejs");

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

app.post("/pdf", (req, res) => {
  try {
    res.download("./public/resume.pdf");
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

app.get("/resume_html", (req, res) => {
  res.render("newyork/index", {
    firstName: "FirstName",
    lastName: "LastName",
    summary:
      "Enthusiastic Software Engineer  |  Front End Developer with 4 years of experience and curious admirer of Data Structures and Algorithms",
    jobTitle: "Software Engineer",
    employmentHistory: [],
  });
});

app.post("/render_pdf", (req, res) => {
  const profile = req.body || {};

  ejs.renderFile(
    path.join(__dirname, "src", "views", "newyork", "index.ejs"),
    profile,
    (err, html) => {
      if (err) {
        return res.status(500).json(err);
      }

      pdf
        .create(html, {
          border: {
            top: "32px",
            right: "36px",
            bottom: "24px",
            left: "36px",
          },
        })
        .toFile("./public/resume.pdf", function (err, response) {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(200).json({ status: "Successfully rendered" });
          // res.download("./public/resume.pdf");
        });
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use(
//   "**",
//   createProxyMiddleware({
//     target: "https://resumebuilder.io/",
//     changeOrigin: true,
//   })
// );

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
