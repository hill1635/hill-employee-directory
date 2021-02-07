import React from "react";

function Employee(props) {

  return (
    <div>
      {props.employees.filter((employee) => {
        if (props.search == "") {
          return employee;
        } else if (employee.name.first.toLowerCase().includes(props.search.toLowerCase()) || employee.name.last.toLowerCase().includes(props.search.toLowerCase())) {
          return employee;
        }
}).map((employee) => (
        <div>
          <ul>
            <li>
              Name: {employee.name.first} {employee.name.last}
            </li>
            <li>Email: {employee.email}</li>
            <li>Phone: {employee.cell}</li>
            {/* <li>{employee.location}</li> */}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Employee;
