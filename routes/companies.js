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

router.put("/:code", async function (req, res, next){
    try {

    }
    catch(e) {
        return next(e)
    }
})

router.delete(":/code", async function (req, res, next){
    
})

module.exports = router;