///BizTime Express App

const express = require("express");

const app = express();
const ExpressError = require("./expressError")

app.use(express.json());

/// 404 Handler

app.use(function(req, res, next){
    const err = new ExpressError("Not found", 404)
    return next(err)
});

/// Error handler

app.use((err, req, res, next) =>{
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app; 