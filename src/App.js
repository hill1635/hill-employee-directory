import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Col from "./components/Col/Col";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employee from "./components/Employee/Employee";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: this.employeeList,
    search: "",
  };

  employeeList = [];

  renderEmployees = () => {
    API.getRandomEmployees()
      .then((employees) => {
        var newEmployeeList = employees.data.results;
        newEmployeeList.forEach((employee) => {
          this.employeeList.push(employee);
        });
        this.setState(this.employeeList);
      })
      .catch((err) => console.log(err));
  };

  searchDirectory = (event) => {
    console.log("event: ", event.target.value);
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    this.renderEmployees();
  }

  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <Header></Header>
            </Col>
          </Row>
          <Row>
            <Col>
              <Search
                search={this.state.search}
                className="search"
                onChange={(e) => this.searchDirectory(e)}
              ></Search>
            </Col>
          </Row>
          <Row>
            <Col>
              <Employee 
              employees={this.employeeList}
              search={this.state.search}></Employee>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
