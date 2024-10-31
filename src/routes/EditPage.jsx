import { useState } from "react";
import { useParams } from "react-router-dom";


const EditPage = () => {
  const params = useParams();
  const [inputs, setInputs] = useState({
    'name': '',
    'speed': '',
    'color': ''
  });

  const colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'];

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="edit-page">
      <h1>Update Your Crewmate</h1>
      <img src="..\src\assets\crewmates.png" alt="crewmates" />
      <form className="form-container">
        <div className="input-container">
          <label htmlFor="name"><h2>Name:</h2></label>
          <input type="text" name="name" id="name" placeholder="Enter crewmate's name" onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="speed"><h2>Speed (mph):</h2></label>
          <input type="text" name="speed" id="speed" placeholder="Enter speed in mph" onChange={handleChange} />
        </div>
        <div className="input-container">
          <label><h2>Color:</h2></label>
          {colors &&
            colors.map((color) => (
              <li key={color}>
                <input type="radio"
                  id={color}
                  name="color"
                  value={color}
                  checked={inputs["color"] == color}
                  onChange={handleChange}
                />
                  {color}
              </li>
            ))
          }
        </div>
      </form>
      <button type="submit">Update Crewmate</button>
      <button className="delete-button" type="button">Delete Crewmate</button>
    </div>
  );
};

export default EditPage;