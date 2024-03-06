import React, { Component, useState } from "react";
import { useUnique } from "../useUnique";

export class ToggleButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "purple",
      isToggleOn: false,
    };
  }

  handleButtonClick = () => {
    // Toggle between purple and green
    const newColor = this.state.isToggleOn ? "purple" : "green";
    this.setState((prevState) => ({
      backgroundColor: newColor,
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <div>
        <ProductsList
          backgroundColor={this.state.backgroundColor}
          onButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

function ProductsList({ backgroundColor, onButtonClick }) {
  const [names, add] = useUnique([]);
  const [newName, setNewName] = useState("");

  const map = (name) => <div key={name}>{name}</div>;

  const handleChange = (event) => setNewName(event.target.value);
  const handleAdd = () => add(newName);

  return (
    <div className="products">
      {names.map(map)}
      <input type="text" value={newName} onChange={handleChange} />
      <button
        onClick={() => {
          onButtonClick();
          handleAdd();
        }}
        style={{ backgroundColor }}
      >
        Add
      </button>
    </div>
  );
}

export default ToggleButtonComponent;
