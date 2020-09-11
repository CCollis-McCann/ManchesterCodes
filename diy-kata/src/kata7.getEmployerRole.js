const getEmployerRole = (employeeName, employees) => {
  let role;

  employees.forEach(person => {
    if (person.name === employeeName) {
      role = person.role;
    }
  });
  return role;
};

module.exports = getEmployerRole;
