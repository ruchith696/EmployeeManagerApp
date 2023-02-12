import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Employee } from "../services/employee";
import "./BodyCard.css";
import EmployeeCard from "./EmployeeCard";

interface IBodyCardProps {
  employees: Employee[];
}

const BodyCard: React.FunctionComponent<IBodyCardProps> = (props) => {
  return (
    <Container>
      <Row>
        {props.employees.map((employee) => (
          <div className="col-md-6 col-xl-3" key={employee.id}>
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BodyCard;
