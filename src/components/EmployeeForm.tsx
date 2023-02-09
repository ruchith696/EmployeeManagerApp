import * as React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Employee } from "../services/employee";

interface IEmployeeFormProps {
  editEmployee: boolean;
  addEmployee: boolean;
  deleteEmployee: boolean;
  handleClose: (modal: string) => void;
  editForm: Employee | undefined;
  deleteForm: Employee | undefined;
  onDeleteEmployee: (id: number) => void;
  onUpdateEmployee: (employee: Employee) => void;
  onAddEmployee: (employee: Employee) => void;
}

const EmployeeForm: React.FunctionComponent<IEmployeeFormProps> = (props) => {
  return (
    <>
      <Modal onHide={() => props.handleClose("edit")} show={props.editEmployee}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.currentTarget.elements);
            }}
          >
            <Form.Group
              hidden={true}
              className="mb-3"
              controlId="editEmployee.id"
            >
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="id"
                defaultValue={props.editForm?.id}
              />
            </Form.Group>
            <Form.Group
              hidden={true}
              className="mb-3"
              controlId="editEmployee.employeeCode"
            >
              <Form.Label>Employee Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="employeeCode"
                defaultValue={props.editForm?.employeeCode}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                defaultValue={props.editForm?.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                defaultValue={props.editForm?.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="job title"
                defaultValue={props.editForm?.jobTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="editEmployee.phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone"
                defaultValue={props.editForm?.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.imageUrl">
              <Form.Label>image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="image Url"
                defaultValue={props.editForm?.imageUrl}
              />
            </Form.Group>
            <Button
              variant="secondary"
              onClick={() => props.handleClose("edit")}
            >
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal onHide={() => props.handleClose("add")} show={props.addEmployee}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editEmployee.name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="job title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="editEmployee.phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmployee.imageUrl">
              <Form.Label>image Url</Form.Label>
              <Form.Control type="text" placeholder="image Url" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose("add")}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.handleClose("add")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        onHide={() => props.handleClose("delete")}
        show={props.deleteEmployee}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => props.handleClose("delete")}
          >
            No
          </Button>
          <Button variant="danger" onClick={() => props.handleClose("delete")}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeForm;
