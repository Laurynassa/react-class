// import React, { Component } from "react";
// import { random } from "../functions/random";
// export class TwoColorsSquare extends Component {
//   constructor() {
//     super();
//     this.state = {
//       squares: [],
//     };
//   }

//   createSquare = () => {
//     const copy = [...this.state.squares];
//     copy.push({ sqNumber: random(10, 20), color: random(0, 1) });
//     this.setState({ squares: copy });
//     console.log(copy);
//   };
//   sortSquares = () => {
//     const copy = [...this.state.squares];
//     copy.sort((a, b) => a - b);
//     this.setState({ squares: copy });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.createSquare}>Click</button>
//         <button onClick={this.sortSquares}>Sort A-Z</button>
//         <div style={{ display: "flex" }}>
//           {this.state.squares.map((square, index) => (
//             <div key={index} className={"square color" + square.color}>
//               {square.sqNumber}
//               <square key={i} sqNumber={square.sqNumber} color={square.color};
//             </div>
//           ))};
//         </div>
//     );
//   }
// }

// export default TwoColorsSquare;
