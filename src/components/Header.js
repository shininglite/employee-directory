import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Mouse over column headings and click carets to sort, or filter directory using the letters or numbers in the search box to narrow your results.</p>
      </div>
    )
  }
}
