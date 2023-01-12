import React, { useState } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader";
import BodyCard from "./components/BodyCard";
import { Employee } from "./services/employee";
import { EmployeeService } from "./services/employee.service";

function App() {
  const employeeService = new EmployeeService();
  const [employees, setEmployees] = useState<Employee[]>([]);
  employeeService.getEmployeees().then((value) => {
    setEmployees(value);
  });

  const [editEmployee, setEditEmployee] = useState<boolean>(false);
  const [addEmployee, setAddEmployee] = useState<boolean>(false);
  const [deleteEmployee, setDeleteEmployee] = useState<boolean>(false);

  const handleModal = (modal: string) => {
    switch (modal) {
      case "edit":
        setEditEmployee(true);
        break;
      case "add":
        setAddEmployee(true);
        break;
      case "delete":
        setDeleteEmployee(true);
    }
  };
  const handleClose = (modal: string) => {
    switch (modal) {
      case "edit":
        setEditEmployee(false);
        break;
      case "add":
        setAddEmployee(false);
        break;
      case "delete":
        setDeleteEmployee(false);
    }
  };

  return (
    <>
      <AppHeader />
      <BodyCard employees={employees} />
    </>
  );
}

export default App;
