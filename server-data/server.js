import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/datav1", (req, res) => {
  fs.readFile("datav1.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading data file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/datav2", (req, res) => {
  fs.readFile("datav2.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading data file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
