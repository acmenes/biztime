///BizTime Express App

const express = require("express");

const app = express();
const ExpressError = require("./expressError");

const companiesRoutes = require("./routes/companies");
const invoicesRoutes = require("./routes/invoices");

app.use(express.json());
app.use("/companies", companiesRoutes);
app.use("/invoices", invoicesRoutes);

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