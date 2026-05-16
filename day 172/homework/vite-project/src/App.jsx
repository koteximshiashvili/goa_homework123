

function App() {
  function handleFormData(formData) {
    console.log(formData.get('name'));
    console.log(formData.get('gender'));
    console.log(formData.getAll('animals'));
    console.log(formData.get('colors'));
  }
  return (
    <form action={handleFormData}>
      <label>
        Name:
      <input type="text" name="name" />
      </label>
      <label>
        Male
        <input type="radio" name="gender" value="male" defaultChecked />
      </label>
      <label>
        Female
        <input type="radio" name="gender" value="female" />
      </label>
      <label>
        Common
        <input type="radio" name="gender" value="common" />
      </label>
      <label>
        Dog
        <input type="checkbox" name="animals" value="dog" />
      </label>
      <label>
        Cat
        <input type="checkbox" name="animals" value="cat" />
      </label>
      <label>
        Mouse
        <input type="checkbox" name="animals" value="mouse" />
      </label>
      <select name="colors">
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <button type="submit">
        Submit
      </button>
      <p>event object არის ობიექტი რომელიც შეიცავს სხვადასხვა მეთოდებს და ინფორმაციას. ესენი ხდება როდესაც მომხმარებელი ინტერაქციას მოახდენს ბრაუზერზე/</p>
    </form>
  );
}

export default App;
