const ToggleSwitch = ({ isOn, handleToggle, theme }) => {
  return (
    <div
      onClick={handleToggle}
      className={`w-[50px] h-[26px] flex items-center rounded-full p-[3px] cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-[#e96057]' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-400'
      }`}
    >
      <div
        className={`bg-white w-[20px] h-[20px] rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-[24px]' : 'translate-x-0'
        }`}
      />
    </div>
  );
};
export default ToggleSwitch;