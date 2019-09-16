require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use("/", require("./router"));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "..", "frontend", req.path));
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))