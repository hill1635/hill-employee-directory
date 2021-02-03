import "./App.css";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header";
import Search from "./components/Search";
import Employee from "./components/Employee";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header>
          </Header>
        </Col>
      </Row>
      <Row>
        <Col>
        <Search>
        </Search>
        </Col>
      </Row>
      <Row>
        <Col>
        <Employee>
        </Employee>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
