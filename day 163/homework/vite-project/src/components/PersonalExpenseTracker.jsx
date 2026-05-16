import { useState } from 'react';
import { ExpenseCard } from './ExpenseCard.jsx';

export const PersonalExpenseTracker = () => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  
  const submit = (e) => {
    e.preventDefault();
    if (!expense || !amount || !date) return;
    const expensia = { id: Date.now(), expense, amount: parseFloat(amount).toFixed(2), date };
    setExpenses([expensia, ...expenses]);
    setExpense('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="w-xl m-auto bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Personal Expense Tracker</h1>
        <form onSubmit={submit} className="space-y-4">
          <input type="text" placeholder="expense" value={expense} onChange={(e) => setExpense(e.target.value)} className="w-full border border-gray-300 p-2 rounded" />
          <input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border border-gray-300 p-2 rounded" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 p-2 rounded" />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-500">Add</button>
        </form>
      </div>

      <div className="w-xl mt-6 space-y-4">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense1={expense} />
        ))}
      </div>
    </div>
  );
}