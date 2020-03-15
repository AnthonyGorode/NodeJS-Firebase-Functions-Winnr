const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const usersRoutes = require("./routes/users.routing");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, UPDATE, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/users", usersRoutes);

app.use("/",(req,res,next) => {
    res.status(200).json({
        message: "Welcome to the winnr-feed's Api Rest to manage all users"
    });
});

module.exports = app;