import React, { useEffect, useState } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader";
import BodyCard from "./components/BodyCard";
import EmployeeForm from "./components/EmployeeForm";
import { Employee } from "./services/employee";
import { EmployeeService } from "./services/employee.service";

function App() {
  const employeeService = new EmployeeService();
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    employeeService.getEmployeees().then((value) => {
      setEmployees(value);
    });
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
      <AppHeader handleModal={handleModal} />
      <BodyCard handleModal={handleModal} employees={employees} />
      <EmployeeForm
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
        addEmployee={addEmployee}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
