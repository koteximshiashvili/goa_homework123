export default function Input({ value, setText }){
    return (
        <input
          type="text"
          value={value}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter: "
        />
      );
}