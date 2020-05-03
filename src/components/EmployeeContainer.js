import React, { Component } from "react";
// import Header from './Header';
// import Search from './Search';
// import Table from './Table';
import API from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";
import Container from "./Container";
import SearchForm from "./SearchForm";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: "Brennan"
  };

// When this component mounts, search field is empty
componentDidMount() {
  this.searchEmployees("");
}

searchEmployees = query => {
  API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const value = event.target.value;
  const first = event.target.first;
  this.setState({
    [first]: value
  });
};

// When the form is submitted, search the API for the value of `this.state.search`
handleFormSubmit = event => {
  event.preventDefault();
  this.searchEmployees(this.state.search);
};

render() {
  return (
    <Container>
      <div>
        <div size="md-8">
          <div
            heading={this.state.result.First || "Search for an Employee to Begin"}
          >
            {this.state.result.First ? (
              <EmployeeDetail
                first={this.state.result.First}
                last={this.state.result.Last}
                // src={this.state.result.Poster}
                // director={this.state.result.Director}
                // genre={this.state.result.Genre}
                // released={this.state.result.Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
        <div size="md-4">
          <div heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </div>
        </div>
      </div>
    </Container>
  );
}
}
export default EmployeeContainer;
