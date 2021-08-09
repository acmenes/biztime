/// Invoices Route

const express = require("express");
const ExpressError = require("../expressError")
const db = require("../db")

let router = new express.Router();

router.get("/", async function (req, res, next){
    try {
        const results = await db.query(`SELECT * FROM invoices ORDER BY id`)
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
        const { comp_code, amt } = req.body;
        const results = await db.query(
            `INSERT INTO invoices (comp_code, amt)
            VALUES ($1, $2)
            RETURN id, comp_code, amt, paid, add_date, paid_date`,
            [comp_code, amt])
    return res.json({ invoice: results.rows})
    }
    catch(e) {
        return next(e)
    }
})

router.put("/:id", async function (req, res, next){
    try {
        const { amt, paid } = req.body;
        const { id } = req.params;
        let paidDate = null;

        const results = await db.query(
            `SELECT paid
            FROM invoices
            WHERE id = $1`, [id])
    return res.json({ invoices: results.rows })
    }
    catch(e) {
        return next(e)
    }
})

router.delete("/:id", async function (req, res, next){
    try {
        const { id } = req.params;
        const results = await db.query(
            `DELETE FROM companies
            WHERE id = $1
            RETURN id`, [id])
    return res.json({ message: "deleted" })
    }
    catch(e) {
        return next(e)
    }
})

module.exports = router;