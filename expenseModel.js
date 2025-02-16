const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    category: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
