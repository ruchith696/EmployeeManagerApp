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
  return (
    <>
      <AppHeader />

      <BodyCard employees={employees} />
    </>
  );
}

export default App;
