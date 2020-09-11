const joinNames = namesObj => {
  if (namesObj.length === 1) return namesObj[0].name;

  let list = [];
  let lastName;

  namesObj.forEach(entry => list.push(entry.name));
  lastName = list.splice(-1);

  return `${list.toString().replace(/,/g, ', ')} & ${lastName}`;
};

module.exports = joinNames;
