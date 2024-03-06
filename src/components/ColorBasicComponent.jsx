import React, { Component } from 'react'

export class ColorBasicComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { backgroundColor: 'purple' }
    // this.showProps = this.showProps.bind(this) //trecias varijantas
  }
  // pirmas budas del undefined kad nebutu eror  showProps = () => {
  //     console.log(this.props)
  //   showProps(event) {
  //     console.log(this.props)
  //     console.log(event)
  //   }
  changeBg = () => {
    // this.state = { backgroundColor: 'purple' } sake nununu negalima sitaip keist, tik per setState
    this.setState({ backgroundColor: 'red' })
  }
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
      </div>
    )
  }
}

export default ColorBasicComponent
