import React from "react";

function Employee(props) {
  return (
    <div>
      {props.employees
        .filter((employee) => {
          if (props.search == "") {
            return employee;
          } else if (
            employee.name.first
              .toLowerCase()
              .includes(props.search.toLowerCase()) ||
            employee.name.last
              .toLowerCase()
              .includes(props.search.toLowerCase())
          ) {
            return employee;
          }
        })
        .sort((a, b) => {
          switch (props.sort) {
            case "asc":
              if (b.name.last < a.name.last) {
                return -1;
              } else if (b.name.last > a.name.last) {
                return 1;
              } else {
                return 0;
              }
            case "desc":
              if (a.name.last < b.name.last) {
                return -1;
              } else if (a.name.last > b.name.last) {
                return 1;
              } else {
                return 0;
              }
          }
        })
        .map((employee) => (
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
