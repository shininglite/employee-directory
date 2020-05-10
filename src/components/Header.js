import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click caret that appears by Name heading to sort by name, or dynamically filter results by typing letters or numbers in the search box.</p>
      </div>
    )
  }
}
