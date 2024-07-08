import AddTask from "./components/AddTask";
import Nav from "./components/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container>
      <Nav />
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <AddTask />
          <TaskList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
