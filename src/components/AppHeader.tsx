import * as React from "react";
import { Container, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Employee } from "../services/employee";
interface IAppHeaderProps {
  handleModal: (modal: string, employee: null | Employee) => void;
  searchEmployee: (key: string) => void;
}

const AppHeader: React.FunctionComponent<IAppHeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Employee Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.handleModal("add", null)}>
            Add Employee
          </Nav.Link>
        </Nav>
      </Container>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          onChange={(e) => {
            props.searchEmployee(e.target.value);
          }}
        />
      </Form>
    </Navbar>
  );
};

export default AppHeader;
