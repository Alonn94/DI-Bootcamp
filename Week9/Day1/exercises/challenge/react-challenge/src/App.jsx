import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Object.entries(formData).forEach(element => {
      
    });

  return (
    <div>
      <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          /> Female
        </label>
        <br />
        <label>Select your destination</label>
        <br />
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option>-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="USA">USA</option>
        </select>
        <br />
        <label>Dietary restrictions:</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          /> Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          /> Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          /> Vegan
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Entered information:</h3>
        <p>Your name: {formData.firstName} {formData.lastName}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination:{formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free : {formData.nutsFree ? 'Yes' : 'No'}</p>
        <p>**Lactose free : {formData.lactoseFree ? 'Yes' : 'No'}</p>
        <p>**Vegan meal : {formData.vegan ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;