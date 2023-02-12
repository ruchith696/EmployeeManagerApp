import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader";
import BodyCard from "./components/BodyCard";
import EmployeeForm from "./components/EmployeeForm";
import { Employee } from "./services/employee";
import { EmployeeService } from "./services/employee.service";

export const UserContext = createContext((modal: any, employee: any) => {});

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  var employeeService = new EmployeeService();
  useEffect(() => {
    var employeeService = new EmployeeService();
    if (!employees.length) {
      employeeService.getEmployeees().then((value) => {
        setEmployees(value);
      });
    }
  }, [employees]);

  const [editEmployee, setEditEmployee] = useState<boolean>(false);
  const [addEmployee, setAddEmployee] = useState<boolean>(false);
  const [deleteEmployee, setDeleteEmployee] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<Employee>();
  const [deleteForm, setDeleteForm] = useState<Employee>();

  const handleModal = (modal: string, employee: null | Employee) => {
    switch (modal) {
      case "edit":
        setEditEmployee(true);
        if (employee) {
          setEditForm(employee);
        }
        break;
      case "add":
        setAddEmployee(true);
        break;
      case "delete":
        setDeleteEmployee(true);
        if (employee) {
          setDeleteForm(employee);
        }
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

  const onUpdateEmployee = (employee: Employee) => {
    employeeService
      .updateEmployeees(employee)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onDeleteEmployee = (id: number) => {
    employeeService
      .deleteEmployeees(id)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onAddEmployee = (employee: Employee) => {
    employeeService
      .addEmployeee(employee)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchEmployee = (key: string) => {
    var results: Employee[] = [];
    console.log(key);
    console.log(results);
    console.log(employees.length);
    for (const emp of employees) {
      if (
        emp.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        emp.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        emp.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        emp.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(emp);
      }
    }
    setEmployees(results);
    if (results.length === 0 || !key) {
      setEmployees([]);
    }
  };

  return (
    <>
      <AppHeader handleModal={handleModal} searchEmployee={searchEmployee} />
      <UserContext.Provider value={handleModal}>
        <BodyCard employees={employees} />
      </UserContext.Provider>

      <EmployeeForm
        onAddEmployee={onAddEmployee}
        onDeleteEmployee={onDeleteEmployee}
        onUpdateEmployee={onUpdateEmployee}
        editForm={editForm}
        deleteForm={deleteForm}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
        addEmployee={addEmployee}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
