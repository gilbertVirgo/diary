const express = require("express");

const router = express.Router();

const entries = [
    {
        "id": 1,
        "title": "My First Entry!",
        "body": `
            <p>Dear diary,</p>
            <p>It was really fun today, I went to the park and stuff.</p>
            <p>See you next time!</p>
            <p>Kaddubusagwa</p>`
    },
    {
        "id": 2,
        "title": "First day at work",
        "body": `
            <p>Dear diary,</p>
            <p>First day of work was really boring man. I wish I could get back to freelancing. </p>
            <p>See you next time!</p>
            <p>Kaddubusagwa</p>`
    }
]

router.get("/entry/:id", (req, res) => {
    if(entries[0]) {

    }
});

router.put("/entry", (req, res) => {

});

router.patch("/entry/:id", (req, res) => {

});

router.get("/entries", (req, res) => {

});

module.exports = router;