const express = require('express');
const app = express();
const route = require('./routes')

app.use('/pages',route);

app.get("/", (req, res) => {
    res.send("This is my home page");
});

app.get("/about", (req, res) => {
    res.send("This is my about page");
});

app.get("/contact", (req, res) => {
    res.send("This is my Contact page");
});

app.post("/signup", (req, res) => {
    res.send("This is sign-up page");
});

// Create server
app.listen(5300, () => {
    console.log("Server is running fine");
});