/// Invoices Route

const express = require("express");
const ExpressError = require("../expressError")
const db = require("../db")

let router = new express.Router();

router.get("/", async function (req, res, next){
    try {
        const results = await db.query(`SELECT * FROM invoices`)
        return res.json({ invoices: results.rows })
    }
    catch(e) {
        return next(e)
    }
})

router.get("/:id", async function (req, res, next){
    try {
        const { id } = req.params;
        const results = await db.query(`SELECT * FROM invoices WHERE id = $1`, [id])
        return res.json({ invoice: results.rows })
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