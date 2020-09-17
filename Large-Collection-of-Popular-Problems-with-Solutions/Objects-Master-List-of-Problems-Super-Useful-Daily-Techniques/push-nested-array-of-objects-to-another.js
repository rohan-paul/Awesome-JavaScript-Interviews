// Interview question faced on 14-July-2018- at Thrymer Software, Hyderabad
// myProjectsArr is an array of objects, within which I also have the property 'employee' which is also an array of objects.
// Write a function to push 2 employees to each of the project with myProjectsArr

var myProjectsArr = [{
    projId: '1',
    projName: 'A',
    employee: []
  },
  {
    projId: '2',
    projName: 'B',
    employee: []
  }
]

var myEmployeeArr = [{
  employeeId: 1,
  employeeName: 'abc'
},
{
  employeeId: 2,
  employeeName: 'cde'
},
{
  employeeId: 3,
  employeeName: 'abc'
},
{
  employeeId: 4,
  employeeName: 'cde'
}
]

console.log(myProjectsArr[0].employee);
console.log(myProjectsArr[1].employee);

// Generic function to add the nested array (which is itself an array of objects ) to the outer projectsArr ( which is and arr of objects )

addEmployee = (projectsArr, employeesArr ) => {

  for (let i in projectsArr) {

    let nestedEmployeeArr = projectsArr[i].employee;

    nestedEmployeeArr.push(employeesArr.splice(0, 2))
  }
  return projectsArr;
}

// Execute the function on my set of data

addEmployee(myProjectsArr, myEmployeeArr);

console.log(myProjectsArr[0].employee);
console.log(myProjectsArr[1].employee);
