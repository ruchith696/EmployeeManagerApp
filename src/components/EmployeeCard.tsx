import * as React from "react";

import { Button, ButtonGroup, Card, Image, ListGroup } from "react-bootstrap";
import { Employee } from "../services/employee";

interface IEmployeeCardProps {
  employee: Employee;
  handleModal: (modal: string) => void;
}

const EmployeeCard: React.FunctionComponent<IEmployeeCardProps> = (props) => {
  return (
    <Card className="card">
      <Card.Body className="row">
        <div className="col-6">
          <a href="">
            <Image
              src={props.employee.imageUrl}
              roundedCircle
              className="w-60"
            />
          </a>
        </div>

        <div className="col-6 mb-0">
          <Card.Title className="align-self-center">
            {props.employee.name}
          </Card.Title>
          <p className="m-0">{props.employee.jobTitle}</p>
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <i className="fa fa-envelope float-end"></i>Email :{" "}
            <a href="#">{props.employee.email}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fa fa-phone float-end"></i>Phone :{" "}
            {props.employee.phone}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <ButtonGroup className="float-end" size="sm">
          <Button variant="primary" onClick={() => props.handleModal("edit")}>
            <i className="fa fa-pencil"></i>{" "}
          </Button>
          <Button
            variant="secondary"
            onClick={() => props.handleModal("delete")}
          >
            <i className="fa fa-times"></i>
          </Button>
        </ButtonGroup>
        <div className="social-links">
          <ListGroup horizontal>
            <ListGroup.Item>
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                className="tooltips"
                href=""
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                className="tooltips"
                href=""
                data-original-title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                className="tooltips"
                href=""
                data-original-title="Skype"
              >
                <i className="fa fa-skype"></i>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
