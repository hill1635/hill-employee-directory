import React from "react";

function Employee(props) {
  //DOESNT QUITE WORK, CANT GET INDIVIDUAL EMPLOYEES IN LIST
  // var propsEmployees = [props.employees[0]];
  // var employeeList = [];
  // propsEmployees.forEach((employee) => {
  //   employeeList.push(employee);
  // });
  // console.log(props.employees);

  return (
    <div>
      {props.employees.map((employee) => (
          <ul>
            <li>
              Name: {employee.name.first} {employee.name.last}
            </li>
            <li>Email: {employee.email}</li>
            <li>Phone: {employee.cell}</li>
            {/* <li>{employee.location}</li> */}
          </ul>
      ))}
    </div>
  );
}
export default Employee;
