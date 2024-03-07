import { random } from "../functions/random";
import { Component } from "react";
export class GenerateSquares extends Component {
  constructor() {
    super();
    this.state = {
      squares: [],
    };
  }

  createSquare = () => {
    const copy = [...this.state.squares];
    copy.push(random(1, 15));
    this.setState({ squares: copy });
    console.log(copy);
  };
  sortSquares = () => {
    const copy = [...this.state.squares];
    copy.sort((a, b) => a - b);
    this.setState({ squares: copy });
  };
  render() {
    return (
      <div>
        <button onClick={this.createSquare}>Click</button>
        <button onClick={this.sortSquares}>Sort A-Z</button>
        <div style={{ display: "flex" }}>
          {this.state.squares.map((square, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "aqua",
                width: "70px",
                height: "70px",
                margin: "5px",
              }}
            >
              {square}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
