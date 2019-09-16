require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/entry/:id", (req, res) => {

});

app.get("/entries", (req, res) => {

});


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))