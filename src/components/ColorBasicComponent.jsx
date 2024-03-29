import React, { Component, useState } from "react";
import { useUnique } from "../useUnique";

export class ColorBasicComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "purple" };
    // this.showProps = this.showProps.bind(this) //trecias varijantas
  }
  // pirmas budas del undefined kad nebutu eror  showProps = () => {
  //     console.log(this.props)
  //   showProps(event) {
  //     console.log(this.props)
  //     console.log(event)
  //   }

  handleButtonClick = () => {
    // Toggle between purple and green
    const newColor = this.state.isToggleOn ? "purple" : "red";
    this.setState((prevState) => ({
      backgroundColor: newColor,
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: this.props.bg }}>
        <p>{this.props.text}</p>
        {/* <button onClick={() => this.showProps()}>Click</button> antras varijantas  */}
        <button
          onClick={this.changeBg}
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          Click
        </button>
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

export default ColorBasicComponent;
