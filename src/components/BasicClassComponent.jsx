import React, { Component } from 'react'

export class BasicClassComponent extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.color, this.props.textColor)
  }
  render() {
    return (
      <div style={{ color: this.props.color, textColor: this.props.textColor }}>
        Labas is klasinio komponento
      </div>
    )
  }
}

export default BasicClassComponent
