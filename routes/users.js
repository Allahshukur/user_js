const express = require('express');
const router = express.Router();

const db = require("../data/db.js");

router.get(`/users/:id`, async (req, res) => {
    // async-await
    try {
        const [result,] = await db.execute("SELECT * FROM users WHERE user_id =?", [req.params.id])
        res.render("user-detail", {users: result});
    } catch (err) {
        console.log(err);
    }
})

router.get('/usersDel', async (req, res) => {
    // async-await
    try {
        const [result,] = await db.execute("SELECT * FROM users where user_delete = 1")
        res.render("users", {users: result});
    } catch (err) {
        console.log(err);
    }
})

router.get('/usersNoDel', async (req, res) => {
    // async-await
    try {
        const [result,] = await db.execute("SELECT * FROM users where user_delete = 0")
        res.render("users", {users: result});
    } catch (err) {
        console.log(err);
    }
})

router.get('/users', async (req, res) => {
    // async-await
    try {
        const [result,] = await db.execute("SELECT * FROM users")
        res.render("users", {users: result});
    } catch (err) {
        console.log(err);
    }
})

router.get('/', (req, res) => {
    // async-await
    try {
        res.render("index");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;