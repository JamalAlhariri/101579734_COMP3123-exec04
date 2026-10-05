const express = require("express");

const app = express();
const SERVER_PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

app.post("/users", (req, res) => {
    res.json(req.body);
});
app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}`);
});