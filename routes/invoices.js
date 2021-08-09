/// Invoices Route

const express = require("express");
const ExpressError = require("../expressError")
const db = require("../db")

let router = new express.Router();

router.get("/", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

router.get("/:id", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

router.post("/", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

router.put("/:id", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

router.delete("/:id", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

module.exports = router;