import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [form, setForm] = useState({ description: "", amount: "", category: "" });

    useEffect(() => {
        axios.get("http://localhost:5000/api/expenses")
            .then(res => setExpenses(res.data));
    }, []);

    const addExpense = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/add", form);
        setExpenses([...expenses, form]);
    };

    return (
        <div>
            <h1>Expense Tracker</h1>
            <form onSubmit={addExpense}>
                <input type="text" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
                <input type="number" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
                <input type="text" placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
                <button type="submit">Add Expense</button>
            </form>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.description} - ${expense.amount} ({expense.category})</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

