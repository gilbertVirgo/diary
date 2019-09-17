require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();

const createEntry = props => entries.push({
    id: Date.now(), 
    dateCreated: Date.now(),
    ...props
});

const updateEntry = (current, props) => {
    Object.keys(props).forEach(prop => {
        current[prop] = props[prop];
    });

    entries[current.id] = current;
}

const users = [
    {
        "id": 59934545,
        "email": "tan@bir.com",
        "password": "password",
        "tokens": []
    },
    {
        "id": 32490234,
        "email": "gil@bert.com",
        "password": "password",
        "tokens": []
    }
];

const entries = [
    {
        "id": 1234234,
        "title": "My First Entry!",
        "body": `
            <p>Dear diary,</p>
            <p>It was really fun today, I went to the park and stuff.</p>
            <p>See you next time!</p>
            <p>Kaddubusagwa</p>`
    },
    {
        "id": 2234425,
        "title": "First day at work",
        "body": `
            <p>Dear diary,</p>
            <p>First day of work was really boring man. I wish I could get back to freelancing. </p>
            <p>See you next time!</p>
            <p>Kaddubusagwa</p>`
    }
]

router.get("/user/session/:token", ({params: {token}}, res) => {
    const decoded = jwt.verify(token, process.env.SECRET);

    const user = decoded && users.find(user => user.email === decoded.data.email);

    if(user) {
        if(user.tokens.includes(token)) {
            res.status(200).json({success: true});
        } else {
            res.status(403).json({success: false, error: "Invalid token"});
        }
    } else {
        res.status(401).json({success: false, error: "Absolute failure"});
    }
});

router.post("/user/session", ({body: {email, password}}, res) => {
    const index = users.findIndex(user => user.email === email);

    const user = (index > -1) && users[index];

    if(user) {
        if(user.password === password) {
            const token = jwt.sign({
                data: { id: user.id, email: user.email }
            }, process.env.SECRET, { expiresIn: '1h' }); 

            user.tokens.push(token);

            res.status(200).json({success: true, token});
        } else {
            res.status(403).json({success: false, error: "Invalid username and password combination"});
        }
    } else {
        res.status(401).json({success: false, error: "User does not exist."});
    }
});

router.get("/entry/:id", ({body: {id}}, res) => {
    const entry = entries[id];

    if(entry) {
        res.json({success: true, body: entry});
    } else {
        res.json({success: false});
    }
});

router.put("/entry", ({body: {title, body}}, res) => {
    createEntry({title, body});

    res.send({success: true});
});

router.patch("/entry/:id", ({body: {title, body}}, res) => {
    updateEntry({title, body});

    res.send({success: true});
});

router.get("/entries", (req, res) => {
    res.send({success: true, entries});
});

module.exports = router;