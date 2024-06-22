import express from "express";
const app = express();
app.use(express.json);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hi", function (req, res) {
  res.send("Hello Arshia");
});

app.get("/getname/:firstname/:lastname", function (req, res) {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.post("/PostData", function (req, res) {
  const { firstname, lastname } = req.body;
  res.send(`Hello ${firstname} ${lastname}`);
});

app.put("/UpdateData", function (req, res) {
  const { firstname, lastname } = req.body;
  res.send(`Hello ${firstname} ${lastname}`);
});

app.delete("/DeleteData", function (req, res) {
  const { firstname, lastname } = req.body;
  res.send(`Hello ${firstname} ${lastname}`);
});

app.put("/UpdatetData", function (req, res) {
  const { firstname, lastname } = req.body;
  res.status(500).send(`Error`);
});

app.listen(3000, () => console.log("localhost:3000"));
