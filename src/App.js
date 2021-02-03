import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Col from "./components/Col/Col";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employee from "./components/Employee/Employee";

class App extends Component {
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
              <Search></Search>
            </Col>
          </Row>
          <Row>
            <Col>
              <Employee></Employee>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
