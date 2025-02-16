const express = require("express");
const Expense = require("./expenseModel");

const router = express.Router();

router.post("/add", async (req, res) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.json({ message: "Expense added" });
});

router.get("/expenses", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

module.exports = router;

