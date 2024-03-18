const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const path = require("path");
const staticRouter = require("./routes/staticRouter");

const app = express();
const PORT = 4444;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDB("mongodb://127.0.0.1:27017/urlShortner").then(() => {
  console.log("MongoDb Connected.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRouter);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
