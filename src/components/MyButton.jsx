import { Component } from 'react';
import React from 'react'

export class MyButton extends Component {
  render() {
    return <button>{this.props.name}!</button>;
  }
}