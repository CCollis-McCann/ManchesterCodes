exports.createPerson = (name, age) => ({
  name,
  age,
});

exports.getName = object => object.name;

exports.getProperty = (property, object) => object[property];

exports.hasProperty = (property, object) => object.hasOwnProperty(property);

exports.isOver65 = person => (person.age > 65 ? true : false);

exports.getAges = people => people.map(person => person.age);

exports.findByName = (name, people) =>
  people.find(person => person.name === name);

exports.findHondas = cars =>
  cars.filter(onlyHonda => onlyHonda.manufacturer === 'Honda');

exports.averageAge = people =>
  people.reduce((acc, person) => acc + person.age, 0) / people.length;

exports.createTalkingPerson = (name, age) => ({
  name,
  age,
  introduce: freind => `Hi ${freind}, my name is ${name} and I am ${age}!`,
});
