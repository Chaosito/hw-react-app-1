import { Component } from 'react';
import React from 'react'

export class MyButton extends Component {
  render() {
    return <button onClick={this.props.onClick} >{this.props.name}!</button>;
  }
}