const History = ({ history }) => {
  return (
    <div className="w-full max-w-sm bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <div className="space-y-1">
        {history.length > 0 ? (
          history.map((el, index) => (
            <p key={index} className="text-gray-700">
              {index + 1}. {el}
            </p>
          ))
        ) : (
          <p className="text-gray-400">Nothing</p>
        )}
      </div>
    </div>
  );
};

export default History;
