# Employee Directory

## Table of Contents
* Purpose
* NPMs
* React
* Future Developments
* Screenshots

## Purpose
The purpose of this assignment was to create an employee directory using React.  The employee pool was created with a random user generator.  The goal was to create a dynamic directory that filtered employees based on a search and could sort employees based on criteria.

## NPMs
In addition to the React NPMs installed after creating the app, gh-pages and axios packages were used.  Axios was used to make the API call to generate random employees.  Deploying the site required creating a separate branch with gh-pages to build and deploy the application, while keeping the main branch to push code to.

## React
The beef of this assignment was implementing React to create and run the application.  An App class was created with employees, search, and sort states.  Fragments outline the structure of the applicaction and props and event handlers are passed on to the relevant components.  Employees are rendered when the page loads and the employees state is set with the array.

The Search component contains an input element with an onChange handler that sets the search state to whatever is typed.  This state is then passed along to the Employee component through prop drilling to filter out employees based on first or last name, dynamically updating the page.  The component also has a sort button that dynamically changes when clicked to sort (ascending/descending) by last name.

## Future Developments
The most obvious future development would be the styling.  React components were set up to utilize the Bootstrap framework, but the styling took a backseat to functionality.  Employee cards could also be expanded upon to include more information and a picture.  I would also like to expand the search criteria and sorting options, as well as utilize Bootstrap dropdown menues instead of a button for sorting.

## Screenshots
Coming soon to a theater near you...