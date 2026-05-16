export const ExpenseCard = ({ expense1 }) => {
  const { expense, amount, date } = expense1;
  return (
    <div className="bg-white p-4 rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{expense}</h2>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-green-600">{amount} ₾</span>
      </div>
    </div>
  );
}