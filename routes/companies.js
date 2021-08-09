/// Companies Route

const express = require("express");
const ExpressError = require("../expressError")
const db = require("../db")

let router = new express.Router();

router.get("/", async function (req, res, next) {
    try{
        const results = await db.query(`SELECT * FROM companies`)
        return res.json({ companies: results.rows })
    } catch(e){
        return next(e);
    }
});

router.get("/:code", async function (req, res, next){
    try {
        const { code } = req.params;
        const results = await db.query(`SELECT * FROM companies WHERE code = $1`, [code])
        return res.json({ company: results.rows })
    }
    catch(e) {
        return next(e)
    }
})

router.post("/", async function (req, res, next){
    try {
        const { name, description } = req.body;
        const { code } = req.params;
        const results = await db.query(
            `INSERT INTO companies (code, name, description)
            VALUES ($1, $2, $3)
            RETURNING code, name description`,
            [code, name, description])
        return res.json({ company: results.rows})
    }
    catch(e) {
        return next(e)
    }
})

router.put("/:code", async function (req, res, next){
    try {
        const { name, description } = req.body;
        const { code } = req.params;
        const results = await db.query(
            `UPDATE companies 
            SET name = $1, description = $2 
            WHERE code = $3
            RETURNING code, name, description`,
            [name, description, code])
        return res.json({ company: results.rows })
    }
    catch(e) {
        return next(e)
    }
})

router.delete(":/code", async function (req, res, next){
    try{
        const { code } = req.params;
        const results = await db.query(
            `DELETE FROM companies
            WHERE code = $1
            RETURNING code`, [code])
        return res.json({ message: deleted })
    }
    catch(e){
        return next(e)
    }
})

module.exports = router;