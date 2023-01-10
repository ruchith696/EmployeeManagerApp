import { Employee } from "./employee";

export class EmployeeService {
  public async getEmployeees(): Promise<Employee[]> {
    const response = await fetch("/employee/all");
    return await response.json();
  }
  public async addEmployeee(employee: Employee): Promise<Employee> {
    const response = await fetch("/employee/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ employee }),
    });
    return await response.json();
  }
  public async updateEmployeees(employee: Employee): Promise<Employee> {
    const response = await fetch("/employee/update", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ employee }),
    });
    return await response.json();
  }
  public async deleteEmployeees(employeeId: number): Promise<void> {
    const response = await fetch(`/emplyee/delete/${employeeId}`, {
      method: "DELETE",
    });
    return await response.json();
  }
}
